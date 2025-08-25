# Tenma Video Player

## English

### Project Overview
Tenma is a modern, responsive video player web application that supports multiple video sources. It features a clean user interface, PWA capabilities, and advanced video playback controls.

### Features
- 🎬 Modern video player with HLS support  
- 🌐 Multiple CORS proxy options for accessing content  
- 📱 Responsive design and PWA support  
- 🔍 Search functionality across video sources  
- ❤️ Favorites and watch history  
- ⚙️ Customizable settings (theme, language, proxies)  
- 🌙 Dark/Light theme support  
- 🔒 Age verification system  
- 📖 Multi-language support (English/Turkish)  

### Installation & Setup
1. Clone or download the project files  
2. Serve the files through a web server (due to CORS restrictions)  
3. Open **index.html** in a browser  

### Usage
1. Select your preferred language on first launch  
2. Confirm you're 18+ to access adult content  
3. Configure CORS proxy and User Agent in settings for optimal performance  
4. Browse videos, add to favorites, or search for content  
5. Enjoy watching with the custom video player  

### File Structure

├── index.html          # Main application file ├── manifest.json       # PWA manifest ├── script.js           # Main application logic ├── style.css           # Custom styles 
├── sw.js               # Service worker 
└── TenmaPlayer.js      # Custom video player implementation

### Technologies Used
- HTML5, CSS3, JavaScript (ES6+)  
- Tailwind CSS for styling  
- HLS.js for video streaming  
- Font Awesome icons  
- Intersection Observer API for lazy loading  
- LocalStorage for data persistence  

### Browser Support
Works best on modern browsers with ES6 support.  
For iOS, falls back to native video player.  
