// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4A-j7HPZGVsRRs4gmU2UJ1Ri7zIakrEY",
  authDomain: "universitycourse-90d07.firebaseapp.com",
  projectId: "universitycourse-90d07",
  storageBucket: "universitycourse-90d07.appspot.com",
  messagingSenderId: "304954124492",
  appId: "1:304954124492:web:3d70af7f8bdb660dfc3a69",
  measurementId: "G-4MGZZPCYFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;