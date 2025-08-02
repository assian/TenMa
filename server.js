const express = require('express');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch').default;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Load locales
const locales = {};
const localesPath = path.join(__dirname, 'public/locales');
fs.readdirSync(localesPath).forEach(file => {
    if (file.endsWith('.json')) {
        const langCode = path.basename(file, '.json');
        locales[langCode] = require(path.join(localesPath, file));
    }
});

// Create translation function
const t = (lang, key, params) => {
    if (!locales[lang]) lang = 'en';
    let value = locales[lang];

    const keys = key.split('.');
    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key; // Fallback to key if not found
    }

    if (params) {
        for (const [k, v] of Object.entries(params)) {
            value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        }
    }

    return value;
};

// Middleware setup
app.use(cors( {
    origin: '*', // Or your specific origin
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Add translation to request object
app.use((req, res, next) => {
    req.t = (key, params) => {
        const lang = req.cookies.language || 'en';
        return t(lang, key, params);
    };
    next();
});

// Language API endpoints
// Correct route definitions
// In your server.js, modify the languages endpoint:
app.get('/api/languages', (req, res) => {
    const availableLanguages = Object.keys(locales).map(code => {
        return {
            code,
            name: locales[code].languageName || code.toUpperCase() // Fallback to code if name missing
        };
    });
    res.json(availableLanguages);
});

app.get('/api/translations/:lang', (req, res) => {
    const lang = req.params.lang;
    res.json(locales[lang] || locales.en);
});


app.post('/api/set-language', express.json(), (req, res) => {
    const {
        language
    } = req.body;
    if (locales[language]) {
        res.cookie('language', language, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });
        return res.sendStatus(200);
    }
    res.status(400).json({
        error: 'Invalid language code'
    });
});

// Favorites path
const FAVORITES_PATH = path.join(__dirname, 'favorites.json');

// Helper function to manage favorites
const readFavorites = () => {
    try {
        if (!fs.existsSync(FAVORITES_PATH)) {
            fs.writeFileSync(FAVORITES_PATH, '{}');
            return {};
        }
        return JSON.parse(fs.readFileSync(FAVORITES_PATH));
    } catch (error) {
        console.error('Error reading favorites:', error);
        return {};
    }
};

// Get favorites
app.get('/favorites.json', (req, res) => {
    try {
        const favorites = readFavorites();
        res.json(favorites);
    } catch (error) {
        res.status(500).json({
            error: req.t('app.favoritesLoadError')
        });
    }
});

// Save favorites
app.post('/save-favorites', (req, res) => {
    try {
        fs.writeFileSync(FAVORITES_PATH, JSON.stringify(req.body, null, 2));
        res.json({
            success: true
        });
    } catch (error) {
        console.error(req.t('app.favoritesSaveError'), error);
        res.status(500).json({
            error: req.t('app.favoritesSaveFailed')
        });
    }
});

// Add/remove favorite
app.post('/api/favorites', (req, res) => {
    try {
        const {
            action, video
        } = req.body;
        const favorites = readFavorites();

        if (action === 'add') {
            if (!video.url) {
                return res.status(400).json({
                    error: req.t('app.videoUrlRequired')
                });
            }

            favorites[video.id] = {
                id: video.id,
                title: video.title || req.t('app.untitledVideo'),
                thumbnail: video.thumbnail || '/placeholder.jpg',
                url: video.url,
                date: new Date().toISOString()
            };
        } else if (action === 'remove') {
            delete favorites[video.id];
        }

        fs.writeFileSync(FAVORITES_PATH, JSON.stringify(favorites, null, 2));
        res.json({
            success: true, favorites
        });
    } catch (error) {
        console.error(req.t('app.favoriteOperationError'), error);
        res.status(500).json({
            error: req.t('app.favoriteOperationFailed')
        });
    }
});

// Proxy endpoint
app.get('/proxy', async (req, res) => {
    try {
        if (!req.query.url) {
            return res.status(400).json({
                error: req.t('app.urlParameterMissing')
            });
        }

        let url;
        try {
            url = decodeURIComponent(req.query.url);
            new URL(url); // Validate URL
        } catch (e) {
            return res.status(400).json({
                error: req.t('app.invalidUrlFormat')
            });
        }

        const userAgent = req.query.ua || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

        console.log(req.t('app.proxyingTo', {
            url
        }));

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(url, {
            headers: {
                'User-Agent': userAgent
            },
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream';
        res.set('Content-Type', contentType);

        if (contentType.includes('text/html') || contentType.includes('application/json')) {
            const content = await response.text();
            res.send(content);
        } else {
            response.body.pipe(res);
        }
    } catch (error) {
        console.error(req.t('app.proxyError'), error);
        const status = error.message.includes('URL') ? 400: 500;
        res.status(status).json({
            error: error.message,
            details: error.name === 'AbortError' ? req.t('app.requestTimeout'): undefined
        });
    }
});

// Sources endpoints
app.get('/api/sources', (req, res) => {
    try {
        const data = fs.readFileSync('./sources.json', 'utf8');
        const sources = JSON.parse(data);
        res.json(sources);
    } catch (error) {
        console.error(req.t('app.sourcesReadError'), error);
        res.status(500).json({
            error: req.t('app.sourcesLoadFailed')
        });
    }
});

app.post('/api/sources', (req, res) => {
    try {
        fs.writeFileSync('./sources.json', JSON.stringify(req.body, null, 2));
        res.json({
            success: true
        });
    } catch (error) {
        console.error(req.t('app.sourcesSaveError'), error);
        res.status(500).json({
            error: req.t('app.sourcesSaveFailed')
        });
    }
});

// Serve index.html for all other routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));