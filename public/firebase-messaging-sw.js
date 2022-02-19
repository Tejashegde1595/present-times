importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyC4mWu5tfRBYbRvY9BLd9Hgit2VBPUgqCs",
    authDomain: "news-delivery-service-dffe0.firebaseapp.com",
    projectId: "news-delivery-service-dffe0",
    storageBucket: "news-delivery-service-dffe0.appspot.com",
    messagingSenderId: "573315736596",
    appId: "1:573315736596:web:8c89fc9461108587317301",
    measurementId: "G-2F2B8PZ3K3"
});
const messaging = firebase.messaging();