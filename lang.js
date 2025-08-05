// vapp/js/lang.js
const translations = {
    en: {
        app: {
            title: "VideoStream",
            home: "Home",
            favorites: "Favorites",
            settings: "Settings",
            searchPlaceholder: "Search...",
            noFavorites: "You have no favorite videos yet",
            sourceUrlPlaceholder: "Enter sources.json URL",
            add: "Add",
            refreshing: "Update Sources",
            noSources: "No sources available",
            sourcesLoadFailed: "Failed to load sources",
            sourceAddedSuccess: "Source added successfully",
            sourceAddFailed: "Failed to add source",
            sourceFetchError: "Failed to fetch source: {status}",
            noTitle: "No title",
            noThumbnail: "No thumbnail",
            play: "Play",
            addFavorite: "Add to favorites",
            removeFavorite: "Remove from favorites",
            searchNotSupported: "Search not supported on this source",
            favoriteAdded: "Added to favorites",
            favoriteRemoved: "Removed from favorites"
        }
    },
    tr: {
        app: {
            title: "VideoAkış",
            home: "Ana Sayfa",
            favorites: "Favoriler",
            settings: "Ayarlar",
            searchPlaceholder: "Ara...",
            noFavorites: "Henüz favori videonuz yok",
            sourceUrlPlaceholder: "sources.json URL'sini girin",
            add: "Ekle",
            refreshing: "Kaynakları Güncelle",
            noSources: "Kullanılabilir kaynak yok",
            sourcesLoadFailed: "Kaynaklar yüklenemedi",
            sourceAddedSuccess: "Kaynak başarıyla eklendi",
            sourceAddFailed: "Kaynak eklenemedi",
            sourceFetchError: "Kaynak alınamadı: {status}",
            noTitle: "Başlık yok",
            noThumbnail: "Küçük resim yok",
            play: "Oynat",
            addFavorite: "Favorilere ekle",
            removeFavorite: "Favorilerden kaldır",
            searchNotSupported: "Bu kaynakta arama desteklenmiyor",
            favoriteAdded: "Favorilere eklendi",
            favoriteRemoved: "Favorilerden kaldırıldı"
        }
    },
    ja: {
        app: {
            title: "ビデオストリーム",
            home: "ホーム",
            favorites: "お気に入り",
            settings: "設定",
            searchPlaceholder: "検索...",
            noFavorites: "お気に入りのビデオがまだありません",
            sourceUrlPlaceholder: "sources.jsonのURLを入力",
            add: "追加",
            refreshing: "ソースを更新",
            noSources: "利用可能なソースがありません",
            sourcesLoadFailed: "ソースの読み込みに失敗しました",
            sourceAddedSuccess: "ソースが正常に追加されました",
            sourceAddFailed: "ソースの追加に失敗しました",
            sourceFetchError: "ソースの取得に失敗しました: {status}",
            noTitle: "タイトルなし",
            noThumbnail: "サムネイルなし",
            play: "再生",
            addFavorite: "お気に入りに追加",
            removeFavorite: "お気に入りから削除",
            searchNotSupported: "このソースでは検索がサポートされていません",
            favoriteAdded: "お気に入りに追加されました",
            favoriteRemoved: "お気に入りから削除されました"
        }
    },
    ko: {
        app: {
            title: "비디오스트림",
            home: "홈",
            favorites: "즐겨찾기",
            settings: "설정",
            searchPlaceholder: "검색...",
            noFavorites: "아직 즐겨찾기한 비디오가 없습니다",
            sourceUrlPlaceholder: "sources.json URL 입력",
            add: "추가",
            refreshing: "소스 업데이트",
            noSources: "사용 가능한 소스가 없습니다",
            sourcesLoadFailed: "소스 로드 실패",
            sourceAddedSuccess: "소스가 성공적으로 추가되었습니다",
            sourceAddFailed: "소스 추가에 실패했습니다",
            sourceFetchError: "소스 가져오기 실패: {status}",
            noTitle: "제목 없음",
            noThumbnail: "썸네일 없음",
            play: "재생",
            addFavorite: "즐겨찾기에 추가",
            removeFavorite: "즐겨찾기에서 제거",
            searchNotSupported: "이 소스에서는 검색이 지원되지 않습니다",
            favoriteAdded: "즐겨찾기에 추가되었습니다",
            favoriteRemoved: "즐겨찾기에서 제거되었습니다"
        }
    },
    zh: {
        app: {
            title: "视频流",
            home: "主页",
            favorites: "收藏",
            settings: "设置",
            searchPlaceholder: "搜索...",
            noFavorites: "您还没有收藏的视频",
            sourceUrlPlaceholder: "输入sources.json的URL",
            add: "添加",
            refreshing: "更新源",
            noSources: "无可用源",
            sourcesLoadFailed: "加载源失败",
            sourceAddedSuccess: "源添加成功",
            sourceAddFailed: "添加源失败",
            sourceFetchError: "获取源失败: {status}",
            noTitle: "无标题",
            noThumbnail: "无缩略图",
            play: "播放",
            addFavorite: "添加到收藏",
            removeFavorite: "从收藏中移除",
            searchNotSupported: "此源不支持搜索",
            favoriteAdded: "已添加到收藏",
            favoriteRemoved: "已从收藏中移除"
        }
    }
};

async function initLanguage() {
    const lang = localStorage.getItem('language') || 'en';
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = lang;
        selector.addEventListener('change', (e) => {
            const newLang = e.target.value;
            localStorage.setItem('language', newLang);
            updateTranslations(newLang);
        });
    }
    updateTranslations(lang);
}

function updateTranslations(lang) {
    const currentTranslations = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key, lang);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = getTranslation(key, lang);
    });
}

function getTranslation(key, lang = localStorage.getItem('language') || 'en', params = {}) {
    const currentTranslations = translations[lang] || translations.en;
    let text = currentTranslations.app?.[key] || key;
    for (const [param, value] of Object.entries(params)) {
        text = text.replace(`{${param}}`, value || 'Unknown');
    }
    return text;
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', initLanguage);