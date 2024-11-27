import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCwgq8tPGXav78rX5WyhWlYV_Qx053a8tI",
  authDomain: "finanace-manager-49f27.firebaseapp.com",
  projectId: "finanace-manager-49f27",
  storageBucket: "finanace-manager-49f27.firebasestorage.app",
  messagingSenderId: "903797657796",
  appId: "1:903797657796:web:c97ca92961ed6f6f4c3991",
  measurementId: "G-L8TPVFVR11"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };