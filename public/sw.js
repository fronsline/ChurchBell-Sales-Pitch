const CACHE_NAME = 'churchbell-demo-v1';

// Install — cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/images/logo-color.png',
        '/images/login-bg.jpg',
        '/fonts/Montserrat-Regular.ttf',
        '/fonts/Montserrat-Medium.ttf',
        '/fonts/Montserrat-Bold.ttf',
        '/fonts/Montserrat-Light.ttf',
        '/images/ai/old-ledgers.jpg',
        '/images/ai/church-bell.jpg',
        '/images/ai/modern-dashboard.jpg',
        '/images/ai/mobile-app.jpg',
        '/images/ai/people-bg.jpg',
        '/images/ai/finance-bg.jpg',
        '/images/ai/records-bg.jpg',
        '/images/ai/reports-bg.jpg',
        '/images/screenshots/mobile-dashboard.png',
      ]);
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Update cache with fresh response
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
