// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdk8O4JdpdpL6jhjttFBEuhfnh1UIss48",
  authDomain: "netflixgpt-9e16a.firebaseapp.com",
  projectId: "netflixgpt-9e16a",
  storageBucket: "netflixgpt-9e16a.appspot.com",
  messagingSenderId: "383494930504",
  appId: "1:383494930504:web:2f2dd4558221977295187d",
  measurementId: "G-P22NG7T7FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
