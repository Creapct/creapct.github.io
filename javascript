location.href=''
location.href=''
location.href=''
{
 "name"              : "Pisuke PWA",
 "short_name"        : "PskPWA",
 "description"       : "PWAのサンプル的なの",
 "start_url"         : "/?pwa=1",
 "display"           : "standalone",
 "background_color"  : "#ff0000",
 "theme_color"       : "#ff0000",
 "icons": [{
     "src"           : "/icon-192.png",
     "sizes"         : "192x192",
     "type"          : "image/png"
   }, {
     "src"           : "/icon-256.png",
     "sizes"         : "256x256",
     "type"          : "image/png"
 }]
}

self.addEventListener('install', function(e) {
 console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
 console.log('[ServiceWorker] Activate');
});

// サービスワーカー有効化に必須
self.addEventListener('fetch', function(event) {});
if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/serviceworker.js').then(function(){
		console.log("Service Worker is registered!!");
	});
}
