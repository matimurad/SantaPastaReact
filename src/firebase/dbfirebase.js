import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyACAm-loIC-xrYucYuxW_8yJ2IOoknUUck",
  authDomain: "santapasta-6cecc.firebaseapp.com",
  projectId: "santapasta-6cecc",
  storageBucket: "santapasta-6cecc.appspot.com",
  messagingSenderId: "659892043326",
  appId: "1:659892043326:web:e5a23e62b8674d59ce1b6f"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore (app)

export default db
