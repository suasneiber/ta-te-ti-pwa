if('serviceWorker'in navigator){
    navigator.serviceWorker.register('../serviceworker.js')
    .then((reg) =>console.log(" service Worker Registrado",reg))
    .catch((err) =>console.log ("Service Worker No registrado. :(",err));
    console.log("hola");
}