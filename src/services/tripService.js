// src/services/tripService.js
import { db } from '../firebase'; 
import { collection, getDocs, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';

// 舊的 lobbyConfig 僅作為備用
const lobbyConfig = [
  { id: 'hokkaido_2026', icon: '🗻', status: 'upcoming' },
  { id: 'nagoya_2026', icon: '🏯', status: 'completed' },
  { id: 'hokkaido_2025', icon: '🪻', status: 'completed' }
];

/**
 * 從 Firebase 獲取所有行程資料並排序
 */
export const fetchTripsFromFirebase = async () => {
  const querySnapshot = await getDocs(collection(db, 'trips'));
  const firebaseTrips = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data() || {};
    const oldConfig = lobbyConfig.find(c => c.id === doc.id);
    
    firebaseTrips.push({ 
      id: doc.id, 
      data: data, 
      icon: data.metadata?.icon || oldConfig?.icon || '📓', 
      status: data.metadata?.status || oldConfig?.status || 'completed', 
      createdAt: data.metadata?.createdAt || 0 
    });
  });
  
  // 日期排序邏輯
  firebaseTrips.sort((a, b) => {
    const dateStrA = a.data.metadata?.dates || "";
    const dateStrB = b.data.metadata?.dates || "";
    const matchA = typeof dateStrA === 'string' ? dateStrA.match(/\d{4}[-/]\d{2}[-/]\d{2}/) : null;
    const matchB = typeof dateStrB === 'string' ? dateStrB.match(/\d{4}[-/]\d{2}[-/]\d{2}/) : null;
    
    const timeA = matchA ? new Date(matchA[0].replace(/-/g, '/')).getTime() : (Number(a.createdAt) || 0);
    const timeB = matchB ? new Date(matchB[0].replace(/-/g, '/')).getTime() : (Number(b.createdAt) || 0);
    
    return timeB - timeA; 
  });
  
  return firebaseTrips;
};

/**
 * 獲取即時日幣匯率
 */
export const fetchExchangeRate = async () => {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/JPY');
    const data = await response.json();
    if (data && data.rates && data.rates.TWD) {
      return data.rates.TWD;
    }
  } catch (error) { 
    console.error('匯率抓取失敗:', error); 
    return null;
  }
};

/**
 * 儲存（更新）一筆行程資料到 Firebase
 */
export const saveTrip = async (tripId, data) => {
  await updateDoc(doc(db, 'trips', tripId), data);
};

/**
 * 在 Firebase 中建立一筆新的行程資料
 */
export const createTrip = async (tripId, newTripData) => {
  await setDoc(doc(db, 'trips', tripId), newTripData);
};

/**
 * 從 Firebase 刪除一筆行程資料
 */
export const deleteTrip = async (tripId) => {
  await deleteDoc(doc(db, 'trips', tripId));
};
