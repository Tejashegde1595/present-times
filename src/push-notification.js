import firebase from 'firebase';
export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyC4mWu5tfRBYbRvY9BLd9Hgit2VBPUgqCs",
        authDomain: "news-delivery-service-dffe0.firebaseapp.com",
        projectId: "news-delivery-service-dffe0",
        storageBucket: "news-delivery-service-dffe0.appspot.com",
        messagingSenderId: "573315736596",
        appId: "1:573315736596:web:8c89fc9461108587317301",
        measurementId: "G-2F2B8PZ3K3"
    });
  }

  export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Your token is:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }