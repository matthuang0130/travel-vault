// src/2015spring.js

export const importedMetadata = {
  title: "2015 春季關東 輕井澤度假與小諸上田雙城追櫻之旅",
  dates: "2015/04/16 - 2015/04/19",
  membersCount: 3, // 2大1小 (1大長榮里程、1大1小ANA購買)
  icon: "🌸", // 春季賞櫻專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 0 // 國際線：長榮航空(里程兌換)與ANA全日空，金額可後續自行於手帳內編輯補登
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "04/16", location: "東京", title: "飛往東京與抵達八重洲",
    activities: [
      { time: "16:00", type: "flight", title: "長榮航空飛東京成田/羽田 (BR190)", note: "19:55 抵達東京 (1位大人里程兌換)", cost: "", currency: "twd" },
      { time: "16:45", type: "flight", title: "ANA全日空飛東京 (NH854)", note: "20:50 抵達東京 (1大1小購買)", cost: "", currency: "twd" },
      { time: "22:00", type: "hotel", title: "入住 スーパーホテルＬｏｈａｓ東京駅八重洲中央口 八重桜の湯", note: "1泊 享受東京站前天然溫泉", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "04/17", location: "輕井澤", title: "輕井澤購物與王子飯店牛排吃到飽",
    activities: [
      { time: "09:00", type: "transport", title: "搭乘新幹線前往輕井澤", note: "東京站出發", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "輕井澤王子購物廣場 (Karuizawa Prince Shopping Plaza)", note: "Outlet 逛街購物", cost: "", currency: "jpy" },
      { time: "18:00", type: "food", title: "晚餐：輕井澤王子大飯店牛排吃到飽", note: "享受豪華主廚牛排美饌", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "入住 軽井沢プリンスホテル (輕井澤王子大飯店)", note: "1泊 徜徉於高原度假村", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "04/18", location: "小諸/上田/東京", title: "小諸上田雙城追櫻與品川一蘭拉麵",
    activities: [
      { time: "09:00", type: "location", title: "小諸城址領之公園賞櫻", note: "欣賞古城與春櫻交織美景", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "上田城跡公園賞櫻", note: "真田氏居城追櫻", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "返回輕井澤拿取行李，搭乘新幹線重返東京", note: "", cost: "", currency: "jpy" },
      { time: "19:30", type: "food", title: "晚餐：一蘭拉麵", note: "享用經典豚骨拉麵", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 京急ＥＸイン品川駅前 (シナガワ グース内)", note: "1泊 品川站前便利住宿", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "04/19", location: "東京/台北", title: "平安賦歸",
    activities: [
      { time: "12:40", type: "flight", title: "長榮航空返回台北 (BR191)", note: "15:05 抵達台北", cost: "", currency: "twd" },
      { time: "13:20", type: "flight", title: "ANA全日空返回台北 (NH853)", note: "15:45 抵達台北", cost: "", currency: "twd" }
    ]
  }
];