

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');


firebase.initializeApp({
    apiKey: "AIzaSyB0B0CRjE34_yDdz6Qp3QnlzLAohJMEKhs",
    authDomain: "lingosetu-ai.firebaseapp.com",
    projectId: "lingosetu-ai",
    messagingSenderId: "90276385046",
    appId: "1:90276385046:web:38a555be63338418054037",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('📱 Background Message Received:', payload);

    const notificationTitle = payload.notification?.title || 'LingoSetu Update';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new alert',
        icon: '/logo192.png', // Check karein ye file public folder mein ho
        badge: '/logo192.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});