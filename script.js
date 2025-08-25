// Çoklu dil desteği için çeviri sözlüğü
const Translations = {
  tr: {
    // Splash ekranları
    languageSelection: "Dil Seçimi",
    languageSelectionMessage: "Lütfen bir dil seçin",
    ageRestriction: "18+ Yaş Sınırı",
    ageWarningMessage: "Bu uygulama yetişkinlere yönelik içerikler barındırabilir. Devam etmek için 18 yaşından büyük olduğunuzu onaylamalısınız.",
    confirmAge: "Evet, 18 Yaşından Büyüğüm",
    cancelAge: "Hayır, Çıkış Yap",
    importantReminder: "Önemli Hatırlatma",
    settingsReminderMessage: "Uygulamayı düzgün kullanabilmek için lütfen ayarlar bölümünden CORS Proxy ve User Agent seçimlerinizi yapınız.",
    goToSettings: "Ayarlara Git",
    remindLater: "Daha Sonra",
    
    // Navigasyon
    home: "Ana Sayfa",
    favorites: "Favoriler",
    history: "Geçmiş",
    settings: "Ayarlar",
    search: "Ara",
    
    // Seçim modu
    selectAll: "Tümünü Seç",
    deleteSelected: "Seçilenleri Sil",
    cancelSelection: "İptal",
    itemsSelected: "öğe seçildi",
    
    // Ayarlar
    settingsTitle: "Ayarlar",
    sourceSelection: "Kaynak Seçimi",
    corsProxy: "CORS Proxy",
    userAgent: "User Agent",
    theme: "Tema",
    lightTheme: "Açık",
    darkTheme: "Koyu",
    language: "Dil",
    cache: "Önbellek",
    clearCache: "Önbelleği Temizle",
    cacheCleared: "Önbellek temizlendi",
    
    // Mesajlar
    noVideos: "Gösterilecek video bulunamadı",
    noFavorites: "Henüz favori videonuz yok",
    noHistory: "İzleme geçmişiniz bulunamadı",
    confirmDelete: "Silmek istediğinize emin misiniz?",
    confirmDeleteMultiple: "{{count}} öğeyi silmek istediğinize emin misiniz?",
    yes: "Evet",
    no: "Hayır",
    loading: "Yükleniyor...",
    videoError: "Video yüklenirken hata oluştu",
    playerError: "Oynatıcı yüklenirken hata oluştu",
    retry: "Tekrar Dene",
    noConnection: "İnternet bağlantısı yok",
    tryAgain: "Tekrar deneyin",
    searchResults: "Arama Sonuçları",
    all: "Tümü",
    
    // Uyarı mesajları
    warning: "Uyarı",
    error: "Hata",
    success: "Başarılı",
    info: "Bilgi",
    
    // Onay mesajları
    confirm: "Onay",
    cancel: "İptal",
    ok: "Tamam",
    
    // Menü öğeleri
    menu: "Menü",
    close: "Kapat",
    back: "Geri",
    next: "İleri",
    previous: "Önceki",
    
    // Diğer arayüz metinleri
    version: "Sürüm",
    about: "Hakkında",
    help: "Yardım",
    feedback: "Geri Bildirim",
    submit: "Gönder",
    name: "İsim",
    email: "E-posta",
    message: "Mesaj",
    send: "Gönder",
    processing: "İşleniyor...",
    pleaseWait: "Lütfen bekleyin...",
    
    // Title'lar
    appTitle: "Tenma Video Player",
    favoritesTitle: "Favori Videolar",
    historyTitle: "İzleme Geçmişi",
    settingsTitle: "Ayarlar",
    searchTitle: "Video Ara"
  },
  en: {
    // Splash screens
    languageSelection: "Language Selection",
    languageSelectionMessage: "Please select a language",
    ageRestriction: "18+ Age Restriction",
    ageWarningMessage: "This application may contain adult content. You must confirm that you are over 18 years old to continue.",
    confirmAge: "Yes, I am over 18",
    cancelAge: "No, exit",
    importantReminder: "Important Reminder",
    settingsReminderMessage: "To use the application properly, please configure your CORS Proxy and User Agent selections in the settings section.",
    goToSettings: "Go to Settings",
    remindLater: "Later",
    
    // Navigation
    home: "Home",
    favorites: "Favorites",
    history: "History",
    settings: "Settings",
    search: "Search",
    
    // Selection mode
    selectAll: "Select All",
    deleteSelected: "Delete Selected",
    cancelSelection: "Cancel",
    itemsSelected: "items selected",
    
    // Settings
    settingsTitle: "Settings",
    sourceSelection: "Source Selection",
    corsProxy: "CORS Proxy",
    userAgent: "User Agent",
    theme: "Theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    language: "Language",
    cache: "Cache",
    clearCache: "Clear Cache",
    cacheCleared: "Cache cleared",
    
    // Messages
    noVideos: "No videos to display",
    noFavorites: "You don't have any favorites yet",
    noHistory: "No watch history found",
    confirmDelete: "Are you sure you want to delete?",
    confirmDeleteMultiple: "Are you sure you want to delete {{count}} items?",
    yes: "Yes",
    no: "No",
    loading: "Loading...",
    videoError: "Error loading video",
    playerError: "Error loading player",
    retry: "Retry",
    noConnection: "No internet connection",
    tryAgain: "Try again",
    searchResults: "Search Results",
    all: "All",
    
    // Warning messages
    warning: "Warning",
    error: "Error",
    success: "Success",
    info: "Information",
    
    // Confirmation messages
    confirm: "Confirm",
    cancel: "Cancel",
    ok: "OK",
    
    // Menu items
    menu: "Menu",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    
    // Other UI texts
    version: "Version",
    about: "About",
    help: "Help",
    feedback: "Feedback",
    submit: "Submit",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    processing: "Processing...",
    pleaseWait: "Please wait...",
    
    // Titles
    appTitle: "Tenma Video Player",
    favoritesTitle: "Favorite Videos",
    historyTitle: "Watch History",
    settingsTitle: "Settings",
    searchTitle: "Search Videos"
  }
};

