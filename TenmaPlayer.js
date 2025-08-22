/*! TenmaPlayer v1.2 | MIT License */
class TenmaPlayer {
  constructor(container, options = {}) {
    this.container = container;
    this.container.tenmaInstance = this;
    this.videoSrc = options.src || container.dataset.src;
    this.autoHideDelay = options.autoHideDelay || 3000;
    this.hlsConfig = options.hlsConfig || {};
    this.controlsTimer = null;
    this.isSeeking = false;
    this.isDragging = false;
    this.startX = 0;
    this.startTime = 0;
    this.boundEventListeners = new Map();
    this.isReady = false;

    // Event handler'ları bağlamak için
    this._onManifestParsed = this._onManifestParsed.bind(this);
    this._onLoadedMetadata = this._onLoadedMetadata.bind(this);
    this._onVideoError = this._onVideoError.bind(this);

    this.createPlayerHTML();
    this.cacheElements();
    this.initVideo();
    this.setupEventListeners();
    this.setupDragToSeek();
    this.setupDoubleTapSeek();
    this.showControls();
  }

  static initAll(selector = '.tenma-player', options = {}) {
    document.querySelectorAll(selector).forEach(el => new TenmaPlayer(el, options));
  }

  createPlayerHTML() {
    this.container.classList.add('player-container', 'relative', 'bg-black', 'rounded-xl', 'overflow-hidden');
    this.container.innerHTML = `
      <div class="video-wrapper relative w-full overflow-hidden">
        <video class="w-full aspect-video" playsinline autoplay></video>
        <div class="loader hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-12 h-12 border-4 border-white/30 border-t-blue-500 rounded-full animate-spin"></div>
        <div class="seek-indicator hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-black/80 text-white px-4 py-2 rounded text-lg font-bold"></div>
      </div>
      <div class="video-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
        <div class="flex items-center justify-between mb-2">
          <span class="current-time text-white text-xs bg-black/60 px-2 py-1 rounded">00:00</span>
          <input class="progress flex-1 mx-3" type="range" min="0" max="100" value="0">
          <span class="duration text-white text-xs bg-black/60 px-2 py-1 rounded">00:00</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex space-x-3">
            <button class="rewind control-btn text-white"><i class="fas fa-undo"></i></button>
            <button class="play-pause control-btn text-white"><i class="fas fa-play"></i></button>
            <button class="forward control-btn text-white"><i class="fas fa-redo"></i></button>
          </div>
          <div class="flex space-x-3">
            <button class="mute control-btn text-white"><i class="fas fa-volume-up"></i></button>
            <button class="fullscreen control-btn text-white"><i class="fas fa-expand"></i></button>
          </div>
        </div>
      </div>`;
  }

  cacheElements() {
    this.video = this.container.querySelector('video');
    this.playPauseBtn = this.container.querySelector('.play-pause');
    this.rewindBtn = this.container.querySelector('.rewind');
    this.forwardBtn = this.container.querySelector('.forward');
    this.progress = this.container.querySelector('.progress');
    this.currentTimeEl = this.container.querySelector('.current-time');
    this.durationEl = this.container.querySelector('.duration');
    this.muteBtn = this.container.querySelector('.mute');
    this.fullscreenBtn = this.container.querySelector('.fullscreen');
    this.seekIndicator = this.container.querySelector('.seek-indicator');
    this.loader = this.container.querySelector('.loader');
    this.controls = this.container.querySelector('.video-controls');
  }

