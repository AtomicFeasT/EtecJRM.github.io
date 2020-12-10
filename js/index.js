if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../serviceWorker.js").then(registration => {
        console.log("service worker registrado")
        console.log(registration)
    }).catch(error => {
        console.log("service worker falhou")
        console.log(error)
    })
}