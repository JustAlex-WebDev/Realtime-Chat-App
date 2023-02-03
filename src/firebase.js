import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuNdxaolGVB8nXlYZ_ZYpvtmffwq3G484",
  authDomain: "realtime-chat-app-85fb6.firebaseapp.com",
  projectId: "realtime-chat-app-85fb6",
  storageBucket: "realtime-chat-app-85fb6.appspot.com",
  messagingSenderId: "780423609241",
  appId: "1:780423609241:web:644eac0268ac34018b7108",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
