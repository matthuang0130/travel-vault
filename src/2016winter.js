// src/2016winter.js

export const importedMetadata = {
  title: "2016 冬季東北 藏王樹冰與星野青森屋",
  dates: "2016/01/31 - 2016/02/05",
  membersCount: 3, // 大人2名 + 子供1名
  status: "completed", 
  galleryLink: ""
};

export const importedBudget = {
  twd: {
    airportTransfer: 0 // 5:30 機場接送 (若有確切金額可於系統內補上)
  },
  jpy: {
    // 住宿費已全數寫入下方行程表，系統會自動加總歸戶
  }
};

export const importedSchedule = [
  {
    day: 1, date: "01/31", location: "東京/仙台", title: "抵達東京與前進東北",
    activities: [
      { time: "07:50", type: "flight", title: "台北飛成田 (GE606)", note: "12:00 抵達第二航廈 (5:30 機場接送)", cost: "", currency: "twd" },
      { time: "12:47", type: "transport", title: "成田特快 NEX 往東京", note: "搭乘 22號/24號/26號", cost: "", currency: "jpy" },
      { time: "14:20", type: "transport", title: "新幹線はやぶさ 往仙台", note: "搭乘 23号 (14:20) 或 25号 (15:20)", cost: "", currency: "jpy" },
      { time: "17:00", type: "other", title: "市區採買", note: "仙台 MONTBELL 買外套 / AEON MALL 仙台空港線", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルメトロポリタン仙台", note: "含朝食 (預約號: IK0201872277)", cost: 14560, currency: "jpy" }
    ]
  },
  {
    day: 2, date: "02/01", location: "白石/青森", title: "宮城狐狸村與星野青森屋",
    activities: [
      { time: "08:44", type: "transport", title: "仙台往白石藏王", note: "車程約14分，抵達後換計程車上山", cost: "", currency: "jpy" },
      { time: "10:00", type: "other", title: "宮城狐狸村", note: "", cost: "", currency: "jpy" },
      { time: "12:50", type: "transport", title: "白石藏王往仙台", note: "班次: 12:50 / 13:50 / 14:50", cost: "", currency: "jpy" },
      { time: "13:54", type: "transport", title: "新幹線はやぶさ 19号 往八戶", note: "15:04 抵達八戶", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 星野リゾート 青森屋", note: "1泊2食付 (預約號: IK0202495758)", cost: 28419, currency: "jpy" }
    ]
  },
  {
    day: 3, date: "02/02", location: "奧入瀨/仙台", title: "冬之奧入瀨溪流絕景",
    activities: [
      { time: "09:00", type: "other", title: "冬の奥入瀬渓流ツアー", note: "青森屋出發", cost: "", currency: "jpy" },
      { time: "10:00", type: "other", title: "奧入瀨溪流 觀光", note: "三乱の流れ/石ヶ戸/阿修羅の流れ/雲井の滝/銚子大滝 等", cost: "", currency: "jpy" },
      { time: "11:20", type: "other", title: "抵達十和田湖 (子ノ口)", note: "", cost: "", currency: "jpy" },
      { time: "13:00", type: "other", title: "返回青森屋", note: "", cost: "", currency: "jpy" },
      { time: "15:00", type: "transport", title: "八戶返回仙台", note: "車程約 90 分鐘", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルメトロポリタン仙台", note: "含朝食 (預約號: IK0201872246)", cost: 14560, currency: "jpy" }
    ]
  },
  {
    day: 4, date: "02/03", location: "藏王", title: "藏王樹冰奇景",
    activities: [
      { time: "08:00", type: "transport", title: "巴士：仙台往藏王溫泉", note: "09:40 抵達藏王", cost: "", currency: "jpy" },
      { time: "10:00", type: "other", title: "藏王樹冰", note: "", cost: "", currency: "jpy" },
      { time: "14:00", type: "transport", title: "巴士轉乘仙山線", note: "藏王搭巴士至山形，轉乘仙山線回仙台", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 ホテルメトロポリタン仙台", note: "含朝食 (預約號: IK0201872956)", cost: 14560, currency: "jpy" }
    ]
  },
  {
    day: 5, date: "02/04", location: "松島/東京", title: "日本三景松島與返回東京",
    activities: [
      { time: "09:00", type: "transport", title: "仙台往松島海岸", note: "車程約 40 分鐘", cost: "", currency: "jpy" },
      { time: "10:00", type: "other", title: "松島遊船", note: "", cost: "", currency: "jpy" },
      { time: "13:00", type: "transport", title: "松島海岸往中野榮", note: "逛 MITSUI OUTLET PARK", cost: "", currency: "jpy" },
      { time: "16:00", type: "transport", title: "下午搭乘新幹線回東京", note: "", cost: "", currency: "jpy" },
      { time: "18:00", type: "hotel", title: "入住 三井ガーデンホテル上野", note: "含朝食 (預約號: IN0202649342)", cost: 22679, currency: "jpy" }
    ]
  },
  {
    day: 6, date: "02/05", location: "東京/桃園", title: "賦歸",
    activities: [
      { time: "10:00", type: "transport", title: "上野往成田 SKYLINER", note: "班次: 10:00 / 10:40 / 11:00", cost: "", currency: "jpy" },
      { time: "13:00", type: "flight", title: "成田飛台北 (GE605)", note: "準備登機返回桃園", cost: "", currency: "twd" }
    ]
  }
];