import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm_TPuwpgt5zGKMMnhkZugfh7wRlAgd_U",
  authDomain: "clone-a6f91.firebaseapp.com",
  databaseURL: "https://clone-a6f91.firebaseio.com",
  projectId: "clone-a6f91",
  storageBucket: "clone-a6f91.appspot.com",
  messagingSenderId: "105050716273",
  appId: "1:105050716273:web:8f9b040943fea662da83d0",
  measurementId: "G-GQK6V55MEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
