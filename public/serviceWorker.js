let CACHE_STATIC = 'static';
let CACHE_DYNAMIC = 'dynamic';
const urlsToCache = [
'/',
'/index.html'
];
self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_STATIC).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});


self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request).then((res)=>{
        return caches.open(CACHE_DYNAMIC).then((cache)=>{
            cache.put(event.request.url,res.clone());
            return res;
        })
    }).catch(function(err){
        return caches.match(event.request);
    })
    )
});