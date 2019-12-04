const NombreCache="sitio-Cache";
const elementos=["/","/index.html","/css/css.css","/js/accio.js"];
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
    console.log("El service worker se activó");});

///eventos fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch",evt=>{
    console.log("Se atrapo el evento: ",evt);
    
});