import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCpOlMzCuhzAKdyGxozs21fBPmSFZv5ljM",
  authDomain: "evernote-clone-22bed.firebaseapp.com",
  projectId: "evernote-clone-22bed",
  storageBucket: "evernote-clone-22bed.appspot.com",
  messagingSenderId: "439413646040",
  appId: "1:439413646040:web:4348db14c0b4b44e89edad",
  // measurementId: "G-F3YZYXRYLH"
};

firebase.initializeApp(firebaseConfig);
export default firebase;