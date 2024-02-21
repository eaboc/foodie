// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ1JOvQaRbp9GP6g9BRjCGWD36CLXoiAo",
  authDomain: "foodie-callatis.firebaseapp.com",
  projectId: "foodie-callatis",
  storageBucket: "foodie-callatis.appspot.com",
  messagingSenderId: "41108285264",
  appId: "1:41108285264:web:e264dd193fda716a242e55",
  measurementId: "G-38NVGYENPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
