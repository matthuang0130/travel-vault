// src/2024winter.js

export const importedMetadata = {
  title: "2024 札幌雪祭與道東破冰之旅",
  dates: "2024/02/05 - 2024/02/16",
  membersCount: 6,
  status: "completed", // 過去的行程直接設定為已完成
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airfare: 103114 // 6人星宇航空機票總額
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "02/05", location: "札幌", title: "抵達北海道",
    activities: [
      { time: "09:25", type: "flight", title: "台北飛CTS (JX850)", note: "14:00抵達新千歲", cost: "", currency: "twd" },
      { time: "16:00", type: "other", title: "前往超市採買與晚餐", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ANAクラウンプラザホテル札幌", note: "連住4晚 (訂單: IK0995868876 等2筆合計)", cost: 208684, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "02/06", location: "札幌", title: "札幌雪祭一日遊",
    activities: [
      { time: "09:00", type: "other", title: "雪祭 TSUDOME會場", note: "", cost: "", currency: "jpy" },
      { time: "13:00", type: "other", title: "雪祭 大通會場", note: "", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 3, date: "02/07", location: "札幌/支笏湖", title: "羊之丘與冰濤祭",
    activities: [
      { time: "10:00", type: "other", title: "羊之丘展望台", note: "交通：地鐵東豐線福住站，轉乘4號月台84號巴士(約10分)", cost: "", currency: "jpy" },
      { time: "15:50", type: "ticket", title: "支笏湖冰濤祭之旅", note: "15:50 於札幌ANA集合出發", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 4, date: "02/08", location: "札幌", title: "市區觀光與美食探索",
    activities: [
      { time: "11:00", type: "food", title: "美食名單踩點", note: "奧芝商店湯咖哩 / 羊庭成吉思汗烤羊肉 / SIROYA 咖啡店", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 5, date: "02/09", location: "道東/層雲峽", title: "道東破冰船兩日遊 (Day 1)",
    activities: [
      { time: "08:00", type: "transport", title: "紋別GARINKO＆旭山動物園", note: "8點集合出發", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 層雲峽溫泉", note: "旅行團安排住宿", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 6, date: "02/10", location: "紋別/札幌", title: "道東破冰船兩日遊 (Day 2)",
    activities: [
      { time: "09:00", type: "other", title: "破冰船與海豹中心", note: "觀賞紋別流冰", cost: "", currency: "jpy" },
      { time: "19:00", type: "hotel", title: "入住 ANAクラウンプラザホテル札幌", note: "入住1晚 (訂單: IK0995899870 等2筆合計)", cost: 61190, currency: "jpy" }
    ]
  },
  {
    day: 7, date: "02/11", location: "洞爺湖", title: "前進洞爺湖溫泉",
    activities: [
      { time: "10:10", type: "transport", title: "出發前往洞爺湖", note: "12:42抵達，寄放行李並購買IPASS", cost: "", currency: "jpy" },
      { time: "14:00", type: "other", title: "溫泉街與火山科學館", note: "晚上觀賞點燈煙火", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 洞爺湖万世閣ホテルレイクサイドテラス", note: "1晚夕朝食付 (訂單: IC0990365561)", cost: 105595, currency: "jpy" }
    ]
  },
  {
    day: 8, date: "02/12", location: "洞爺湖", title: "有珠山纜車與絕景飯店",
    activities: [
      { time: "10:00", type: "other", title: "退房寄放行李", note: "", cost: "", currency: "jpy" },
      { time: "11:00", type: "ticket", title: "有珠山纜車、熊牧場、SAR展望台", note: "", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "入住 ザ レイクビューTOYA 乃の風リゾート", note: "1晚夕朝食付 (訂單: IK0998936701)", cost: 94526, currency: "jpy" }
    ]
  },
  {
    day: 9, date: "02/13", location: "札幌", title: "返回札幌",
    activities: [
      { time: "10:00", type: "transport", title: "洞爺湖出發回札幌", note: "約中午抵達，行李放回飯店", cost: "", currency: "jpy" },
      { time: "15:00", type: "hotel", title: "入住 ANAクラウンプラザホテル札幌", note: "連住3晚 (訂單: IK1044279025 等2筆合計)", cost: 130410, currency: "jpy" }
    ]
  },
  {
    day: 10, date: "02/14", location: "小樽", title: "小樽浪漫一日遊",
    activities: [
      { time: "10:00", type: "transport", title: "小樽市區觀光", note: "天狗山 或 小樽運河散策", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 11, date: "02/15", location: "札幌", title: "市區採買日",
    activities: [
      { time: "10:00", type: "other", title: "藥妝採買與伴手禮", note: "自由活動", cost: "", currency: "jpy" }
    ]
  },
  {
    day: 12, date: "02/16", location: "札幌/台北", title: "滿載而歸",
    activities: [
      { time: "15:15", type: "flight", title: "CTS飛台北 (JX851)", note: "18:55抵達桃園機場", cost: "", currency: "twd" }
    ]
  }
];