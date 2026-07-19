// src/2023winter.js

export const importedMetadata = {
  title: "2023 冬季日本 函館賞雪與仙台大移動",
  dates: "2023/01/15 - 2023/01/24",
  membersCount: 6, // 4位大人 + 2位孩童
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 89328, // 長榮航空 TPE-NRT / HND-TSA (4大2小精算總計)
    airportTransfer: 4501 // 成田包車前往羽田
  },
  jpy: {
    airfare_domestic: 55840 // AIRDO 羽田飛函館 (6人合計)
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/15", location: "成田/羽田", title: "飛往東京與機場包車",
    activities: [
      { time: "15:20", type: "flight", title: "台北飛成田 (BR196)", note: "19:20 抵達成田機場", cost: "", currency: "twd" },
      { time: "20:10", type: "transport", title: "成田包車前往羽田", note: "Toyota Hiace 9人座 (訂單: FZQ923351)", cost: "", currency: "twd" },
      { time: "22:00", type: "hotel", title: "入住 羽田機場周邊飯店", note: "東急羽田卓越大飯店 (準備明日早班機)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/16", location: "函館", title: "前進北海道與函館夜景",
    activities: [
      { time: "06:55", type: "flight", title: "羽田飛函館 (ADO 057)", note: "08:15 抵達函館", cost: "", currency: "jpy" },
      { time: "10:00", type: "location", title: "青函連絡船紀念館 摩周丸", note: "", cost: "", currency: "jpy" },
      { time: "12:00", type: "location", title: "金森紅磚倉庫 與 午餐", note: "幸運小丑漢堡", cost: "", currency: "jpy" },
      { time: "17:00", type: "location", title: "函館山夜景與晚餐", note: "世界三大夜景", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "入住 東急ステイ函館朝市 灯の湯", note: "連住3泊 (預約號: TAD15ADF7FAD6, 2房合計)", cost: 75243, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/17", location: "函館", title: "釣烏賊與五稜郭塔",
    activities: [
      { time: "09:00", type: "location", title: "函館朝市釣烏賊", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "熱帶植物園 餵猴子", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "五稜郭塔 觀賞夜景", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/18", location: "大沼/函館", title: "大沼雪景與元町巡禮",
    activities: [
      { time: "09:30", type: "location", title: "大沼國定公園", note: "賞雪與體驗冰上釣公魚", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "函館山元町 巡禮", note: "品嚐世界最好吃可麗餅", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "01/19", location: "仙台", title: "新幹線大移動與仙台牛舌",
    activities: [
      { time: "10:00", type: "transport", title: "搭乘新幹線前往仙台", note: "北海道新幹線直達", cost: "", currency: "jpy" },
      { time: "14:00", type: "food", title: "仙台牛舌午餐", note: "", cost: "", currency: "jpy" },
      { time: "16:00", type: "location", title: "AEON 採買", note: "", cost: "", currency: "jpy" },
      { time: "20:00", type: "food", title: "晚餐：一蘭拉麵", note: "", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 ダイワロイネットホテル仙台西口", note: "連住3泊 (預約號: IN0847160387 等, 2房合計)", cost: 155520, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "01/20", location: "仙台", title: "採草莓與仙台城跡",
    activities: [
      { time: "09:30", type: "location", title: "山下站 採草莓", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "仙台城跡", note: "伊達政宗騎馬像", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "晚餐與 Outlet 購物", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 7, date: "01/21", location: "青森", title: "新幹線北上青森打卡",
    activities: [
      { time: "09:00", type: "transport", title: "新幹線前往青森", note: "", cost: "", currency: "jpy" },
      { time: "11:00", type: "location", title: "睡魔館與淺蟲溫泉打卡", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "transport", title: "返回仙台", note: "晚上仙台市區飄雪", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "01/22", location: "東京", title: "重返東京與東京鐵塔",
    activities: [
      { time: "10:00", type: "transport", title: "新幹線：仙台往東京", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "竹芝地區散策", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "東京鐵塔登塔與夜景", note: "", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 ホテルマイステイズプレミア浜松町", note: "連住2泊 (預約號: IK0830275104 等, 3房合計)", cost: 190340, currency: "jpy" }
    ]
  },
  {
    day: 9, date: "01/23", location: "東京", title: "花園與澀谷天空",
    activities: [
      { time: "10:00", type: "location", title: "HANA・BIYORI 溫室植物園", note: "京王集團營運的絕美花園", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "SHIBUYA SKY 澀谷天空", note: "東京最美百萬夜景", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 10, date: "01/24", location: "羽田/松山", title: "滿載而歸",
    activities: [
      { time: "12:15", type: "flight", title: "羽田飛松山 (BR191)", note: "15:00 抵達台北松山機場 (TSA)", cost: "", currency: "twd" }
    ]
  }
];