// src/JapanMapComponent.jsx 更新版

import React from 'react';

// 這個元件負責接收資料 (mapData) 並畫出 SVG
// 修正了 viewBox 座標範圍和樣式，讓地圖看起來更精緻且融入頁面
const JapanMapComponent = ({ mapData, selectedRegion, onSelectRegion, isDarkMode }) => {
  // 設定淺色模式和深色模式的顏色
  const fillColor = isDarkMode ? '#1a1a1a' : '#ffffff'; // 都道府縣填充色
  const strokeColor = isDarkMode ? '#4a4a4a' : '#888888'; // 邊框顏色
  const hoverColor = '#4a90e2'; // 滑鼠懸停顏色
  const selectedColor = '#f5a623'; // 選取顏色

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px', // 限制地圖最大寬度
      margin: '0 auto', // 水平置中
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      {/* 👇 關鍵修正：一個更精確的 viewBox，只包覆地圖本身，避免縮在左上角。👇 */}
      {/* 這裡使用基於常見日本地圖的座標大致範圍微調： viewBox="200 100 650 900" */}
      <svg
        viewBox="0 0 560 745"
        style={{
          width: '100%',
          height: 'auto', // 讓高度根據寬度自動縮放
          maxHeight: '400px', // 限制最大高度，避免佔用太多垂直空間
          // background: isDarkMode ? '#1a1a1a' : '#f5f5f5', // 取消測試背景，讓地圖看起來更融入
          // borderRadius: '8px' // 取消測試圓角
        }}
      >
        {mapData.map((region) => (
          <path
            key={region.id}
            d={region.path}
            // 根據選取狀態設定顏色
            fill={region.id === selectedRegion ? selectedColor : fillColor}
            stroke={strokeColor}
            strokeWidth="2"
            style={{
              cursor: 'pointer',
              transition: 'fill 0.2s', // 顏色漸變效果
            }}
            onMouseEnter={(e) => (e.target.style.fill = hoverColor)}
            onMouseLeave={(e) => (e.target.style.fill = (region.id === selectedRegion ? selectedColor : fillColor))}
            onClick={() => onSelectRegion(region.id)} // 點擊時觸發選取
          />
        ))}
      </svg>
    </div>
  );
};

export default JapanMapComponent;