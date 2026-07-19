import { useState } from 'react';
import { generateSyncedBudget } from '../utils/calculations';

// 這就是我們的「編輯器功能包」
export const useTripEditor = (tripData) => {
  // 核心狀態：是否處於編輯模式
  const [isEditing, setIsEditing] = useState(false);
  
  // 編輯時使用的暫存資料狀態
  const [editBudget, setEditBudget] = useState(null);
  const [editMetadata, setEditMetadata] = useState(null);
  const [editSchedule, setEditSchedule] = useState(null); 
  
  // 編輯器 UI 需要的輔助狀態
  const [expandedItems, setExpandedItems] = useState({});
  const [isAutoFilling, setIsAutoFilling] = useState(false);
  const [autocompleteRefs, setAutocompleteRefs] = useState({});

  // ==========================================
  // 編輯模式的啟動與取消
  // ==========================================
  const startEditing = () => {
    setIsEditing(true);
    // 使用深拷貝(deep copy)來建立編輯用的資料，避免動到原始資料
    setEditBudget(JSON.parse(JSON.stringify(tripData?.budget || { jpy: {}, twd: {} })));
    setEditMetadata(JSON.parse(JSON.stringify(tripData?.metadata || {})));
    setEditSchedule(JSON.parse(JSON.stringify(tripData?.schedule || [])));
  };

  const cancelEditing = () => {
    setIsEditing(false);
    // 清空暫存資料
    setEditBudget(null);
    setEditMetadata(null);
    setEditSchedule(null);
    setExpandedItems({});
  };

  // ==========================================
  // 所有與「編輯」相關的 handle... 函式
  // ==========================================

  /* --- 預算相關編輯邏輯 --- */
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

  /* --- 行程表相關編輯邏輯 --- */
  const handleScheduleDayChange = (dayIdx, field, value) => { 
    setEditSchedule(prev => { 
      const newSchedule = [...prev]; 
      newSchedule[dayIdx] = { ...newSchedule[dayIdx], [field]: value }; 
      return newSchedule; 
    }); 
  };
  
const handleScheduleActivityChange = (dayIdx, actIdx, field, value) => { 
    setEditSchedule(prevSchedule => { 
      const newSchedule = [...prevSchedule]; 
      
      // 確保深拷貝，讓 React 能正確偵測到變更
      const newActivities = [...newSchedule[dayIdx].activities];
      newActivities[actIdx] = { ...newActivities[actIdx], [field]: value };
      newSchedule[dayIdx] = { ...newSchedule[dayIdx], activities: newActivities };

      // 🌟 關鍵修復：只要改了 費用 (cost)、幣別 (currency) 或「類別 (type)」，就立刻同步預算表！
      if (field === 'cost' || field === 'currency' || field === 'type') {
        setEditBudget(prevBudget => generateSyncedBudget(newSchedule, prevBudget));
      }

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

  /* --- 自動完成與自動掃描邏輯 --- */
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

  /**
   * 準備要存檔的最終資料
   */
  const getFinalDataForSave = () => {
    const finalSyncedBudget = generateSyncedBudget(editSchedule, editBudget);
    return {
        budget: finalSyncedBudget,
        metadata: editMetadata,
        schedule: editSchedule,
    };
  };

  // ==========================================
  // 將所有狀態和函式打包匯出
  // ==========================================
  return {
    isEditing,
    startEditing,
    cancelEditing,
    
    // 編輯中的資料
    editBudget,
    editMetadata,
    editSchedule,

    // 編輯器 UI 狀態
    isAutoFilling,
    expandedItems,
    
    // 中繼資料編輯
    setEditMetadata,
    
    // 所有編輯函式
    handleBudgetChange,
    handleAddBudgetItem,
    handleRemoveBudgetItem,
    toggleExpand,
    handleAddSubItem,
    handleSubItemChange,
    handleRemoveSubItem,
    handleScheduleDayChange,
    handleScheduleActivityChange,
    handleAddScheduleDay,
    handleRemoveScheduleDay,
    handleAddScheduleActivity,
    handleRemoveScheduleActivity,
    onLoadAutocomplete,
    onPlaceChanged,
    handleAutoFillCoordinates,
    
    // 存檔前的資料準備函式
    getFinalDataForSave
  };
};