import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyCZM9O98to8Fm9Wz_i3TrOcebDbpCO2B5M",
  //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain: "language-learning-app-b1bf7.firebaseapp.com",
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId: "language-learning-app-b1bf7",
  //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket: "language-learning-app-b1bf7.appspot.com",
  //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  messagingSenderId: "10166059104",
  //appId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId: "1:10166059104:web:f8ff1252ec1bd715a14305",
  //measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  measurementId: "G-0222042TMJ",
});

export const auth = app.auth();
export default app;
