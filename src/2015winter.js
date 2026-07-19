// src/2015winter.js

export const importedMetadata = {
  title: "2015 冬季北九州 長崎與豪斯登堡之旅",
  dates: "2015/02/13 - 2015/02/20",
  membersCount: 5, // 大人4名 + 孩童1名
  icon: "🏰", // 豪斯登堡城堡圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 55186, // 國際線：國泰航空 TPE-FUK 往返 (4大1小)
    prepaid: 9760   // 北九州 JR Pass 5日券 (2440 x 4大)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "02/13", location: "福岡", title: "飛往福岡",
    activities: [
      { time: "17:50", type: "flight", title: "台北飛福岡 (CX510)", note: "21:00 抵達福岡機場 (FUK)", cost: "", currency: "twd" },
      { time: "22:00", type: "hotel", title: "入住 ＪＲ九州ホテル ブラッサム博多中央", note: "1泊 含早餐 (預約號: 08CPN23G, 2房合計)", cost: 30200, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "02/14", location: "長崎", title: "長崎市區巡禮",
    activities: [
      { time: "09:15", type: "transport", title: "特急かもめ11号 往長崎", note: "11:22 抵達長崎 (使用JR Pass)", cost: "", currency: "jpy" },
      { time: "12:00", type: "location", title: "哥巴拉花園 & 大浦天主堂", note: "", cost: "", currency: "jpy" },
      { time: "13:30", type: "food", title: "午餐：四海樓", note: "長崎中華街周邊", cost: "", currency: "jpy" },
      { time: "18:00", type: "location", title: "稻佐山夜景", note: "搭乘計程車前往", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 ホテルクオーレ長崎駅前", note: "需出示優惠卡", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "02/15", location: "豪斯登堡", title: "原爆資料館與豪斯登堡",
    activities: [
      { time: "09:30", type: "location", title: "長崎原爆資料館", note: "搭乘路面電車至松山町", cost: "", currency: "jpy" },
      { time: "13:00", type: "transport", title: "長崎前往豪斯登堡", note: "搭乘JR列車", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "豪斯登堡 (Huis Ten Bosch)", note: "使用 1.5 DAY Pass 入場", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 ホテルオークラＪＲハウステンボス", note: "1泊含朝食與門票 (預約號: 0AC29TJ7, 2房合計)", cost: 70200, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "02/16", location: "豪斯登堡/佐世保", title: "豪斯登堡樂園",
    activities: [
      { time: "09:00", type: "location", title: "豪斯登堡全日遊", note: "享受樂園設施與歐風美景", cost: "", currency: "jpy" },
      { time: "18:00", type: "transport", title: "豪斯登堡往佐世保", note: "", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 佐世保ワシントンホテル", note: "1泊含朝食 (預約號: 09C32AGG, 2房合計)", cost: 23600, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "02/17", location: "佐世保/福岡", title: "九十九島與返回博多",
    activities: [
      { time: "10:00", type: "location", title: "展望台與九十九島", note: "雨天備案：九十九島水族館 (海閃閃)", cost: "", currency: "jpy" },
      { time: "15:00", type: "transport", title: "佐世保返回博多", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ＪＲ九州ホテル ブラッサム博多中央", note: "3泊連住開始 (預約號: 08CQ2M2W, 2房合計)", cost: 90600, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "02/18", location: "太宰府", title: "太宰府天滿宮",
    activities: [
      { time: "10:00", type: "location", title: "太宰府天滿宮", note: "參拜與表參道散策", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "續住 ＪＲ九州ホテル ブラッサム博多中央", note: "第2晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 7, date: "02/19", location: "福岡", title: "博多自由活動",
    activities: [
      { time: "10:00", type: "location", title: "博多市區自由一日", note: "購物採買行程", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "續住 ＪＲ九州ホテル ブラッサム博多中央", note: "第3晚", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "02/20", location: "福岡/桃園", title: "賦歸",
    activities: [
      { time: "10:15", type: "flight", title: "福岡飛台北 (CX511)", note: "12:00 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];