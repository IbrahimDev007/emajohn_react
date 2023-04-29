// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJdOPQKYl9YrtiQVOcjyaD63_am9312Og",
    authDomain: "emajohn-with-firebase.firebaseapp.com",
    projectId: "emajohn-with-firebase",
    storageBucket: "emajohn-with-firebase.appspot.com",
    messagingSenderId: "582953917706",
    appId: "1:582953917706:web:4ac617199bc34b3a7a2ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;