import React from 'react';

// 這個版本使用最簡單、最直接的內聯樣式，不再依賴任何外部 CSS
const JapanMapComponent = ({ mapData, regionCounts, selectedRegion, onSelectRegion, isDarkMode }) => {
  if (!mapData || !Array.isArray(mapData)) {
    return null; // 如果沒有地圖資料，就什麼都不渲染
  }

  return (
    <>
      {/* SVG 作為底圖 */}
      <svg
        viewBox="0 0 800 800"
        style={{ width: '100%', display: 'block' }}
        aria-label="日本地圖"
      >
        {mapData.map((region) => (
          <path
            key={region.id}
            d={region.path}
            fill={selectedRegion === region.id ? '#f5a623' : (isDarkMode ? '#5c6370' : '#ecf0f1')}
            stroke={isDarkMode ? '#282c34' : '#bdc3c7'}
            strokeWidth={selectedRegion === region.id ? 2 : 1}
            onClick={() => onSelectRegion(region.id)}
            style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
          />
        ))}
      </svg>

      {/* HTML 文字覆蓋層 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // 讓滑鼠可以點擊穿透
        }}
      >
        {mapData.map((region) => {
          const count = regionCounts?.[region.id]?.count || 0;

          // 使用最可靠的百分比進行定位
          const posX = (region.textX / 800) * 100;
          const posY = (region.textY / 800) * 100;

          return (
            <div
              key={region.id}
              style={{
                position: 'absolute',
                left: `${posX}%`,
                top: `${posY}%`,
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: isDarkMode ? '#e0e0e0' : '#34495e',
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
                padding: '1px 5px',
                borderRadius: '3px',
              }}>
                {region.name}
              </span>
              {count > 0 && (
                <span style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: isDarkMode ? '#f5a623' : '#d35400',
                  marginTop: '2px',
                }}>
                  {`🚩 ${count}`}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JapanMapComponent;