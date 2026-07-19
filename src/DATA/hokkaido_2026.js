export const tripData = {
  metadata: {
    title: "2026 北海道夏日家族大遠征：道東秘境與浪漫都會 11 日遊",
    author: "黃志中",
    dates: "2026-08-19 to 2026-08-29",
    membersCount: 6,
    requiredTools: [
      { name: "Google Maps", desc: "導航與餐廳找路" },
      { name: "乘換案內", desc: "查詢地鐵與巴士轉乘" }
    ]
  },
budget: {
    jpy: {
      hotel: 605303,
      transport: 138160,
      total: 743463
    },
    twd: {
      airfare: 0, 
      transport: 0,
      dayTour: 0,
      tickets: 0,
      airportTransfer: 3465, // 👈 新增：專屬的送機費用欄位
      prepaid: 0           // 把原本的其他預付清空
    }
  },
  schedule: [
    {
      day: 1,
      date: "08/19 (三)",
      title: "精品航空啟航，降落北海道",
      location: "新千歲",
      activities: [
        { time: "10:05", type: "transport", title: "騰空起飛", note: "搭乘星宇航空 JX850（A350-900 寬體客機）享受精品級高空服務。" },
        { time: "15:10", type: "transport", title: "抵達新千歲", note: "降落新千歲機場（CTS）國際航廈。" },
        { time: "傍晚", type: "food", title: "傍晚時光", note: "提領行李後，直接步行前往位於機場內的飯店辦理入住。全家可於新千歲機場國內線 3 樓享用抵達北海道的第一頓大餐。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Air Terminal Hotel (エアターミナルホテル)", note: "禁菸雙床房 (停車場側) × 3 間 (含早餐)。該晚折扣後房費： 80,515 円" }
      ]
    },
    {
      day: 2,
      date: "08/20 (四)",
      title: "國內線飛越道東，雙車戰術完美開局",
      location: "釧路",
      activities: [
        { time: "上午", type: "sightseeing", title: "上午悠哉時光", note: "於飯店享用早餐，逛逛新千歲機場伴手禮區。" },
        { time: "13:20", type: "transport", title: "國內線起飛", note: "搭乘 ANA NH4873 班機前往釧路。" },
        { time: "14:05", type: "transport", title: "抵達釧路", note: "降落釧路機場，領取大行李。" },
        { time: "14:40", type: "transport", title: "🚕 機場包車接機", note: "司機於機場迎接，行李上車直奔細岡大觀望。4人座一般計程車 × 2 台 (承辦：第一共栄交通)，包車費用：32,160 円" },
        { time: "16:30", type: "hotel", title: "抵達飯店", note: "雙車平安將全家送達市區飯店。傍晚步行至幣舞橋欣賞世界三大夕陽，晚餐享用道地爐端燒。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Kushiro Global View Hotel", note: "【本館・禁菸】雙床房 × 3 間 (含12F展望自助早餐)。該晚折扣後房費： 41,036 円" }
      ]
    },
    {
      day: 3,
      date: "08/21 (五)",
      title: "阿寒湖避暑與綠球藻：6 小時尊榮包車",
      location: "阿寒湖",
      activities: [
        { time: "09:30", type: "transport", title: "🚕 專車啟程", note: "巨型計程車於飯店大廳迎接。9人座大型計程車 × 1 台 (承辦：第一共栄交通)，包車費用： 68,400 円" },
        { time: "10:00", type: "sightseeing", title: "釧路濕原展望台", note: "搭電梯至頂樓俯瞰廣袤濕原。" },
        { time: "12:00", type: "food", title: "阿寒湖溫泉街", note: "抵達阿寒湖畔，享用公魚天婦羅或鹿肉定食。" },
        { time: "13:00", type: "sightseeing", title: "阿寒湖遊覽船", note: "登船並於「忠類島」停靠，觀賞天然綠球藻。" },
        { time: "14:25", type: "transport", title: "無縫接軌賦歸", note: "遊船結束直接上車，全家在冷氣車廂內午休。" },
        { time: "15:30", type: "hotel", title: "舒適抵達市區", note: "包車任務結束，平安回到飯店休息。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Kushiro Global View Hotel", note: "【本館・禁菸】雙床房 × 3 間 (含12F展望自助早餐)。該晚折扣後房費： 37,636 円" }
      ]
    },
    {
      day: 4,
      date: "08/22 (六)",
      title: "四極踏破極限打卡 ＆ 厚岸頂級生蠔",
      location: "根室 / 厚岸",
      activities: [
        { time: "08:18", type: "transport", title: "鐵道出發", note: "釧路車站搭乘「JR 花咲線」。" },
        { time: "10:50", type: "sightseeing", title: "🚨 抵達根室（22 分鐘極限任務）", note: "家人留守月台與紀念碑合照。總監出站自助領取【本土最東端到達證明書】與【最東端車站證明書】。" },
        { time: "11:12", type: "transport", title: "鐵道折返", note: "搭乘「快速花咲號」原車折返。" },
        { time: "12:24", type: "food", title: "厚岸鮮味午餐", note: "抵達厚岸站，直奔「味覺總站 Conchiglie」大啖頂級生蠔全餐。" },
        { time: "15:15", type: "transport", title: "滿載而歸", note: "搭乘回程列車，16:11 回到釧路飯店。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Kushiro Global View Hotel", note: "【本館・禁菸】雙床房 × 3 間 (含12F展望自助早餐)。該晚折扣後房費： 45,796 円" }
      ]
    },
    {
      day: 5,
      date: "08/23 (日)",
      title: "道東大移動：觀光巴士 ＋ 海岸鐵道接力",
      location: "網走",
      activities: [
        { time: "07:50", type: "transport", title: "🚌 釧路知床號啟航", note: "釧路站前巴士總站上車。" },
        { time: "上午", type: "sightseeing", title: "上午觀光", note: "順遊阿寒丹頂之里、摩周湖第一展望台。" },
        { time: "12:10", type: "food", title: "美幌峠（午餐）", note: "停留 75 分鐘，俯瞰屈斜路湖並享用午餐。" },
        { time: "下午", type: "sightseeing", title: "下午觀光", note: "順遊屈斜路湖砂湯、硫磺山、清里燒酎釀造所。" },
        { time: "16:25", type: "transport", title: "關鍵轉乘", note: "於「JR 知床斜里站」下車並領取行李。" },
        { time: "16:44", type: "transport", title: "絕美夕陽鐵道", note: "轉乘 JR 釧網本線前往網走。" },
        { time: "17:30", type: "hotel", title: "抵達網走", note: "轉乘短程計程車直達飯店辦理入住。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】天然溫泉 天都之湯 多美迎網走 (Dormy Inn Abashiri)", note: "雙床房×1、小型雙床房×1、雙人房×1 (共 3 間，含招牌海鮮早餐)。該晚折扣後房費： 71,200 円" }
      ]
    },
    {
      day: 6,
      date: "08/24 (一)",
      title: "網走山海與歷史探索：終極無壓包車",
      location: "網走",
      activities: [
        { time: "10:00", type: "transport", title: "🚕 專車接駁", note: "巨型計程車於飯店門口迎接。9人座大型計程車 × 1 台 (承辦：網走巴士)，包車費用： 37,600 円" },
        { time: "10:15", type: "sightseeing", title: "天都山・鄂霍次克流冰館", note: "體驗零下 15 度冰室並欣賞山頂全景。" },
        { time: "11:15", type: "sightseeing", title: "博物館 網走監獄", note: "漫步 90 分鐘了解開拓史。" },
        { time: "13:05", type: "sightseeing", title: "能取岬絕景兜風", note: "抵達能取岬，與燈塔及海景合影。" },
        { time: "13:50", type: "transport", title: "戰略下車", note: "於「道之站 流冰街道網走」下車，包車結束。" },
        { time: "下午", type: "free", title: "悠哉時光", note: "於休息站二樓享用午餐，採買伴手禮後散步回飯店享受溫泉。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】天然溫泉 天都之湯 多美迎網走 (Dormy Inn Abashiri)", note: "雙床房×1、小型雙床房×1、雙人房×1 (共 3 間，含招牌海鮮早餐)。該晚折扣後房費： 71,200 円" }
      ]
    },
    {
      day: 7,
      date: "08/25 (二)",
      title: "玻璃藝術與都會轉場，悠哉抵達札幌",
      location: "札幌",
      activities: [
        { time: "上午", type: "sightseeing", title: "文青散策", note: "睡到自然醒，散步參觀充滿質感的「流冰硝子館」。" },
        { time: "11:10", type: "transport", title: "前往機場", note: "搭乘聯絡巴士或計程車前往女滿別機場。" },
        { time: "12:00", type: "food", title: "機場輕食時光", note: "腸胃休戰期！於機場悠哉享用北海道牛奶、霜淇淋或簡單輕食。" },
        { time: "13:55", type: "transport", title: "騰空起飛", note: "搭乘 JAL JL2714 班機離開道東。" },
        { time: "14:40", type: "transport", title: "抵達札幌 (CTS)", note: "降落新千歲機場，轉乘快速電車進入札幌市中心。" },
        { time: "傍晚", type: "hotel", title: "傍晚轉場", note: "抵達大通商圈辦理入住。稍作休息後，全家步行於狸小路或大通周邊，隨心享用札幌都會區的第一頓晚餐。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Richmond Hotel 札幌大通", note: "禁菸三人房 (26平米，雙床+沙發床) × 2 間 (含早餐)。該晚折扣後房費： 43,774 円" }
      ]
    },
    {
      day: 8,
      date: "08/26 (三)",
      title: "禪意慢活半日遊：大頭佛與湯咖哩之約",
      location: "札幌",
      activities: [
        { time: "上午", type: "transport", title: "【地鐵轉公車】", note: "於飯店享用早餐後，搭乘地鐵南北線至「真駒內站」，出站後轉乘「108 號公車」悠哉前往靈園。" },
        { time: "10:30", type: "sightseeing", title: "建築與心靈洗禮", note: "抵達「真駒內滝野靈園」。欣賞壯觀的摩艾石像群，穿過水上庭園隧道，感受安藤忠雄「頭大仏」的莊嚴。" },
        { time: "中午", type: "transport", title: "【折返市區】", note: "搭乘公車原線折返，轉地鐵回到大通/薄野商圈。" },
        { time: "13:30", type: "food", title: "札幌必吃湯咖哩", note: "避開中午用餐尖峰，全家前往市區湯咖哩名店（如 Suage+ 或 GARAKU），享用濃郁熱騰騰的道地美味！" },
        { time: "下午", type: "shopping", title: "悠哉時光", note: "餐後於狸小路商圈輕鬆散步、採買，戰利品隨時可提回飯店。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Richmond Hotel 札幌大通", note: "禁菸三人房 (26平米，雙床+沙發床) × 2 間 (含早餐)。該晚折扣後房費： 49,384 円" }
      ]
    },
    {
      day: 9,
      date: "08/27 (四)",
      title: "余市微醺與太空探索 ＆ 小樽浪漫散策",
      location: "余市 / 小樽",
      activities: [
        { time: "上午", type: "transport", title: "【鐵道海景移動】", note: "前往札幌車站搭乘 JR 途經小樽抵達「余市站」，沿途欣賞石狩灣美麗海景。" },
        { time: "10:30", type: "sightseeing", title: "余市蒸餾所見學", note: "參觀充滿蘇格蘭風情的 Nikka 威士忌余市蒸餾所（需事前預約）。" },
        { time: "11:45", type: "sightseeing", title: "探索宇宙奧秘", note: "散步至旁邊的「余市宇宙紀念館」，體驗無重力視覺與 3D 劇院，採買有趣的太空食物。" },
        { time: "12:45", type: "food", title: "在地傳奇海鮮", note: "午餐步行至「柿崎商店 海鮮工房」，大啖新鮮平價的海鮮丼與烤魚定食。" },
        { time: "下午", type: "sightseeing", title: "【順遊小樽浪漫街區】", note: "搭乘 JR 抵達小樽站。午後漫步於小樽運河與堺町通，於 LeTAO 享用精緻下午茶。" },
        { time: "傍晚", type: "transport", title: "折返市區", note: "從小樽搭乘 JR 快速列車，約 35 分鐘輕鬆回到札幌，結束豐富的一天。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Richmond Hotel 札幌大通", note: "禁菸三人房 (26平米，雙床+沙發床) × 2 間 (含早餐)。該晚折扣後房費： 69,478 円" }
      ]
    },
    {
      day: 10,
      date: "08/28 (五)",
      title: "札幌空白隨心日：全家自由放電與極致慢活",
      location: "札幌",
      activities: [
        { time: "全日", type: "free", title: "全日留白，自由作息", note: "經過連續 9 天的豐富旅程，這一天不設鬧鐘，讓長輩與家人睡到自然醒，徹底恢復體力。" },
        { time: "彈性", type: "free", title: "彈性提案（無壓力）", note: "逛街派：步行至大通商圈、狸小路或札幌車站的百貨公司做最後血拚。慢活派：留在飯店周邊喝咖啡、吃甜點，享受沒有行程追趕的悠哉時光。" },
        { time: "晚上", type: "food", title: "晚餐自由擊破", note: "把這天留給前幾天沒吃到、或是想再吃一次的在地美食（如成吉思汗烤肉或三大蟹吃到飽），為這趟旅程畫下完美的味蕾休止符。" },
        { time: "晚上", type: "hotel", title: "🏨 【本日住宿】Richmond Hotel 札幌大通", note: "禁菸三人房 (26平米，雙床+沙發床) × 2 間 (含早餐)。該晚折扣後房費： 95,284 円" }
      ]
    },
    {
      day: 11,
      date: "08/29 (六)",
      title: "滿載而歸，星宇尊榮返台",
      location: "新千歲機場",
      activities: [
        { time: "上午", type: "sightseeing", title: "滿載而歸", note: "於飯店享用最後一頓豐盛早餐，大通公園最後巡禮。11:00 辦理退房，行李寄放櫃台。" },
        { time: "12:15", type: "transport", title: "🚕 專車送機", note: "舒適型 10 人座專車於飯店門口迎接，免扛行李直達機場。(訂單編號：#26KK284100267，預付 NT$ 3,465)" },
        { time: "13:25", type: "shopping", title: "抵達機場", note: "於國內線航廈做最後掃貨（將剛買的伴手禮直接塞進大行李箱）。" },
        { time: "14:25", type: "transport", title: "機場報到", note: "於國際航廈辦理星宇航空報到與託運。" },
        { time: "16:25", type: "transport", title: "騰空起飛", note: "搭乘星宇航空 JX851 揮別北海道。" },
        { time: "19:35", type: "transport", title: "抵達台灣", note: "降落桃園國際機場第 1 航廈，帶著滿滿的回憶與戰利品，圓滿結束 11 天的家族大旅行！" }
      ]
    }
  ]
};