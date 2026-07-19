// src/2019may.js

export const importedMetadata = {
  title: "2019 春季北海道 芝櫻與道北之旅",
  dates: "2019/05/23 - 2019/05/30",
  membersCount: 4, // 2位大人，2位小孩
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airportTransfer: 1180 // 機場接送
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "05/23", location: "千歲", title: "抵達北海道",
    activities: [
      { time: "12:05", type: "flight", title: "台北飛CTS (TR892)", note: "17:05 抵達新千歲", cost: "", currency: "twd" },
      { time: "18:00", type: "hotel", title: "入住 JRイン千歳", note: "1泊 素泊まり (訂單: 00GUCNRA)", cost: 13000, currency: "jpy" } // 16,200円 - 1,000円クーポン - 2,200ポイント
    ]
  },
  {
    day: 2, date: "05/24", location: "函館", title: "飛往函館與五稜郭",
    activities: [
      { time: "11:00", type: "flight", title: "CTS飛HKD (NH4853)", note: "11:45 抵達函館", cost: "", currency: "twd" },
      { time: "12:00", type: "ticket", title: "購買巴士市電兩日劵", note: "函館空港 1番7B 12:00-12:28", cost: "", currency: "jpy" },
      { time: "12:40", type: "transport", title: "函館巴士往五稜郭", note: "7A 12:40 信金前 (或 7B 12:00)", cost: "", currency: "jpy" },
      { time: "13:30", type: "food", title: "午餐：幸運小丑漢堡 或 五島軒咖哩", note: "五稜郭周邊", cost: "", currency: "jpy" },
      { time: "15:00", type: "other", title: "飯店休息 / 函館夜景", note: "夜景看天氣決定", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテル法華クラブ函館", note: "連住2晚 素泊り (訂單: 00GF9LT7)", cost: 17800, currency: "jpy" } // 20,800円 - 3,000円クーポン
    ]
  },
  {
    day: 3, date: "05/25", location: "函館", title: "函館浪漫散策",
    activities: [
      { time: "09:00", type: "location", title: "函館朝市", note: "", cost: "", currency: "jpy" },
      { time: "11:00", type: "location", title: "末廣町散步", note: "教堂區、八幡坂", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "金森紅磚倉庫", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "05/26", location: "旭川", title: "國內線轉場前進道北",
    activities: [
      { time: "07:48", type: "transport", title: "五稜郭往函館空港", note: "08:32抵達，考慮搭乘計程車", cost: "", currency: "jpy" },
      { time: "09:45", type: "flight", title: "HKD飛OKD (JAL2742)", note: "10:25 抵達丘珠機場", cost: "", currency: "twd" },
      { time: "12:00", type: "transport", title: "札幌往旭川", note: "13:25 抵達 (車程85分，整點發車)", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "入住 Ｙ’ｓＨＯＴＥＬ(ワイズホテル）旭川駅前", note: "連住4晚 素泊まり (訂單: 03G3R7AM)", cost: 35800, currency: "jpy" } // 37,800円 - 2,000円クーポン
    ]
  },
  {
    day: 5, date: "05/27", location: "旭岳", title: "大雪山旭岳健行",
    activities: [
      { time: "09:41", type: "transport", title: "旭川搭乘66番巴士往旭岳", note: "9號站台，11:21抵達", cost: 1430, currency: "jpy" },
      { time: "11:30", type: "location", title: "旭岳觀光", note: "", cost: "", currency: "jpy" },
      { time: "15:30", type: "transport", title: "旭岳搭巴士回旭川", note: "17:21抵達旭川", cost: 1430, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "05/28", location: "旭川", title: "旭山動物園",
    activities: [
      { time: "08:40", type: "transport", title: "搭車前往旭山動物園", note: "6號站台，08:40 或 09:10 發車 (車程40分)", cost: "", currency: "jpy" },
      { time: "09:30", type: "location", title: "旭山動物園", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 7, date: "05/29", location: "滝上", title: "粉紅芝櫻絕景",
    activities: [
      { time: "09:00", type: "location", title: "滝上芝櫻公園", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "05/30", location: "札幌/千歲", title: "賦歸",
    activities: [
      { time: "10:00", type: "transport", title: "旭川返回札幌/千歲", note: "", cost: "", currency: "jpy" },
      { time: "19:20", type: "flight", title: "CTS飛台北 (TR893)", note: "22:30 抵達", cost: "", currency: "twd" }
    ]
  }
];