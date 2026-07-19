export const tripData = {
  metadata: {
    title: "2026 中部昇龍道 冬日絕景 12 日遊 (實際調整版)",
    author: "黃志中",
    dates: "2026-02-07 to 2026-02-18",
    membersCount: 8,
    galleryLink: "https://photos.app.goo.gl/nhb5QUpkVZspCYE56", 
    requiredTools: [
      { name: "Google Maps", desc: "導航與餐廳找路" },
      { name: "乘換案內", desc: "交通轉乘查詢" }
    ]
  },
budget: {
    jpy: {
      hotel: 704106,
      transport: 16800,  // 日本當地支付的交通費
      total: 720906
    },
    twd: {
      airfare: 82800,    // 6人份機票
      transport: 18866,  // 預付包車交通 (合掌村包車 14179 + 送機 4687)
      tickets: 10661     // 預付票券 (新穗高纜車套票)
    }
  },
  schedule: [
    {
      day: 1,
      date: "02/07 (六)",
      title: "初抵名古屋",
      location: "名古屋",
      activities: [
        { time: "15:35", type: "transport", title: "中部國際機場 (NGO) 抵達", note: "搭乘國泰航空 CX530 抵達。開啟冬日旅程。" },
        { time: "晚上", type: "food", title: "富士炭燒鰻魚飯", note: "晚餐直接前往享用香氣四溢的道地炭燒鰻魚飯。" },
        { time: "晚上", type: "hotel", title: "🏨 入住：相鐵 FRESA INN 名古屋站櫻通口", note: "位置極佳，距離車站步行 4 分鐘。預訂 4 間客房，8 人入住。(一晚總房費：90,032 円)" }
      ]
    },
    {
      day: 2,
      date: "02/08 (日)",
      title: "包車直奔合掌村",
      location: "白川鄉 / 高山",
      activities: [
        { time: "08:30", type: "transport", title: "專車直奔合掌村", note: "預訂名古屋市區至白川鄉/高山包車一日遊 (承辦：株式会社大寅，訂單：#26KK203420426，已預付 NT$ 14,179)，無壓欣賞冬日雪景。" },
        { time: "下午", type: "sightseeing", title: "白川鄉合掌村", note: "世界文化遺產。冬季豪雪覆蓋的茅草屋頂，宛如童話世界。" },
        { time: "晚上", type: "food", title: "味藏天國 飛驒牛燒肉", note: "高山必吃！肉質鮮美的飛驒牛燒肉，就在高山車站旁。" },
        { time: "晚上", type: "hotel", title: "🏨 入住：東急ステイ飛騨高山 結の湯", note: "【連泊優惠方案】4 間雙床房。房內配有洗脫烘衣機與微波爐！(三晚總房費：147,168 円)" }
      ]
    },
    {
      day: 3,
      date: "02/09 (一)",
      title: "高山老街與陣屋慢活",
      location: "高山",
      activities: [
        { time: "上午", type: "sightseeing", title: "高山陣屋", note: "漫步參觀歷史悠久的江戶時代官府。" },
        { time: "下午", type: "sightseeing", title: "高山老街 (三町筋)", note: "飛驒小京都，木造古厝街區漫步。" },
        { time: "中午/晚", type: "food", title: "味與平 (味の与平)", note: "享用道地美味的飛驒牛料理與精緻膳食。" },
        { time: "晚上", type: "hotel", title: "🏨 續住：東急ステイ飛騨高山 結の湯", note: "回飯店享受露天溫泉「結之湯」消除一天疲勞。" }
      ]
    },
    {
      day: 4,
      date: "02/10 (二)",
      title: "新穗高雲端漫步",
      location: "新穗高",
      activities: [
        { time: "全日", type: "sightseeing", title: "新穗高高空纜車", note: "使用「奧飛驒全含優惠券 (濃飛巴士+纜車)」，搭乘雙層纜車直達海拔2156m，眺望北阿爾卑斯山脈雪壁。(套票已預付 NT$ 10,661)" },
        { time: "晚上", type: "hotel", title: "🏨 續住：東急ステイ飛騨高山 結の湯", note: "高山最後一晚。可將前幾天累積的衣物丟進房內洗衣機清洗。" }
      ]
    },
    {
      day: 5,
      date: "02/11 (三)",
      title: "國寶松本城",
      location: "松本",
      activities: [
        { time: "07:50", type: "transport", title: "前往松本 (高速巴士)", note: "長野到松本這段風景很美，建議選窗邊。" },
        { time: "下午", type: "sightseeing", title: "松本城", note: "國寶五城之一。黑色的天守閣在雪地與紅色埋橋的映襯下極具視覺張力。" },
        { time: "晚上", type: "hotel", title: "🏨 入住：天然温泉 あづみの湯 御宿 野乃松本", note: "入住多美迎高級和風品牌「御宿 野乃」，全館榻榻米並享受招牌溫泉與宵夜拉麵。共訂 3 間房含早餐 (一晚總房費：72,010 円)" }
      ]
    },
    {
      day: 6,
      date: "02/12 (四)",
      title: "長野善光寺巡禮",
      location: "長野",
      activities: [
        { time: "09:00", type: "transport", title: "前往長野 (JR信濃)", note: "搭乘特急列車前往長野市。" },
        { time: "下午", type: "sightseeing", title: "善光寺", note: "長野信仰中心。推薦體驗「戒壇巡禮」，在黑暗中尋找極樂之鑰。" },
        { time: "晚上", type: "hotel", title: "🏨 入住：相鐵 FRESA INN 長野站善光寺口", note: "【禁煙】高級雙床房 × 4 間，交通便利的車站旁飯店。(兩晚總房費：130,896 円)" }
      ]
    },
    {
      day: 7,
      date: "02/13 (五)",
      title: "地獄谷雪猴泡湯",
      location: "山之內",
      activities: [
        { time: "全日", type: "sightseeing", title: "地獄谷野猿公苑", note: "著名的「雪猴泡湯」。看著野生日本獼猴在雪中享受溫泉的模樣非常療癒。" },
        { time: "晚上", type: "hotel", title: "🏨 續住：相鐵 FRESA INN 長野站善光寺口", note: "結束療癒的一天，續住相鐵長野站善光寺口。" }
      ]
    },
    {
      day: 8,
      date: "02/14 (六)",
      title: "重返名古屋與大須散策",
      location: "長野 / 名古屋",
      activities: [
        { time: "下午", type: "transport", title: "返回名古屋 (JR信濃)", note: "取消戶隱行程，直接搭乘特急列車回名古屋市區。" },
        { time: "下午", type: "sightseeing", title: "大須觀音與商店街", note: "前往歷史悠久的大須觀音逛逛、參拜，享受悠閒時光。" },
        { time: "晚上", type: "food", title: "世界的山將手羽先", note: "晚餐大啖名古屋名物夢幻雞翅，胡椒風味十足。" },
        { time: "晚上", type: "hotel", title: "🏨 入住：コンフォートイン名古屋栄駅前 (Comfort Inn)", note: "共訂 4 間房（單人×2、雙人×1、三人×1），善用12歲以下免費讓8人舒適入住。(四晚總房費：264,000 円)" }
      ]
    },
    {
      day: 9,
      date: "02/15 (日)",
      title: "名古屋城巡禮",
      location: "名古屋",
      activities: [
        { time: "全日", type: "sightseeing", title: "名古屋城", note: "今日專注漫遊名古屋城，參觀金鯱地標與本丸御殿。" },
        { time: "晚上", type: "hotel", title: "🏨 續住：コンフォートイン名古屋栄駅前", note: "放鬆休息，續住榮商圈。" }
      ]
    },
    {
      day: 10,
      date: "02/16 (一)",
      title: "吉卜力公園大冒險",
      location: "愛知縣",
      activities: [
        { time: "全日", type: "sightseeing", title: "吉卜力公園", note: "吉卜力大倉庫與青春之丘，重現動畫經典場景。" },
        { time: "傍晚", type: "sightseeing", title: "綠洲21 (Oasis 21)", note: "欣賞名古屋市區的宇宙船夜景。" },
        { time: "晚上", type: "hotel", title: "🏨 續住：コンフォートイン名古屋栄駅前", note: "放鬆休息，續住榮商圈。" }
      ]
    },
    {
      day: 11,
      date: "02/17 (二)",
      title: "科學館與名花之里",
      location: "名古屋 / 三重",
      activities: [
        { time: "上午", type: "sightseeing", title: "名古屋市科學館", note: "參觀世界最大的星象儀。" },
        { time: "傍晚", type: "sightseeing", title: "名花之里", note: "日本最大級的冬季彩燈，光之隧道令人驚艷。" },
        { time: "晚上", type: "hotel", title: "🏨 續住：コンフォートイン名古屋栄駅前", note: "旅程最後一晚的住宿。" }
      ]
    },
    {
      day: 12,
      date: "02/18 (三)",
      title: "夢想飛行與返程",
      location: "常滑市",
      activities: [
        { time: "上午", type: "sightseeing", title: "Flight of Dreams", note: "中部機場旁的波音 787 展示館，震撼的航空體驗。" },
        { time: "上午", type: "transport", title: "專車送機", note: "預約飯店至中部機場 (NGO) 送機服務 (承辦：株式会社大寅，訂單：#26KK223990804，已預付 NT$ 4,687)。" },
        { time: "16:35", type: "transport", title: "國泰航空 CX531 回台", note: "搭機返回溫暖的台灣，12 天中部冬日絕景之旅圓滿結束！" }
      ]
    }
  ]
};