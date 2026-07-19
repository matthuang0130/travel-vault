// src/2016SEP.js

export const importedMetadata = {
  title: "2016 秋季北陸 穿越黑部立山與和倉溫泉",
  dates: "2016/09/26 - 2016/09/30",
  membersCount: 3, // 大人2名 + 孩童1名
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 35412 // GE602/GE601 復興航空商務艙 (3人份)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "09/26", location: "大阪/富山", title: "飛往關西與北陸大移動",
    activities: [
      { time: "08:30", type: "flight", title: "台北飛大阪 KIX (GE602 商務艙)", note: "12:00 抵達關西空港", cost: "", currency: "twd" },
      { time: "12:44", type: "transport", title: "關西空港往新大阪", note: "搭乘 HARUKA (11月台)", cost: "", currency: "jpy" },
      { time: "14:16", type: "transport", title: "新大阪往金澤轉富山", note: "搭乘 Thunderbird (12月台，車程約2.4小時)", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 富山地鉄ホテル", note: "1泊 素泊まり (預約號: 0YWE0VQW)", cost: 12400, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "09/27", location: "黑部立山", title: "穿越黑部立山大縱走",
    activities: [
      { time: "07:06", type: "transport", title: "富山地方鐵道出發", note: "班次: 07:06 或 08:05", cost: "", currency: "jpy" },
      { time: "10:00", type: "location", title: "黑部立山 阿爾卑斯路線", note: "扇澤往信濃大町 / 信濃大町往南小谷", cost: "", currency: "jpy" },
      { time: "17:29", type: "transport", title: "系魚川往金澤轉回富山", note: "結束大縱走，返回富山市區", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 富山地鉄ホテル", note: "1泊 朝食付 (預約號: 0YWE07Y1)", cost: 15000, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "09/28", location: "小矢部/和倉", title: "三井 OUTLET 與和倉溫泉",
    activities: [
      { time: "09:00", type: "location", title: "三井 OUTLET PARK 北陸小矢部", note: "石動站轉乘巴士 (約10分, 220円) 或金澤西口搭車", cost: "", currency: "jpy" },
      { time: "15:00", type: "transport", title: "金澤往和倉溫泉", note: "搭乘 15:00 特急列車", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 加賀屋グループ 虹と海", note: "1泊 2食付 (預約號: 0YW1HCT5)", cost: 26680, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "09/29", location: "京都", title: "返回關西京都",
    activities: [
      { time: "10:14", type: "transport", title: "和倉溫泉往京都", note: "搭乘特急 10:14-13:37 抵達京都", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "京都市區散策", note: "自由活動", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ダイワロイネットホテル京都八条口", note: "1泊 朝食付 (預約號: IN0222511810)", cost: 16160, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "09/30", location: "京都/桃園", title: "賦歸",
    activities: [
      { time: "09:30", type: "transport", title: "京都往關西空港", note: "搭乘 HARUKA 09:30-10:54", cost: "", currency: "jpy" },
      { time: "13:00", type: "flight", title: "大阪飛台北 KIX (GE601 商務艙)", note: "14:50 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];