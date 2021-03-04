import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
   // apiKey: "AIzaSyDck2mylHO9FTXPtisI0TrDoXRCfOokWo0",      OK
   // authDomain: "and-ios-v1-miam.firebaseapp.com",          OK
   // databaseURL: "https://and-ios-v1-miam.firebaseio.com",
   // projectId: "and-ios-v1-miam",                           OK
   // storageBucket: "and-ios-v1-miam.appspot.com",           OK
   // messagingSenderId: "1035758781385",                     OK
   // appId: "1:1035758781385:web:9e24644f8da180e7841e18"     OK

    apiKey: "AIzaSyBMvQwDeFw8X1Mx6mM3b0I9eQ1PHLCdteg",
    authDomain: "app-v3-ambe.firebaseapp.com",
    projectId: "app-v3-ambe",
    storageBucket: "app-v3-ambe.appspot.com",
    messagingSenderId: "813254951969",
    appId: "1:813254951969:web:fbd0483b3155c5d1cc8f60"

  };
  
  firebase.initializeApp(firebaseConfig);




  export default firebase;