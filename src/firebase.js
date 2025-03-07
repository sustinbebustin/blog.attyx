// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQrMPZayXyXbaoFkiQL203rx5TCgnmO3Q",
  authDomain: "blog-b2c21.firebaseapp.com",
  projectId: "blog-b2c21",
  storageBucket: "blog-b2c21.appspot.com",
  messagingSenderId: "600495405522",
  appId: "1:600495405522:web:8e7a13d3d4fbfbcbd6f00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
