import React, { useState, useEffect } from 'react';
import './App.css'; 

import { fetchTripsFromFirebase } from './services/tripService';
import { JAPAN_MAP_DATA } from './JapanMapData'; 
import TripDetails from './components/TripDetails'; 

function App() {
  const [trips, setTrips] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [selectedTripId, setSelectedTripId] = useState(null);
  
  // 管理員狀態
  const [isAdmin, setIsAdmin] = useState(false);

  const loadData = () => {
    fetchTripsFromFirebase().then(data => setTrips(data || []));
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  // 密碼解鎖邏輯 (預設密碼為 1234，可自行更改)
  const handleAdminLogin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      const pwd = prompt("請輸入解鎖密碼：");
      if (pwd === "1234") { 
        setIsAdmin(true);
      } else if (pwd !== null) {
        alert("密碼錯誤");
      }
    }
  };
  
  // 地區計數邏輯
  const getRegionCounts = () => {
    const counts = {};
    if (!JAPAN_MAP_DATA) return {};
    JAPAN_MAP_DATA.forEach(r => { counts[r.id] = { name: r.name, count: 0 }; });
    if (!trips || trips.length === 0) return counts;
    trips.forEach(trip => {
      const regionData = trip?.data?.metadata?.region;
      if (!regionData) return;
      const regions = Array.isArray(regionData) ? regionData : [regionData];
      regions.forEach(item => {
        if (counts.hasOwnProperty(item)) {
          counts[item].count++;
        }
      });
    });
    return counts;
  };
  
  const regionCounts = getRegionCounts();
  
  // 根據選擇的地圖區域篩選行程
  const filteredTrips = trips.filter((trip) => {
    if (!selectedRegion) return true;
    const regions = Array.isArray(trip.data.metadata?.region) ? trip.data.metadata.region : [trip.data.metadata.region];
    return regions.includes(selectedRegion);
  });
  
  const renderLobby = () => {
    return (
      <div className="lobby-container">
        <div className="header">
          <button onClick={toggleTheme} style={{ position: 'absolute', right: '15px', top: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <div className="profile-pic">CH</div>
          <h1>黃家の旅行手帳</h1>
          
          <p className="subtitle" style={{ cursor: 'pointer' }} onClick={handleAdminLogin}>
            旅の企画人：黃志中 {isAdmin ? '🔓' : '🔒'}
          </p>

          <div style={{ position: 'relative', maxWidth: '500px', margin: '20px auto' }}>
            <svg 
  viewBox="0 0 800 800" 
  style={{ width: '100%', display: 'block' }}
  onClick={(e) => {
    // 只有在管理員解鎖狀態下，才會觸發座標探測器
    if (isAdmin) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = Math.round(((e.clientX - rect.left) / rect.width) * 800);
      const clickY = Math.round(((e.clientY - rect.top) / rect.height) * 800);
      alert(`📍 完美座標抓取成功！\n\n請將這組數字填入 JapanMapData.js：\ntextX: ${clickX}\ntextY: ${clickY}`);
    }
  }}
>
              {JAPAN_MAP_DATA.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  fill={selectedRegion === region.id ? '#f5a623' : (isDarkMode ? '#5c6370' : '#ecf0f1')}
                  stroke={isDarkMode ? '#282c34' : '#bdc3c7'}
                  strokeWidth={selectedRegion === region.id ? 2 : 1}
                  onClick={() => setSelectedRegion(region.id)}
                  style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                />
              ))}
            </svg>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              {JAPAN_MAP_DATA.map((region) => {
                const count = regionCounts?.[region.id]?.count || 0;
                
                // 【防呆與轉型】強制將資料轉換為乾淨的浮點數，過濾掉多餘的字串符號
                const safeX = parseFloat(region.textX);
                const safeY = parseFloat(region.textY);

                // 如果資料完全遺失或格式錯得離譜，在 Console 留下警告並跳過，避免畫面崩潰
                if (isNaN(safeX) || isNaN(safeY)) {
                  console.warn(`⚠️ 區域 [${region.name}] 缺少有效的 textX 或 textY 座標資料`);
                  return null; 
                }

                const posX = (safeX / 800) * 100;
                const posY = (safeY / 800) * 100;
                
                return (
                  <div key={region.id} style={{ position: 'absolute', left: `${posX}%`, top: `${posY}%`, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: isDarkMode ? '#e0e0e0' : '#34495e', backgroundColor: isDarkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)', padding: '1px 5px', borderRadius: '3px' }}>
                      {region.name}
                    </span>
                    {count > 0 && (
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: isDarkMode ? '#f5a623' : '#d35400', marginTop: '2px', textShadow: '0 0 3px white' }}>
                        {`🚩 ${count}`}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {selectedRegion && (
            <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>
              <button onClick={() => setSelectedRegion(null)} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #a0aec0', background: 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>
                ✕ 取消區域篩選
              </button>
            </div>
          )}
        </div>
        
        <div className="trips-grid">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="trip-card" onClick={() => setSelectedTripId(trip.id)}>
              <div className="trip-icon">{trip.icon}</div>
              <div className="trip-info">
                <h3>{trip.data.metadata?.title || "未命名紀錄"}</h3>
                <p>{trip.data.metadata?.dates || ""}</p>
                <div className={`status-badge ${trip.status}`}>{trip.status === "upcoming" ? "籌備中" : "回憶已收錄"}</div>
              </div>
              <div className="trip-arrow">➔</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const selectedTrip = trips.find(t => t.id === selectedTripId);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {selectedTrip ? (
        <TripDetails
          key={selectedTrip.id}
          trip={selectedTrip}
          onBack={() => {
              setSelectedTripId(null);
              loadData(); 
          }}
          onDataChange={loadData} // 🌟 補上這一行！讓它存檔後知道怎麼重整資料
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isAdmin={isAdmin}
        />
      ) : renderLobby()}
    </div>
  );
}

export default App;