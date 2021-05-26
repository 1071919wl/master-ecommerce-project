//always need this to have access to firestore
import firebase from 'firebase/app';
//for the db import
import 'firebase/firestore';
//for the auth import
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC0b1O5A-IsR9wnDoPubNWtasCuJG8d9Vw",
    authDomain: "udemy-ecommerce-site.firebaseapp.com",
    projectId: "udemy-ecommerce-site",
    storageBucket: "udemy-ecommerce-site.appspot.com",
    messagingSenderId: "131565556292",
    appId: "1:131565556292:web:03223231beec593248a211",
    measurementId: "G-JEQDPW4KZK"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;