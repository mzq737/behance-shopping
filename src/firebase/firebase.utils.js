import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBHYDE_m6eWNxQ5KvD1zkuCsclGIg45grU",
  authDomain: "behance-shopping.firebaseapp.com",
  databaseURL: "https://behance-shopping.firebaseio.com",
  projectId: "behance-shopping",
  storageBucket: "behance-shopping.appspot.com",
  messagingSenderId: "519786914399",
  appId: "1:519786914399:web:02a1338409eb6db23d31ea",
  measurementId: "G-S804WVPW94"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef= firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;