  initVideo() {
    this.loader.classList.remove('hidden');

    if (window.Hls && Hls.isSupported()) {
      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }
      
      this.hls = new Hls(this.hlsConfig);
      this.hls.loadSource(this.videoSrc);
      this.hls.attachMedia(this.video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, this._onManifestParsed);
    } else if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
      this.video.src = this.videoSrc;
      this.video.addEventListener('loadedmetadata', this._onLoadedMetadata);
    }

    this.video.addEventListener('error', this._onVideoError);
  }

  // HLS manifest parsed event handler
  _onManifestParsed() {
    this.loader.classList.add('hidden');
    this.updateTimeDisplay();
    this.setReady();
  }

  // Loaded metadata event handler
  _onLoadedMetadata() {
    this.loader.classList.add('hidden');
    this.updateTimeDisplay();
    this.setReady();
  }

  // Video error event handler
  _onVideoError() {
    this.loader.classList.add('hidden');
    console.error('Video yüklenirken hata oluştu.');
  }

  setReady() {
    this.isReady = true;
    if (this.container) {
      this.container.dispatchEvent(new CustomEvent('playerReady', { detail: this }));
    }
  }

  destroy() {
    // HLS event listener'larını temizle
    if (this.hls) {
      this.hls.off(Hls.Events.MANIFEST_PARSED, this._onManifestParsed);
      this.hls.destroy();
      this.hls = null;
    }

    // Video event listener'larını temizle
    if (this.video) {
      this.video.removeEventListener('loadedmetadata', this._onLoadedMetadata);
      this.video.removeEventListener('error', this._onVideoError);
      this.video.pause();
      this.video.src = '';
      this.video.removeAttribute('src');
      this.video.load();
    }

    // Diğer event listener'ları temizle
    this.removeEventListeners();

    if (this.controlsTimer) {
      clearTimeout(this.controlsTimer);
      this.controlsTimer = null;
    }

    if (this.container.tenmaInstance) {
      delete this.container.tenmaInstance;
    }
  }

  setSource(newSrc) {
    this.destroy();
    this.videoSrc = newSrc;
    this.createPlayerHTML();
    this.cacheElements();
    this.initVideo();
    this.setupEventListeners();
    this.setupDragToSeek();
    this.setupDoubleTapSeek();
    this.showControls();
  }

  removeEventListeners() {
    for (const [element, events] of this.boundEventListeners) {
      for (const [event, handler] of events) {
        element.removeEventListener(event, handler);
      }
    }
    this.boundEventListeners.clear();
  }

  addEventListener(element, event, handler) {
    if (!this.boundEventListeners.has(element)) {
      this.boundEventListeners.set(element, new Map());
    }
    this.boundEventListeners.get(element).set(event, handler);
    element.addEventListener(event, handler);
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play().then(() => {
        this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }).catch(error => {
        console.error('Oynatma hatası:', error);
      });
    } else {
      this.video.pause();
      this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    this.showControls();
  }

  rewind() {
    this.video.currentTime = Math.max(0, this.video.currentTime - 10);
    this.showSeekIndicator(-10);
    this.showControls();
  }

  forward() {
    this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 10);
    this.showSeekIndicator(10);
    this.showControls();
  }

  updateProgress() {
    if (!this.isSeeking) {
      const value = (this.video.currentTime / this.video.duration) * 100;
      this.progress.value = value || 0;
      this.updateTimeDisplay();
    }
  }

  seekVideo() {
    const time = this.video.duration * (this.progress.value / 100);
    this.video.currentTime = time;
    this.updateTimeDisplay();
  }

  seekRelative(seconds) {
    this.video.currentTime = Math.max(0, Math.min(this.video.duration, this.video.currentTime + seconds));
    this.showSeekIndicator(seconds);
    this.showControls();
  }

  updateTimeDisplay() {
    this.currentTimeEl.textContent = this.formatTime(this.video.currentTime);
    this.durationEl.textContent = this.formatTime(this.video.duration || 0);
  }

  formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  toggleMute() {
    this.video.muted = !this.video.muted;
    this.muteBtn.innerHTML = this.video.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
    this.showControls();
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (this.container.requestFullscreen) this.container.requestFullscreen();
      else if (this.container.webkitRequestFullscreen) this.container.webkitRequestFullscreen();
      else if (this.container.msRequestFullscreen) this.container.msRequestFullscreen();
      this.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      this.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
    this.showControls(true);
  }

  showSeekIndicator(seconds) {
    this.seekIndicator.classList.remove('hidden');
    this.seekIndicator.textContent = `${seconds > 0 ? '+' : ''}${seconds}s`;
    setTimeout(() => this.seekIndicator.classList.add('hidden'), 1000);
  }

  showControls(force = false) {
    this.controls.classList.remove('hidden');
    if (this.controlsTimer) clearTimeout(this.controlsTimer);
    if (!force && !this.video.paused) {
      this.controlsTimer = setTimeout(() => {
        this.controls.classList.add('hidden');
      }, this.autoHideDelay);
    }
  }

  setupDragToSeek() {
    const touchStartHandler = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.startTime = this.video.currentTime;
        this.showControls(true);
      }
    };

    const touchMoveHandler = (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.startX;
      const sensitivity = this.video.duration / (window.innerWidth * 1);
      const newTime = this.startTime + deltaX * sensitivity;
      this.video.currentTime = Math.max(0, Math.min(this.video.duration, newTime));
      this.showSeekIndicator((newTime - this.startTime).toFixed(1));
      this.updateProgress();
    };

    const touchEndHandler = () => {
      this.isDragging = false;
      this.seekIndicator.classList.add('hidden');
      this.showControls();
    };

    this.addEventListener(this.video, 'touchstart', touchStartHandler);
    this.addEventListener(this.video, 'touchmove', touchMoveHandler);
    this.addEventListener(this.video, 'touchend', touchEndHandler);
  }

  setupDoubleTapSeek() {
    let lastTap = 0;

    const clickHandler = (e) => {
      const now = Date.now();
      if (now - lastTap < 300) {
        const rect = this.video.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width / 3) {
          this.rewind();
        } else if (x > (rect.width * 2 / 3)) {
          this.forward();
        } else {
          this.togglePlay();
        }
      }
      lastTap = now;
    };

    const touchEndHandler = (e) => {
      const now = Date.now();
      if (now - lastTap < 300) {
        const rect = this.video.getBoundingClientRect();
        const x = e.changedTouches[0].clientX - rect.left;
        if (x < rect.width / 3) {
          this.rewind();
        } else if (x > (rect.width * 2 / 3)) {
          this.forward();
        } else {
          this.togglePlay();
        }
      }
      lastTap = now;
    };

    this.addEventListener(this.video, 'click', clickHandler);
    this.addEventListener(this.video, 'touchend', touchEndHandler);
  }

  setupEventListeners() {
    this.addEventListener(this.video, 'timeupdate', () => this.updateProgress());
    this.addEventListener(this.video, 'play', () => {
      this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      this.showControls();
    });
    this.addEventListener(this.video, 'pause', () => {
      this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      this.showControls();
    });

    this.addEventListener(this.playPauseBtn, 'click', () => this.togglePlay());
    this.addEventListener(this.rewindBtn, 'click', () => this.rewind());
    this.addEventListener(this.forwardBtn, 'click', () => this.forward());
    this.addEventListener(this.muteBtn, 'click', () => this.toggleMute());
    this.addEventListener(this.fullscreenBtn, 'click', () => this.toggleFullscreen());

    this.addEventListener(this.progress, 'input', () => { 
      this.isSeeking = true; 
      this.seekVideo(); 
    });
    this.addEventListener(this.progress, 'change', () => { 
      this.isSeeking = false; 
    });

    this.addEventListener(this.container, 'mousemove', () => this.showControls());
    this.addEventListener(this.container, 'touchstart', () => this.showControls());
    this.addEventListener(this.container, 'touchmove', () => this.showControls());

    this.addEventListener(document, 'fullscreenchange', () => this.showControls(true));

    this.addEventListener(document, 'keydown', (e) => {
      if (e.code === 'Space') { 
        e.preventDefault(); 
        this.togglePlay(); 
      }
      else if (e.code === 'KeyM') this.toggleMute();
      else if (e.code === 'KeyF') this.toggleFullscreen();
      else if (e.code === 'ArrowLeft') this.rewind();
      else if (e.code === 'ArrowRight') this.forward();
    });
  }
}