// CORS Proxy Listesi
const CORS_PROXIES = [
  { name: "Hiçbiri (Doğrudan Bağlantı)", url: "" },
  { name: "Cors Anywhere (Heroku)", url: "https://cors-anywhere.herokuapp.com/" },
  { name: "CodeTabs Proxy", url: "https://api.codetabs.com/v1/proxy?quest=" },
  { name: "All Origins", url: "https://api.allorigins.win/raw?url=" },
  { name: "CORS Proxy", url: "https://corsproxy.io/?" },
  { name: "Cross Origin", url: "https://crossorigin.me/" },
  { name: "CORS Bypass", url: "https://cors-bypass.herokuapp.com/" },
  { name: "Yacdn", url: "https://yacdn.org/proxy/" },
  { name: "Whatever Origin", url: "https://whateverorigin.org/get?url=" }
];

// User Agent Listesi
const USER_AGENTS = [
  { name: "Chrome (Windows)", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" },
  { name: "Firefox (Windows)", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0" },
  { name: "Safari (Mac)", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15" },
  { name: "Chrome (Mac)", value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" },
  { name: "iOS Safari (iPhone)", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1" },
  { name: "iOS Safari (iPad)", value: "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1" },
  { name: "Android Chrome", value: "Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36" },
  { name: "Android Firefox", value: "Mozilla/5.0 (Android 10; Mobile; rv:91.0) Gecko/91.0 Firefox/91.0" }
];

// Yardımcı fonksiyonlar ve sabitler
const APP_CONFIG = {
  SOURCES_URL: 'https://raw.githubusercontent.com/assian/TenMa_Sources/refs/heads/main/sources.json',
  MAX_DETAIL_CONCURRENCY: 4
};

// DOM yardımcıları
const el = id => document.getElementById(id);
const safeText = (selector, text) => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (element) element.textContent = text;
};

const createEl = (tag, classes = '', attributes = {}) => {
  const element = document.createElement(tag);
  if (classes) element.className = classes;
  Object.keys(attributes).forEach(key => {
    element.setAttribute(key, attributes[key]);
  });
  return element;
};

// State yönetimi
const AppState = {
  sources: [],
  currentSource: null,
  currentPage: 1,
  isLoading: false,
  hasEnded: false,
  isSearchMode: false,
  searchQuery: '',
  currentView: 'home', // 'home', 'favorites', 'history'
  selectedItems: new Set(),
  isSelectionMode: false,
  language: 'tr',
  corsProxy: '',
  userAgent: '',
  observers: {
    lazy: null,
    visible: null,
    sentinel: null
  }
};

// Utility fonksiyonlar
const Utils = {
  makeAbsolute(href, base) {
    if (!href) return null;
    href = href.trim();

    if (/^(https?:)?\/\//i.test(href)) {
      return href.replace(/(?<!:)\/+/g, '/');
    }

    const combined = (base || '').replace(/\/+$/, '') + '/' + href.replace(/^\/+/, '');
    return combined.replace(/(?<!:)\/+/g, '/');
  },

  normalizeVideoUrl(url, baseUrl) {
    if (!url) return null;
    let u = url.trim();
    u = u.replace(/\\+/g, '/').replace(/\/+/g, '/');
    u = u.replace(/^https?:\//i, match => match.endsWith('//') ? match : match + '/');

    if (/^https?:\/\//i.test(u)) return u;
    if (/^\/\//.test(u)) return 'https:' + u;
    if (baseUrl) {
      let base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      let path = u.startsWith('/') ? u : '/' + u;
      return base + path;
    }
    return u;
  },

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  translate(key, data = {}) {
    const textMap = Translations?.[AppState.language] ?? {};
    let text = textMap[key] || key;
    Object.keys(data).forEach(k => {
      text = text.replace(new RegExp(`{{${k}}}`, 'g'), data[k]);
    });
    return text;
  },

  updateUIText() {
    const ids = ['btn-home','btn-favorites','btn-history','btn-settings','btn-search'];
    const keys = ['home','favorites','history','settings','search'];
    ids.forEach((id,i)=>{ if(el(id)) el(id).title = Utils.translate(keys[i]); });
    if(el('searchInput')) el('searchInput').placeholder = Utils.translate('search');
    if(el('btn-select-all')) el('btn-select-all').textContent = Utils.translate('selectAll');
    if(el('btn-delete-selected')) el('btn-delete-selected').textContent = Utils.translate('deleteSelected');
    if(el('btn-cancel-selection')) el('btn-cancel-selection').textContent = Utils.translate('cancelSelection');
    if(el('btn-clear-cache')) el('btn-clear-cache').textContent = Utils.translate('clearCache');
    if(el('btn-light-theme')) el('btn-light-theme').textContent = Utils.translate('lightTheme');
    if(el('btn-dark-theme')) el('btn-dark-theme').textContent = Utils.translate('darkTheme');

    const h3s = document.querySelectorAll('#settingsPanel h3');
    if(h3s[0]) h3s[0].textContent = Utils.translate('sourceSelection');
    if(h3s[1]) h3s[1].textContent = Utils.translate('corsProxy');
    if(h3s[2]) h3s[2].textContent = Utils.translate('userAgent');
    if(h3s[3]) h3s[3].textContent = Utils.translate('theme');
    if(h3s[4]) h3s[4].textContent = Utils.translate('language');
    if(h3s[5]) h3s[5].textContent = Utils.translate('cache');
    const menuItems = [
      { id: 'btn-home', key: 'home' },
      { id: 'btn-favorites', key: 'favorites' },
      { id: 'btn-search', key: 'search' },
      { id: 'btn-history', key: 'history' },
      { id: 'btn-settings', key: 'settings' }
    ];
    
    menuItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        // Buton başlığını güncelle
        element.title = Utils.translate(item.key);
        
        // Buton içeriğindeki metni güncelle
        const textElement = element.querySelector('span');
        if (textElement) {
          textElement.textContent = Utils.translate(item.key);
        }
      }
    });
    // Tüm data-key özelliği olan elementleri güncelle
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = Utils.translate(key);
      } else {
        element.textContent = Utils.translate(key);
      }
    });

    document.title = Utils.translate('appTitle');
    if (typeof UI !== 'undefined' && typeof UI.updatePageTitle === 'function') {
      UI.updatePageTitle();
    }
  },

  showAlert(message, type = 'info') {
    // Basit bir alert gösterme fonksiyonu
    alert(`${Utils.translate(type)}: ${message}`);
  },

  confirm(message) {
    return confirm(message);
  },

  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
};

// Favori ve Geçmiş Yönetimi
const StorageManager = {
  getFavorites() {
    try {
      const favorites = localStorage.getItem('tenma_favorites');
      return favorites ? JSON.parse(favorites) : [];
    } catch (e) {
      console.error('Favoriler yüklenirken hata:', e);
      return [];
    }
  },

  saveFavorites(favorites) {
    try {
      localStorage.setItem('tenma_favorites', JSON.stringify(favorites));
      return true;
    } catch (e) {
      console.error('Favoriler kaydedilirken hata:', e);
      return false;
    }
  },

  getHistory() {
    try {
      const history = localStorage.getItem('tenma_history');
      return history ? JSON.parse(history) : [];
    } catch (e) {
      console.error('Geçmiş yüklenirken hata:', e);
      return [];
    }
  },

  saveHistory(history) {
    try {
      localStorage.setItem('tenma_history', JSON.stringify(history));
      return true;
    } catch (e) {
      console.error('Geçmiş kaydedilirken hata:', e);
      return false;
    }
  },

  addToHistory(video) {
    const history = this.getHistory();
    
    // Aynı videoyu geçmişten kaldır (yeniden eklemek için)
    const filteredHistory = history.filter(item => item.id !== video.id);
    
    // Videoyu en başa ekle
    filteredHistory.unshift(video);
    
    // Geçmişi 200 öğe ile sınırla
    const limitedHistory = filteredHistory.slice(0, 200);
    
    return this.saveHistory(limitedHistory);
  },

  toggleFavorite(video) {
    const favorites = this.getFavorites();
    const existingIndex = favorites.findIndex(item => item.id === video.id);
    
    if (existingIndex >= 0) {
      // Zaten favoride, kaldır
      favorites.splice(existingIndex, 1);
    } else {
      // Favoriye ekle
      favorites.unshift(video);
    }
    
    return this.saveFavorites(favorites);
  },

  isFavorite(videoId) {
    const favorites = this.getFavorites();
    return favorites.some(item => item.id === videoId);
  },

  clearSelectedItems(ids, type) {
    if (type === 'favorites') {
      const favorites = this.getFavorites();
      const updatedFavorites = favorites.filter(item => !ids.includes(item.id));
      return this.saveFavorites(updatedFavorites);
    } else if (type === 'history') {
      const history = this.getHistory();
      const updatedHistory = history.filter(item => !ids.includes(item.id));
      return this.saveHistory(updatedHistory);
    }
    return false;
  },

  clearCache() {
    try {
      // Favori ve geçmiş dışındaki öğeleri temizle
      const favorites = this.getFavorites();
      const history = this.getHistory();
      
      localStorage.clear();
      
      // Favori ve geçmişi geri yükle
      this.saveFavorites(favorites);
      this.saveHistory(history);
      
      return true;
    } catch (e) {
      console.error('Önbellek temizlenirken hata:', e);
      return false;
    }
  },

  getCorsProxy() {
    return localStorage.getItem('tenma_cors_proxy') || '';
  },

  saveCorsProxy(proxy) {
    localStorage.setItem('tenma_cors_proxy', proxy);
  },

  getUserAgent() {
    return localStorage.getItem('tenma_user_agent') || '';
  },

  saveUserAgent(userAgent) {
    localStorage.setItem('tenma_user_agent', userAgent);
  },

  // Yeni: Age onayını kaydetme
  setAgeConfirmed() {
    localStorage.setItem('tenma_age_confirmed', 'true');
  },

  isAgeConfirmed() {
    return localStorage.getItem('tenma_age_confirmed') === 'true';
  },

  // Yeni: Ayarlar hatırlatmasını kaydetme
  setSettingsReminderShown() {
    localStorage.setItem('tenma_settings_reminder_shown', 'true');
  },

  isSettingsReminderShown() {
    return localStorage.getItem('tenma_settings_reminder_shown') === 'true';
  },

  // Yeni: Dil tercihini kaydetme
  setLanguage(lang) {
    localStorage.setItem('tenma_language', lang);
  },

  getLanguage() {
    return localStorage.getItem('tenma_language') || 'tr';
  }
};

// API İşlemleri
const ApiService = {
  async corsFetch(url, opts = {}) {
    const corsProxy = AppState.corsProxy || StorageManager.getCorsProxy();
    const useProxy = corsProxy && corsProxy !== "Hiçbiri (Doğrudan Bağlantı)";
    
    try {
      if (useProxy) {
        const proxyUrl = CORS_PROXIES.find(p => p.url === corsProxy)?.url || corsProxy;
        const res = await fetch(proxyUrl + encodeURIComponent(url), opts);
        if (res.ok) return res;
        throw new Error('HTTP ' + res.status);
      } else {
        const res = await fetch(url, opts);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res;
      }
    } catch (e) {
      // Proxy başarısız olursa doğrudan istek yap
      try {
        const res = await fetch(url, opts);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res;
      } catch (e2) {
        throw new Error('Both proxy and direct request failed: ' + e2.message);
      }
    }
  },

  async loadSources() {
    try {
      const response = await this.corsFetch(APP_CONFIG.SOURCES_URL, {
        headers: { Accept: 'application/json' }
      });
      const json = await response.json();
      if (!Array.isArray(json) || json.length === 0) throw new Error('Empty manifest');
      return json;
    } catch (e) {
      console.warn('Sources yüklenemedi', e);
      return [{
        name: 'Örnek Kaynak',
        baseUrl: 'https://example.com',
        listUrl: 'https://example.com/list?page=${page}',
        videoItemSelector: 'a',
        titleSelector: 'a',
        thumbnailSelector: 'img'
      }];
    }
  },

  parseItemsFromHtml(htmlText, source) {
    const doc = new DOMParser().parseFromString(htmlText, 'text/html');
    const selector = source.videoItemSelector || 'a';
    const nodes = Array.from(doc.querySelectorAll(selector));
    
    return nodes.map(node => {
      const link = source.detailPageLinkSelector ?
        node.querySelector(source.detailPageLinkSelector) :
        node.querySelector('a') || node;

      const href = link?.getAttribute('href') || link?.dataset?.href || 'no-id';
      const titleNode = node.querySelector(source.titleSelector) ||
        node.querySelector('h3') || node.querySelector('a') || node;

      const thumbNode = node.querySelector(source.thumbnailSelector) ||
        node.querySelector('img');

      const thumb = thumbNode ?
        (thumbNode.dataset?.original || thumbNode.getAttribute('src')) : null;

      return {
        id: href,
        title: (titleNode?.title) || (titleNode?.textContent || '').trim() || href,
        thumbnail: thumb || null,
        url: Utils.makeAbsolute(href, source.baseUrl || ''),
        baseUrl: source.baseUrl || ''
      };
    }).filter(Boolean);
  },

  async getList(source, page = 1) {
    if (!source) throw new Error('Source missing');
    const url = (source.listUrl || '').replace('${page}', page);
    
    // User Agent ayarını kontrol et
    const userAgent = AppState.userAgent || StorageManager.getUserAgent() || source.userAgent || 'Mozilla/5.0';
    
    const res = await this.corsFetch(url, {
      headers: { 
        'User-Agent': userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive'
      }
    });
    const html = await res.text();
    const items = this.parseItemsFromHtml(html, source);
    
    return { source: source.name, page, items };
  },

  async search(source, query = '', page = 1) {
    if (!source) throw new Error('Source missing');
    if (!source.searchUrl) throw new Error('Search not supported by this source');

    const encQuery = encodeURIComponent(String(query || ''));
    const pageStr = String(page);

    let url = source.searchUrl
      .replace(/\$\{query\}/g, encQuery)
      .replace(/\{query\}/g, encQuery)
      .replace(/\%s/g, encQuery)
      .replace(/\$\{page\}/g, pageStr)
      .replace(/\{page\}/g, pageStr);

    if (!/\$\{query\}|\{query\}|\%s/.test(source.searchUrl)) {
      url += (url.includes('?') ? '&' : '?') + 'q=' + encQuery;
    }

    if (!/\$\{page\}|\{page\}/.test(source.searchUrl) && page > 1) {
      url += (url.includes('?') ? '&' : '?') + 'page=' + pageStr;
    }

    // User Agent ayarını kontrol et
    const userAgent = AppState.userAgent || StorageManager.getUserAgent() || source.userAgent || 'Mozilla/5.0';
    
    const res = await this.corsFetch(url, {
      headers: { 
        'User-Agent': userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive'
      }
    });
    const html = await res.text();
    const items = this.parseItemsFromHtml(html, source);
    
    return {
      source: source.name,
      page,
      query,
      items,
      rawUrl: url
    };
  }
};

// Video Detay İşlemleri
const DetailService = {
  queue: [],
  active: 0,

  async extractVideoUrlFromPage(html, source, baseUrl) {
    const regexKey = source.videoUrlRegex || source.videoPlayerRegex || source.videoRegex;
    if (regexKey) {
      try {
        const regex = new RegExp(regexKey, 'i');
        const matches = html.match(regex);
        if (matches && matches[1]) {
          return Utils.normalizeVideoUrl(matches[1], baseUrl);
        }
      } catch (e) {
        console.error('Regex error', e);
      }
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');

    // Check iframes
    const iframes = Array.from(doc.querySelectorAll('iframe'));
    for (const iframe of iframes) {
      const src = iframe.getAttribute('src');
      if (src && (src.includes('youtube.com') || src.includes('vimeo.com') || src.includes('dailymotion.com'))) {
        return Utils.makeAbsolute(src, baseUrl);
      }
    }

    // Check video tags
    const videoTags = Array.from(doc.querySelectorAll('video'));
    for (const video of videoTags) {
      const src = video.getAttribute('src');
      if (src) return Utils.makeAbsolute(src, baseUrl);

      const sourceTags = Array.from(video.querySelectorAll('source'));
      for (const source of sourceTags) {
        const src = source.getAttribute('src');
        if (src) return Utils.makeAbsolute(src, baseUrl);
      }
    }

    // Check JavaScript variables
    const scripts = Array.from(doc.querySelectorAll('script')).map(s => s.textContent).join('\n');
    const urlPatterns = [
      /(https?:\/\/[^\s'"]+\.(mp4|m3u8|webm|mov)[^\s'"]*)/gi,
      /file:\s*["'](https?:\/\/[^"']+)["']/gi,
      /source:\s*["'](https?:\/\/[^"']+)["']/gi,
      /src:\s*["'](https?:\/\/[^"']+)["']/gi
    ];

    for (const pattern of urlPatterns) {
      const matches = scripts.match(pattern);
      if (matches) {
        for (const match of matches) {
          const url = match.replace(/^['"]|['"]$/g, '');
          if (url.includes('.mp4') || url.includes('.m3u8') || url.includes('.webm') || url.includes('.mov')) {
            return Utils.makeAbsolute(url, baseUrl);
          }
        }
      }
    }

    // Check data attributes
    const elementsWithData = Array.from(doc.querySelectorAll('[data-src],[data-video-src],[data-file]'));
    for (const element of elementsWithData) {
      const src = element.getAttribute('data-src') ||
        element.getAttribute('data-video-src') ||
        element.getAttribute('data-file');
      if (src && (src.includes('.mp4') || src.includes('.m3u8'))) {
        return Utils.makeAbsolute(src, baseUrl);
      }
    }

    // Check JW Player
    const jwPlayerMatches = scripts.match(/file\s*:\s*["'](https?:\/\/[^"']+)["']/i);
    if (jwPlayerMatches && jwPlayerMatches[1]) {
      return Utils.makeAbsolute(jwPlayerMatches[1], baseUrl);
    }

    return null;
  },

  async fetchDetail(source, item) {
    if (item._fetched) return item;
    
    return new Promise((resolve, reject) => {
      this.queue.push({ source, item, resolve, reject });
      this.processQueue();
    });
  },

  async processQueue() {
    if (this.active >= APP_CONFIG.MAX_DETAIL_CONCURRENCY || this.queue.length === 0) return;
    
    this.active++;
    const { source, item, resolve, reject } = this.queue.shift();

    try {
      // User Agent ayarını kontrol et
      const userAgent = AppState.userAgent || StorageManager.getUserAgent() || source.userAgent || 'Mozilla/5.0';
      
      const res = await ApiService.corsFetch(item.url, {
        headers: { 
          'User-Agent': userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive'
        }
      });
      const html = await res.text();

      item.realUrl = await this.extractVideoUrlFromPage(html, source, item.baseUrl);

      if (!item.thumbnail) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
          doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content');
        if (ogImage) {
          item.thumbnail = Utils.makeAbsolute(ogImage, item.baseUrl);
        }
      }

      item._fetched = true;
      resolve(item);
    } catch (e) {
      console.error('Error fetching details:', e);
      item._fetched = true;
      resolve(item);
    } finally {
      this.active--;
      this.processQueue();
    }
  }
};

// UI İşlemleri
const UI = {
  initObservers() {
    // Lazy loading observer
    AppState.observers.lazy = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const img = ent.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          AppState.observers.lazy.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    // Visibility observer
    AppState.observers.visible = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const card = ent.target;
          const idx = card.__itemIndex;
          if (idx != null) {
            const wrapper = card.__wrapper;
            DetailService.fetchDetail(wrapper.source, wrapper.item).then(updated => {
              if (updated.thumbnail) {
                const img = card.querySelector('img');
                if (img && !img.src) img.src = updated.thumbnail;
              }
            });
          }
          AppState.observers.visible.unobserve(card);
        }
      });
    }, { rootMargin: '300px' });

    // Sentinel observer for infinite scroll
    AppState.observers.sentinal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !AppState.isLoading && !AppState.hasEnded && AppState.currentView === 'home') {
          AppController.loadNextPage();
        }
      });
    }, { rootMargin: '600px' });

    if (el('sentinel')) {
      AppState.observers.sentinal.observe(el('sentinel'));
    }

    // Scroll observer for FAB button
    window.addEventListener('scroll', Utils.debounce(() => {
      if (window.scrollY > 300) {
        el('fabTop').classList.remove('hidden');
      } else {
        el('fabTop').classList.add('hidden');
      }
    }, 100));
  },

  createVideoCard(source, item, index, isFavoriteView = false) {
    const card = createEl('div', 'tenma-video-card bg-light-200 dark:bg-dark-800 rounded-lg overflow-hidden shadow-md cursor-pointer max-w-full relative');
    
    // Favori butonu
    const isFavorite = StorageManager.isFavorite(item.id);
    const favoriteBtn = createEl('button', `absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-800 dark:bg-gray-800/80 dark:text-white'} transition-all`);
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      StorageManager.toggleFavorite(item);
      if (isFavoriteView) {
        // Favoriler sayfasındaysak kartı kaldır
        card.remove();
        // Eğer hiç favori kalmadıysa mesaj göster
        if (el('listContainer').children.length === 0) {
          el('listContainer').innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">${Utils.translate('noFavorites')}</div>`;
        }
      } else {
        // Favori durumunu güncelle
        const newIsFavorite = StorageManager.isFavorite(item.id);
        if (newIsFavorite) {
          favoriteBtn.classList.add('bg-red-500', 'text-white');
          favoriteBtn.classList.remove('bg-white/80', 'text-gray-800', 'dark:bg-gray-800/80', 'dark:text-white');
        } else {
          favoriteBtn.classList.remove('bg-red-500', 'text-white');
          favoriteBtn.classList.add('bg-white/80', 'text-gray-800', 'dark:bg-gray-800/80', 'dark:text-white');
        }
      }
    });
    
    // Thumbnail container
    const thumb = createEl('div', 'relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 overflow-hidden');
    
    // Skeleton loader
    const skeleton = createEl('div', 'skeleton absolute inset-0 z-10');
    thumb.appendChild(skeleton);
    
    // Spinner container
    const spinnerContainer = createEl('div', 'spinner-container absolute inset-0 flex items-center justify-center z-20');
    spinnerContainer.innerHTML = '<div class="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>';
    thumb.appendChild(spinnerContainer);
    
    // Image
    const img = createEl('img', 'absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 opacity-0 blur-md', {
      alt: item.title || 'thumb',
      'data-src': item.thumbnail || ''
    });
    
    img.onload = function() {
      this.classList.remove('opacity-0', 'blur-md');
      this.classList.add('opacity-100', 'blur-none');
      skeleton.remove();
      spinnerContainer.remove();
    };
    
    img.onerror = function() {
      this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="100%" height="100%" fill="#f1f5f9"/><text x="50%" y="50%" fill="#334155" font-size="18" text-anchor="middle" dy="6">No Thumb</text></svg>';
      skeleton.remove();
      spinnerContainer.remove();
      this.classList.remove('opacity-0', 'blur-md');
      this.classList.add('opacity-100');
    };
    
    thumb.appendChild(img);
    
    // Play overlay
    const overlay = createEl('div', 'absolute inset-0 flex items-center justify-center pointer-events-none text-primary opacity-50 text-6xl transition-opacity group-hover:opacity-100');
    overlay.innerHTML = '<i class="fas fa-play"></i>';
    thumb.appendChild(overlay);
    
    // Info section
    const info = createEl('div', 'p-3 overflow-hidden');
    const title = createEl('h3', 'font-medium text-base mb-1 line-clamp-2');
    title.textContent = item.title || 'Untitled';
    info.appendChild(title);
    
    const sourceInfo = createEl('div', 'text-accent text-sm truncate');
    sourceInfo.textContent = source.name || Utils.translate('source');
    info.appendChild(sourceInfo);
    
    card.appendChild(favoriteBtn);
    card.appendChild(thumb);
    card.appendChild(info);
    
    // Event listeners
    card.addEventListener('click', async () => {
      if (AppState.isSelectionMode) {
        card.classList.toggle('selected');
        if (card.classList.contains('selected')) {
          AppState.selectedItems.add(item.id);
        } else {
          AppState.selectedItems.delete(item.id);
        }
        UI.updateSelectionCount();
        return;
      }
      
      await DetailService.fetchDetail(source, item);
      StorageManager.addToHistory(item);
      PlayerController.openVideo(item);
    });
    
    // Observers
    AppState.observers.lazy.observe(img);
    AppState.observers.visible.observe(card);
    
    // Store references
    card.__itemIndex = index;
    card.__wrapper = { source, item };
    
    return card;
  },
  
  renderItems(source, items, clear = false, isFavoriteView = false) {
    const container = el('listContainer');

    // Eğer temizleme isteniyorsa önce tamamen temizle
    if (clear) {
      container.innerHTML = '';
    }

    // Eğer gerçekten hiç öğe yoksa ve ekleme yapılmayacaksa mesaj göster
    if (items.length === 0) {
      if (container.children.length === 0) {
        const message = isFavoriteView
          ? Utils.translate('noFavorites')
          : AppState.currentView === 'history'
          ? Utils.translate('noHistory')
          : Utils.translate('noVideos');
        container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">${message}</div>`;
      }
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      const card = this.createVideoCard(
        source,
        item,
        container.querySelectorAll('.tenma-video-card').length + index,
        isFavoriteView
      );
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  },
  
  toggleSearch() {
    const searchContainer = el('searchContainer');
    searchContainer.classList.toggle('translate-y-0');
    searchContainer.classList.toggle('-translate-y-full');
    
    if (searchContainer.classList.contains('translate-y-0')) {
      el('searchInput').focus();
    }
  },
  
  closeSearch() {
    const searchContainer = el('searchContainer');
    searchContainer.classList.add('-translate-y-full');
    searchContainer.classList.remove('translate-y-0');
  },
  
  setLoading(loading) {
    const loadingEl = el('loadingMore');
    if (loading) {
      loadingEl.classList.remove('hidden');
    } else {
      loadingEl.classList.add('hidden');
    }
    AppState.isLoading = loading;
  },
  
  renderSourcePicker(sources) {
    const select = el('sourcePicker');
    select.innerHTML = '';
    
    sources.forEach((source, index) => {
      const option = createEl('option', '', { value: index });
      option.textContent = source.name || `source-${index}`;
      select.appendChild(option);
    });
  },
  
  renderCorsProxyPicker() {
    const select = el('corsProxyPicker');
    select.innerHTML = '';
    
    CORS_PROXIES.forEach((proxy, index) => {
      const option = createEl('option', '', { value: proxy.url });
      option.textContent = proxy.name;
      select.appendChild(option);
    });
    
    // Kayıtlı proxy'yi yükle
    const savedProxy = StorageManager.getCorsProxy();
    if (savedProxy) {
      select.value = savedProxy;
    }
  },
  
  renderUserAgentPicker() {
    const select = el('userAgentPicker');
    select.innerHTML = '';
    
    USER_AGENTS.forEach((ua, index) => {
      const option = createEl('option', '', { value: ua.value });
      option.textContent = ua.name;
      select.appendChild(option);
    });
    
    // Kayıtlı User Agent'ı yükle
    const savedUA = StorageManager.getUserAgent();
    if (savedUA) {
      select.value = savedUA;
    }
  },
  
  updatePageTitle() {
    const titleEl = el('pageTitle');
    switch (AppState.currentView) {
      case 'home':
        titleEl.textContent = '';
        break;
      case 'favorites':
        titleEl.textContent = Utils.translate('favoritesTitle');
        break;
      case 'history':
        titleEl.textContent = Utils.translate('historyTitle');
        break;
      default:
        titleEl.textContent = '';
    }
  },
  
  toggleSelectionMode(enable) {
    AppState.isSelectionMode = enable;
    const container = el('listContainer');
    const controls = el('selectionControls');
    
    if (enable) {
      container.classList.add('selection-mode');
      controls.classList.remove('hidden');
      AppState.selectedItems.clear();
      this.updateSelectionCount();
    } else {
      container.classList.remove('selection-mode');
      controls.classList.add('hidden');
      // Tüm seçimleri temizle
      const selectedCards = container.querySelectorAll('.tenma-video-card.selected');
      selectedCards.forEach(card => card.classList.remove('selected'));
      AppState.selectedItems.clear();
    }
  },
  
  updateSelectionCount() {
    const countEl = el('selectedCount');
    countEl.textContent = `${AppState.selectedItems.size} ${Utils.translate('itemsSelected')}`;
  },
  
  toggleSettingsPanel(open) {
    const panel = el('settingsPanel');
    const body = document.body;
    
    if (open) {
      panel.classList.add('open');
      body.classList.add('settings-open'); // Body scroll'unu engelle
    } else {
      panel.classList.remove('open');
      body.classList.remove('settings-open'); // Body scroll'unu geri getir
    }
  }
};

