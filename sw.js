const CACHE_NAME = 'hetafu-quiz-v1';
const ASSETS_TO_CACHE = [
  '/',
  './index.html',
  './style.css',
  './script.js',
  './questions.js',
  './manifest.json',
  './images/mr-bean-thumbs-up.gif',
  './images/background.png',
  './images/logo.png',
  './images/tooth1.png',
  './images/tooth.png',
  './images/1.png',
  './images/gift.png',
  './images/background910.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Install event: cache all the assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event: serve cached assets if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from the cache
        if (response) {
          return response;
        }
        // Not in cache - fetch from the network
        return fetch(event.request);
      })
  );
});