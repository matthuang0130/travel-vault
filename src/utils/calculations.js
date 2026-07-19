// src/utils/calculations.js

/**
 * 根據 Haversine 公式計算兩個經緯度點之間的直線距離 (公里)
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
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

/**
 * 格式化數字，加上千分位逗號
 */
export const formatNumber = (num) => {
  if (num === undefined || num === null) return 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * 計算單一貨幣的總預算
 */
export const calculateCurrencyTotal = (currencyData) => {
  if (!currencyData || typeof currencyData !== 'object') return 0;
  return Object.entries(currencyData).reduce((sum, [key, item]) => {
    if (key.toLowerCase() === 'total') return sum;
    return sum + (Number((typeof item === 'object' && item !== null) ? item.total : item) || 0);
  }, 0);
};

/**
 * 從行程表自動同步並生成預算資料
 */
export const generateSyncedBudget = (schedule, existingBudget = { jpy: {}, twd: {} }) => {
  const cleanBudget = JSON.parse(JSON.stringify(existingBudget || { jpy: {}, twd: {} }));
  
  // 清理舊的同步資料
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

  // 從行程中提取花費
  safeSchedule.forEach(day => {
    if (day && day.activities && Array.isArray(day.activities)) {
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

  // 合併到預算中
  ['jpy', 'twd'].forEach(curr => {
    if (Object.keys(syncedData[curr]).length > 0) {
      if (!cleanBudget[curr]) cleanBudget[curr] = {};
      Object.assign(cleanBudget[curr], syncedData[curr]);
    }
  });
  return cleanBudget;
};
