// src/2024summer.js

export const importedMetadata = {
  title: "2024 夏季九州 阿蘇大分與特色鐵道",
  dates: "2024/08/20 - 2024/08/31",
  membersCount: 6, // 4位大人 + 2位孩童
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 55140 // 星宇航空機票 (4大2小精算總計)
  },
  jpy: {
    // 住宿費與預付門票已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "08/20", location: "阿蘇", title: "飛往熊本與直奔阿蘇",
    activities: [
      { time: "07:45", type: "flight", title: "台北飛熊本 (JX846)", note: "11:00 抵達熊本機場 (KMJ)", cost: "", currency: "twd" },
      { time: "13:09", type: "transport", title: "搭乘巴士前往阿蘇", note: "約 14:10 抵達", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "草千里散步", note: "每人1220日圓 (6人合計)", cost: 7320, currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 フェアフィールド･バイ･マリオット･熊本阿蘇", note: "1泊 素泊まり (預約號: IN1141082252)", cost: 58080, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "08/21", location: "阿蘇/大分", title: "離開阿蘇前往大分",
    activities: [
      { time: "10:00", type: "transport", title: "搭乘火車離開阿蘇", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "大分縣立美術館 (OPAM)", note: "市區自由行散策", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 JR九州ホテル ブラッサム大分", note: "連住4泊 (3筆訂單合併總計)", cost: 172500, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "08/22", location: "城島", title: "城島高原遊樂園",
    activities: [
      { time: "09:30", type: "location", title: "城島高原一日遊", note: "木製雲霄飛車與各項遊樂設施", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "08/23", location: "別府", title: "九州自然動物園與地獄溫泉",
    activities: [
      { time: "08:19", type: "transport", title: "火車：大分往別府", note: "08:31抵達，轉乘西口41號巴士(08:50)", cost: "", currency: "jpy" },
      { time: "10:00", type: "location", title: "九州自然動物園 (African Safari)", note: "叢林巴士餵食體驗", cost: "", currency: "jpy" },
      { time: "15:00", type: "location", title: "別府地獄溫泉巡禮", note: "回程順遊", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "08/24", location: "湯布院", title: "湯布院童話小鎮",
    activities: [
      { time: "10:00", type: "location", title: "湯布院一日遊", note: "金鱗湖、湯之坪街道散策", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "08/25", location: "大分/熊本", title: "大分水族館與 ASO BOY",
    activities: [
      { time: "09:30", type: "location", title: "大分海洋宮殿水族館 (海之卵)", note: "", cost: "", currency: "jpy" },
      { time: "15:23", type: "transport", title: "觀光特急 ASO BOY 往熊本", note: "車票已預先購買", cost: "", currency: "jpy" },
      { time: "18:30", type: "hotel", title: "入住 THE BLOSSOM KUMAMOTO", note: "連住4泊 (預約號: IK1116040157 等2筆合計)", cost: 167216, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "08/26", location: "熊本", title: "熊本城歷史巡禮",
    activities: [
      { time: "10:00", type: "location", title: "熊本城觀光", note: "日本三大名城之一", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "08/27", location: "天草", title: "A列車與天草海豚觀賞",
    activities: [
      { time: "10:21", type: "transport", title: "觀光特急 A列車で行こう", note: "11:35 抵達三角", cost: "", currency: "jpy" },
      { time: "11:50", type: "transport", title: "搭船前往松島", note: "船程約 20 分鐘", cost: "", currency: "jpy" },
      { time: "13:00", type: "location", title: "天草海豚出航", note: "航程約 2 小時", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "搭乘快速天草號返回熊本", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 9, date: "08/28", location: "熊本", title: "水前寺與熊部長辦公室",
    activities: [
      { time: "10:00", type: "location", title: "水前寺成趣園", note: "日式庭園散步", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "Kumamon Square (熊部長辦公室)", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 10, date: "08/29", location: "熊本", title: "颱風班機取消續留熊本",
    activities: [
      { time: "12:00", type: "flight", title: "原訂 JX847 航班 (取消)", note: "受颱風影響航班取消，啟動延期備案", cost: "", currency: "twd" },
      { time: "15:00", type: "hotel", title: "入住 KOKO HOTEL Premier 熊本", note: "1泊 朝食付 (預約號: IN1177793337, 3房)", cost: 62700, currency: "jpy" }
    ]
  },
  {
    day: 11, date: "08/30", location: "熊本", title: "熊本市動植物園",
    activities: [
      { time: "10:00", type: "location", title: "熊本市動植物園", note: "多出一天的悠閒行程", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "續住 KOKO HOTEL Premier 熊本", note: "1泊 素泊まり (預約號: IN1177923826, 3房)", cost: 45600, currency: "jpy" }
    ]
  },
  {
    day: 12, date: "08/31", location: "熊本/桃園", title: "順利賦歸",
    activities: [
      { time: "12:00", type: "flight", title: "熊本飛台北 (JX847)", note: "13:15 順利抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];