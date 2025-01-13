import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyABvr1KEdqjesm_rK20twr8__YVTbKgzAs",
  authDomain: "topspractice.firebaseapp.com",
  projectId: "topspractice",
  storageBucket: "topspractice.firebasestorage.app",
  messagingSenderId: "105554815493",
  appId: "1:105554815493:web:094427e4b0768a18e48a6c",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth()