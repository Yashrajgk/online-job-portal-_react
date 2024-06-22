// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIR19SEQ5iJIaxNPxUKVKLoF2vmgiFOPY",
    authDomain: "online-job-portal-985fb.firebaseapp.com",
    projectId: "online-job-portal-985fb",
    storageBucket: "online-job-portal-985fb.appspot.com",
    messagingSenderId: "688540196909",
    appId: "1:688540196909:web:ae542731a42ab5b38898a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
