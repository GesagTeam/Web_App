// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYuhxV8G-Zn5dijJbUoGW01ADG5onaolg",
  authDomain: "android-cdb13.firebaseapp.com",
  projectId: "android-cdb13",
  storageBucket: "android-cdb13.appspot.com",
  messagingSenderId: "453099142276",
  appId:"1:453099142276:android:819a063ef4ab93f303d6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
