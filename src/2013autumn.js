// src/2013autumn.js

export const importedMetadata = {
  title: "2013 秋季九州 阿蘇火山與黑川溫泉之旅",
  dates: "2013/09/19 - 2013/09/23",
  membersCount: 1, // 暫定1人，可於手帳內修改
  icon: "🌋", // 阿蘇火山專屬圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 0, // 國際線機票：待補登
    prepaid: 0  // 北九州 JR Pass 3日券：待補登
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "09/19", location: "福岡/熊本", title: "飛往九州與直奔熊本",
    activities: [
      { time: "17:35", type: "flight", title: "國泰航空飛福岡 (CX510)", note: "20:50 抵達福岡機場", cost: "", currency: "twd" },
      { time: "21:30", type: "transport", title: "博多車站綠色窗口", note: "兌換北九州 JR Pass 3日券並劃位", cost: "", currency: "jpy" },
      { time: "22:46", type: "transport", title: "新幹線燕子號 (つばめ 377号) 往熊本", note: "備案：23:08 つばめ 379号", cost: "", currency: "jpy" },
      { time: "23:50", type: "hotel", title: "入住 東横INN 熊本站前", note: "1泊 熊本站白川口出站右手邊", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "09/20", location: "阿蘇/黑川", title: "卡德利動物園與秘境溫泉",
    activities: [
      { time: "08:35", type: "transport", title: "九州横断特急 2号 往阿蘇", note: "09:43 抵達阿蘇", cost: "", currency: "jpy" },
      { time: "09:50", type: "transport", title: "搭乘巴士前往卡德利動物園", note: "車資 大人130日圓/小孩70日圓", cost: 130, currency: "jpy" },
      { time: "10:00", type: "location", title: "卡德利動物園 (Cuddly Dominion)", note: "門票每人 2300日圓", cost: 2300, currency: "jpy" },
      { time: "14:20", type: "transport", title: "搭乘巴士返回阿蘇站", note: "", cost: 130, currency: "jpy" },
      { time: "14:43", type: "transport", title: "九州橫斷巴士 7號 往黑川", note: "15:31 抵達黑川溫泉", cost: 4320, currency: "jpy" },
      { time: "16:00", type: "hotel", title: "入住 黑川溫泉 御客屋", note: "1泊 享受秘境溫泉", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "09/21", location: "阿蘇/福岡", title: "阿蘇火山口與阿蘇男孩號",
    activities: [
      { time: "10:35", type: "transport", title: "九州橫斷巴士 2號 往阿蘇西", note: "11:23 抵達阿蘇山西站", cost: 7200, currency: "jpy" },
      { time: "11:40", type: "location", title: "搭乘纜車上阿蘇火山口", note: "來回票 大人1000日圓/小孩500日圓", cost: 1000, currency: "jpy" },
      { time: "13:05", type: "transport", title: "搭乘巴士返回阿蘇站", note: "備案：14:08 發車 (行車約30分鐘)", cost: 540, currency: "jpy" },
      { time: "15:44", type: "transport", title: "特急 阿蘇男孩號 (あそぼーい！ 104号)", note: "17:13 抵達熊本 (備案列車: 17:31/17:39/17:59)", cost: "", currency: "jpy" },
      { time: "17:30", type: "transport", title: "熊本換乘新幹線返回博多", note: "", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 東横INN 博多祇園", note: "連住2泊開始", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "09/22", location: "福岡", title: "福岡市區一日遊",
    activities: [
      { time: "10:00", type: "location", title: "福岡市區觀光與自由活動", note: "漫步博多、天神商圈", cost: "", currency: "jpy" },
      { time: "20:00", type: "hotel", title: "續住 東横INN 博多祇園", note: "第2晚", cost: 0, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "09/23", location: "福岡/台北", title: "賦歸",
    activities: [
      { time: "08:00", type: "transport", title: "前往福岡機場", note: "", cost: "", currency: "jpy" },
      { time: "10:50", type: "flight", title: "國泰航空飛台北 (CX511)", note: "12:15 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];