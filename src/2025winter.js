// src/2025winter.js

export const importedMetadata = {
  title: "2025 冬季九州與山陰家族遊",
  dates: "2025/01/21 - 2025/01/29",
  membersCount: 6,
  status: "completed", // 狀態改為已完成
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 77477 // 6人機票總額
  },
  jpy: {
    transport: 10800 // 公車三日券總額 (1800 * 6)
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/21", location: "福岡", title: "抵達與兌換票券",
    activities: [
      { time: "16:30", type: "flight", title: "桃園出發 CI116", note: "19:35抵達福岡", cost: "", currency: "twd" },
      { time: "20:00", type: "ticket", title: "兌換 JRPASS", note: "找 JR 西日本新幹線櫃台", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 ホテルフォルツァ博多駅", note: "VJW:〒812-0012 (素泊1晚)", cost: 47520, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "01/22", location: "鳥取", title: "前進山陰與鳥取砂丘",
    activities: [
      { time: "07:53", type: "transport", title: "博多搭新幹線至姬路轉鳥取", note: "11:58 抵達", cost: "", currency: "jpy" },
      { time: "13:30", type: "other", title: "觀光計程車路線", note: "鳥取站 ⇒ 白兔神社 ⇒ 賀露市場 ⇒ 鳥取砂丘", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 鳥取グリーンホテルモーリス", note: "訂單: 0TKUN3LP (連住4晚含早)", cost: 160050, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "01/23", location: "境港/松江", title: "鬼太郎與穴道湖夕陽",
    activities: [
      { time: "08:25", type: "transport", title: "鳥取 ⇒ 米子 ⇒ 境港", note: "米子轉車僅3分鐘，須衝向0號月台", cost: "", currency: "jpy" },
      { time: "10:30", type: "other", title: "水木茂紀念館", note: "午餐：砂場咖啡 境港店", cost: "", currency: "jpy" },
      { time: "13:25", type: "transport", title: "境港直達公車至松江", note: "14:05 抵達看夕陽", cost: 1050, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "01/24", location: "倉吉", title: "二十世紀梨與柯南小鎮",
    activities: [
      { time: "08:49", type: "transport", title: "鳥取搭巴士至倉吉", note: "使用公車三日劵", cost: "", currency: "jpy" },
      { time: "10:30", type: "other", title: "參觀 20 世紀梨紀念館", note: "停留約一個多小時", cost: "", currency: "jpy" },
      { time: "12:57", type: "other", title: "青山剛昌故鄉館 (柯南)", note: "晚餐：燒肉牛王", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "01/25", location: "鳥取", title: "砂丘白日與復古鐵道",
    activities: [
      { time: "09:00", type: "other", title: "鳥取砂丘 (白天版)", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "transport", title: "搭乘若櫻鐵道 (SL復古火車)", note: "回程於鳥取空港下車。晚餐：回転すし北海道", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "01/26", location: "鳥取/福岡", title: "鳥取市區觀光與返回博多",
    activities: [
      { time: "09:30", type: "other", title: "退房前往柯南空港", note: "午餐：砂場咖啡 鳥取砂丘柯南機場店", cost: "", currency: "jpy" },
      { time: "13:00", type: "other", title: "觀光計程車路線", note: "空港 ⇒ 童玩館 ⇒ 鳥取城跡 ⇒ 鳥取站", cost: "", currency: "jpy" },
      { time: "16:25", type: "transport", title: "搭火車返回博多", note: "", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "入住 ダイワロイネットホテル博多冷泉", note: "連住3晚含早", cost: 162000, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "01/27", location: "福岡", title: "光影藝術與棒球魂",
    activities: [
      { time: "10:00", type: "other", title: "福岡 TEAMLABS & 王貞治博物館", note: "利用九州 FUNPASS。晚餐：大東園燒肉", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 8, date: "01/28", location: "門司港", title: "門司港懷舊區與購物",
    activities: [
      { time: "09:00", type: "transport", title: "博多搭新幹線至小倉轉門司港", note: "小倉-門司港需另購票", cost: "", currency: "jpy" },
      { time: "10:00", type: "other", title: "門司港懷舊區", note: "九州鐵道博物館、關門海峽博物館、展望台", cost: "", currency: "jpy" },
      { time: "15:00", type: "other", title: "THE OUTLETS KITAKYUSHU", note: "下午購物行程", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 9, date: "01/29", location: "福岡", title: "巨型鋼彈與賦歸",
    activities: [
      { time: "10:00", type: "other", title: "福岡 LALAPORT", note: "看實物大鋼彈", cost: "", currency: "jpy" },
      { time: "20:35", type: "flight", title: "福岡機場起飛 CI 117", note: "22:20 抵達桃園機場 TPE", cost: "", currency: "twd" }
    ]
  }
];