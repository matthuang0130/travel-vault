// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { collection, getDocs, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { JAPAN_MAP_DATA } from './JapanMapData';
import JapanMapComponent from './JapanMapComponent';
// ==========================================
// 🗺️ 載入 Google Maps 套件
// ==========================================
import { GoogleMap, useJsApiLoader, Marker, Polyline, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

// ==========================================
// 🧮 距離計算引擎 (Haversine 直線距離公式)
// ==========================================
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
  const R = 6371; // 地球半徑 (公里)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
};

// ==========================================
// 📂 手帳範本註冊區 (21 個行程完整收錄)
// ==========================================
import * as templateWinter2025 from './2025winter';
import * as templateWinter2024 from './2024winter';
import * as templateMay2019 from './2019MAY';
import * as templateWinter2016 from './2016winter';
import * as templateSep2016 from './2016SEP';
import * as templateWinter2018 from './2018winter';
import * as templateSpring2017 from './2017spring';
import * as templateSep2014 from './2014sep';
import * as templateSummer2024 from './2024summer';
import * as templateWinter2023 from './2023winter'; 
import * as templateWinter2020 from './2020winter';
import * as templateAutumn2019 from './2019Autumn';
import * as templateWinter2019 from './2019winter'; 
import * as templateSpring2018 from './2018spring';
import * as templateWinter2017 from './2017winter';
import * as templateAutumn2018 from './2018autumn';
import * as templateWinter2015 from './2015winter'; 
import * as templateSpring2016 from './2016spring';
import * as templateSpring2015 from './2015spring'; 
import * as templateWinter2014 from './2014winter'; 
import * as templateAutumn2013 from './2013autumn'; 

const TEMPLATES = {
  '2025winter': templateWinter2025,
  '2024winter': templateWinter2024, 
  '2019MAY': templateMay2019, 
  '2016winter': templateWinter2016, 
  '2016SEP': templateSep2016,
  '2018winter': templateWinter2018,
  '2017spring': templateSpring2017, 
  '2014sep': templateSep2014,
  '2024summer': templateSummer2024,
  '2023winter': templateWinter2023, 
  '2020winter': templateWinter2020,
  '2019Autumn': templateAutumn2019,
  '2019winter': templateWinter2019,
  '2018spring': templateSpring2018, 
  '2017winter': templateWinter2017,
  '2018autumn': templateAutumn2018, 
  '2015winter': templateWinter2015,
  '2016spring': templateSpring2016,
  '2015spring': templateSpring2015, 
  '2014winter': templateWinter2014, 
  '2013autumn': templateAutumn2013, 
};

const lobbyConfig = [
  { id: 'hokkaido_2026', icon: '🗻', status: 'upcoming' },
  { id: 'nagoya_2026', icon: '🏯', status: 'completed' },
  { id: 'hokkaido_2025', icon: '🪻', status: 'completed' }
];

// ==========================================
// 🗺️ 地圖專屬元件 (🛡️ 毒座標防護罩升級版)
// ==========================================
const mapContainerStyle = { 
  width: '100%', 
  height: '400px', 
  borderRadius: '12px', 
  marginTop: '20px', 
  border: '1px solid #bdc3c7' 
};
const defaultCenter = { lat: 36.2048, lng: 138.2529 };

