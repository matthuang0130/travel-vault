// src/2020winter.js

export const importedMetadata = {
  title: "2020 冬季東北與九州 大縱走之旅",
  dates: "2020/01/22 - 2020/01/28",
  membersCount: 4, // 大人2名 + 孩童2名
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 45020,        // 國際線：華航 TPE-FUK 往返 (2大2小)
    airfare_domestic: 12348 // 國內線：日本航空 FUK-SDJ 往返 (4人合計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/22", location: "福岡", title: "出發與抵達福岡",
    activities: [
      { time: "16:30", type: "flight", title: "台北飛福岡 (CI116)", note: "19:35 抵達福岡機場 (FUK)", cost: "", currency: "twd" },
      { time: "24:00", type: "hotel", title: "入住 ダイワロイネットホテル博多冷泉", note: "1泊 素泊まり (預約號: 0MG86917, 扣除點數後金額)", cost: 7200, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/23", location: "福岡/仙台", title: "國內線大移動與仙台市區",
    activities: [
      { time: "09:20", type: "flight", title: "福岡飛仙台 (JL3531)", note: "11:00 抵達仙台機場 (J-AIR營運)", cost: "", currency: "twd" },
      { time: "12:00", type: "food", title: "仙台站前美食與散策", note: "品嚐牛舌、冷麵，站前周邊逛逛", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "入住 ホテルモントレ仙台 (仙台蒙特利酒店)", note: "連住4泊 (網路預約號: 20200123-110440)", cost: 43228, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/24", location: "盛岡", title: "小岩井農場雪景",
    activities: [
      { time: "09:50", type: "transport", title: "新幹線：仙台往盛岡", note: "10:29 抵達盛岡", cost: "", currency: "jpy" },
      { time: "11:00", type: "location", title: "小岩井農場散策", note: "體驗岩手雪國風光", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/25", location: "秋田", title: "田澤湖周遊",
    activities: [
      { time: "09:00", type: "transport", title: "搭乘新幹線前往田澤湖", note: "", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "田澤湖環湖巴士", note: "搭乘巴士環湖一周", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "01/26", location: "青森", title: "青森藝術與睡魔祭文化",
    activities: [
      { time: "08:06", type: "transport", title: "新幹線：仙台往新青森", note: "09:49 抵達", cost: "", currency: "jpy" },
      { time: "10:01", type: "transport", title: "搭乘接駁巴士往美術館", note: "10:12 抵達", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "青森一日遊", note: "青森縣立美術館、睡魔之家 WA RASSE、A-FACTORY 蘋果工廠", cost: "", currency: "jpy" },
      { time: "18:00", type: "transport", title: "搭乘新幹線返回仙台", note: "夜晚仙台市區飄雪", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "01/27", location: "仙台/福岡", title: "返回九州與一蘭拉麵",
    activities: [
      { time: "10:55", type: "flight", title: "仙台飛福岡 (JL3530)", note: "13:10 抵達福岡機場", cost: "", currency: "twd" },
      { time: "18:30", type: "food", title: "晚餐：一蘭拉麵", note: "", cost: "", currency: "jpy" },
      { time: "24:00", type: "hotel", title: "入住 ダイワロイネットホテル博多冷泉", note: "1泊 素泊まり (預約號: IN0453214399)", cost: 13900, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "01/28", location: "福岡/桃園", title: "太宰府散策與賦歸",
    activities: [
      { time: "10:00", type: "location", title: "太宰府天滿宮", note: "上午市區觀光", cost: "", currency: "jpy" },
      { time: "18:30", type: "flight", title: "福岡飛台北 (CI129)", note: "20:10 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];