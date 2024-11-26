// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQxFpaxh-TVgiQnFrqtLFaNND6q3Vqsn8",
  authDomain: "netflixgpt-3f198.firebaseapp.com",
  projectId: "netflixgpt-3f198",
  storageBucket: "netflixgpt-3f198.firebasestorage.app",
  messagingSenderId: "27813271546",
  appId: "1:27813271546:web:247b198940f2a9c07a3643",
  measurementId: "G-HLS18RWQKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
