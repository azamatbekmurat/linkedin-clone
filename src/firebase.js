import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5oAKo1q1ojOLwjXc_XP0ohceOn-wsag0",
  authDomain: "linkedin-clone-4e1a3.firebaseapp.com",
  projectId: "linkedin-clone-4e1a3",
  storageBucket: "linkedin-clone-4e1a3.appspot.com",
  messagingSenderId: "508017756363",
  appId: "1:508017756363:web:722f291600a5546875f34e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
