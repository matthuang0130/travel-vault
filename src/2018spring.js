// src/2018spring.js

export const importedMetadata = {
  title: "2018 春季名古屋 樂高與名花之里之旅",
  dates: "2018/04/02 - 2018/04/06",
  membersCount: 6, // 大人4名 + 孩童2名
  icon: "🌸", // 春季專屬櫻花圖示
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 58400 // 國際線：國泰航空 TPE-NGO 往返 (4大2小總計)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "04/02", location: "名古屋", title: "抵達名古屋與 HARBS 晚餐",
    activities: [
      { time: "11:45", type: "flight", title: "台北飛名古屋 (CX530)", note: "15:40 抵達中部國際機場 (NGO)", cost: "", currency: "twd" },
      { time: "16:47", type: "transport", title: "名鐵特急前往名古屋", note: "單程870日圓 / 來回優惠票1500日圓", cost: "", currency: "jpy" },
      { time: "18:00", type: "food", title: "晚餐：名鐵百貨 B1 HARBS", note: "並於名鐵服務中心購買犬山遊園套票 (1340日圓)", cost: "", currency: "jpy" },
      { time: "20:00", type: "location", title: "AEON 24小時超市採買", note: "", cost: "", currency: "jpy" },
      { time: "21:00", type: "hotel", title: "入住 三交イン名古屋新幹線口ＡＮＮＥＸ", note: "連住4泊 (預約號: 0LET3XLW, 2房合計)", cost: 124000, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "04/03", location: "犬山/長島", title: "犬山城與名花之里點燈",
    activities: [
      { time: "09:00", type: "transport", title: "搭乘名鐵特急往犬山", note: "車程約27分，使用犬山遊園套票", cost: "", currency: "jpy" },
      { time: "10:00", type: "location", title: "犬山城與城下町散策", note: "三光稻荷神社洗錢祈福", cost: "", currency: "jpy" },
      { time: "15:41", type: "transport", title: "近鐵前往長島站", note: "近鐵名古屋至近鐵長島，轉乘巴士前往名花之里", cost: "", currency: "jpy" },
      { time: "17:00", type: "location", title: "名花之里 (なばなの里)", note: "欣賞絕美夜間點燈 (套票含近鐵與巴士 3190日圓)", cost: "", currency: "jpy" },
      { time: "20:13", type: "transport", title: "搭車返回名古屋", note: "末班車注意時間 (20:13 / 20:46 / 21:15 / 21:49)", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "04/04", location: "滋賀(彥根)", title: "滋賀彥根城一日遊",
    activities: [
      { time: "09:18", type: "transport", title: "JR 往米原轉乘至彥根", note: "名古屋發車 (約40-50分)，抵達彥根站西口", cost: "", currency: "jpy" },
      { time: "10:30", type: "location", title: "國寶 彥根城", note: "尋找彥根喵", cost: "", currency: "jpy" },
      { time: "14:00", type: "location", title: "長濱城 (彈性行程)", note: "彥根至長濱約 17 分鐘", cost: "", currency: "jpy" },
      { time: "17:30", type: "transport", title: "米原返回名古屋", note: "每小時 30分、57分有車", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "04/05", location: "名古屋", title: "日本樂高樂園",
    activities: [
      { time: "10:00", type: "location", title: "樂高樂園 (LEGOLAND Japan)", note: "4人套票19600日圓 + 2位大人(6200日圓x2)", cost: 32000, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "04/06", location: "名古屋", title: "市區購物與賦歸",
    activities: [
      { time: "10:00", type: "location", title: "榮町商圈逛街採買", note: "搭機前最後採買", cost: "", currency: "jpy" },
      { time: "14:00", type: "transport", title: "前往中部國際機場", note: "", cost: "", currency: "jpy" },
      { time: "16:50", type: "flight", title: "名古屋飛台北 (CX531)", note: "19:00 抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];