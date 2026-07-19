// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 新增這行，引入資料庫功能

// 您的專屬 Firebase 金鑰
const firebaseConfig = {
  apiKey: "AIzaSyDPP9S5TtEhxhMpBe5qZzOeC8EguBPH-PU",
  authDomain: "travel6826.firebaseapp.com",
  projectId: "travel6826",
  storageBucket: "travel6826.firebasestorage.app",
  messagingSenderId: "509914930004",
  appId: "1:509914930004:web:7b77e74f56f860aa74c6c1"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 啟動並匯出 Firestore 資料庫，讓其他頁面可以使用
export const db = getFirestore(app);