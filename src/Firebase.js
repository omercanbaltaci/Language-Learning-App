import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyCZM9O98to8Fm9Wz_i3TrOcebDbpCO2B5M",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;
