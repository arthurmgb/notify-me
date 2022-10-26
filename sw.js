self.addEventListener('notificationclick', (event) => { 
    event.notification.close();
    clients.openWindow('/pages/result.html');
});
self.addEventListener('install', event => {
    self.skipWaiting();
});