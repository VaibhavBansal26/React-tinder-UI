import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsLKGw4BRu_VmR4AsG9Dq1lAE_vz_WAk0",
    authDomain: "tinder-match.firebaseapp.com",
    databaseURL: "https://tinder-match.firebaseio.com",
    projectId: "tinder-match",
    storageBucket: "tinder-match.appspot.com",
    messagingSenderId: "241118039120",
    appId: "1:241118039120:web:744811140ff6a7cb0e9555",
    measurementId: "G-9RXDN2MMRT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;

