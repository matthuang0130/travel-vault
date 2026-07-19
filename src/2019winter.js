// src/2019winter.js

export const importedMetadata = {
  title: "2019 冬季長野 松本滑雪與飯山雪洞之旅",
  dates: "2019/02/01 - 2019/02/07",
  membersCount: 4, // 大人2名 + 孩童2名
  icon: "⛄", // 冬季雪國專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 51786 // 國際線：國泰航空 TPE-NRT 往返 (2大2小總計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "02/01", location: "東京", title: "抵達東京成田",
    activities: [
      { time: "12:50", type: "flight", title: "台北飛東京成田 (CX450)", note: "16:55 抵達成田機場", cost: "", currency: "twd" },
      { time: "17:47", type: "transport", title: "搭乘成田特快 (N'EX) 前往東京", note: "備用班次: 18:19 / 18:52 / 19:15 / 19:50", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 東横INN日本橋税務署前", note: "1泊 (預約號: 5219973)", cost: 12065, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "02/02", location: "松本", title: "諏訪湖聖地巡禮",
    activities: [
      { time: "09:00", type: "transport", title: "東京出發前往松本", note: "", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "立石公園 與 諏訪湖", note: "《你的名字》系守湖取景地", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 天然温泉 梓の湯 ドーミーイン松本", note: "抵達松本第一晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "02/03", location: "松本", title: "松本城與市區巡禮",
    activities: [
      { time: "09:30", type: "location", title: "國寶 松本城", note: "北線巴士前往", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "松本市區散策", note: "大名町 (四柱神社、繩手通) 與 中町通", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "松本市美術館", note: "西線巴士前往", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "松本市內周遊巴士", note: "一日乘車券", cost: 500, currency: "jpy" },
      { time: "18:00", type: "location", title: "姨捨夜景 (取消)", note: "因天候不佳改期", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "續住 ドーミーイン松本", note: "3泊連住開始 (預約號: IN0347943756, 已扣除點數)", cost: 25635, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "02/04", location: "飯山", title: "飯山雪洞村體驗",
    activities: [
      { time: "08:08", type: "transport", title: "火車：松本往長野轉飯山", note: "松本(08:08)-長野(09:08) / 長野(09:32)-飯山(09:43) / 飯山(10:00)-信濃平(10:12)", cost: "", currency: "jpy" },
      { time: "11:00", type: "location", title: "飯山雪洞村 (かまくらの里)", note: "11:00 - 12:30 雪屋體驗", cost: "", currency: "jpy" },
      { time: "12:22", type: "transport", title: "巴士返回長野", note: "信濃平(12:22)-飯山(12:45) / 飯山(13:05)-長野(13:16)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "02/05", location: "富士見", title: "富士見滑雪場",
    activities: [
      { time: "08:51", type: "transport", title: "特急あずさ8号 往富士見", note: "09:30 抵達富士見站", cost: "", currency: "jpy" },
      { time: "10:00", type: "transport", title: "搭乘免費接駁車往滑雪場", note: "", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "富士見全景滑雪場", note: "玩雪與滑雪體驗", cost: "", currency: "jpy" },
      { time: "15:41", type: "transport", title: "返回松本", note: "富士見(15:41)-茅野(16:00) / 茅野(16:26)-松本", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "02/06", location: "東京/成田", title: "返回東京與JCB抽獎",
    activities: [
      { time: "10:00", type: "transport", title: "松本搭車返回東京", note: "", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "JCB 抽獎", note: "地點：JR有樂町站「銀座出口」右轉步行約2分鐘", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 ホテルマイステイズプレミア成田", note: "1泊 (預約號: IK0352177924, 已扣除點數)", cost: 9865, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "02/07", location: "成田/桃園", title: "Outlet購物與賦歸",
    activities: [
      { time: "10:00", type: "location", title: "成田周邊 Outlet 購物", note: "搭機前最後採買", cost: "", currency: "jpy" },
      { time: "15:15", type: "flight", title: "東京成田飛台北 (CX451)", note: "18:30 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];