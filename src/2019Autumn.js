// src/2019Autumn.js

export const importedMetadata = {
  title: "2019 秋季關東 楓葉銀杏與河口湖之旅",
  dates: "2019/12/01 - 2019/12/07",
  membersCount: 6, // 大人4名 + 孩童2名
  icon: "🍁", // 秋天專屬楓葉圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 49466 // 國際線：長榮航空 TPE-NRT 往返 (4大2小)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "12/01", location: "東京", title: "抵達東京與大井町點燈",
    activities: [
      { time: "07:30", type: "flight", title: "台北飛東京成田 (BR192)", note: "11:15 抵達成田機場", cost: "", currency: "twd" },
      { time: "14:00", type: "location", title: "清澄白河庭園", note: "日式庭園散策", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "大井町點燈 (大井競馬場前)", note: "交通：都營大江戶線-大門-濱松町-轉東京MONORAIL", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 コンフォートホテル東京清澄白河", note: "連住3泊 含早餐 (預約號: 2019112810870419)", cost: 47600, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "12/02", location: "東京", title: "雨天備案：水族館與宇宙博物館",
    activities: [
      { time: "10:00", type: "location", title: "墨田水族館 或 東京巨蛋宇宙科學博物館 (TeNQ)", note: "室內行程備案", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "晴空塔超市採買", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "12/03", location: "東京", title: "東大銀杏與六義園夜楓",
    activities: [
      { time: "10:00", type: "location", title: "小石川後樂園", note: "交通：都營大江戶線 飯田橋站 C3出口", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "東京大學 銀杏大道", note: "交通：大江戶線 本鄉三丁目站", cost: "", currency: "jpy" },
      { time: "16:00", type: "location", title: "上野周邊散策", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "六義園夜楓 或 登晴空塔", note: "六義園交通：半藏門線永田町 換 南北線赤坂見附", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "12/04", location: "河口湖", title: "前往河口湖擁抱富士山",
    activities: [
      { time: "09:00", type: "transport", title: "計程車前往東京八重洲南口", note: "準備轉乘高速巴士", cost: "", currency: "jpy" },
      { time: "10:00", type: "transport", title: "高速巴士：東京往河口湖", note: "", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "入住 富ノ湖ホテル (富之湖飯店)", note: "1泊2食 富士山與湖景房 (預約號: 0XGL56AF)", cost: 46750, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "12/05", location: "河口湖/東京", title: "河口湖遊覽與重返東京",
    activities: [
      { time: "10:00", type: "location", title: "河口湖周邊一日遊", note: "欣賞富士山大自然美景", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "高速巴士：河口湖返回東京", note: "", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 コンフォートホテル東京清澄白河", note: "連住2泊 含早餐 (預約號: 2019112810870406)", cost: 44400, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "12/06", location: "東京(高尾山)", title: "高尾山紅葉狩",
    activities: [
      { time: "09:00", type: "location", title: "高尾山賞紅葉", note: "交通：大江戶線-新宿 轉乘京王線", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 7, date: "12/07", location: "東京/桃園", title: "滿載秋意賦歸",
    activities: [
      { time: "12:15", type: "flight", title: "東京成田飛台北 (BR191)", note: "15:00 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];