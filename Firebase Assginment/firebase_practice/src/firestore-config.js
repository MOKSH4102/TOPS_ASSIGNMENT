// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABvr1KEdqjesm_rK20twr8__YVTbKgzAs",
  authDomain: "topspractice.firebaseapp.com",
  projectId: "topspractice",
  storageBucket: "topspractice.firebasestorage.app",
  messagingSenderId: "105554815493",
  appId: "1:105554815493:web:094427e4b0768a18e48a6c",
  
};

// Initialize Firebase
 const applicaton = initializeApp(firebaseConfig);
 export const db = getFirestore(applicaton);