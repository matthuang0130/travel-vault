import React, { useState, useEffect, useMemo } from 'react';
import { useJsApiLoader, GoogleMap, Marker, Polyline, Autocomplete } from '@react-google-maps/api';

// 引入我們的服務、工具、Hook
import { useTripEditor } from '../hooks/useTripEditor';
import { saveTrip, deleteTrip, fetchExchangeRate } from '../services/tripService';
import { calculateDistance, formatNumber, calculateCurrencyTotal } from '../utils/calculations';
import { JAPAN_MAP_DATA } from '../JapanMapData';

// 子元件
import TripMap from './TripMapComponent'; // 請確認您有這個元件，或者先用下面的 TripMap 程式碼替代

const libraries = ['places'];

// 將標籤字典獨立出來，方便管理
const BUDGET_LABELS = { 
  hotel: (count) => `🏨 總住宿費用 (${count}人)`, 
  transport: () => `🚕 日本當地交通`, 
  airfare: (count) => `✈️ 國際機票費用 (${count}人份)`, 
  airportTransfer: () => `🚕 機場接送 (送機)`, 
  dayTour: () => `🚩 當地一日遊`, 
  tickets: () => `🎫 預付票券`, 
  prepaid: () => `💳 其他預付`, 
  sync_flight: () => '✈️ 國內線/轉機機票', 
  sync_flight_intl: () => '✈️ 國際線機票', // 🌟 新增這一行
  sync_food: () => '🍽️ 行程餐食費', 
  sync_transport: () => '🚆 行程交通費', 
  sync_hotel: () => '🏨 行程住宿費', 
  sync_ticket: () => '🎫 行程票券費', 
  sync_other: () => '🏷️ 行程其他花費' 
};

const getBudgetLabel = (key, count) => {
  const func = BUDGET_LABELS[key];
  return func ? func(count) : key;
};

// 如果您還沒有拆分 TripMap 元件，可以先用這個
const LocalTripMap = ({ schedule, isLoaded, totalDistance }) => {
    // ... 將原 App.jsx 中的 TripMap 元件完整程式碼貼到這裡 ...
    // 為了簡潔，暫時省略，但您需要確保 TripMap 元件是可用的
    // 如果您已拆分，請忽略此段
    return <div>地圖載入中...</div>;
};


