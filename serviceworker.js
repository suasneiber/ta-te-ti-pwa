///Instalar el serviceWorker
self.addEventListener("install",evt =>{
    console.log("el service Worker se Instaló");
});

///activar ek service worker
self.addEventListener("activate", evt=>{
    console.log("El service worker se activó");});