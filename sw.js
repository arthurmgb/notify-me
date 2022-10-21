self.addEventListener('notificationclick', (event) => { 
    event.notification.close();
    clients.openWindow('/pages/result.html');
});