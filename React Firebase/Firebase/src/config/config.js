// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6xJdTMRdW5YHHcCMFDjsFJiDyYbQ02JQ",
    authDomain: "fir-ee03a.firebaseapp.com",
    databaseURL: "https://fir-ee03a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-ee03a",
    storageBucket: "fir-ee03a.appspot.com",
    messagingSenderId: "493828407072",
    appId: "1:493828407072:web:0291ee529bc79b70aba145",
    measurementId: "G-CBD8KJHDGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//BBDD
const db = getFirestore(app);
export default db;