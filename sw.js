self.addEventListener('notificationclick', (event) => { 
    event.notification.close();
    clients.openWindow("https://picsum.photos/500/500");
});