importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4nqBYRE79R_rWlpE5cqClBtA_-zx4-5I",
  authDomain: "sasno-d79e1.firebaseapp.com",
  projectId: "sasno-d79e1",
  storageBucket: "sasno-d79e1.appspot.com",
  messagingSenderId: "273171190720",
  appId: "1:273171190720:web:68cc939db4a2e74c5c2e25"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("🔕 [Background] Notificación:", payload);
  const notificationTitle = payload.notification?.title || 'Alerta Sísmica';
  const notificationOptions = {
    body: payload.notification?.body || 'Evento detectado',
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
