// src/2014sep.js

export const importedMetadata = {
  title: "2014 秋季九州 觀光鐵道與指宿砂浴",
  dates: "2014/09/05 - 2014/09/09",
  membersCount: 5, // 4位大人 + 1位孩童
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 33812 // 國泰航空 CX510/CX511 (4大1小機票總計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "09/05", location: "福岡", title: "抵達博多",
    activities: [
      { time: "17:40", type: "flight", title: "台北飛福岡 (CX510)", note: "20:55 抵達福岡機場 (FUK)", cost: "", currency: "twd" },
      { time: "22:00", type: "hotel", title: "入住 ＪＲ九州ホテル ブラッサム博多中央", note: "1泊 朝食付 (預約號: 5376472507, 2房)", cost: 28080, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "09/06", location: "鹿兒島", title: "櫻島火山與黑豬肉美食",
    activities: [
      { time: "08:31", type: "transport", title: "新幹線みずほ 601号 往鹿兒島", note: "09:48 抵達鹿兒島中央。購買 WELCOME CUTE 1 DAY Pass", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "鹿兒島市區觀光", note: "City view Bus 東四: 城山展望台 - 仙巖園 - 鹿兒島水族館前", cost: "", currency: "jpy" },
      { time: "15:30", type: "location", title: "櫻島觀光", note: "計程車觀光 或 櫻島周遊巴士 (A路線15:30 / B路線16:35，一周60分)", cost: "", currency: "jpy" },
      { time: "18:30", type: "food", title: "晚餐：鹿兒島特色美食", note: "名單：とんかつ かつ寿 (黑豬排, B1) 或 吾愛人 中央西口 (鄉土料理)", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "入住 ホテルアービック鹿児島", note: "1泊", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "09/07", location: "指宿", title: "指宿之玉手箱與白水館",
    activities: [
      { time: "10:00", type: "other", title: "AUM 營業採買", note: "", cost: "", currency: "jpy" },
      { time: "11:57", type: "transport", title: "觀光特急 指宿のたまて箱 3号", note: "12:48 抵達指宿", cost: "", currency: "jpy" },
      { time: "13:30", type: "location", title: "指宿周邊觀光", note: "西大山 - 長崎鼻 - 唐船峽 - 池田湖", cost: "", currency: "jpy" },
      { time: "17:00", type: "hotel", title: "入住 指宿温泉 指宿白水館", note: "1泊 夕朝食付 (預約號: 02C7G4WC, 2房合計估算)", cost: 73440, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "09/08", location: "博多", title: "返回福岡",
    activities: [
      { time: "09:34", type: "transport", title: "指宿返回鹿兒島轉博多", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "福岡市區觀光與採買", note: "", cost: "", currency: "jpy" },
      { time: "23:00", type: "hotel", title: "入住 博多都ホテル", note: "1泊 朝食付 (預約號: 02CCF9R4, 2房)", cost: 25600, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "09/09", location: "福岡/桃園", title: "賦歸",
    activities: [
      { time: "10:45", type: "flight", title: "福岡飛台北 (CX511)", note: "12:10 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];