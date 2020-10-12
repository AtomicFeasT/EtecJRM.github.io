self.addEventListener("install", e => {
    e.waitUntil(
        cahces.open("static").then(cache => {
            return cache.addAll(
                [
                    "./",
                    "./css/propsito.css",
                    "./Recursos/Imagens/etecFavicon-128px.png",
                    "./Recursos/Imagens/etecFavicon-144px.png",
                    "./Recursos/Imagens/etecFavicon-152px.png",
                    "./Recursos/Imagens/etecFavicon-192px.png",
                    "./Recursos/Imagens/etecFavicon-384px.png",
                    "./Recursos/Imagens/etecFavicon-512px.png",
                    "./Recursos/Imagens/EtecJRM.jpg",
                    "./Recursos/Svg/etec.svg"
                ]
            )
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})