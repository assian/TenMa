function cleanUrl(url) {
    if (!url) return url;
    return url.replace(/\\\//g, '/').replace(/^https:\\\/\\\//, 'https://');
}

async function playVideo(url) {
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
        Android.playVideo(videoUrl);
        console.log('Fetched video URL:', videoUrl); // Debug the URL
    }
}
