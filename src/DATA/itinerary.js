export const tripData = {
  metadata: {
    title: "2026 北海道盛夏之旅",
    author: "黃志中",
    dates: "2026-08-19 to 2026-08-29",
    membersCount: 6,
    requiredTools: [
      { name: "Google Maps", desc: "導航與餐廳找路" },
      { name: "乘換案內", desc: "查詢地鐵與巴士轉乘" }
    ]
  },
  // 👇 新增的預算與固定支出資料
  budget: {
    jpy: {
      hotel: 605303,
      transport: 138160,
      total: 743463
    },
    twd: {
      prepaid: 3465
    }
  },
  schedule: [
    {
      day: 1,
      date: "08/19 (三)",
      title: "精品航空啟航，降落北海道",
      location: "新千歲",
      activities: [
        { 
          time: "10:05", 
          type: "transport", 
          title: "騰空起飛", 
          note: "搭乘星宇航空 JX850（A350-900 寬體客機）享受精品級高空服務" 
        },
        { 
          time: "15:10", 
          type: "transport", 
          title: "抵達新千歲", 
          note: "降落新千歲機場（CTS）國際航廈，辦理入境手續" 
        },
        { 
          time: "16:30", 
          type: "food", 
          title: "美食天堂晚餐", 
          note: "提領行李後，全家可於新千歲機場國內線 3 樓享用抵達北海道的第一頓大餐（如拉麵道場）" 
        },
        { 
          time: "18:00", 
          type: "hotel", 
          title: "🏨 入住：Air Terminal Hotel (エアターミナルホテル)", 
          note: "禁菸雙床房 (停車場側) × 3 間。該晚折扣後房費：80,515 円" 
        }
      ]
    },
    {
      day: 2,
      date: "08/20 (四)",
      title: "國內線飛越道東，雙車戰術完美開局",
      location: "釧路",
      activities: [
        { 
          time: "09:00", 
          type: "sightseeing", 
          title: "上午悠哉時光", 
          note: "於飯店享用早餐，順便逛逛新千歲機場超豐富的伴手禮區" 
        },
        { 
          time: "13:20", 
          type: "transport", 
          title: "國內線起飛", 
          note: "搭乘 ANA NH4873 班機前往釧路" 
        },
        { 
          time: "14:40", 
          type: "transport", 
          title: "🚕 機場包車接機（雙車戰術）", 
          note: "司機於機場迎接，行李上車直奔細岡大觀望，免爬坡欣賞絕景 (第一共栄交通 0154-36-4151)。包車費用：32,160 円" 
        },
        { 
          time: "16:30", 
          type: "hotel", 
          title: "🏨 入住：Kushiro Global View Hotel", 
          note: "【本館・禁菸】雙床房 × 3 間。該晚折扣後房費：41,036 円" 
        },
        { 
          time: "18:00", 
          type: "food", 
          title: "幣舞橋夕陽與晚餐", 
          note: "傍晚步行欣賞世界三大夕陽，晚餐享用道地爐端燒" 
        }
      ]
    },
    {
      day: 3,
      date: "08/21 (五)",
      title: "阿寒湖避暑與綠球藻：6 小時尊榮包車",
      location: "阿寒湖",
      activities: [
        { 
          time: "09:30", 
          type: "transport", 
          title: "🚕 專車啟程 (9人座大型計程車)", 
          note: "巨型計程車於飯店大廳迎接。包車費用：68,400 円" 
        },
        { 
          time: "10:00", 
          type: "sightseeing", 
          title: "釧路濕原展望台", 
          note: "搭電梯至頂樓，吹冷氣俯瞰廣袤濕原" 
        },
        { 
          time: "12:00", 
          type: "food", 
          title: "阿寒湖溫泉街午餐", 
          note: "享用公魚天婦羅或鹿肉定食" 
        },
        { 
          time: "13:00", 
          type: "sightseeing", 
          title: "阿寒湖遊覽船", 
          note: "登船並於「忠類島」停靠，登島觀賞天然綠球藻" 
        },
        { 
          time: "15:30", 
          type: "hotel", 
          title: "🏨 返回市區飯店", 
          note: "遊船結束直接上冷氣車廂午休，平安回到飯店。該晚房費：37,636 円" 
        }
      ]
    },
    {
      day: 4,
      date: "08/22 (六)",
      title: "四極踏破極限打卡 ＆ 厚岸頂級生蠔",
      location: "根室 / 厚岸",
      activities: [
        { 
          time: "08:18", 
          type: "transport", 
          title: "鐵道出發", 
          note: "釧路車站搭乘「JR 花咲線」" 
        },
        { 
          time: "10:50", 
          type: "sightseeing", 
          title: "🚨 抵達根室（22 分鐘極限任務）", 
          note: "家人留守月台合照，總監出站至觀光案內所自助領取【到達證明書】與【車站證明書】" 
        },
        { 
          time: "11:12", 
          type: "transport", 
          title: "鐵道折返", 
          note: "任務圓滿！搭乘「快速花咲號」原車折返" 
        },
        { 
          time: "12:24", 
          type: "food", 
          title: "厚岸鮮味午餐", 
          note: "抵達厚岸站，直奔「味覺總站 Conchiglie」大啖頂級生蠔全餐" 
        },
        { 
          time: "16:11", 
          type: "hotel", 
          title: "🏨 滿載而歸", 
          note: "回到釧路 Kushiro Global View Hotel。該晚房費：45,796 円" 
        }
      ]
    },
    {
      day: 5,
      date: "08/23 (日)",
      title: "道東大移動：觀光巴士 ＋ 海岸鐵道接力",
      location: "網走",
      activities: [
        { 
          time: "07:50", 
          type: "transport", 
          title: "🚌 釧路知床號啟航", 
          note: "釧路站前巴士總站上車，順遊阿寒丹頂之里、摩周湖第一展望台" 
        },
        { 
          time: "12:10", 
          type: "food", 
          title: "美幌峠（午餐）", 
          note: "停留 75 分鐘，俯瞰屈斜路湖並享用午餐" 
        },
        { 
          time: "16:25", 
          type: "transport", 
          title: "關鍵轉乘", 
          note: "於「JR 知床斜里站」下車並領取行李，轉乘 16:44 的 JR 釧網本線，緊貼鄂霍次克海前進" 
        },
        { 
          time: "17:30", 
          type: "hotel", 
          title: "🏨 入住：Dormy Inn Abashiri (天都之湯 多美迎網走)", 
          note: "轉乘短程計程車直達飯店辦理入住。該晚房費：71,200 円" 
        }
      ]
    },
    {
      day: 6,
      date: "08/24 (一)",
      title: "網走山海與歷史探索：終極無壓包車",
      location: "網走",
      activities: [
        { 
          time: "10:00", 
          type: "transport", 
          title: "🚕 專車接駁 (9人座大型計程車)", 
          note: "巨型計程車於飯店門口迎接 (網走巴士 0152-43-3939)。包車費用：37,600 円" 
        },
        { 
          time: "10:15", 
          type: "sightseeing", 
          title: "天都山・鄂霍次克流冰館", 
          note: "體驗零下 15 度冰室並欣賞山頂全景" 
        },
        { 
          time: "11:15", 
          type: "sightseeing", 
          title: "博物館 網走監獄", 
          note: "漫步 90 分鐘了解北海道開拓史" 
        },
        { 
          time: "13:05", 
          type: "sightseeing", 
          title: "能取岬絕景兜風", 
          note: "與燈塔及鄂霍次克藍海景合影" 
        },
        { 
          time: "13:50", 
          type: "food", 
          title: "戰略下車與下午悠哉時光", 
          note: "於「流冰街道網走」下車，享用午餐與採買，散步回飯店享受天然溫泉。該晚房費：71,200 円" 
        }
      ]
    },
    {
      day: 7,
      date: "08/25 (二)",
      title: "玻璃藝術與都會轉場，札幌湯咖哩之夜",
      location: "札幌",
      activities: [
        { 
          time: "10:00", 
          type: "sightseeing", 
          title: "上午文青散策", 
          note: "睡到自然醒，散步參觀充滿質感的「流冰硝子館」" 
        },
        { 
          time: "11:10", 
          type: "transport", 
          title: "前往女滿別機場", 
          note: "搭乘聯絡巴士或計程車前往機場" 
        },
        { 
          time: "13:55", 
          type: "transport", 
          title: "國內線起飛", 
          note: "搭乘 JAL JL2714 班機離開道東，14:40 抵達札幌新千歲機場" 
        },
        { 
          time: "16:00", 
          type: "hotel", 
          title: "🏨 入住：Richmond Hotel 札幌大通", 
          note: "轉乘快速電車進入札幌市中心辦理入住。該晚房費：43,774 円" 
        },
        { 
          time: "18:00", 
          type: "food", 
          title: "札幌湯咖哩之夜", 
          note: "稍作休息後，步行前往市區的湯咖哩名店享用道地晚餐" 
        }
      ]
    },
    {
      day: 8,
      date: "08/26 (三)",
      title: "札幌市區巡禮與 F 村熱血前哨戰",
      location: "札幌",
      activities: [
        { 
          time: "全日", 
          type: "sightseeing", 
          title: "札幌市區巡禮 (行程待排定)", 
          note: "可安排大通公園、狸小路商圈、北海道神宮等" 
        },
        {
          time: "晚上",
          type: "hotel",
          title: "🏨 續住：Richmond Hotel 札幌大通",
          note: "該晚房費：49,384 円"
        }
      ]
    },
    {
      day: 9,
      date: "08/27 (四)",
      title: "札幌近郊探索",
      location: "札幌近郊",
      activities: [
        { 
          time: "全日", 
          type: "sightseeing", 
          title: "近郊一日遊 (行程待排定)", 
          note: "可考慮前往美瑛四季彩之丘欣賞夏末拼布花田，或安排定山溪溫泉一日遊" 
        },
        {
          time: "晚上",
          type: "hotel",
          title: "🏨 續住：Richmond Hotel 札幌大通",
          note: "該晚房費：69,478 円"
        }
      ]
    },
    {
      day: 10,
      date: "08/28 (五)",
      title: "ES CON FIELD 北海道！感受日職震撼",
      location: "北廣島",
      activities: [
        { 
          time: "全日", 
          type: "sightseeing", 
          title: "前進 F 村 (行程待排定)", 
          note: "體驗最頂級球場設施與賽事氛圍" 
        },
        {
          time: "晚上",
          type: "hotel",
          title: "🏨 續住：Richmond Hotel 札幌大通",
          note: "該晚房費：95,284 円"
        }
      ]
    },
    {
      day: 11,
      date: "08/29 (六)",
      title: "滿載而歸，星宇尊榮返台",
      location: "新千歲機場",
      activities: [
        { 
          time: "09:00", 
          type: "sightseeing", 
          title: "最後採買", 
          note: "於飯店享用早餐，大通公園散步或伴手禮衝刺，11:00 辦理退房寄放行李" 
        },
        { 
          time: "12:15", 
          type: "transport", 
          title: "🚕 舒適尊榮送機", 
          note: "舒適型 10 人座專車於飯店門口迎接，免扛行李直達機場。訂單：#26KK284100267 (已預付 NT$ 3,465)" 
        },
        { 
          time: "13:25", 
          type: "shopping", 
          title: "機場最後掃貨", 
          note: "抵達機場，把握開櫃前的空檔於國內線航廈做最後掃貨" 
        },
        { 
          time: "16:25", 
          type: "transport", 
          title: "揮別北海道", 
          note: "搭乘星宇航空 JX851（A330-900neo）起飛，19:35 降落桃園國際機場，圓滿結束旅程！" 
        }
      ]
    }
  ]
};