const TripDetails = ({ trip, onBack, onDataChange, isDarkMode, toggleTheme, isAdmin }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });


  const [exchangeRate, setExchangeRate] = useState(null);

  // 🚀 使用我們的自定義 Hook！一行就搞定所有編輯邏輯
  const editor = useTripEditor(trip.data);

  useEffect(() => {
    const getRate = async () => {
      const rate = await fetchExchangeRate();
      setExchangeRate(rate);
    };
    getRate();
  }, []);

  const handleSave = async () => {
    const finalData = editor.getFinalDataForSave();
    try {
      await saveTrip(trip.id, finalData);
      alert('寫入成功！行程已儲存，各項花費已自動分類歸戶。');
      editor.cancelEditing();
      onDataChange();
    } catch (error) {
      alert('更新失敗，請檢查主控台。');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('⚠️ 警告：確定要永久刪除這份回憶嗎？此操作將無法恢復！')) {
      try {
        await deleteTrip(trip.id);
        alert('🗑️ 行程已從手帳中成功移除！');
        onBack();
      } catch (error) {
        alert('刪除失敗，請檢查網路連線或權限。');
      }
    }
  };

  // 根據是否在編輯模式，決定要顯示的資料來源
  const tripDataSource = editor.isEditing ? {
    budget: editor.editBudget,
    metadata: editor.editMetadata,
    schedule: editor.editSchedule,
  } : trip.data;

  // 計算行程距離
  const { currentSchedule, tripTotalDistance } = useMemo(() => {
    let lastPoint = null;
    let totalDistance = 0;
    const schedule = (Array.isArray(tripDataSource.schedule) ? tripDataSource.schedule : []).map(day => {
      if (!day) return null;
      let dailyTotalDistance = 0;
      const enhancedActivities = (Array.isArray(day.activities) ? day.activities : []).map(act => {
        if (!act) return null;
        let distanceFromPrev = 0;
        const validLat = Number(act.lat);
        const validLng = Number(act.lng);
        if (!isNaN(validLat) && !isNaN(validLng) && validLat !== 0 && validLng !== 0) {
          if (lastPoint) {
            distanceFromPrev = calculateDistance(lastPoint.lat, lastPoint.lng, validLat, validLng);
            if (!isNaN(distanceFromPrev)) {
              dailyTotalDistance += distanceFromPrev;
              totalDistance += distanceFromPrev;
            }
          }
          lastPoint = { lat: validLat, lng: validLng };
        }
        return { ...act, distanceFromPrev };
      });
      return { ...day, activities: enhancedActivities, dailyTotalDistance };
    });
    return { currentSchedule: schedule, tripTotalDistance: totalDistance };
  }, [tripDataSource.schedule]);
  
  const membersCount = tripDataSource.metadata?.membersCount || 1;
  const totalJPY = calculateCurrencyTotal(tripDataSource.budget?.jpy);
  const totalTWD = calculateCurrencyTotal(tripDataSource.budget?.twd);

  const inputStyle = { padding: '8px', border: '1px solid #bdc3c7', borderRadius: '6px', fontSize: '16px', width: '100%', boxSizing: 'border-box', letterSpacing: '0.5px' };
  const costBadgeStyle = { fontSize: '12px', color: '#d35400', background: '#fdebd0', padding: '3px 8px', borderRadius: '12px', marginLeft: '8px', fontWeight: 'bold', display: 'inline-block' };

  if (!tripDataSource) return null;

  // ==========================================
  // 這就是「無省略」的完整渲染區塊
  // ==========================================
  return (
    <div className="trip-details-container">
      
      {/* --- 頂部導覽列 --- */}
      <div className="nav-bar">
        <button className="back-btn" onClick={onBack}>← 返回首頁</button>
        {isAdmin && editor.isEditing && <button onClick={handleDelete} style={{ marginLeft: '10px', padding: '6px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>🗑️ 刪除</button>}
        {editor.isEditing ? (
          <input value={editor.editMetadata.title || ''} onChange={e => editor.setEditMetadata({...editor.editMetadata, title: e.target.value})} style={{...inputStyle, fontSize: '18px', fontWeight: 'bold', flex: 1, margin: '0 15px'}} />
        ) : (
          <h2 style={{ marginLeft: '15px' }}>{tripDataSource.metadata?.title}</h2>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} title="切換主題">{isDarkMode ? '☀️' : '🌙'}</button>
          {isAdmin && !editor.isEditing && <button onClick={editor.startEditing} style={{ padding: '6px 12px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>✏️ 編輯</button>}
          {isAdmin && editor.isEditing && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={editor.cancelEditing} style={{ padding: '6px 12px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>取消</button>
              <button onClick={handleSave} disabled={editor.isAutoFilling} style={{ padding: '6px 12px', backgroundColor: editor.isAutoFilling ? '#ccc' : '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: editor.isAutoFilling ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>💾 寫入</button>
            </div>
          )}
        </div>
      </div>

      {/* --- 摘要資訊區塊 --- */}
      <div className="summary-section">
        {/* 手帳圖示 */}
        <div className="summary-item">
          <span className="label">手帳圖示</span>
          {editor.isEditing ? <input value={editor.editMetadata.icon || '📓'} onChange={e => editor.setEditMetadata({...editor.editMetadata, icon: e.target.value})} style={inputStyle} /> : <span className="value" style={{ fontSize: '24px' }}>{tripDataSource.metadata?.icon || '📓'}</span>}
        </div>
        {/* 出發日期 */}
        <div className="summary-item">
          <span className="label">出發日期</span>
          {editor.isEditing ? <input value={editor.editMetadata.dates || ''} onChange={e => editor.setEditMetadata({...editor.editMetadata, dates: e.target.value})} style={inputStyle} /> : <span className="value">{tripDataSource.metadata?.dates}</span>}
        </div>
        {/* 同行人數 */}
        <div className="summary-item">
          <span className="label">同行人數</span>
          {editor.isEditing ? <input type="number" value={editor.editMetadata.membersCount || 1} onChange={e => editor.setEditMetadata({...editor.editMetadata, membersCount: e.target.value})} style={inputStyle} /> : <span className="value">{membersCount} 人</span>}
        </div>
        {/* 總里程 */}
        {tripTotalDistance > 0 && !isNaN(tripTotalDistance) && <div className="summary-item"><span className="label">總里程</span><span className="value" style={{color: '#16a085', fontWeight: 'bold'}}>👣 {tripTotalDistance.toFixed(1)} km</span></div>}
        {/* 所屬區域 */}
        <div className="summary-item">
          <span className="label">所屬區域</span>
          {editor.isEditing ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
              {JAPAN_MAP_DATA.map(reg => (
                <label key={reg.id} style={{ fontSize: '14px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={(editor.editMetadata.region || []).includes(reg.id)} onChange={e => {
                    const currentRegions = editor.editMetadata.region || [];
                    const newRegions = e.target.checked ? [...currentRegions, reg.id] : currentRegions.filter(r => r !== reg.id);
                    editor.setEditMetadata({...editor.editMetadata, region: newRegions});
                  }} />
                  {reg.name}
                </label>
              ))}
            </div>
          ) : ( <span className="value">{Array.isArray(tripDataSource.metadata?.region) ? tripDataSource.metadata.region.map(r => JAPAN_MAP_DATA.find(data => data.id === r)?.name).filter(Boolean).join('、') : (tripDataSource.metadata?.region || '未分類')}</span> )}
        </div>
        {/* 狀態 */}
        <div className="summary-item">
            <span className="label">狀態</span>
            {editor.isEditing ? (
                <select value={editor.editMetadata.status || 'upcoming'} onChange={e => editor.setEditMetadata({...editor.editMetadata, status: e.target.value})} style={{...inputStyle, padding: '5px'}}>
                    <option value="upcoming">籌備中</option>
                    <option value="completed">已收錄</option>
                </select>
            ) : ( <span className="value">{tripDataSource.metadata?.status === 'completed' ? '✅ 已收錄' : '⌛ 籌備中'}</span> )}
        </div>
        {/* 相簿連結 */}
        <div className="summary-item" style={{ flex: 1.5 }}>
          <span className="label">相簿連結</span>
          {editor.isEditing ? <input type="text" value={editor.editMetadata.galleryLink || ''} onChange={e => editor.setEditMetadata({...editor.editMetadata, galleryLink: e.target.value})} placeholder="相簿網址" style={inputStyle} /> : ( tripDataSource.metadata?.galleryLink ? <a href={tripDataSource.metadata.galleryLink} target="_blank" rel="noopener noreferrer" className="value link">打開相簿 📸</a> : <span className="value" style={{ color: '#bdc3c7' }}>無</span> )}
        </div>
      </div>

      {/* --- 行程手帳區塊 --- */}
      <div className="schedule-section">
        <h3>📅 行程手帳</h3>
        {currentSchedule.map((day, idx) => (
          <div key={idx} className="day-card" style={{ position: 'relative' }}>
            {editor.isEditing && <button onClick={() => editor.handleRemoveScheduleDay(idx)} style={{ position: 'absolute', top: '15px', right: '15px', background: '#ff4757', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '12px' }}>🗑️ 刪除此日</button>}
            <div className="day-header" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {editor.isEditing ? (
                <div style={{ display: 'flex', gap: '10px', flex: 1, marginBottom: '10px', paddingRight: '70px' }}>
                  <input value={day.day || ''} onChange={e => editor.handleScheduleDayChange(idx, 'day', e.target.value)} placeholder="天數" style={{...inputStyle, width: '40px'}} />
                  <input value={day.date || ''} onChange={e => editor.handleScheduleDayChange(idx, 'date', e.target.value)} placeholder="日期" style={{...inputStyle, width: '100px'}} />
                  <input value={day.location || ''} onChange={e => editor.handleScheduleDayChange(idx, 'location', e.target.value)} placeholder="地點" style={{...inputStyle, width: '120px'}} />
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <h4 style={{letterSpacing: '1px', margin: 0}}>Day {day.day} - {day.date}</h4>
                  {day.dailyTotalDistance > 0 && !isNaN(day.dailyTotalDistance) && <span style={{ fontSize: '13px', color: '#16a085', marginLeft: '12px', fontWeight: 'bold', background: '#e8f8f5', padding: '2px 8px', borderRadius: '12px' }}>📍 今日移動約 {day.dailyTotalDistance.toFixed(1)} km</span>}
                  <span className="location-tag" style={{ marginLeft: '12px' }}>{day.location}</span>
                </div>
              )}
            </div>
            {editor.isEditing ? <input value={day.title || ''} onChange={e => editor.handleScheduleDayChange(idx, 'title', e.target.value)} placeholder="當日主標題" style={{...inputStyle, marginBottom: '15px'}} /> : <h5 className="day-title">{day.title}</h5>}
            <div className="activities-list">
              {day.activities.map((act, i) => (
                <React.Fragment key={i}>
                  {act.distanceFromPrev > 0 && !isNaN(act.distanceFromPrev) && (
                    <div style={{ margin: '4px 0 4px 6px', fontSize: '13px', color: '#7f8c8d', display: 'flex', alignItems: 'center' }}>
                      <div style={{ height: '24px', borderLeft: '2px dashed #bdc3c7', marginRight: '12px', marginLeft: '14px' }}></div>
                      <span style={{ background: '#f8f9fa', padding: '2px 8px', borderRadius: '12px', border: '1px solid #ecf0f1', color: '#95a5a6' }}>🚙 距離約 {act.distanceFromPrev.toFixed(1)} km</span>
                    </div>
                  )}
                  <div className="activity-item" style={{ flexDirection: editor.isEditing ? 'column' : 'row', gap: editor.isEditing ? '10px' : '0' }}>
                    {!editor.isEditing ? (
                      <>
                        <div className="time">{act.time}</div>
                        <div className="details">
                         <div className="act-title" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
  {act.type === 'food' && '🍽️ '}
  {act.type === 'transport' && '🚆 '}
  {act.type === 'hotel' && '🏨 '}
  {act.type === 'ticket' && '🎫 '}
  {(act.type === 'flight' || act.type === 'flight_intl') && '✈️ '} {/* 🌟 加入 flight_intl 的判斷 */}
  {act.type === 'other' && '🏷️ '}
  {act.title}
  {act.cost > 0 && <span style={costBadgeStyle}>💰 {formatNumber(act.cost)} {act.currency === 'twd' ? 'NT$' : '円'}</span>}
</div>
                          {act.note && <div className="act-note">{act.note}</div>}
                        </div>
                      </>
                    ) : (
                      <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px', border: '1px dashed #bdc3c7' }}>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                          <button onClick={() => editor.handleRemoveScheduleActivity(idx, i)} style={{ background: '#ff4757', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', flexShrink: 0 }}>✖</button>
                          <input value={act.time || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'time', e.target.value)} placeholder="時間" style={{...inputStyle, width: '80px'}} />
                          <select value={act.type || 'other'} onChange={e => editor.handleScheduleActivityChange(idx, i, 'type', e.target.value)} style={{...inputStyle, width: '95px', padding: '4px'}}>
  <option value="other">🏷️ 其他</option>
  <option value="flight">✈️ 國內/轉機</option> {/* 稍微改名以利區分 */}
  <option value="flight_intl">✈️ 國際機票</option> {/* 🌟 新增國際機票選項 */}
  <option value="food">🍽️ 餐食</option>
  <option value="transport">🚆 交通</option>
  <option value="hotel">🏨 住宿</option>
  <option value="ticket">🎫 票券</option>
</select>
                          <input value={act.title || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'title', e.target.value)} placeholder="活動名稱" style={{...inputStyle, flex: 1}} />
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingLeft: '34px', marginTop: '8px' }}>
                          <textarea value={act.note || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'note', e.target.value)} placeholder="備註細節" style={{...inputStyle, flex: 1, minHeight: '35px', minWidth: '200px'}} />
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '180px' }}>
                            {isLoaded ? (
                              <Autocomplete onLoad={(auto) => editor.onLoadAutocomplete(auto, idx, i)} onPlaceChanged={() => editor.onPlaceChanged(idx, i)}>
                                <input type="text" placeholder={act.lat ? `✅ 已綁定座標` : "🔍 搜尋地名..."} style={{...inputStyle, backgroundColor: act.lat ? '#e8f8f5' : '#fff', border: act.lat ? '1px solid #1abc9c' : '1px solid #bdc3c7', color: act.lat ? '#16a085' : 'inherit', fontWeight: act.lat ? 'bold' : 'normal', padding: '6px'}} />
                              </Autocomplete>
                            ) : ( <input placeholder="載入中..." disabled style={{...inputStyle, padding: '6px'}} /> )}
                            <div style={{ display: 'flex', gap: '5px' }}>
                              <input type="text" value={act.lat || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'lat', e.target.value)} placeholder="緯度(Lat)" style={{...inputStyle, fontSize: '12px', padding: '4px'}} />
                              <input type="text" value={act.lng || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'lng', e.target.value)} placeholder="經度(Lng)" style={{...inputStyle, fontSize: '12px', padding: '4px'}} />
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '5px', width: '180px' }}>
                            <input type="number" value={act.cost || ''} onChange={e => editor.handleScheduleActivityChange(idx, i, 'cost', e.target.value)} placeholder="💰 預估花費" style={inputStyle} />
                            <select value={act.currency || 'jpy'} onChange={e => editor.handleScheduleActivityChange(idx, i, 'currency', e.target.value)} style={{...inputStyle, width: '60px', padding: '4px'}}>
                              <option value="jpy">日圓</option><option value="twd">台幣</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
              {editor.isEditing && <button onClick={() => editor.handleAddScheduleActivity(idx)} style={{ width: '100%', padding: '8px', background: '#ecf0f1', border: '1px dashed #bdc3c7', borderRadius: '6px', cursor: 'pointer', color: '#34495e', marginTop: '10px' }}>➕ 增加此日紀錄</button>}
            </div>
          </div>
        ))}
        {editor.isEditing && (
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <button onClick={editor.handleAddScheduleDay} style={{ flex: 1, padding: '12px', background: '#d4edda', border: '2px dashed #28a745', borderRadius: '8px', cursor: 'pointer', color: '#155724', fontWeight: 'bold' }}>📅 ➕ 翻開全新的一天</button>
            <button onClick={editor.handleAutoFillCoordinates} disabled={editor.isAutoFilling} style={{ flex: 1, padding: '12px', background: editor.isAutoFilling ? '#f39c12' : '#f1c40f', border: 'none', borderRadius: '8px', cursor: editor.isAutoFilling ? 'not-allowed' : 'pointer', color: '#2c3e50', fontWeight: 'bold' }}>{editor.isAutoFilling ? '⏳ 智能掃描中...' : '✨ 全自動掃描座標'}</button>
          </div>
        )}
      </div>
      
      {/* --- 地圖區塊 --- */}
      <TripMap schedule={currentSchedule} isLoaded={isLoaded} totalDistance={tripTotalDistance} />
      
{/* --- 預算筆記區塊 --- */}
      <div className="budget-section" style={{ marginTop: '40px' }}>
        <h3>💰 花費筆記</h3>
        <div className="budget-card">
          {['jpy', 'twd'].map(currency => {
            const currencySymbol = currency === 'jpy' ? '円' : 'NT$';
            const title = currency === 'jpy' ? '🇯🇵 日幣支出 (JPY)' : '🇹🇼 台幣預付 (TWD)';
            const items = tripDataSource.budget?.[currency] || {};

            // 🌟 智慧配色區：根據深色/淺色模式自動切換顏色
            const cardBg = isDarkMode ? '#2d3436' : '#fff';
            const titleColor = isDarkMode ? '#74b9ff' : '#7f8c8d';
            const borderColor = isDarkMode ? '#636e72' : '#ecf0f1';
            const textColor = isDarkMode ? '#dfe6e9' : '#2d3436';
            const subTextColor = isDarkMode ? '#b2bec3' : '#636e72';

            return (
              <div key={currency} style={{ marginBottom: '25px', background: cardBg, padding: '15px', borderRadius: '12px', color: textColor, transition: '0.3s' }}>
                <h4 style={{ margin: '0 0 15px 0', color: titleColor, borderBottom: `1px solid ${borderColor}`, paddingBottom: '8px' }}>{title}</h4>
                {Object.entries(items).map(([key, value]) => {
                  const itemTotal = (typeof value === 'object' && value !== null) ? (value.total || 0) : value;
                  const subItems = (typeof value === 'object' && value !== null) ? (value.subItems || []) : [];
                  
                  return (
                    <div key={key} style={{ marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '5px' }}>
                        <span>{getBudgetLabel(key, membersCount)}</span>
                        <span>{formatNumber(itemTotal)} {currencySymbol}</span>
                      </div>
                      {subItems.length > 0 && (
                        <div style={{ paddingLeft: '20px', fontSize: '13px', color: subTextColor, borderLeft: `2px solid ${borderColor}`, margin: '5px 0 10px 5px' }}>
                          {subItems.map((sub, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', margin: '3px 0' }}>
                              <span>• {sub.name}</span>
                              <span>{formatNumber(sub.cost)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {editor.isEditing && (
                        <button onClick={() => editor.handleRemoveBudgetItem(currency, key)} style={{ color: '#ff7675', fontSize: '11px', background: 'none', border: 'none', cursor: 'pointer', marginTop: '5px' }}>
                          🗑️ 刪除此分類
                        </button>
                      )}
                    </div>
                  );
                })}
                {editor.isEditing && (
                  <button onClick={() => editor.handleAddBudgetItem(currency)} style={{ width: '100%', padding: '8px', backgroundColor: isDarkMode ? '#34495e' : '#f8f9fa', color: textColor, border: `1px dashed ${borderColor}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
                    ➕ 新增分類 ({currency === 'jpy' ? '日幣' : '台幣'})
                  </button>
                )}
              </div>
            );
          })}

          {/* 總花費估算卡片，也加上深色模式配色 */}
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: isDarkMode ? '#1e372b' : '#f0fdf4', borderRadius: '12px', border: `1px solid ${isDarkMode ? '#27ae60' : '#bbf7d0'}`, transition: '0.3s' }}>
            <h4 style={{ margin: '0 0 15px 0', color: isDarkMode ? '#2ecc71' : '#166534', fontSize: '18px' }}>📈 總花費估算</h4>
            {exchangeRate ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: isDarkMode ? '#a9dfbf' : '#15803d', fontSize: '15px' }}><span>即時匯率基準：</span><span style={{ fontWeight: 'bold' }}>1 JPY = {exchangeRate.toFixed(4)} TWD</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: isDarkMode ? '#7dcea0' : '#3f6212', fontSize: '14px' }}><span>日幣合計換算 ({formatNumber(totalJPY)} 円)：</span><span>約 NT$ {formatNumber(Math.round(totalJPY * exchangeRate))}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: isDarkMode ? '#7dcea0' : '#3f6212', fontSize: '14px' }}><span>台幣合計：</span><span>NT$ {formatNumber(totalTWD)}</span></div>
                <div style={{ borderTop: `2px solid ${isDarkMode ? '#27ae60' : '#bbf7d0'}`, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: isDarkMode ? '#2ecc71' : '#166534', fontSize: '16px' }}>總費用估算：</span>
                  <span style={{ fontWeight: 'bold', color: isDarkMode ? '#2ecc71' : '#166534', fontSize: '24px' }}>NT$ {formatNumber(Math.round(totalJPY * exchangeRate) + totalTWD)}</span>
                </div>
              </div>
            ) : ( <div style={{ color: isDarkMode ? '#2ecc71' : '#15803d', fontSize: '14px' }}>🔄 正在連線銀行抓取匯率...</div> )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;