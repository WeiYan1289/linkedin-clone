// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyC9Fi-TpR-qBCFgIM5jX7rZW4Jj3r96Mf0",
    authDomain: "linkedin-clone-45d6a.firebaseapp.com",
    projectId: "linkedin-clone-45d6a",
    storageBucket: "linkedin-clone-45d6a.appspot.com",
    messagingSenderId: "11782882673",
    appId: "1:11782882673:web:9f254d13b9ab77d9ca22d0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);