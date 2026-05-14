var CACHE = "singleiter-v2.8-install-icons";
var URLS = [
  "./",
  "index.html",
  "styles.css?v=2.8",
  "app.js?v=2.8",
  "sw.js",
  "manifest.json?v=2.8",
  "version.json",
  "core/css/tokens.css?v=2.8",
  "core/css/fonts.css?v=2.8",
  "themes/theme-modern.css?v=2.8",
  "themes/theme-sunrise.css?v=2.8",
  "themes/theme-ocean.css?v=2.8",
  "themes/theme-forest.css?v=2.8",
  "themes/theme-graphite.css?v=2.8",
  "themes/theme-bordeaux.css?v=2.8",
  "themes/themes.json?v=2.8",
  "assets/fonts/plus-jakarta-sans/PlusJakartaSans[wght].ttf",
  "assets/fonts/plus-jakarta-sans/PlusJakartaSans-Italic[wght].ttf",
  "assets/fonts/source-sans-3/SourceSans3[wght].ttf",
  "assets/fonts/source-sans-3/SourceSans3-Italic[wght].ttf",
  "assets/logo-singende-krankenhaeuser.png?v=2.8",
  "icon-192-v2.8.png",
  "icon-512-v2.8.png"
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
