self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(
                [
                    "./",
                    "./css/index.css",
                    "./css/propsito.css",
                    "./recursos/images/favicon/etecFavicon-128px.png",
                    "./recursos/images/favicon/etecFavicon-144px.png",
                    "./recursos/images/favicon/etecFavicon-152px.png",
                    "./recursos/images/favicon/etecFavicon-192px.png",
                    "./recursos/images/favicon/etecFavicon-384px.png",
                    "./recursos/images/favicon/etecFavicon-512px.png",
                    "./recursos/images/background-images/etecjrm.jpg",
                    "./recursos/images/background-images/etecjrm2.jpg",
                    "./recursos/svg/etec.svg"
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