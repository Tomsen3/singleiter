var CACHE = "singleiter-v2.1";
var URLS = [
  "./",
  "index.html",
  "styles.css",
  "app.js?v=2.1",
  "sw.js",
  "manifest.json",
  "version.json",
  "core/css/tokens.css",
  "core/css/fonts.css",
  "themes/theme-modern.css",
  "themes/theme-sunrise.css",
  "themes/theme-ocean.css",
  "themes/theme-forest.css",
  "themes/theme-graphite.css",
  "themes/theme-bordeaux.css",
  "themes/themes.json",
  "assets/fonts/plus-jakarta-sans/PlusJakartaSans[wght].ttf",
  "assets/fonts/plus-jakarta-sans/PlusJakartaSans-Italic[wght].ttf",
  "assets/fonts/source-sans-3/SourceSans3[wght].ttf",
  "assets/fonts/source-sans-3/SourceSans3-Italic[wght].ttf",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(k) {
            return k !== CACHE;
          })
          .map(function(k) {
            return caches.delete(k);
          })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  if (e.request.method !== "GET") return;

  e.respondWith(
    fetch(e.request)
      .then(function(r) {
        if (r && r.ok && e.request.url.indexOf(self.location.origin) === 0) {
          var clone = null;
          try {
            clone = r.clone();
          } catch (err) {
            clone = null;
          }

          if (clone) {
            caches.open(CACHE).then(function(c) {
              return c.put(e.request, clone).catch(function() {});
            });
          }
        }
        return r;
      })
      .catch(function() {
        return caches.match(e.request).then(function(cached) {
          return cached || caches.match("index.html");
        });
      })
  );
});

self.addEventListener("message", function(e) {
  if (e.data === "skipWaiting") self.skipWaiting();
});
