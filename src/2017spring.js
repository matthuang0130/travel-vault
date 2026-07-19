// src/2017spring.js

export const importedMetadata = {
  title: "2017 春季山陽 廣島賞櫻與兔島之旅",
  dates: "2017/04/03 - 2017/04/08",
  membersCount: 6, // 4位大人 + 2位孩童
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 47770 // 華航 CI112/CI113 (4大2小精算總計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "04/03", location: "廣島", title: "抵達廣島",
    activities: [
      { time: "16:55", type: "flight", title: "台北飛廣島 (CI112)", note: "20:15 抵達廣島機場 (HIJ)", cost: "", currency: "twd" },
      { time: "22:00", type: "hotel", title: "入住 東横INN広島駅前大橋南", note: "入住2房: 一間連住5晚, 另一間住2晚 (預約號: 5183042, 5183043)", cost: 60480, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "04/04", location: "尾道/大久野島", title: "尾道風光與大久野島尋兔",
    activities: [
      { time: "07:53", type: "transport", title: "廣島往福山", note: "08:16 抵達福山", cost: "", currency: "jpy" },
      { time: "08:32", type: "transport", title: "福山往尾道", note: "08:52 抵達尾道", cost: "", currency: "jpy" },
      { time: "12:31", type: "transport", title: "尾道往忠海", note: "尾道(12:31) - 三原(12:55) - 忠海(13:17)", cost: "", currency: "jpy" },
      { time: "14:05", type: "ticket", title: "搭乘忠海渡輪前往兔島", note: "返程可搭 16:06 或 17:16", cost: "", currency: "jpy" },
      { time: "17:16", type: "transport", title: "忠海返回廣島", note: "忠海(17:16) - 三原(18:16) - 廣島(18:46)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "04/05", location: "廣島", title: "廣島市區賞櫻",
    activities: [
      { time: "09:00", type: "location", title: "縮景園賞櫻", note: "", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "原爆圓頂館與和平紀念公園", note: "市區櫻花漫步", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "續住 東横INN広島駅前大橋南", note: "房間1切換為高級雙床房續住3晚 (預約號: 5201044)", cost: 38880, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "04/06", location: "姬路/倉敷", title: "國寶姬路城與倉敷美觀",
    activities: [
      { time: "08:49", type: "transport", title: "新幹線：廣島往姬路", note: "09:49 抵達姬路", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "世界遺產 姬路城賞櫻", note: "", cost: "", currency: "jpy" },
      { time: "14:30", type: "location", title: "倉敷美觀地區與 Outlet", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "04/07", location: "岩國/宮島", title: "錦帶橋與海上鳥居",
    activities: [
      { time: "09:00", type: "location", title: "岩國 錦帶橋", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "日本三景 宮島", note: "嚴島神社與海上鳥居", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "04/08", location: "廣島/桃園", title: "賦歸",
    activities: [
      { time: "09:10", type: "flight", title: "廣島飛台北 (CI113)", note: "10:50 抵達桃園機場 (TPE)", cost: "", currency: "twd" }
    ]
  }
];