// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3JT2dCIAzVbTgIeiIgR7VuqJCeZgCkQA",
  authDomain: "food-app-83d6c.firebaseapp.com",
  projectId: "food-app-83d6c",
  storageBucket: "food-app-83d6c.appspot.com",
  messagingSenderId: "818583468990",
  appId: "1:818583468990:web:d1a57f77b998811cd157ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;