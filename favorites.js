function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('favorites')) || {};
    } catch (e) {
        console.warn("Favorites JSON bozuk, sıfırlanıyor:", e);
        localStorage.setItem('favorites', '{}');
        return {};
    }
}

function addFavorite(video) {
    let favorites = getFavorites();

    favorites[video.id] = {
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnail,
        url: video.url,
        baseUrl: video.baseUrl
    };

    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(getTranslation('favoriteAdded'));
}

function removeFavorite(id) {
    let favorites = getFavorites();
    delete favorites[id];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(getTranslation('favoriteRemoved'));
    loadFavorites();
}

function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    const favorites = getFavorites();

    if (Object.keys(favorites).length === 0) {
        favoritesList.innerHTML = `<p data-i18n="noFavorites">${getTranslation('noFavorites')}</p>`;
        return;
    }

    Object.values(favorites).forEach(video => {
        const card = createVideoCard(video, true);
        favoritesList.appendChild(card);
    });
}