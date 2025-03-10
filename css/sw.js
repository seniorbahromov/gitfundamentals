self.addEventListener("install", function(event) {
    console.log("Service Worker o'rnatildi!");
});

self.addEventListener("fetch", function(event) {
    console.log("So‘rov qilindi:", event.request.url);
});
