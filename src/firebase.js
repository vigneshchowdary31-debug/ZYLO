import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9SoVInZ3ErWkeKawrpAXSdX2dySe6ssw",
  authDomain: "zylo-admin.firebaseapp.com",
  projectId: "zylo-admin",
  storageBucket: "zylo-admin.firebasestorage.app",
  messagingSenderId: "198823334864",
  appId: "1:198823334864:web:3177323b715a3d0e01dfd5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);