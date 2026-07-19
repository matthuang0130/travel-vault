// src/DATA/china.js
export const tripData = {
  metadata: {
    title: "2026 盛夏大陸行",
    author: "黃志中",
    dates: "2026-06-25 to 2026-07-11",
    membersCount: 2
  },
  budget: {
    jpy: { hotel: 0, transport: 0, total: 0 },
    twd: { prepaid: 0 }
  },
  schedule: [
    {
      day: 1,
      date: "06/25",
      title: "旅程啟航",
      location: "大陸",
      activities: [
        { time: "全日", type: "transport", title: "平安抵達與入住" }
      ]
    },
    {
      day: 17,
      date: "07/11",
      title: "圓滿賦歸",
      location: "台灣",
      activities: [
        { time: "全日", type: "transport", title: "帶著滿滿回憶返家" }
      ]
    }
  ]
};