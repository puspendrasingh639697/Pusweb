// config.js

// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging"; // 1. Check karein ye import hai

const firebaseConfig = {
  apiKey: "AIzaSyB0B0CRjE34_yDdz6Qp3QnlzLAohJMEKhs",
  authDomain: "lingosetu-ai.firebaseapp.com",
  projectId: "lingosetu-ai",
  storageBucket: "lingosetu-ai.firebasestorage.app",
  messagingSenderId: "90276385046",
  appId: "1:90276385046:web:38a555be63338418054037",
  measurementId: "G-6NFWVGYVWK"
};

const app = initializeApp(firebaseConfig);

// 🚨 Sabse Zaroori: Sabke pehle 'export' likhna hai
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const messaging = getMessaging(app); // 2. Yahan 'export' lagayein

export default app;