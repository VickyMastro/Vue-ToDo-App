// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuxrQDqZxWXIsPTSQuzYWWAd-OOVdimbI",
  authDomain: "todoapp-8c3f3.firebaseapp.com",
  projectId: "todoapp-8c3f3",
  storageBucket: "todoapp-8c3f3.appspot.com",
  messagingSenderId: "509285618481",
  appId: "1:509285618481:web:2196bfedf10116cfcd9610"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();