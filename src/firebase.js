// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYuhxV8G-Zn5dijJbUoGW01ADG5onaolg",
  authDomain: "android-cdb13.firebaseapp.com",
  projectId: "android-cdb13",
  storageBucket: "android-cdb13.appspot.com",
  messagingSenderId: "453099142276",
  appId: "1:453099142276:android:819a063ef4ab93sf303d6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Export the auth and db objects for use in other files
export { auth, db };
