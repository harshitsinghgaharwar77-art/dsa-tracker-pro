// Bump this version any time index.html/style.css/script.js change,
// otherwise installed users can get stuck on a stale cached copy.
const CACHE = 'lb-dsa-v37';
const APP_SHELL = ['./index.html', './style.css', './script.js', './manifest.json', './firebase-config.js'];
const ASSETS = [
  './',
  ...APP_SHELL,
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js'
];

// Cloud Sync (Firebase Auth popups + Firestore's live connection) must
// reach the network directly — never intercept/cache these, or sign-in
// and syncing can silently break.
const BYPASS_HOSTS = ['googleapis.com', 'google.com', 'firebaseapp.com', 'firebaseio.com'];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy:
//  - App shell (HTML/CSS/JS): network-first, so a new deploy is picked up
//    immediately instead of being stuck behind an old cached copy. Falls
//    back to cache when offline.
//  - Everything else (fonts, icons): cache-first for speed.
// NOTE: this only affects the app's *code*. Your saved progress lives in
// IndexedDB/localStorage, which this service worker never touches.
self.addEventListener('fetch', e => {
  // Never touch non-GET requests (Firestore's channel uses POST) or
  // calls to Firebase Auth / Firestore themselves — let those go
  // straight to the network untouched, or sign-in and sync can break
  // in subtle ways.
  if (e.request.method !== 'GET') return;
  if (BYPASS_HOSTS.some(host => new URL(e.request.url).hostname.endsWith(host))) return;

  const isAppShell = APP_SHELL.some(path => e.request.url.endsWith(path.replace('./', '/'))) ||
                      e.request.mode === 'navigate';

  if (isAppShell) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
