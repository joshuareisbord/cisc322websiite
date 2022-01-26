// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIBvr1jjQVWIbOT6UQKH7b1uIkHrGYE3A",
    authDomain: "cisc322website.firebaseapp.com",
    projectId: "cisc322website",
    storageBucket: "cisc322website.appspot.com",
    messagingSenderId: "357107251684",
    appId: "1:357107251684:web:55ab9d29f0e41fb11d2ff1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

// if the enviroment is development, then we connect to our firebase emulators.
if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
}

export { firebaseConfig, app, analytics, firestore };