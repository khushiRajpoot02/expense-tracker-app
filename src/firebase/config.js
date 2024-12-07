// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARoFVkBkhVWZF5vQ6j7xeUetLCXi8NQt4",
  authDomain: "bachat-khata-b91bf.firebaseapp.com",
  databaseURL: "https://bachat-khata-b91bf-default-rtdb.firebaseio.com",
  projectId: "bachat-khata-b91bf",
  storageBucket: "bachat-khata-b91bf.firebasestorage.app",
  messagingSenderId: "677701570868",
  appId: "1:677701570868:web:966c1017e3b8919fa7d561",
  measurementId: "G-Q3Y8RB32GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const authentication = getAuth(app); // Initialize getAuth with app instance
export { authentication, analytics };
