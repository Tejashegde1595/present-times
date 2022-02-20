import firebase from 'firebase';
export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyC4mWu5tfRBYbRvY9BLd9Hgit2VBPUgqCs",
        authDomain: "news-delivery-service-dffe0.firebaseapp.com",
        projectId: "news-delivery-service-dffe0",
        storageBucket: "news-delivery-service-dffe0.appspot.com",
        messagingSenderId: "573315736596",
        appId: "1:573315736596:web:8c89fc9461108587317301",
        measurementId: "G-2F2B8PZ3K3",
    });
  }

  export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Your token is:', token);
      var database = firebase.database().ref("/users")
      database.push({
        name : CreateGuid(),
        token : token,
      }).catch(alert);
      return token;
    } catch (error) {
      console.error(error);
    }
  }

  function CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }  