let currentSearchQuery = null; // aktif arama sorgusu
let isSearching = false;

document.addEventListener('DOMContentLoaded', () => {
    
    
    window.loaderManager = new LoaderManager();

    // Dil yükleme
    initLanguage();
    // Mevcut yükleme ekranını yönet
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    });

    // Kaynakları yükleme ve otomatik güncelleme başlatma
    loadSources().then(() => {
        loadVideos(1);
        window.loaderManager.hide();
    });

    // Sonsuz scroll
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            if (isSearching && currentSearchQuery) {
                searchVideos(currentSearchQuery, getCurrentPage() + 1);
            } else {
                loadVideos(getCurrentPage() + 1);
            }
        }
    });

    // Arama
    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query) {
            currentSearchQuery = query;
            isSearching = true;
            searchVideos(query, 1);
        } else {
            currentSearchQuery = null;
            isSearching = false;
            loadVideos(1);
        }
    });
});

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
    if (sectionId === 'favorites') {
        loadFavorites();
    }
}

class LoaderManager {
    constructor() {
        this.isLoading = false;
        this.timeoutId = null;
        this.initLoader();
    }

    // Burada window.i18n yapısına değil,
    // senin verdiğin getTranslation fonksiyonuna göre alıyoruz.
    getTranslation(key, params = {}) {
        return getTranslation(key, undefined, params);
    }

    initLoader() {
        this.loader = document.createElement('div');
        this.loader.className = 'global-loader';
        this.loader.innerHTML = `
            <div class="loader-spinner"></div>
            <div class="loader-text">${this.getTranslation('loading')}</div>
        `;
        document.body.appendChild(this.loader);

        const style = document.createElement('style');
        style.textContent = `
            .global-loader {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(255,255,255,0.9);
                display: none;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                z-index: 9980;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .global-loader.visible {
                opacity: 1;
            }
            .loader-spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #3498db;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin-bottom: 15px;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    show() {
        if (this.isLoading) return;

        clearTimeout(this.timeoutId);
        this.isLoading = true;
        this.loader.style.display = 'flex';
        requestAnimationFrame(() => {
            this.loader.classList.add('visible');
        });

        // 10 saniye sonra otomatik gizleme ve uyarı
        this.timeoutId = setTimeout(() => {
            this.forceHide();
            console.warn(this.getTranslation('loaderTimeout', {}));
        }, 10000);
    }

    hide() {
        if (!this.isLoading) return;

        clearTimeout(this.timeoutId);
        this.loader.classList.remove('visible');
        setTimeout(() => {
            this.loader.style.display = 'none';
            this.isLoading = false;
        }, 300);
    }

    forceHide() {
        clearTimeout(this.timeoutId);
        this.loader.style.display = 'none';
        this.loader.classList.remove('visible');
        this.isLoading = false;
    }
}
