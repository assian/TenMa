let sources = [];
let activeSource = null; // aktif kaynak
let currentPage = 1;

const SOURCES_URL = 'https://raw.githubusercontent.com/assian/TenMa_Sources/refs/heads/main/sources.json';
const UPDATE_INTERVAL = 60 * 60 * 1000; // 1 saat

// --- CORS Proxy ---
const CORS_PROXY = "https://api.codetabs.com/v1/proxy?quest=";

async function corsFetch(url, options = {}) {
    try {
        const response = await fetch(CORS_PROXY + encodeURIComponent(url), options);
        if (!response.ok) throw new Error(`CORS Proxy Error: HTTP ${response.status}`);
        return response;
    } catch (error) {
        console.error("CORS Fetch Error:", error);
        throw error;
    }
}

// Kaynakları yükle
async function loadSources() {
    try {
        console.log('Fetching sources from:', SOURCES_URL);
        const response = await corsFetch(SOURCES_URL, { headers: { 'Accept': 'application/json' } });
        sources = await response.json();

        console.log('Sources loaded:', sources);
        if (!sources.length) throw new Error(getTranslation('noSources'));

        // Kaynak seçici listeyi oluştur
        buildSourceSelector();

        // İlk kaynağı otomatik seç
        if (!activeSource && sources.length > 0) {
            setActiveSource(0);
        }

    } catch (error) {
        console.error('Sources load error:', error.message);
        alert(getTranslation('sourcesLoadFailed') + ': ' + error.message);
    }
}

// Kaynak seçici UI
function buildSourceSelector() {
    const selector = document.getElementById('source-selector');
    if (!selector) return;

    selector.innerHTML = '';
    sources.forEach((src, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = src.name || `Source ${index + 1}`;
        selector.appendChild(option);
    });

    selector.addEventListener('change', (e) => {
        setActiveSource(parseInt(e.target.value));
    });
}

// Aktif kaynağı ayarla
function setActiveSource(index) {
    if (index < 0 || index >= sources.length) return;

    activeSource = sources[index];
    console.log('Active source set to:', activeSource);

    // Yeni kaynağa geçince videoları sıfırla
    loadVideos(1);
}

function makeAbsoluteUrl(href, baseUrl) {
    if (!href) return null;
    if (href.startsWith('http://') || href.startsWith('https://')) return href;
    return baseUrl.replace(/\/$/, '') + '/' + href.replace(/^\//, '');
}

// Videoları yükle
async function loadVideos(page) {
    if (!activeSource) {
        console.warn("No active source selected");
        return;
    }

    currentPage = page;
    const videoList = document.getElementById('video-list');
    if (page === 1) videoList.innerHTML = '';

    try {
        const url = activeSource.listUrl.replace('${page}', page);
        console.log('Fetching video URL:', url);

        const response = await corsFetch(url, {
            headers: { 'User-Agent': activeSource.userAgent },
            signal: AbortSignal.timeout(activeSource.timeout)
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const items = doc.querySelectorAll(activeSource.videoItemSelector);

        if (!items.length) console.warn('No items found for selector:', activeSource.videoItemSelector);

        items.forEach(item => {
            const rawHref = item.querySelector(activeSource.detailPageLinkSelector)?.getAttribute('href') || 'no-id';

            const video = {
                id: rawHref,
                title: item.querySelector(activeSource.titleSelector)?.title || getTranslation('noTitle'),
                thumbnail: item.querySelector(activeSource.thumbnailSelector)?.dataset.original || getTranslation('noThumbnail'),
                url: makeAbsoluteUrl(rawHref, activeSource.baseUrl),
                baseUrl: activeSource.baseUrl
            };

            const card = createVideoCard(video);
            videoList.appendChild(card);
        });

    } catch (error) {
        console.error(getTranslation('sourceFetchError', {
            status: error.message || 'Unknown'
        }));
    }
}

// Video arama
async function searchVideos(query, page = 1) {
    if (!activeSource) return;

    currentPage = page;
    const videoList = document.getElementById('video-list');
    if (page === 1) videoList.innerHTML = '';

    if (!activeSource.searchUrl) {
        alert(getTranslation('searchNotSupported'));
        return;
    }

    try {
        const url = activeSource.searchUrl
            .replace('${page}', page)
            .replace('${query}', encodeURIComponent(query));
        console.log('Fetching search URL:', url);

        const response = await corsFetch(url, {
            headers: { 'User-Agent': activeSource.userAgent },
            signal: AbortSignal.timeout(activeSource.timeout)
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const items = doc.querySelectorAll(activeSource.videoItemSelector);

        items.forEach(item => {
            const rawHref = item.querySelector(activeSource.detailPageLinkSelector)?.getAttribute('href') || 'no-id';

            const video = {
                id: rawHref,
                title: item.querySelector(activeSource.titleSelector)?.title || getTranslation('noTitle'),
                thumbnail: item.querySelector(activeSource.thumbnailSelector)?.dataset.original || getTranslation('noThumbnail'),
                url: makeAbsoluteUrl(rawHref, activeSource.baseUrl),
                baseUrl: activeSource.baseUrl
            };

            const card = createVideoCard(video);
            videoList.appendChild(card);
        });

    } catch (error) {
        console.error(getTranslation('sourceFetchError', {
            status: error.message || 'Unknown'
        }));
    }
}

// Kart oluşturucu
function createVideoCard(video, isFavorite = false) {
    const card = document.createElement('div');
    card.className = 'card';

    // Verileri data attribute olarak koyuyoruz
    card.dataset.video = JSON.stringify(video);

    card.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}">
        <div class="card-content">
            <h3>${video.title}</h3>
            <button class="play-btn">${getTranslation('play')}</button>
            <button class="fav-btn">
                ${getTranslation(isFavorite ? 'removeFavorite' : 'addFavorite')}
            </button>
        </div>
    `;

    // Play butonu
    card.querySelector('.play-btn').addEventListener('click', () => {
        playVideo(video.url);
    });

    // Favori butonu
    card.querySelector('.fav-btn').addEventListener('click', () => {
        if (isFavorite) {
            removeFavorite(video.id);
        } else {
            addFavorite(video);
        }
    });

    return card;
}
// Sayfa numarası al
function getCurrentPage() {
    return currentPage;
}

// Kaynak ekle
async function addSource() {
    const url = document.getElementById('source-url').value;
    try {
        console.log('Adding source from:', url);
        const response = await corsFetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const newSource = await response.json();
        sources.push(newSource);
        console.log('Source added:', newSource);
        alert(getTranslation('sourceAddedSuccess'));
        loadVideos(1);
    } catch (error) {
        console.error('Source add error:', error.message);
        alert(getTranslation('sourceAddFailed') + ': ' + error.message);
    }
}

// Otomatik güncelleme
setInterval(() => {
    console.log('Checking for sources update at:', new Date().toISOString());
    updateSources();
}, UPDATE_INTERVAL);