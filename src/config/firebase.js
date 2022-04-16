import firebase, { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkpvdPXemp2WaR6kYf8YHu08-Jfe_glIA",
  authDomain: "hackbyte-7a18b.firebaseapp.com",
  projectId: "hackbyte-7a18b",
  storageBucket: "hackbyte-7a18b.appspot.com",
  messagingSenderId: "354459082557",
  appId: "1:354459082557:web:6b3535c22a3e3f83b22f54",
  measurementId: "G-21LMNRCQZX",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)
export const db = getFirestore(app);