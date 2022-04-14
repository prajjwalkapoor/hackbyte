import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkpvdPXemp2WaR6kYf8YHu08-Jfe_glIA",
  authDomain: "hackbyte-7a18b.firebaseapp.com",
  projectId: "hackbyte-7a18b",
  storageBucket: "hackbyte-7a18b.appspot.com",
  messagingSenderId: "354459082557",
  appId: "1:354459082557:web:6b3535c22a3e3f83b22f54",
  measurementId: "G-21LMNRCQZX",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db, storage };
