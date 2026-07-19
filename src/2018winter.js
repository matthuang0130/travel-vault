// src/2018winter.js

export const importedMetadata = {
  title: "2018 冬季北陸 合掌村與勝山玩雪",
  dates: "2018/01/13 - 2018/01/20",
  membersCount: 6, // 4位大人(含姑姑) + 2位孩童
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 35461 // 國泰航空 CX564/CX565 (三筆訂單總計: 7256 + 21976 + 6229)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/13", location: "關西空港", title: "抵達大阪",
    activities: [
      { time: "15:50", type: "flight", title: "台北飛大阪 (CX564)", note: "19:35 抵達關西空港 (KIX)", cost: "", currency: "twd" },
      { time: "21:00", type: "hotel", title: "入住 ホテル日航関西空港", note: "1泊 素泊まり (預約號: 0GE2H95A, 2房)", cost: 27600, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/14", location: "金澤", title: "北陸移動與金澤市區",
    activities: [
      { time: "08:43", type: "transport", title: "關西空港往新大阪", note: "09:45 抵達新大阪 (換車月台11-12)", cost: "", currency: "jpy" },
      { time: "09:45", type: "transport", title: "新大阪往金澤", note: "12:17 抵達金澤", cost: "", currency: "jpy" },
      { time: "13:00", type: "food", title: "近江町市場午餐", note: "寄放行李後前往", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "東茶屋街", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルマイステイズ金沢キャッスル", note: "連住2泊 (預約號: IN0272021482, 2房)", cost: 26796, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/15", location: "白川鄉", title: "白川鄉合掌村一日遊",
    activities: [
      { time: "09:00", type: "location", title: "白川鄉合掌村", note: "世界遺產聚落", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/16", location: "金澤/福井", title: "金澤散策與前往福井",
    activities: [
      { time: "09:00", type: "location", title: "金澤一日遊", note: "兼六園 / 21世紀美術館 / 尾山神社", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ルートイン福井駅前", note: "1泊", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "01/17", location: "勝山", title: "福井勝山玩雪與恐龍",
    activities: [
      { time: "08:15", type: "transport", title: "金澤往福井", note: "09:04 抵達福井", cost: "", currency: "jpy" },
      { time: "09:25", type: "transport", title: "福井往勝山", note: "10:19 抵達勝山", cost: "", currency: "jpy" },
      { time: "10:50", type: "transport", title: "搭乘飯店接駁車", note: "11:30 抵達飯店，寄放行李後玩雪", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルハーヴェストスキージャム勝山", note: "1泊 2食付 (含恐龍博物館門票, 2房合計)", cost: 78369, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "01/18", location: "勝山/大阪", title: "返回關西空港",
    activities: [
      { time: "10:00", type: "transport", title: "勝山返回關西空港", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテル日航関西空港", note: "連住2泊 (預約號: 0XEJYXY7, 2房)", cost: 53200, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "01/19", location: "大阪/神戶", title: "採購與神戶一日遊",
    activities: [
      { time: "10:00", type: "other", title: "兵分兩路", note: "大人去 Outlet 採購藥妝 / 小孩跟姑姑坐船去神戶", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "01/20", location: "關西空港", title: "賦歸",
    activities: [
      { time: "10:45", type: "flight", title: "大阪飛台北 (CX565)", note: "13:15 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];