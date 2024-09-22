import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWitAXyViBLIqEnlSgVNHiqRODVH7Ywl8",
  authDomain: "blogging-app-reactjs.firebaseapp.com",
  projectId: "blogging-app-reactjs",
  storageBucket: "blogging-app-reactjs.appspot.com",
  messagingSenderId: "521158653334",
  appId: "1:521158653334:web:fa4b8e0be562e2ef9d19b7",
  measurementId: "G-KP9G783BC7"
};

// Initialize Firebase


 const app = initializeApp(firebaseConfig);
 export default app