function TripMap({ schedule, isLoaded, totalDistance }) {
  const markers = React.useMemo(() => {
    const points = [];
    if (!schedule || !Array.isArray(schedule)) return points;
    
    schedule.forEach(day => {
      if(day && day.activities && Array.isArray(day.activities)) {
        day.activities.forEach(act => {
          if (act && act.lat && act.lng) {
            // 🛡️ 嚴格過濾：轉成數字，如果不是有效數字(NaN)就無情拋棄，避免死機
            const lat = Number(act.lat);
            const lng = Number(act.lng);
            if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
              points.push({ 
                lat: lat, 
                lng: lng, 
                title: act.title || '未命名景點' 
              });
            }
          }
        });
      }
    });
    return points;
  }, [schedule]);

  if (!isLoaded) return null;

  return (
    <div style={{ marginTop: '30px', marginBottom: '20px', position: 'relative' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#2c3e50', fontSize: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>
        📍 旅行軌跡地圖
      </h3>
      
      {/* 方案 D: 地圖浮動儀表板 (大於0且是有效數字才顯示) */}
      {totalDistance > 0 && !isNaN(totalDistance) && (
        <div style={{ 
          position: 'absolute', 
          top: '55px', 
          right: '10px', 
          zIndex: 10, 
          background: 'rgba(255,255,255,0.95)', 
          padding: '6px 12px', 
          borderRadius: '20px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)', 
          fontWeight: 'bold', 
          color: '#16a085', 
          fontSize: '14px', 
          border: '2px solid #1abc9c' 
        }}>
          🗺️ 軌跡總長約 {totalDistance.toFixed(1)} km
        </div>
      )}

      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        center={markers.length > 0 ? markers[0] : defaultCenter} 
        zoom={markers.length > 0 ? 9 : 5}
      >
        {markers.map((mark, i) => (
          <Marker 
            key={i} 
            position={{ lat: mark.lat, lng: mark.lng }} 
            title={mark.title} 
          />
        ))}
        {markers.length > 1 && (
          <Polyline 
            path={markers} 
            options={{ strokeColor: '#e74c3c', strokeOpacity: 0.8, strokeWeight: 4 }} 
          />
        )}
      </GoogleMap>
    </div>
  );
}

// ==========================================
// 主程式
// ==========================================
function App() {
  const [trips, setTrips] = useState([]);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(null); // null 代表顯示全部

  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [editBudget, setEditBudget] = useState(null);
  const [editMetadata, setEditMetadata] = useState(null);
  const [editSchedule, setEditSchedule] = useState(null); 
  
  const [expandedItems, setExpandedItems] = useState({});
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isAutoFilling, setIsAutoFilling] = useState(false);

  const [autocompleteRefs, setAutocompleteRefs] = useState({});
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  useEffect(() => {
    fetchTripsFromFirebase();
    fetchExchangeRate();
  }, []);

  const generateSyncedBudget = (schedule, existingBudget = { jpy: {}, twd: {} }) => {
    const cleanBudget = JSON.parse(JSON.stringify(existingBudget || { jpy: {}, twd: {} }));
    
    ['jpy', 'twd'].forEach(curr => {
      if (cleanBudget[curr]) {
        Object.keys(cleanBudget[curr]).forEach(k => {
          if (k.startsWith('sync_') || k === '📍 行程明細自動同步') {
            delete cleanBudget[curr][k];
          }
        });
      }
    });

    const syncedData = { jpy: {}, twd: {} };
    const safeSchedule = Array.isArray(schedule) ? schedule : [];

    safeSchedule.forEach(day => {
      if(day && day.activities && Array.isArray(day.activities)) {
        day.activities.forEach((act, idx) => {
          if (!act) return;
          const cost = Number(act.cost) || 0;
          if (cost > 0) {
            const curr = act.currency === 'twd' ? 'twd' : 'jpy';
            const type = act.type || 'other'; 
            const budgetKey = `sync_${type}`; 
            
            if (!syncedData[curr][budgetKey]) {
              syncedData[curr][budgetKey] = { total: 0, subItems: [] };
            }
            
            syncedData[curr][budgetKey].total += cost;
            syncedData[curr][budgetKey].subItems.push({ 
              id: `sync-${curr}-${day.day}-${idx}`, 
              name: `Day ${day.day} - ${act.title || '未命名'}`, 
              cost: cost 
            });
          }
        });
      }
    });

    ['jpy', 'twd'].forEach(curr => {
      if (Object.keys(syncedData[curr]).length > 0) {
        if (!cleanBudget[curr]) cleanBudget[curr] = {};
        Object.assign(cleanBudget[curr], syncedData[curr]);
      }
    });
    return cleanBudget;
  };

  const fetchTripsFromFirebase = async () => {
    try {
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
      
      firebaseTrips.sort((a, b) => {
        const dateStrA = a.data.metadata?.dates || "";
        const dateStrB = b.data.metadata?.dates || "";
        const matchA = typeof dateStrA === 'string' ? dateStrA.match(/\d{4}[-/]\d{2}[-/]\d{2}/) : null;
        const matchB = typeof dateStrB === 'string' ? dateStrB.match(/\d{4}[-/]\d{2}[-/]\d{2}/) : null;
        
        const timeA = matchA ? new Date(matchA[0].replace(/-/g, '/')).getTime() : (Number(a.createdAt) || 0);
        const timeB = matchB ? new Date(matchB[0].replace(/-/g, '/')).getTime() : (Number(b.createdAt) || 0);
        
        return timeB - timeA; 
      });
      
      setTrips(firebaseTrips);
    } catch (error) {
      console.error('讀取失敗！', error);
    } finally { 
      setLoading(false); 
    }
  };

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/JPY');
      const data = await response.json();
      if (data && data.rates && data.rates.TWD) {
        setExchangeRate(data.rates.TWD);
      }
    } catch (error) { 
      console.error('匯率抓取失敗:', error); 
    }
  };

  const currentTrip = trips.find(t => t.id === selectedTripId);
  const tripData = currentTrip?.data;

  const formatNumber = (num) => {
    if (num === undefined || num === null) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAdminLogin = () => {
    if (isAdmin) { 
      setIsAdmin(false); 
      setIsEditing(false); 
      return; 
    }
    const password = prompt('請輸入企画人專屬密碼：');
    if (password === '6826') { 
      setIsAdmin(true); 
      alert('解鎖成功！您現在擁有手帳最高編輯權限。'); 
    } else if (password !== null) {
      alert('密碼錯誤！');
    }
  };

  const handleDeleteTrip = async () => {
    if (window.confirm('⚠️ 警告：確定要永久刪除這份回憶嗎？此操作將無法恢復！')) {
      try {
        await deleteDoc(doc(db, 'trips', selectedTripId));
        alert('🗑️ 行程已從手帳中成功移除！'); 
        setSelectedTripId(null); 
        setIsEditing(false); 
        fetchTripsFromFirebase();
      } catch (error) { 
        alert('刪除失敗，請檢查網路連線或權限。'); 
      }
    }
  };

  const handleCreateNewTrip = async () => {
    const tripId = prompt("請為新手帳取一個英文代號 (例如：2019winter)：", "2019winter");
    if (!tripId) return; 

    const availableTemplates = Object.keys(TEMPLATES).join(', ');
    const tplName = prompt(
      `【選擇範本匯入】\n\n目前系統可用的範本有：\n[ ${availableTemplates} ]\n\n請輸入範本代號以載入資料。\n(若要建立空白手帳，請直接清空輸入框並按確定)`, 
      '2019winter'
    );

    let newTripData = {
      metadata: { 
        title: "新建立的旅行紀錄", 
        dates: "未定", 
        membersCount: 1, 
        icon: "📓", 
        status: "upcoming", 
        createdAt: Date.now() 
      },
      budget: { twd: {}, jpy: {} }, 
      schedule: []
    };

    if (tplName && TEMPLATES[tplName]) {
      const tpl = TEMPLATES[tplName];
      const syncedBudget = generateSyncedBudget(tpl.importedSchedule, tpl.importedBudget);
      newTripData = {
        metadata: { 
          ...tpl.importedMetadata, 
          icon: tpl.importedMetadata?.icon || "📓", 
          status: tpl.importedMetadata?.status || "upcoming", 
          createdAt: Date.now() 
        },
        budget: syncedBudget, 
        schedule: tpl.importedSchedule || []
      };
      alert(`✅ 成功讀取 [${tplName}] 範本並完成手帳自動同步！`);
    }

    try { 
      await setDoc(doc(db, 'trips', tripId), newTripData); 
      fetchTripsFromFirebase(); 
    } catch (error) { 
      alert('建立失敗，請檢查權限或網路。'); 
    }
  };

  const startEditing = () => {
    setIsEditing(true);
    setEditBudget(JSON.parse(JSON.stringify(tripData?.budget || { jpy: {}, twd: {} })));
    setEditMetadata(JSON.parse(JSON.stringify(tripData?.metadata || {})));
    setEditSchedule(JSON.parse(JSON.stringify(tripData?.schedule || [])));
  };

  /* ================= 預算相關編輯邏輯 ================= */
  const handleBudgetChange = (currency, key, value) => {
    setEditBudget(prev => {
      const currentVal = prev[currency][key];
      const isObj = typeof currentVal === 'object' && currentVal !== null;
      return { 
        ...prev, 
        [currency]: { 
          ...prev[currency], 
          [key]: isObj ? { ...currentVal, total: Number(value) } : Number(value) 
        } 
      };
    });
  };

  const handleAddBudgetItem = (currency) => {
    const itemName = prompt('請輸入新項目名稱 (例如：🛍️ 購物金)：');
    if (itemName && itemName.trim() !== '') {
      setEditBudget(prev => ({ 
        ...prev, 
        [currency]: { ...prev[currency], [itemName]: 0 } 
      }));
    }
  };

  const handleRemoveBudgetItem = (currency, key, label) => {
    if (window.confirm(`確定要刪除整個「${label}」嗎？`)) {
      setEditBudget(prev => { 
        const newCurrencyData = { ...prev[currency] }; 
        delete newCurrencyData[key]; 
        return { ...prev, [currency]: newCurrencyData }; 
      });
    }
  };

  const toggleExpand = (currency, key) => {
    setExpandedItems(prev => ({ 
      ...prev, 
      [`${currency}-${key}`]: !prev[`${currency}-${key}`] 
    }));
  };

  const handleAddSubItem = (currency, key) => {
    setEditBudget(prev => {
      const currentVal = prev[currency][key];
      const isObj = typeof currentVal === 'object' && currentVal !== null;
      
      let existingSubItems = isObj 
        ? (currentVal.subItems || []) 
        : ((Number(currentVal) || 0) > 0 ? [{ id: Date.now() - 1, name: '原有項目', cost: Number(currentVal) }] : []);
      
      setExpandedItems(ePrev => ({ ...ePrev, [`${currency}-${key}`]: true }));
      
      const newSubItems = [...existingSubItems, { id: Date.now(), name: '', cost: 0 }];
      const newTotal = newSubItems.reduce((sum, item) => sum + Number(item.cost || 0), 0);
      
      return { 
        ...prev, 
        [currency]: { 
          ...prev[currency], 
          [key]: { total: newTotal, subItems: newSubItems } 
        } 
      };
    });
  };

  const handleSubItemChange = (currency, key, subId, field, value) => {
    setEditBudget(prev => {
      const currentVal = prev[currency][key];
      const newSubItems = currentVal.subItems.map(item => 
        item.id === subId ? { ...item, [field]: field === 'cost' ? Number(value) : value } : item 
      );
      const newTotal = newSubItems.reduce((sum, item) => sum + Number(item.cost || 0), 0);
      
      return { 
        ...prev, 
        [currency]: { 
          ...prev[currency], 
          [key]: { ...currentVal, total: newTotal, subItems: newSubItems } 
        } 
      };
    });
  };

  const handleRemoveSubItem = (currency, key, subId) => {
    setEditBudget(prev => {
      const currentVal = prev[currency][key];
      const newSubItems = currentVal.subItems.filter(item => item.id !== subId);
      const newTotal = newSubItems.reduce((sum, item) => sum + Number(item.cost || 0), 0);
      
      if (newSubItems.length === 0) {
        return { ...prev, [currency]: { ...prev[currency], [key]: newTotal } };
      }
      return { 
        ...prev, 
        [currency]: { 
          ...prev[currency], 
          [key]: { ...currentVal, total: newTotal, subItems: newSubItems } 
        } 
      };
    });
  };

  /* ================= 行程表增減邏輯 ================= */
  const handleScheduleDayChange = (dayIdx, field, value) => { 
    setEditSchedule(prev => { 
      const newSchedule = [...prev]; 
      newSchedule[dayIdx] = { ...newSchedule[dayIdx], [field]: value }; 
      return newSchedule; 
    }); 
  };
  
  const handleScheduleActivityChange = (dayIdx, actIdx, field, value) => { 
    setEditSchedule(prev => { 
      const newSchedule = [...prev]; 
      newSchedule[dayIdx].activities[actIdx] = { ...newSchedule[dayIdx].activities[actIdx], [field]: value }; 
      return newSchedule; 
    }); 
  };
  
  const handleAddScheduleDay = () => { 
    setEditSchedule(prev => [ 
      ...prev, 
      { day: prev.length + 1, date: '', location: '', title: '', activities: [] } 
    ]); 
  };
  
  const handleRemoveScheduleDay = (dayIdx) => { 
    if(window.confirm('確定要刪除這【整天】的紀錄嗎？')) {
      setEditSchedule(prev => prev.filter((_, i) => i !== dayIdx)); 
    }
  };
  
  const handleAddScheduleActivity = (dayIdx) => { 
    setEditSchedule(prev => { 
      const newSchedule = [...prev]; 
      if (!newSchedule[dayIdx].activities) {
        newSchedule[dayIdx].activities = [];
      }
      newSchedule[dayIdx].activities.push({ 
        time: '', title: '', type: 'other', note: '', cost: '', currency: 'jpy' 
      }); 
      return newSchedule; 
    }); 
  };
  
  const handleRemoveScheduleActivity = (dayIdx, actIdx) => { 
    setEditSchedule(prev => { 
      const newSchedule = [...prev]; 
      newSchedule[dayIdx].activities = newSchedule[dayIdx].activities.filter((_, i) => i !== actIdx); 
      return newSchedule; 
    }); 
  };

  /* ================= 自動完成與自動掃描邏輯 ================= */
  const onLoadAutocomplete = (autocomplete, dayIdx, actIdx) => {
    setAutocompleteRefs(prev => ({ ...prev, [`${dayIdx}-${actIdx}`]: autocomplete }));
  };
  
  const onPlaceChanged = (dayIdx, actIdx) => {
    const autocomplete = autocompleteRefs[`${dayIdx}-${actIdx}`];
    if (autocomplete !== null && autocomplete.getPlace()?.geometry) {
      setEditSchedule(prev => {
        const newSchedule = [...prev]; 
        const currentAct = newSchedule[dayIdx].activities[actIdx];
        
        newSchedule[dayIdx].activities[actIdx] = { 
          ...currentAct, 
          lat: autocomplete.getPlace().geometry.location.lat(), 
          lng: autocomplete.getPlace().geometry.location.lng(), 
          title: currentAct.title || autocomplete.getPlace().name 
        };
        return newSchedule;
      });
    }
  };

  const handleAutoFillCoordinates = async () => {
    if (!window.google) return alert("⚠️ 地圖引擎尚未準備好，請稍後幾秒再按！");
    if (!window.confirm("即將開始自動掃描此行程中所有「沒有座標」的景點。\n掃描過程會逐一進行，請勿關閉網頁。是否繼續？")) return;
    
    setIsAutoFilling(true);
    const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
    let updatedSchedule = [...editSchedule];
    let successCount = 0; 
    let failCount = 0;

    for (let dIdx = 0; dIdx < updatedSchedule.length; dIdx++) {
      const day = updatedSchedule[dIdx];
      if (!day || !Array.isArray(day.activities)) continue;
      
      for (let aIdx = 0; aIdx < day.activities.length; aIdx++) {
        const act = day.activities[aIdx];
        if (!act || (act.lat && act.lng) || !act.title) continue;
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        try {
          const queryStr = day.location ? `${day.location} ${act.title}` : act.title;
          const result = await new Promise((resolve, reject) => {
            placesService.findPlaceFromQuery({ query: queryStr, fields: ['geometry'] }, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK && results?.length > 0) {
                resolve(results[0]); 
              } else {
                reject(status);
              }
            });
          });
          
          if (result?.geometry) {
            updatedSchedule[dIdx].activities[aIdx] = { 
              ...act, 
              lat: result.geometry.location.lat(), 
              lng: result.geometry.location.lng() 
            };
            successCount++; 
            setEditSchedule([...updatedSchedule]);
          }
        } catch (error) { 
          failCount++; 
        }
      }
    }
    
    setIsAutoFilling(false); 
    alert(`✨ 智能掃描完畢！\n✅ 成功捕獲 ${successCount} 個座標\n❌ 找不到 ${failCount} 個 (可能名稱太模糊，請手動搜尋微調)`);
  };

  const handleSave = async () => {
    try {
      if (editBudget.jpy && editBudget.jpy.total !== undefined) delete editBudget.jpy.total;
      if (editBudget.twd && editBudget.twd.total !== undefined) delete editBudget.twd.total;
      
      const finalSyncedBudget = generateSyncedBudget(editSchedule, editBudget);
      
      await updateDoc(doc(db, 'trips', selectedTripId), { 
        budget: finalSyncedBudget, 
        metadata: editMetadata, 
        schedule: editSchedule 
      });
      
      alert('寫入成功！行程已儲存，各項花費已自動分類歸戶。'); 
      setIsEditing(false); 
      fetchTripsFromFirebase(); 
    } catch (error) { 
      alert('更新失敗，請檢查主控台。'); 
    }
  };

  const getBudgetLabel = (key, count) => {
    const labels = { 
      hotel: `🏨 總住宿費用 (${count}人)`, 
      transport: `🚕 日本當地交通`, 
      airfare: `✈️ 國際機票費用 (${count}人份)`, 
      airportTransfer: `🚕 機場接送 (送機)`, 
      dayTour: `🚩 當地一日遊`, 
      tickets: `🎫 預付票券`, 
      prepaid: `💳 其他預付`, 
      sync_flight: '✈️ 國內線/轉機機票', 
      sync_food: '🍽️ 行程餐食費', 
      sync_transport: '🚆 行程交通費', 
      sync_hotel: '🏨 行程住宿費', 
      sync_ticket: '🎫 行程票券費', 
      sync_other: '🏷️ 行程其他花費' 
    };
    return labels[key] || key;
  };

  const calculateCurrencyTotal = (currencyData) => {
    if (!currencyData || typeof currencyData !== 'object') return 0;
    return Object.entries(currencyData).reduce((sum, [key, item]) => {
      if (key.toLowerCase() === 'total') return sum;
      return sum + (Number((typeof item === 'object' && item !== null) ? item.total : item) || 0);
    }, 0);
  };

  if (loading) {
    return (
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>📓</div>
        <div style={{ fontSize: '18px', color: '#7f8c8d', fontWeight: 'bold' }}>正在翻閱旅行手帳，請稍候...</div>
      </div>
    );
  }

  const renderLobby = () => (
    <div className="lobby-container">
      <div className="header" style={{ position: 'relative' }}>
        <button 
          onClick={toggleTheme} 
          style={{ position: 'absolute', right: '15px', top: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          title="切換深色/淺色主題"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className="profile-pic">CH</div>
        <h1>黃家の旅行手帳</h1>
        <p className="subtitle" style={{ cursor: 'pointer' }} onClick={handleAdminLogin}>
          旅の企画人：黃志中 {isAdmin ? '🔓' : '🔒'}
        </p>
<JapanMapComponent
  mapData={JAPAN_MAP_DATA}
  selectedRegion={selectedRegion}
  onSelectRegion={setSelectedRegion}
  isDarkMode={isDarkMode}
/>

{/* 新增的統計顯示區塊 */}
<div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#666' }}>
  {JAPAN_MAP_DATA.map(region => {
    // 這裡我們直接計算你的行程資料 (假設你的行程資料變數名稱是 trips)
const count = (trips || []).filter(t =>
      Array.isArray(t.metadata?.region) 
        ? t.metadata.region.includes(region.id) 
        : t.metadata?.region === region.id
    ).length;
    
    return count > 0 ? (
      <span key={region.id} style={{ margin: '0 10px' }}>
        {region.name}: 🚩 {count}
      </span>
    ) : null;
  })}
</div>

        {selectedRegion && (
          <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>
            <button 
              onClick={() => setSelectedRegion(null)}
              style={{
                padding: '8px 16px', borderRadius: '20px', border: '1px solid #a0aec0', 
                background: 'transparent', cursor: 'pointer', fontWeight: 'bold',
                color: isDarkMode ? '#e2e8f0' : '#4a5568'
              }}
            >
              ✕ 取消區域篩選 (顯示全部)
            </button>
          </div>
        )}
        {isAdmin && (
          <button 
            onClick={handleCreateNewTrip} 
            style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            ➕ 建立新手帳紀錄
          </button>
        )}
      </div>
      <div className="trips-grid">
{trips
          .filter((trip) => {
            if (!selectedRegion) return true;
            const tripRegions = Array.isArray(trip.data.metadata?.region)
              ? trip.data.metadata.region
              : [trip.data.metadata?.region];
            return tripRegions.includes(selectedRegion);
          })
          .map((trip) => (
            <div
              key={trip.id}
              className="trip-card"
              onClick={() => setSelectedTripId(trip.id)}
            >
              <div className="trip-icon">{trip.icon}</div>
              <div className="trip-info">
                <h3>{trip.data.metadata?.title || "未命名紀錄"}</h3>
                <p>{trip.data.metadata?.dates || ""}</p>
                <div className={`status-badge ${trip.status}`}>
                  {trip.status === "upcoming" ? "籌備中" : "回憶已收錄"}
                </div>
              </div>
              <div className="trip-arrow">➔</div>
            </div>
          ))}      </div>
    </div>
  );

  const renderTripDetails = () => {
    if (!tripData) return null;
    const currentBudget = isEditing ? (editBudget || { twd: {}, jpy: {} }) : (tripData.budget || { twd: {}, jpy: {} });
    const currentMetadata = isEditing ? (editMetadata || {}) : (tripData.metadata || {});
    let rawSchedule = isEditing ? editSchedule : tripData.schedule;
    
    // ==========================================
    // 🧮 距離引擎核心處理 (🛡️ 加入嚴格NaN數字過濾)
    // ==========================================
    let tripTotalDistance = 0;
    let lastPoint = null;
    
    const currentSchedule = (Array.isArray(rawSchedule) ? rawSchedule : []).map(day => {
      if (!day) return null;
      const safeActivities = Array.isArray(day.activities) ? day.activities : [];
      let dailyTotalDistance = 0;
      
      const enhancedActivities = safeActivities.map(act => {
        if (!act) return null;
        let distanceFromPrev = 0;
        
        if (act.lat && act.lng) {
          // 🛡️ 嚴格將座標轉換為數字
          const validLat = Number(act.lat);
          const validLng = Number(act.lng);
          
          // 🛡️ 只有當數字是正常值 (不是NaN) 才能計算
          if (!isNaN(validLat) && !isNaN(validLng) && validLat !== 0 && validLng !== 0) {
            if (lastPoint) {
              distanceFromPrev = calculateDistance(lastPoint.lat, lastPoint.lng, validLat, validLng);
              // 防止計算結果出現意外的 NaN
              if (!isNaN(distanceFromPrev)) {
                dailyTotalDistance += distanceFromPrev;
                tripTotalDistance += distanceFromPrev;
              }
            }
            lastPoint = { lat: validLat, lng: validLng };
          }
        }
        return { ...act, distanceFromPrev };
      });
      return { ...day, activities: enhancedActivities, dailyTotalDistance };
    });

    const membersCount = currentMetadata.membersCount || 1;
    const totalJPY = calculateCurrencyTotal(currentBudget.jpy);
    const totalTWD = calculateCurrencyTotal(currentBudget.twd);

    const inputStyle = { 
      padding: '8px', 
      border: '1px solid #bdc3c7', 
      borderRadius: '6px', 
      fontSize: '16px', 
      width: '100%', 
      boxSizing: 'border-box', 
      letterSpacing: '0.5px' 
    };
    
    const costBadgeStyle = { 
      fontSize: '12px', 
      color: '#d35400', 
      background: '#fdebd0', 
      padding: '3px 8px', 
      borderRadius: '12px', 
      marginLeft: '8px', 
      fontWeight: 'bold', 
      display: 'inline-block' 
    };

    const renderBudgetList = (currency, currencySymbol, title) => {
      const rawItems = currentBudget[currency];
      const items = (rawItems && typeof rawItems === 'object') ? rawItems : {};
      
      return (
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#7f8c8d', borderBottom: '1px solid #ecf0f1', paddingBottom: '8px' }}>
            {title}
          </h4>
          
          {Object.entries(items).map(([key, value]) => {
            if (key.toLowerCase() === 'total') return null;
            const label = getBudgetLabel(key, membersCount);
            const isComplex = typeof value === 'object' && value !== null;
            const totalAmount = isComplex ? value.total : value;
            const subItems = isComplex ? (Array.isArray(value.subItems) ? value.subItems : []) : [];
            const hasSubItems = subItems.length > 0;
            const isExpanded = expandedItems[`${currency}-${key}`];
            const isAutoSynced = key.startsWith('sync_') || key === '📍 行程明細自動同步';

            return (
              <div key={key} style={{ marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px dashed #ecf0f1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {isEditing && !isAutoSynced && (
                      <button 
                        onClick={() => handleRemoveBudgetItem(currency, key, label)} 
                        style={{ background: '#ff4757', color: 'white', border: 'none', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px' }}
                      >
                        ✖
                      </button>
                    )}
                    
                    {isEditing && isAutoSynced && (
                      <div style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🔒</div>
                    )}
                    
                    <div 
                      onClick={() => toggleExpand(currency, key)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: (hasSubItems || (isEditing && !isAutoSynced)) ? 'pointer' : 'default' }}
                    >
                      {(hasSubItems || (isEditing && !isAutoSynced)) && (
                        <span style={{ fontSize: '10px', color: '#bdc3c7', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.3s', display: 'inline-block' }}>▼</span>
                      )}
                      <span style={{ color: isAutoSynced ? '#d35400' : '#2c3e50', fontWeight: (hasSubItems || isExpanded || isAutoSynced) ? 'bold' : 'normal' }}>
                        {label}
                      </span>
                    </div>
                  </div>
                  
                  {isEditing ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input 
                        type="number" 
                        value={totalAmount || 0} 
                        onChange={(e) => handleBudgetChange(currency, key, e.target.value)} 
                        disabled={hasSubItems || isAutoSynced} 
                        style={{ width: '100px', padding: '6px', textAlign: 'right', borderRadius: '4px', border: '1px solid #bdc3c7', backgroundColor: (hasSubItems || isAutoSynced) ? '#f1f2f6' : 'white', color: isAutoSynced ? '#d35400' : 'inherit' }} 
                      />
                      <span style={{ color: '#7f8c8d', fontSize: '14px' }}>{currencySymbol}</span>
                    </div>
                  ) : (
                    <span style={{ fontWeight: 'bold', color: isAutoSynced ? '#d35400' : '#34495e' }}>
                      {currency === 'twd' ? 'NT$ ' : ''}{formatNumber(totalAmount)} {currency === 'jpy' ? '円' : ''}
                    </span>
                  )}
                </div>
                
                {(isExpanded) && (
                  <div style={{ paddingLeft: '28px', marginTop: '10px', borderLeft: '2px solid #3498db', marginLeft: '10px' }}>
                    {subItems.map((sub) => (
                      <div key={sub.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                        {(isEditing && !isAutoSynced) ? (
                          <>
                            <div style={{ display: 'flex', gap: '8px', flex: 1, marginRight: '10px' }}>
                              <button 
                                onClick={() => handleRemoveSubItem(currency, key, sub.id)} 
                                style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', padding: '0 5px' }}
                              >
                                ✖
                              </button>
                              <input 
                                type="text" 
                                value={sub.name} 
                                onChange={(e) => handleSubItemChange(currency, key, sub.id, 'name', e.target.value)} 
                                placeholder="名稱" 
                                style={{ flex: 1, padding: '4px', border: '1px solid #bdc3c7', borderRadius: '4px', fontSize: '13px' }} 
                              />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <input 
                                type="number" 
                                value={sub.cost} 
                                onChange={(e) => handleSubItemChange(currency, key, sub.id, 'cost', e.target.value)} 
                                style={{ width: '70px', padding: '4px', textAlign: 'right', border: '1px solid #bdc3c7', borderRadius: '4px', fontSize: '13px' }} 
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <span style={{ color: '#7f8c8d', fontSize: '13px' }}>↳ {sub.name || '未命名'}</span>
                            <span style={{ color: '#7f8c8d', fontSize: '13px', fontWeight: 'bold' }}>{formatNumber(sub.cost)} {currencySymbol}</span>
                          </>
                        )}
                      </div>
                    ))}
                    
                    {(isEditing && !isAutoSynced) && (
                      <button 
                        onClick={() => handleAddSubItem(currency, key)} 
                        style={{ fontSize: '12px', padding: '4px 10px', background: '#ecf0f1', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '4px' }}
                      >
                        + 建立明細
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          
          {isEditing && (
            <button 
              onClick={() => handleAddBudgetItem(currency)} 
              style={{ marginTop: '5px', padding: '8px', width: '100%', backgroundColor: '#f8f9fa', border: '1px dashed #bdc3c7', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ➕ 新增分類 ({currency === 'jpy' ? '日幣' : '台幣'})
            </button>
          )}
        </div>
      );
    };

    return (
      <div className="trip-details-container">
        
        <div className="nav-bar">
          <button 
            className="back-btn" 
            onClick={() => { setSelectedTripId(null); setIsEditing(false); }}
          >
            ← 返回首頁
          </button>
          
          {isAdmin && isEditing && (
            <button 
              onClick={handleDeleteTrip} 
              style={{ marginLeft: '10px', padding: '6px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              🗑️ 刪除
            </button>
          )}
          
          {isEditing ? (
            <input 
              value={currentMetadata.title || ''} 
              onChange={e => setEditMetadata({...currentMetadata, title: e.target.value})} 
              style={{...inputStyle, fontSize: '18px', fontWeight: 'bold', flex: 1, margin: '0 15px'}} 
            />
          ) : (
            <h2 style={{ marginLeft: '15px' }}>{currentMetadata.title}</h2>
          )}
          
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={toggleTheme} 
              style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} 
              title="切換主題"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            {isAdmin && !isEditing && (
              <button 
                onClick={startEditing} 
                style={{ padding: '6px 12px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                ✏️ 編輯
              </button>
            )}
            
            {isAdmin && isEditing && (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => setIsEditing(false)} 
                  style={{ padding: '6px 12px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                >
                  取消
                </button>
                <button 
                  onClick={handleSave} 
                  disabled={isAutoFilling} 
                  style={{ padding: '6px 12px', backgroundColor: isAutoFilling ? '#ccc' : '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: isAutoFilling ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
                >
                  💾 寫入
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-item">
            <span className="label">手帳圖示</span>
            {isEditing ? (
              <input 
                value={currentMetadata.icon || '📓'} 
                onChange={e => setEditMetadata({...currentMetadata, icon: e.target.value})} 
                style={inputStyle} 
              />
            ) : (
              <span className="value" style={{ fontSize: '24px' }}>{currentMetadata.icon || '📓'}</span>
            )}
          </div>
          
          <div className="summary-item">
            <span className="label">出發日期</span>
            {isEditing ? (
              <input 
                value={currentMetadata.dates || ''} 
                onChange={e => setEditMetadata({...currentMetadata, dates: e.target.value})} 
                style={inputStyle} 
              />
            ) : (
              <span className="value">{currentMetadata.dates}</span>
            )}
          </div>
          
          <div className="summary-item">
            <span className="label">同行人數</span>
            {isEditing ? (
              <input 
                type="number" 
                value={currentMetadata.membersCount || 1} 
                onChange={e => setEditMetadata({...currentMetadata, membersCount: e.target.value})} 
                style={inputStyle} 
              />
            ) : (
              <span className="value">{membersCount} 人</span>
            )}
          </div>
          
          {/* 方案 A: 總移動里程 (大於0才顯示) */}
          {tripTotalDistance > 0 && !isNaN(tripTotalDistance) && (
            <div className="summary-item">
              <span className="label">總里程</span>
              <span className="value" style={{color: '#16a085', fontWeight: 'bold'}}>👣 {tripTotalDistance.toFixed(1)} km</span>
            </div>
          )}
          
{/* 整合：所屬區域 (編輯多選/顯示) 與 狀態區塊 */}
      <div className="summary-item">
        <span className="label">所屬區域</span>
        {isEditing ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
            {JAPAN_MAP_DATA.map(reg => (
              <label key={reg.id} style={{ fontSize: '14px', cursor: 'pointer' }}>
                <input 
                  type="checkbox"
                  checked={(currentMetadata.region || []).includes(reg.id)}
                  onChange={(e) => {
                    const currentRegions = currentMetadata.region || [];
                    const newRegions = e.target.checked 
                      ? [...currentRegions, reg.id] 
                      : currentRegions.filter(r => r !== reg.id);
                    setEditMetadata({...currentMetadata, region: newRegions});
                  }}
                />
                {reg.name}
              </label>
            ))}
          </div>
        ) : (
          <span className="value">
{Array.isArray(currentMetadata.region) 
  ? currentMetadata.region.map(r => JAPAN_MAP_DATA.find(data => data.id === r)?.name).filter(Boolean).join('、')
  : (currentMetadata.region || '未分類')}
          </span>
        )}
      </div>

      <div className="summary-item">
        <span className="label">狀態</span>
        {isEditing ? (
          <select 
            value={currentMetadata.status || 'upcoming'}
            onChange={e => setEditMetadata({...currentMetadata, status: e.target.value})}
            style={{...inputStyle, padding: '5px'}}
          >
            <option value="upcoming">籌備中</option>
            <option value="completed">已收錄</option>
          </select>
        ) : (
          <span className="value">{currentMetadata.status === 'completed' ? '✅ 已收錄' : '⌛ 籌備中'}</span>
        )}
      </div>
          
          <div className="summary-item" style={{ flex: 1.5 }}>
            <span className="label">相簿連結</span>
            {isEditing ? (
              <input 
                type="text" 
                value={currentMetadata.galleryLink || ''} 
                onChange={(e) => setEditMetadata({...currentMetadata, galleryLink: e.target.value})} 
                placeholder="相簿網址" 
                style={inputStyle} 
              />
            ) : (
              currentMetadata.galleryLink ? (
                <a href={currentMetadata.galleryLink} target="_blank" rel="noopener noreferrer" className="value link">打開相簿 📸</a>
              ) : (
                <span className="value" style={{ color: '#bdc3c7' }}>無</span>
              )
            )}
          </div>
        </div>

        <div className="schedule-section">
          <h3>📅 行程手帳</h3>
          {currentSchedule.map((day, idx) => {
            if (!day) return null;
            return (
              <div key={idx} className="day-card" style={{ position: 'relative' }}>
                {isEditing && (
                  <button 
                    onClick={() => handleRemoveScheduleDay(idx)} 
                    style={{ position: 'absolute', top: '15px', right: '15px', background: '#ff4757', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '12px' }}
                  >
                    🗑️ 刪除此日
                  </button>
                )}
                
                <div className="day-header" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {isEditing ? (
                    <div style={{ display: 'flex', gap: '10px', flex: 1, marginBottom: '10px', paddingRight: '70px' }}>
                      <input 
                        value={day.day || ''} 
                        onChange={e => handleScheduleDayChange(idx, 'day', e.target.value)} 
                        placeholder="天數" 
                        style={{...inputStyle, width: '40px'}} 
                      />
                      <input 
                        value={day.date || ''} 
                        onChange={e => handleScheduleDayChange(idx, 'date', e.target.value)} 
                        placeholder="日期" 
                        style={{...inputStyle, width: '100px'}} 
                      />
                      <input 
                        value={day.location || ''} 
                        onChange={e => handleScheduleDayChange(idx, 'location', e.target.value)} 
                        placeholder="地點" 
                        style={{...inputStyle, width: '120px'}} 
                      />
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <h4 style={{letterSpacing: '1px', margin: 0}}>Day {day.day} - {day.date}</h4>
                      
                      {/* 方案 B: 每日結算 (大於0才顯示) */}
                      {day.dailyTotalDistance > 0 && !isNaN(day.dailyTotalDistance) && (
                        <span style={{ fontSize: '13px', color: '#16a085', marginLeft: '12px', fontWeight: 'bold', background: '#e8f8f5', padding: '2px 8px', borderRadius: '12px' }}>
                          📍 今日移動約 {day.dailyTotalDistance.toFixed(1)} km
                        </span>
                      )}
                      
                      <span className="location-tag" style={{ marginLeft: '12px' }}>{day.location}</span>
                    </div>
                  )}
                </div>
                
                {isEditing ? (
                  <input 
                    value={day.title || ''} 
                    onChange={e => handleScheduleDayChange(idx, 'title', e.target.value)} 
                    placeholder="當日主標題" 
                    style={{...inputStyle, marginBottom: '15px'}} 
                  />
                ) : (
                  <h5 className="day-title">{day.title}</h5>
                )}

                <div className="activities-list">
                  {day.activities.map((act, i) => {
                    if (!act) return null;
                    return (
                      <React.Fragment key={i}>
                        
                        {/* 方案 C: 點對點距離虛線標籤 (大於0且無NaN才顯示) */}
                        {act.distanceFromPrev > 0 && !isNaN(act.distanceFromPrev) && (
                          <div style={{ margin: '4px 0 4px 6px', fontSize: '13px', color: '#7f8c8d', display: 'flex', alignItems: 'center' }}>
                            <div style={{ height: '24px', borderLeft: '2px dashed #bdc3c7', marginRight: '12px', marginLeft: '14px' }}></div>
                            <span style={{ background: '#f8f9fa', padding: '2px 8px', borderRadius: '12px', border: '1px solid #ecf0f1', color: '#95a5a6' }}>
                              🚙 距離約 {act.distanceFromPrev.toFixed(1)} km
                            </span>
                          </div>
                        )}
                        
                        <div className="activity-item" style={{ flexDirection: isEditing ? 'column' : 'row', gap: isEditing ? '10px' : '0' }}>
                          
                          {!isEditing && (
                            <>
                              <div className="time">{act.time}</div>
                              <div className="details">
                                <div className="act-title" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
                                  {act.type === 'food' && '🍽️ '}
                                  {act.type === 'transport' && '🚆 '}
                                  {act.type === 'hotel' && '🏨 '}
                                  {act.type === 'ticket' && '🎫 '}
                                  {act.type === 'flight' && '✈️ '}
                                  {act.type === 'other' && '🏷️ '}
                                  {act.title}
                                  {act.cost > 0 && (
                                    <span style={costBadgeStyle}>💰 {formatNumber(act.cost)} {act.currency === 'twd' ? 'NT$' : '円'}</span>
                                  )}
                                </div>
                                {act.note && <div className="act-note">{act.note}</div>}
                              </div>
                            </>
                          )}

                          {isEditing && (
                            <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px', border: '1px dashed #bdc3c7' }}>
                              <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                                <button 
                                  onClick={() => handleRemoveScheduleActivity(idx, i)} 
                                  style={{ background: '#ff4757', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', flexShrink: 0 }}
                                >
                                  ✖
                                </button>
                                <input 
                                  value={act.time || ''} 
                                  onChange={e => handleScheduleActivityChange(idx, i, 'time', e.target.value)} 
                                  placeholder="時間" 
                                  style={{...inputStyle, width: '80px'}} 
                                />
                                <select 
                                  value={act.type || 'other'} 
                                  onChange={e => handleScheduleActivityChange(idx, i, 'type', e.target.value)} 
                                  style={{...inputStyle, width: '95px', padding: '4px'}}
                                >
                                  <option value="other">🏷️ 其他</option>
                                  <option value="flight">✈️ 航班</option>
                                  <option value="food">🍽️ 餐食</option>
                                  <option value="transport">🚆 交通</option>
                                  <option value="hotel">🏨 住宿</option>
                                  <option value="ticket">🎫 票券</option>
                                </select>
                                <input 
                                  value={act.title || ''} 
                                  onChange={e => handleScheduleActivityChange(idx, i, 'title', e.target.value)} 
                                  placeholder="活動名稱" 
                                  style={{...inputStyle, flex: 1}} 
                                />
                              </div>
                              
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingLeft: '34px', marginTop: '8px' }}>
                                <textarea 
                                  value={act.note || ''} 
                                  onChange={e => handleScheduleActivityChange(idx, i, 'note', e.target.value)} 
                                  placeholder="備註細節" 
                                  style={{...inputStyle, flex: 1, minHeight: '35px', minWidth: '200px'}} 
                                />
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '180px' }}>
                                  {isLoaded ? (
                                    <Autocomplete 
                                      onLoad={(auto) => onLoadAutocomplete(auto, idx, i)} 
                                      onPlaceChanged={() => onPlaceChanged(idx, i)}
                                    >
                                      <input 
                                        type="text" 
                                        placeholder={act.lat ? `✅ 已綁定座標` : "🔍 搜尋地名..."} 
                                        style={{...inputStyle, backgroundColor: act.lat ? '#e8f8f5' : '#fff', border: act.lat ? '1px solid #1abc9c' : '1px solid #bdc3c7', color: act.lat ? '#16a085' : 'inherit', fontWeight: act.lat ? 'bold' : 'normal', padding: '6px'}} 
                                      />
                                    </Autocomplete>
                                  ) : (
                                    <input placeholder="載入中..." disabled style={{...inputStyle, padding: '6px'}} />
                                  )}
                                  
                                  <div style={{ display: 'flex', gap: '5px' }}>
                                    <input 
                                      type="text" 
                                      value={act.lat || ''} 
                                      onChange={e => handleScheduleActivityChange(idx, i, 'lat', e.target.value)} 
                                      placeholder="緯度(Lat)" 
                                      style={{...inputStyle, fontSize: '12px', padding: '4px'}} 
                                    />
                                    <input 
                                      type="text" 
                                      value={act.lng || ''} 
                                      onChange={e => handleScheduleActivityChange(idx, i, 'lng', e.target.value)} 
                                      placeholder="經度(Lng)" 
                                      style={{...inputStyle, fontSize: '12px', padding: '4px'}} 
                                    />
                                  </div>
                                </div>

                                <div style={{ display: 'flex', gap: '5px', width: '180px' }}>
                                  <input 
                                    type="number" 
                                    value={act.cost || ''} 
                                    onChange={e => handleScheduleActivityChange(idx, i, 'cost', e.target.value)} 
                                    placeholder="💰 預估花費" 
                                    style={inputStyle} 
                                  />
                                  <select 
                                    value={act.currency || 'jpy'} 
                                    onChange={e => handleScheduleActivityChange(idx, i, 'currency', e.target.value)} 
                                    style={{...inputStyle, width: '60px', padding: '4px'}}
                                  >
                                    <option value="jpy">日圓</option>
                                    <option value="twd">台幣</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                  
                  {isEditing && (
                    <button 
                      onClick={() => handleAddScheduleActivity(idx)} 
                      style={{ width: '100%', padding: '8px', background: '#ecf0f1', border: '1px dashed #bdc3c7', borderRadius: '6px', cursor: 'pointer', color: '#34495e', marginTop: '10px' }}
                    >
                      ➕ 增加此日紀錄
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {isEditing && (
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <button 
                onClick={handleAddScheduleDay} 
                style={{ flex: 1, padding: '12px', background: '#d4edda', border: '2px dashed #28a745', borderRadius: '8px', cursor: 'pointer', color: '#155724', fontWeight: 'bold' }}
              >
                📅 ➕ 翻開全新的一天
              </button>
              <button 
                onClick={handleAutoFillCoordinates} 
                disabled={isAutoFilling} 
                style={{ flex: 1, padding: '12px', background: isAutoFilling ? '#f39c12' : '#f1c40f', border: 'none', borderRadius: '8px', cursor: isAutoFilling ? 'not-allowed' : 'pointer', color: '#2c3e50', fontWeight: 'bold' }}
              >
                {isAutoFilling ? '⏳ 智能掃描中...' : '✨ 全自動掃描座標'}
              </button>
            </div>
          )}
        </div>

        {/* 🗺️ 地圖與浮動里程儀表板 */}
        <TripMap schedule={currentSchedule} isLoaded={isLoaded} totalDistance={tripTotalDistance} />

        <div className="budget-section" style={{ marginTop: '40px' }}>
          <h3>💰 花費筆記</h3>
          <div className="budget-card">
            {renderBudgetList('jpy', '円', '🇯🇵 日幣支出 (JPY)')}
            {renderBudgetList('twd', 'NT$', '🇹🇼 台幣預付 (TWD)')}
            
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#166534', fontSize: '18px' }}>📈 總花費估算</h4>
              {exchangeRate ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#15803d', fontSize: '15px' }}>
                    <span>即時匯率基準：</span>
                    <span style={{ fontWeight: 'bold' }}>1 JPY = {exchangeRate.toFixed(4)} TWD</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#3f6212', fontSize: '14px' }}>
                    <span>日幣合計換算 ({formatNumber(totalJPY)} 円)：</span>
                    <span>約 NT$ {formatNumber(Math.round(totalJPY * exchangeRate))}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#3f6212', fontSize: '14px' }}>
                    <span>台幣合計：</span>
                    <span>NT$ {formatNumber(totalTWD)}</span>
                  </div>
                  <div style={{ borderTop: '2px solid #bbf7d0', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', color: '#166534', fontSize: '16px' }}>總費用估算：</span>
                    <span style={{ fontWeight: 'bold', color: '#166534', fontSize: '24px' }}>NT$ {formatNumber(Math.round(totalJPY * exchangeRate) + totalTWD)}</span>
                  </div>
                </div>
              ) : (
                <div style={{ color: '#15803d', fontSize: '14px' }}>🔄 正在連線銀行抓取匯率...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {selectedTripId ? renderTripDetails() : renderLobby()}
    </div>
  );
}

export default App;