// player.js
let hls = null;

function cleanUrl(url) {
    if (!url) return url;
    return url.replace(/\\\//g, '/').replace(/^https:\\\/\\\//, 'https://');
}

async function playVideo(url) {
    const modal = document.getElementById('player-modal');
    const videoPlayer = document.getElementById('video-player');
    const playerControls = document.querySelector('.player-controls');

    // Reset existing HLS instance
    if (hls) {
        hls.destroy();
        hls = null;
    }

    try {
        const response = await corsFetch(url, {
            headers: {
                'Accept': 'application/text'
            }
        });
        const html = await response.text();
        const match = html.match(/"url":"(.*?)"/);
        if (!match) throw new Error(getTranslation('videoUrlNotFound'));

        const videoUrl = cleanUrl(match[1]);
        console.log('Fetched video URL:', videoUrl); // Debug the URL

        // Initialize HLS.js if supported and URL is .m3u8
        if (videoUrl.endsWith('.m3u8') && Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                initializePlayer(videoPlayer, playerControls);
                modal.style.display = 'flex';
                playerControls.classList.remove('hide');
            });
            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS Error:', data);
            });
        } else if (videoUrl.endsWith('.m3u8') && videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = videoUrl;
            initializePlayer(videoPlayer, playerControls);
            modal.style.display = 'flex';
            playerControls.classList.remove('hide');
        } else {
            videoPlayer.src = videoUrl;
            initializePlayer(videoPlayer, playerControls);
            modal.style.display = 'flex';
            playerControls.classList.remove('hide');
        }

    } catch (error) {
        console.error(error);
        closePlayer();
    }
}

function initializePlayer(videoPlayer, playerControls) {
    videoPlayer.play();
    updatePlayPauseButton();

    // Toggle controls visibility on video click
    videoPlayer.addEventListener('click', toggleControls);
    videoPlayer.addEventListener('play', updatePlayPauseButton);
    videoPlayer.addEventListener('pause', updatePlayPauseButton);
}

function togglePlay() {
    const videoPlayer = document.getElementById('video-player');
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

function updatePlayPauseButton() {
    const playPauseBtn = document.querySelector('.play-pause');
    if (!playPauseBtn) return;
    if (document.getElementById('video-player').paused) {
        playPauseBtn.classList.remove('playing');
    } else {
        playPauseBtn.classList.add('playing');
    }
}

function skipVideo(seconds) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.currentTime += seconds;
}

function toggleControls() {
    const playerControls = document.querySelector('.player-controls');
    playerControls.classList.toggle('hide');
}

function closePlayer() {
    const modal = document.getElementById('player-modal');
    const videoPlayer = document.getElementById('video-player');
    const playerControls = document.querySelector('.player-controls');

    if (hls) {
        hls.destroy();
        hls = null;
    }
    videoPlayer.pause();
    videoPlayer.src = '';
    videoPlayer.removeEventListener('click', toggleControls);
    videoPlayer.removeEventListener('play', updatePlayPauseButton);
    videoPlayer.removeEventListener('pause', updatePlayPauseButton);

    modal.style.display = 'none';
    playerControls.classList.remove('hide');
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds <= 0) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}