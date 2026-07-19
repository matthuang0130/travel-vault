import React from 'react';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';

const mapContainerStyle = { 
  width: '100%', 
  height: '400px', 
  borderRadius: '12px', 
  marginTop: '20px', 
  border: '1px solid #bdc3c7' 
};
const defaultCenter = { lat: 36.2048, lng: 138.2529 };

const TripMapComponent = ({ schedule, isLoaded, totalDistance }) => {
  // 提取所有有效的座標點
  const markers = React.useMemo(() => {
    const points = [];
    if (!schedule || !Array.isArray(schedule)) return points;
    
    schedule.forEach(day => {
      if(day && day.activities && Array.isArray(day.activities)) {
        day.activities.forEach(act => {
          if (act && act.lat && act.lng) {
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

  if (!isLoaded) {
    return (
        <div style={{
            ...mapContainerStyle, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#f7f7f7',
            color: '#888'
        }}>
            地圖引擎載入中...
        </div>
    );
  }

  return (
    <div style={{ marginTop: '30px', marginBottom: '20px', position: 'relative' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#2c3e50', fontSize: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>
        📍 旅行軌跡地圖
      </h3>
      
      {totalDistance > 0 && !isNaN(totalDistance) && (
        <div style={{ 
          position: 'absolute', top: '55px', right: '10px', zIndex: 10, 
          background: 'rgba(255,255,255,0.95)', padding: '6px 12px', 
          borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', 
          fontWeight: 'bold', color: '#16a085', fontSize: '14px', 
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

export default TripMapComponent;