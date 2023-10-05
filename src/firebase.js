import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYaio4Q14qOpdcC3jgtkvFFhqOEvPkHDA",
  authDomain: "chat-a3af1.firebaseapp.com",
  projectId: "chat-a3af1",
  storageBucket: "chat-a3af1.appspot.com",
  messagingSenderId: "703246117951",
  appId: "1:703246117951:web:4f7ab96a0764f9c47d1c8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
