import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAyxRJDEKLENkA9tdjiy7FR5B_vb217uJY",
    authDomain: "crwn-db-d9094.firebaseapp.com",
    projectId: "crwn-db-d9094",
    storageBucket: "crwn-db-d9094.appspot.com",
    messagingSenderId: "550329740990",
    appId: "1:550329740990:web:6cce26972c97541bcbf8ef",
    measurementId: "G-Z62CC1RBXL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;