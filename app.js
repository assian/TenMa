let currentSearchQuery = null; // aktif arama sorgusu
let isSearching = false;

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Dil yükleme
    initLanguage();

    // Kaynakları yükleme ve otomatik güncelleme başlatma
    loadSources().then(() => {
        loadVideos(1);
        loader.style.display = 'none';
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