const NombreCache="sitio-cache";
const dinamicoCache="sitio-dinamico-v1";
const elementos=["/","/index.html","/css/css.css","/js/accio.js","manifest.json","fallback.html"];

//Funcion para limitar el cache
const limiteCache= (nombre,tamaño)=>{
    caches.open(nombre).then(cache => {
        cache.keys().then(keys =>{
            if(keys.length > tamaño){
                cache.delete(keys[0]).then(limiteCache(nombre,tamaño));
            }
        })
    })
}
///Instalar el serviceWorker
self.addEventListener("install",evt =>{
    ///console.log("el service Worker se Instaló");

    evt.waitUntil(
        caches.open(NombreCache).then((cache)=>{
            console.log("definimos el cache Predeterminado");
            cache.addAll(elementos);
        }
        )
    )
});

///activar ek service worker
self.addEventListener("activate", evt=>{
    //console.log("El service worker se activó");});
    //3ro chequeamos la version del cache, borramos la version obsoleta.
    evt.waitUntil(
        caches.keys().then(keys =>{
            console.log(keys);
            return Promise.all(keys
                .filter(key => key !== nombreCache && key !== dinamicoCache)
                    .map(key =>caches.delete(key))
        })
    )

///eventos fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch",evt=>{
    console.log("Se atrapo el evento: ",evt);
//2do - Atrapamos los pedidos para que los busque en el cache.

    evt.respondWidth(
        caches.match(evt.request).then(cacheRes=> {
            return cacheRes || fetch(evt.request).then (fetchRes =>{
                return caches.open(dinamicoCache).then(cache => {
                    cache.put(evt.request.url.fetchRes.clone());
                    limiteCache(dinamicoCache, 5);
                    return fetchRes;
                })
            })
        }).catch(()=>{
            if(evt.request.url.inexOf(".html")> -1{
                return caches.match("fallback.html");
            })
        })
    )
    
});