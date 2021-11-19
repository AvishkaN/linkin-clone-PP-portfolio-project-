// import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
// import { getFirestore } from "firebase/firestore"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from 'firebase/firebase-auth';


const firebaseConfig = {
    apiKey: "AIzaSyD1PMa1W1sfSMZksdvTvB5FPPhpdwIkyiw",
    authDomain: "linkind-46d7c.firebaseapp.com",
    projectId: "linkind-46d7c",
    storageBucket: "linkind-46d7c.appspot.com",
    messagingSenderId: "1078889905559",
    appId: "1:1078889905559:web:c51932fe102edfcc4518d2"
  };


const app =firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {db,auth};
// export {createUserWithEmailAndPassword,getAuth};

