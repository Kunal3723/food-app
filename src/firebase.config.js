import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCg_VqQ-LHV4cUN1lGGgJW108KKKTjlTCk",
    authDomain: "food-app-aa26d.firebaseapp.com",
    databaseURL: "https://food-app-aa26d-default-rtdb.firebaseio.com",
    projectId: "food-app-aa26d",
    storageBucket: "food-app-aa26d.appspot.com",
    messagingSenderId: "602157805675",
    appId: "1:602157805675:web:7b6d81aa887f919cc8812e",
    measurementId: "G-J0H40L5KM4"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };