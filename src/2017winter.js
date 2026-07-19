// src/2017winter.js

export const importedMetadata = {
  title: "2017 冬季關西 美山與琵琶湖玩雪之旅",
  dates: "2017/01/24 - 2017/01/28",
  membersCount: 5, // 原定6人，實際5人成行 (4大1小)
  icon: "❄️", // 冬季雪景專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 36886 // 國際線：虎航 TPE-KIX 往返 (6人機票費用，1人未搭乘)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/24", location: "大阪/京都", title: "飛往關西與抵達京都",
    activities: [
      { time: "16:20", type: "flight", title: "台北飛大阪關西 (IT212)", note: "19:45 抵達關西機場 (KIX)", cost: "", currency: "twd" },
      { time: "20:30", type: "transport", title: "搭車前往京都", note: "關西機場出發往京都站", cost: "", currency: "jpy" },
      { time: "24:00", type: "hotel", title: "入住 ホテル法華クラブ京都", note: "連住4泊 (1間單人房+1間雙床房合計)", cost: 75600, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/25", location: "美山", title: "美山町合掌村賞雪",
    activities: [
      { time: "08:05", type: "transport", title: "JR嵯峨野線：京都往日吉", note: "搭乘往福知山車廂 (08:05-09:01)", cost: 760, currency: "jpy" },
      { time: "09:05", type: "transport", title: "轉乘南丹市營巴士", note: "日吉往「北」站 (知見口行) (09:05-09:54)", cost: 610, currency: "jpy" },
      { time: "10:00", type: "location", title: "美山茅葺之里 賞雪", note: "漫步夢幻雪國童話村", cost: "", currency: "jpy" },
      { time: "12:04", type: "transport", title: "搭車返回京都", note: "巴士往日吉，轉乘JR至園部再回京都 (備案班次14:59發車)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/26", location: "滋賀", title: "琵琶湖 Valley 滑雪體驗",
    activities: [
      { time: "08:56", type: "transport", title: "JR湖西線：京都往志賀", note: "約40分鐘車程抵達志賀站", cost: "", currency: "jpy" },
      { time: "10:00", type: "transport", title: "轉乘巴士與纜車上山", note: "前往 Biwako Valley 琵琶湖滑雪場", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "琵琶湖 Valley 滑雪場", note: "俯瞰琵琶湖絕景滑雪", cost: "", currency: "jpy" },
      { time: "15:15", type: "transport", title: "搭車返回京都", note: "志賀回京都 (備案班次 16:02)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/27", location: "京都", title: "京都市區親子同樂",
    activities: [
      { time: "10:00", type: "location", title: "京都市動物園", note: "親近動物生態", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "京都水族館", note: "觀賞海豚秀與巨大山椒魚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "01/28", location: "大阪/桃園", title: "臨空城購物與賦歸",
    activities: [
      { time: "10:00", type: "transport", title: "辦理退房，前往大阪", note: "", cost: "", currency: "jpy" },
      { time: "11:30", type: "location", title: "臨空城 Outlet (Rinku Premium Outlets)", note: "搭機前最後採買", cost: "", currency: "jpy" },
      { time: "17:30", type: "transport", title: "前往關西機場報到", note: "", cost: "", currency: "jpy" },
      { time: "19:30", type: "flight", title: "大阪關西飛台北 (IT211)", note: "21:50 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];