// src/2016spring.js

export const importedMetadata = {
  title: "2016 春季福岡 賞櫻與麵包超人博物館之旅",
  dates: "2016/03/30 - 2016/04/02",
  membersCount: 6, // 4大2小 (含1小1嬰)
  icon: "🌸", // 春季賞櫻專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 19320 // 國際線：威航 V Air 台北-福岡往返 (4大1小1嬰兒合計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "03/30", location: "福岡", title: "飛往福岡與入住博多",
    activities: [
      { time: "11:40", type: "transport", title: "專車送機前往桃園機場", note: "", cost: "", currency: "twd" },
      { time: "14:50", type: "flight", title: "台北飛福岡 (威航 ZV212)", note: "18:00 抵達福岡機場 (FUK)", cost: "", currency: "twd" },
      { time: "20:00", type: "hotel", title: "入住 JR九州ホテル ブラッサム博多中央", note: "連住3泊 (預約號: IN0206929693, 2房合計, 兩小同床不加價)", cost: 98280, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "03/31", location: "福岡", title: "西公園賞櫻",
    activities: [
      { time: "10:00", type: "location", title: "西公園賞櫻", note: "觀賞櫻花與猴子表演", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "續住 JR九州ホテル ブラッサム博多中央", note: "第2晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "04/01", location: "福岡", title: "麵包超人博物館與運河城",
    activities: [
      { time: "10:00", type: "location", title: "福岡麵包超人兒童博物館", note: "交通：中洲川端站 6 號出口", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "博多運河城 (Canal City)", note: "市區逛街購物", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "續住 JR九州ホテル ブラッサム博多中央", note: "第3晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "04/02", location: "福岡/桃園", title: "海之中道與賦歸",
    activities: [
      { time: "09:30", type: "location", title: "海之中道海濱公園", note: "騎腳踏車、看動物", cost: "", currency: "jpy" },
      { time: "13:30", type: "transport", title: "搭船前往福岡塔", note: "橫渡博多灣", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "福岡塔與大濠公園", note: "市區漫步", cost: "", currency: "jpy" },
      { time: "16:30", type: "transport", title: "前往福岡機場", note: "", cost: "", currency: "jpy" },
      { time: "19:00", type: "flight", title: "福岡飛台北 (威航 ZV213)", note: "20:15 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];