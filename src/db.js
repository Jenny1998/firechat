import firebase from "firebase/app";
import "firebase/database";
const config = {
  // API KEYS
  apiKey: "AIzaSyBKPZQJNhvVp0ch3aRDvVWig9P0J8IVyGU",
  authDomain: "turtlechat-14427.firebaseapp.com",
  databaseURL:
    "https://turtlechat-14427-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "turtlechat-14427",
  storageBucket: "turtlechat-14427.appspot.com",
  messagingSenderId: "166594621661",
  appId: "1:166594621661:web:c38f682bb8f490c664ab34",
};
const db = firebase.initializeApp(config);
export default db;