// Oynatıcı Kontrolü
const PlayerController = {
  progressUpdateInterval: null,
  isFullscreen: false,
  
  init() {
      // TenmaPlayer.js yüklenmişse başlat
      if (typeof TenmaPlayer !== 'undefined') {
          TenmaPlayer.initAll();
      }
      // Kapatma butonu
      el('closePlayer').addEventListener('click', () => this.closePlayer());
  },
  
  openVideo(item) {
      const overlay = el('playerOverlay');
      const playerEl = overlay.querySelector('.tenma-player');
      
      // iOS kontrolü
      const isIOS = Utils.isIOS();
      
      if (isIOS) {
          // iOS için özel video player
          playerEl.innerHTML = `
              <video 
                  controls 
                  playsinline 
                  webkit-playsinline 
                  class="w-full h-full"
                  src="${item.realUrl || item.url}"
              >
                  ${Utils.translate('videoError')}
              </video>
          `;
      } else if (typeof TenmaPlayer !== 'undefined') {
          // TenmaPlayer.js yüklenmişse kullan
          // Eğer tenmaInstance yoksa, yeni bir TenmaPlayer oluştur
          if (!playerEl.tenmaInstance) {
              playerEl.tenmaInstance = new TenmaPlayer(playerEl, {
                  src: item.realUrl || item.url
              });
          } else {
              // Varsa setSource ile kaynağı güncelle
              playerEl.tenmaInstance.setSource(item.realUrl || item.url);
          }
      } else {
          // Fallback: Native video player
          playerEl.innerHTML = `
              <video controls autoplay class="w-full h-full">
                  <source src="${item.realUrl || item.url}" type="video/mp4">
                  ${Utils.translate('videoError')}
              </video>
          `;
      }
      
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
  },
  
  closePlayer() {
      const overlay = el('playerOverlay');
      if (!overlay) return;
      
      overlay.style.display = 'none';
      
      // TenmaPlayer instance'ını al ve destroy et
      const playerEl = overlay.querySelector('.tenma-player');
      if (playerEl && playerEl.tenmaInstance) {
          if (typeof playerEl.tenmaInstance.destroy === 'function') {
              playerEl.tenmaInstance.destroy();
          }
          playerEl.tenmaInstance = null;
      } else {
          // Native video player'ı temizle
          playerEl.innerHTML = '';
      }
      
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
  }
};

// Ana Uygulama Kontrolcüsü
const AppController = {
  async init() {
    // Uygulama içeriğini göster
    el('appContent').style.display = 'block';
    
    // Dil ayarını yükle
    AppState.language = StorageManager.getLanguage();
    document.getElementById('languagePicker').value = AppState.language;
    
    // CORS Proxy ve User Agent ayarlarını yükle
    AppState.corsProxy = StorageManager.getCorsProxy();
    AppState.userAgent = StorageManager.getUserAgent();
    
    // Tema yönetimi
    this.initTheme();
    
    // Olay dinleyicileri
    this.initEventListeners();
    
    // Observer'ları başlat
    UI.initObservers();
    
    // Kaynakları yükle
    try {
      AppState.sources = await ApiService.loadSources();
      UI.renderSourcePicker(AppState.sources);
    } catch (e) {
      console.error('Kaynaklar yüklenemedi:', e);
      // Hata durumunda boş kaynak listesi oluştur
      AppState.sources = [{
        name: Utils.translate('source'),
        baseUrl: '',
        listUrl: '',
        videoItemSelector: 'a',
        titleSelector: 'a',
        thumbnailSelector: 'img'
      }];
      UI.renderSourcePicker(AppState.sources);
    }
    
    // CORS Proxy ve User Agent seçicileri render et
    UI.renderCorsProxyPicker();
    UI.renderUserAgentPicker();
    
    // Sayfa başlığını güncelle
    UI.updatePageTitle();
    Utils.updateUIText();
    
    // İlk kaynağı yükle
    await this.showHomeView();
    
    // Player'ı başlat
    PlayerController.init();
    
    // FAB butonu event listener
    el('fabTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Ayarlar hatırlatma ekranını göster (eğer proxy veya user agent ayarlanmamışsa)
    if (!AppState.corsProxy || !AppState.userAgent) {
      this.showSettingsReminder();
    }
  },
  
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Başlangıç temasını ayarla
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  
  initEventListeners() {
    // Navigasyon olayları
    el('btn-home').addEventListener('click', () => this.showHomeView());
    el('btn-favorites').addEventListener('click', () => this.showFavoritesView());
    el('btn-history').addEventListener('click', () => this.showHistoryView());
    el('btn-settings').addEventListener('click', () => UI.toggleSettingsPanel(true));
    el('btn-search').addEventListener('click', UI.toggleSearch);
    
    // Arama olayları
    el('btn-perform-search').addEventListener('click', () => this.performSearch(el('searchInput').value.trim()));
    
    el('searchInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.performSearch(el('searchInput').value.trim());
      }
    });
    
    // Boşluğa tıklayınca arama kutusunu kapat
    document.addEventListener('click', (e) => {
      const isClickInsideSearch = el('searchContainer').contains(e.target);
      const isClickOnToggle = el('btn-search').contains(e.target);
      
      if (el('searchContainer').classList.contains('translate-y-0') &&
          !isClickInsideSearch && !isClickOnToggle) {
        UI.closeSearch();
      }
    });
    
    // ESC tuşuyla arama kutusunu kapat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        UI.closeSearch();
      }
    });
    
    // Ayarlar paneli kapatma
    el('btn-close-settings').addEventListener('click', () => UI.toggleSettingsPanel(false));
    
    // Panele dışarı tıklanınca kapatma
    document.addEventListener('click', (e) => {
      const settingsPanel = el('settingsPanel');
      const settingsButton = el('btn-settings');
      
      // Eğer ayarlar paneli açıksa ve dışarıya tıklandıysa
      if (settingsPanel.classList.contains('open') && 
          !settingsPanel.contains(e.target) && 
          !settingsButton.contains(e.target)) {
        UI.toggleSettingsPanel(false);
      }
    });    
    // Tema değiştirme
    el('btn-light-theme').addEventListener('click', () => this.changeTheme('light'));
    el('btn-dark-theme').addEventListener('click', () => this.changeTheme('dark'));
    
    // Dil değiştirme
    el('languagePicker').addEventListener('change', (e) => {
      this.changeLanguage(e.target.value);
    });
    
    // CORS Proxy değiştirme
    el('corsProxyPicker').addEventListener('change', (e) => {
      this.changeCorsProxy(e.target.value);
    });
    
    // User Agent değiştirme
    el('userAgentPicker').addEventListener('change', (e) => {
      this.changeUserAgent(e.target.value);
    });
    
    // Önbellek temizleme
    el('btn-clear-cache').addEventListener('click', () => {
      if (StorageManager.clearCache()) {
        Utils.showAlert(Utils.translate('cacheCleared'), 'success');
      }
    });
    
    // Kaynak değiştirme
    el('sourcePicker').addEventListener('change', () => {
      this.changeSource(parseInt(el('sourcePicker').value || 0, 10));
    });
    
    // Seçim modu kontrolleri
    el('btn-select-all').addEventListener('click', () => this.selectAllItems());
    el('btn-delete-selected').addEventListener('click', () => this.deleteSelectedItems());
    el('btn-cancel-selection').addEventListener('click', () => UI.toggleSelectionMode(false));
  },
  
  async loadNextPage() {
    if (!AppState.currentSource || AppState.currentView !== 'home') return;
    
    AppState.isLoading = true;
    UI.setLoading(true);
    
    try {
      let response;
      if (AppState.isSearchMode && AppState.searchQuery) {
        response = await ApiService.search(AppState.currentSource, AppState.searchQuery, AppState.currentPage);
      } else {
        response = await ApiService.getList(AppState.currentSource, AppState.currentPage);
      }
      
      const items = response.items || [];
      if (items.length === 0) {
        AppState.hasEnded = true;
      }
      
      UI.renderItems(AppState.currentSource, items);
      AppState.currentPage++;
    } catch (e) {
      console.error('Sayfa yükleme hatası', e);
      // Hata durumunda boş liste render etme, sadece loading'i durdur
    }
    
    AppState.isLoading = false;
    UI.setLoading(false);
  },
  
  async showHomeView() {
    AppState.currentView = 'home';
    AppState.currentPage = 1;
    AppState.hasEnded = false;
    AppState.isSearchMode = false;
    AppState.searchQuery = '';
    
    UI.updatePageTitle();
    UI.toggleSelectionMode(false);
    
    if (!AppState.currentSource && AppState.sources.length > 0) {
      AppState.currentSource = AppState.sources[0];
    }
    
    if (AppState.currentSource) {
      // Mesaj ekleme yerine sadece listeyi temizle
      const container = el('listContainer');
      if (container) container.innerHTML = '';
      await this.loadNextPage();
    } else {
      UI.renderItems({ name: Utils.translate('source') }, [], true);
    }
  },
  
  showFavoritesView() {
    AppState.currentView = 'favorites';
    UI.updatePageTitle();
    
    const favorites = StorageManager.getFavorites();
    UI.renderItems({ name: Utils.translate('favorites') }, favorites, true, true);
    
    // Favoriler sayfasında seçim modunu etkinleştir
    UI.toggleSelectionMode(true);
  },
  
  showHistoryView() {
    AppState.currentView = 'history';
    UI.updatePageTitle();
    
    const history = StorageManager.getHistory();
    UI.renderItems({ name: Utils.translate('history') }, history, true);
    
    // Geçmiş sayfasında seçim modunu etkinleştir
    UI.toggleSelectionMode(true);
  },
  
  async performSearch(query) {
    query = String(query || '').trim();
    if (!query) {
      await this.showHomeView();
      return;
    }
    
    AppState.currentPage = 1;
    AppState.hasEnded = false;
    AppState.isSearchMode = true;
    AppState.searchQuery = query;
    AppState.currentView = 'home';
    
    UI.updatePageTitle();
    UI.toggleSelectionMode(false);
    
    const container = el('listContainer');
    if (container) container.innerHTML = '';
    await this.loadNextPage();
    UI.closeSearch();
  },
  
  changeTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },
  
  changeLanguage(lang) {
    AppState.language = lang;
    StorageManager.setLanguage(lang);
    Utils.updateUIText();
  },
  
  changeCorsProxy(proxy) {
    AppState.corsProxy = proxy;
    StorageManager.saveCorsProxy(proxy);
  },
  
  changeUserAgent(userAgent) {
    AppState.userAgent = userAgent;
    StorageManager.saveUserAgent(userAgent);
  },
  
  async changeSource(sourceIndex) {
    if (AppState.sources.length === 0) return;
    
    AppState.currentSource = AppState.sources[sourceIndex];
    if (AppState.currentView === 'home') {
      await this.showHomeView();
    }
  },
  
  selectAllItems() {
    const container = el('listContainer');
    const cards = container.querySelectorAll('.tenma-video-card');
    
    cards.forEach(card => {
      card.classList.add('selected');
      const itemId = card.__wrapper.item.id;
      AppState.selectedItems.add(itemId);
    });
    
    UI.updateSelectionCount();
  },
  
  deleteSelectedItems() {
    if (AppState.selectedItems.size === 0) return;
    
    const message = AppState.selectedItems.size === 1 
      ? Utils.translate('confirmDelete')
      : Utils.translate('confirmDeleteMultiple', { count: AppState.selectedItems.size });
    
    if (Utils.confirm(message)) {
      const itemIds = Array.from(AppState.selectedItems);
      
      if (AppState.currentView === 'favorites') {
        StorageManager.clearSelectedItems(itemIds, 'favorites');
        this.showFavoritesView(); // Sayfayı yenile
      } else if (AppState.currentView === 'history') {
        StorageManager.clearSelectedItems(itemIds, 'history');
        this.showHistoryView(); // Sayfayı yenile
      }
    }
  },
  
  // Dil seçimi ekranını göster
  showLanguageSplash() {
    const languageSplash = el('languageSplash');
    const ageSplash = el('ageSplash');
    const appContent = el('appContent');
    
    // Dil seçimi butonları
    document.querySelectorAll('#languageSplash .splash-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.changeLanguage(lang);
        languageSplash.style.display = 'none';
        this.showAgeSplash();
      });
    });
  },
  
  // 18+ yaş onay ekranını göster
  showAgeSplash() {
    const ageSplash = el('ageSplash');
    const appContent = el('appContent');
    
    // Eğer daha önce onaylanmışsa atla
    if (StorageManager.isAgeConfirmed()) {
      ageSplash.style.display = 'none';
      appContent.style.display = 'block';
      this.init();
      return;
    }
    
    ageSplash.style.display = 'flex';
    
    // Onay butonu
    el('ageConfirm').addEventListener('click', () => {
      StorageManager.setAgeConfirmed();
      ageSplash.style.display = 'none';
      appContent.style.display = 'block';
      this.init();
    });
    
    // İptal butonu
    el('ageCancel').addEventListener('click', () => {
      ageSplash.innerHTML = '<div class="splash-content"><h2 class="text-2xl font-bold mb-4" data-key="exitTitle">Çıkış</h2><p data-key="exitMessage">18 yaşından büyük olmadığınız için uygulamayı kullanamazsınız.</p></div>';
      Utils.updateUIText();
    });
  },
  
  // Ayarlar hatırlatma ekranını göster
  showSettingsReminder() {
    const settingsSplash = el('settingsSplash');
    
    // Eğer daha önce gösterilmişse atla
    if (StorageManager.isSettingsReminderShown()) {
      settingsSplash.style.display = 'none';
      return;
    }
    
    settingsSplash.style.display = 'flex';
    
    // Ayarlara git butonu
    el('settingsConfirm').addEventListener('click', () => {
      StorageManager.setSettingsReminderShown();
      settingsSplash.style.display = 'none';
      UI.toggleSettingsPanel(true);
    });
    
    // Daha sonra butonu
    el('settingsCancel').addEventListener('click', () => {
      StorageManager.setSettingsReminderShown();
      settingsSplash.style.display = 'none';
    });
  }
};

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', async () => {
  // Önce dil seçimi ekranını göster
  AppController.showLanguageSplash();
  
  // Service Worker kaydı (isteğe bağlı)
  if ('serviceWorker' in navigator && !Utils.isIOS()) {
    navigator.serviceWorker.register("sw.js").catch(console.error);
  }
});