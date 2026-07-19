// src/2014winter.js

export const importedMetadata = {
  title: "2014 冬季關西 大阪與和歌山白濱溫泉之旅",
  dates: "2014/01/28 - 2014/02/02",
  membersCount: 5, // 4大1小
  icon: "♨️", // 溫泉專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 0 // 國際線機票：待補登
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/28", location: "大阪", title: "抵達關西與入住天王寺",
    activities: [
      { time: "10:00", type: "flight", title: "飛往大阪關西 (KIX)", note: "機票明細待查", cost: "", currency: "twd" },
      { time: "14:00", type: "hotel", title: "入住 天王寺都ホテル (天王寺都飯店)", note: "連住2泊 (預約號: 5356421988/5356421997, 2房合計)", cost: 46400, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/29", location: "大阪/神戶", title: "海遊館與神戶牛",
    activities: [
      { time: "09:30", type: "location", title: "大阪海遊館", note: "欣賞豐富海洋生態", cost: "", currency: "jpy" },
      { time: "18:00", type: "food", title: "晚餐：神戶牛 Mouriya (モーリヤ)", note: "享受頂級神戶牛排", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "續住 天王寺都飯店", note: "第2晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/30", location: "白濱", title: "包車漫遊白濱與入住海舟",
    activities: [
      { time: "09:00", type: "transport", title: "包車前往和歌山白濱", note: "從大阪出發", cost: "", currency: "jpy" },
      { time: "11:00", type: "location", title: "白濱景點巡禮", note: "三段壁、千疊敷、円月島 (雨天備案)", cost: "", currency: "jpy" },
      { time: "17:00", type: "hotel", title: "入住 浜千鳥の湯 海舟", note: "1泊2食 檜木露天風呂付和洋室 (預約號: 0MVVPEF1, 2房合計, 已扣除點數)", cost: 78000, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/31", location: "白濱/大阪", title: "冒險大世界與返回大阪",
    activities: [
      { time: "10:00", type: "location", title: "Adventure World (冒險大世界)", note: "觀賞熊貓與野生動物", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "搭車返回大阪", note: "", cost: "", currency: "jpy" },
      { time: "22:00", type: "hotel", title: "入住 天王寺都ホテル (天王寺都飯店)", note: "連住2泊 (預約號: 5356423071, 2房合計)", cost: 51200, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "02/01", location: "京都", title: "京都古都一日遊",
    activities: [
      { time: "09:00", type: "location", title: "京都一日遊", note: "從天王寺出發前往京都", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "續住 天王寺都飯店", note: "第2晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "02/02", location: "大阪/桃園", title: "賦歸",
    activities: [
      { time: "10:00", type: "transport", title: "前往關西機場", note: "", cost: "", currency: "jpy" },
      { time: "12:00", type: "flight", title: "大阪關西飛台北", note: "平安返抵台灣", cost: "", currency: "twd" }
    ]
  }
];