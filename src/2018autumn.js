// src/2018autumn.js

export const importedMetadata = {
  title: "2018 秋季北海道 札幌與登別溫泉之旅",
  dates: "2018/09/15 - 2018/09/20",
  membersCount: 4, // 2大2小
  icon: "🍁", // 秋季楓葉圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 30000 // 國際線：酷航 TPE-CTS 往返 (暫以大人票價7500x4計算)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "09/15", location: "札幌", title: "飛往新千歲與抵達札幌",
    activities: [
      { time: "12:05", type: "flight", title: "台北飛新千歲 (酷航 TR 892)", note: "16:55 抵達新千歲機場 (CTS)", cost: "", currency: "twd" },
      { time: "18:00", type: "transport", title: "搭車前往札幌市區", note: "", cost: "", currency: "jpy" },
      { time: "24:00", type: "hotel", title: "入住 東横INN札幌駅北口", note: "1泊 (預約號: 6219210)", cost: 9500, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "09/16", location: "札幌", title: "羊之丘與三井 Outlet",
    activities: [
      { time: "10:00", type: "location", title: "羊之丘展望台", note: "札幌東急前 2 號站牌搭乘 89 號公車 (約一小時一班)", cost: "", currency: "jpy" },
      { time: "13:00", type: "food", title: "午餐：福助", note: "", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "三井 OUTLET 採買", note: "", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 センチュリーロイヤルホテル (札幌世紀皇家)", note: "3泊連住開始 (預約號: IK0321834414, 已扣除點數)", cost: 39060, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "09/17", location: "札幌", title: "滝野すずらん公園",
    activities: [
      { time: "10:00", type: "location", title: "滝野すずらん公園 (瀧野鈴蘭丘陵公園)", note: "親子自然公園放電行程", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "續住 札幌世紀皇家", note: "第2晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "09/18", location: "札幌", title: "白色戀人與豐收節",
    activities: [
      { time: "10:00", type: "location", title: "白色戀人觀光工廠", note: "觀賞餅乾製作與拍照", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "札幌秋季豐收節 (Autumn Fest)", note: "大通公園品嚐北海道美食", cost: "", currency: "jpy" },
      { time: "18:30", type: "location", title: "藻岩山夜景", note: "搭乘纜車欣賞日本新三大夜景", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "續住 札幌世紀皇家", note: "第3晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "09/19", location: "登別", title: "前往登別溫泉與熊牧場",
    activities: [
      { time: "09:32", type: "transport", title: "火車：札幌往登別", note: "第八月台發車 (09:32-10:43 / 10:44-11:56)", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "登別熊牧場", note: "搭乘纜車上山看棕熊", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルまほろば (Hotel Mahoroba)", note: "1泊2食 (預約號: IC0322267792, 含主題樂園門票, 晚餐蟹腳非常好吃)", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "09/20", location: "千歲/桃園", title: "Rera Outlet 與賦歸",
    activities: [
      { time: "10:00", type: "transport", title: "登別溫泉出發往新千歲", note: "搭乘火車", cost: "", currency: "jpy" },
      { time: "11:30", type: "location", title: "千歲 Rera Outlet", note: "搭機前最後購物行程", cost: "", currency: "jpy" },
      { time: "19:45", type: "flight", title: "新千歲飛台北 (酷航 TR 893)", note: "23:10 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];