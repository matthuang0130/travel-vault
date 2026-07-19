export const tripData = {
metadata: {
    title: '2025 夏日北海道 薰衣草與秘境之旅',
    author: '黃筳杰',
    dates: '2025-06-27 至 2025-07-08',
    membersCount: 6,
    // 先用 Google 相簿首頁當作測試連結，就不會報錯了
    galleryLink: 'https://photos.google.com/' 
  },
  budget: {
    jpy: {
      // 住宿費精確計算：
      // 6/27 ワイズホテル旭川駅前: 58,100
      // 6/28-7/2 Hotel Wing International: 157,902
      // 7/2-7/4 ラ・ジェント・ステイ札幌大通: 105,460 (41,800 + 63,660)
      // 7/4-7/8 東急ステイ札幌大通: 213,148 (雙人房 78,624 + 四人特別室 134,524)
      hotel: 534610, 
      transport: 53000, // 6/28 旭川包車
      total: 587610
    },
    twd: {
      airfare: 100591, // 6人份星宇航空機票總計
      transport: 0,
      dayTour: 14286, // KKday 積丹余市一日遊 (海膽 7143 + 熟食 7143)
      prepaid: 0 
    }
  },
  schedule: [
    {
      day: 1,
      date: '06/27 (五)',
      title: '啟程：前進旭川',
      location: '旭川',
      activities: [
        { time: '10:05', title: '星宇航空 JX850 前往北海道', note: '10:05 桃園起飛，15:10 抵達新千歲 (CTS)', type: 'transport' },
        { time: '下午', title: '買 PASS 往旭川前進', type: 'transport' },
        { time: '晚上', title: '🏨 入住：ワイズホテル旭川駅前 (Y\'s Hotel)', note: '已線上刷卡 58,100 円 (扣除折價券)', type: 'hotel' }
      ]
    },
    {
      day: 2,
      date: '06/28 (六)',
      title: '美瑛拼布之路包車漫遊',
      location: '美瑛',
      activities: [
        { time: '09:00', title: '包車 丘巡りルート (7小時)', note: '費用 53,000 日圓', type: 'transport' },
        { time: '上午', title: '北西之丘 / 新榮之丘 / 四季彩之丘', type: 'sight' },
        { time: '下午', title: '千代田農場 / 青池 / 白鬚瀑布', type: 'sight' },
        { time: '傍晚', title: '亞斗夢之丘 (ぜるぶの丘) / 就實之丘', type: 'sight' },
        { time: '晚上', title: '🏨 入住：Hotel Wing International 旭川站前', note: '現場支付 157,902 円 (連住四晚)', type: 'hotel' }
      ]
    },
    {
      day: 3,
      date: '06/29 (日)',
      title: '富良野薰衣草花海',
      location: '富良野',
      activities: [
        { time: '10:00', title: '搭乘薰衣草慢車號 (旭川-薰衣草田)', note: '11:15 抵達', type: 'transport' },
        { time: '中午', title: '富田農場', note: '賞薰衣草', type: 'sight' },
        { time: '14:31', title: '搭車前往富良野 市區逛逛', note: '15:02 抵達', type: 'transport' },
        { time: '晚上', title: '晚餐：唯我獨尊咖哩', note: '富良野名店', type: 'food' },
        { time: '晚上', title: '🏨 續住：Hotel Wing International 旭川站前', type: 'hotel' }
      ]
    },
    {
      day: 4,
      date: '06/30 (一)',
      title: '大雪森之花園與頂級法餐',
      location: '上川',
      activities: [
        { time: '上午', title: '大雪 森のガーデン 漫遊', type: 'sight' },
        { time: '中午', title: '午餐：Fratello Di Mikuni Kamikawa', note: '享用 Mother Earth Course (母なる大地のコース)', type: 'food' },
        { time: '晚上', title: '🏨 續住：Hotel Wing International 旭川站前', type: 'hotel' }
      ]
    },
    {
      day: 5,
      date: '07/01 (二)',
      title: '旭山動物園與燒肉之夜',
      location: '旭川',
      activities: [
        { time: '上午', title: '旭山動物園', type: 'sight' },
        { time: '下午', title: '美瑛市區漫遊', type: 'sight' },
        { time: '晚上', title: '晚餐：Yakiniku Wajima', note: '燒肉晚餐', type: 'food' },
        { time: '晚上', title: '🏨 續住：Hotel Wing International 旭川站前', type: 'hotel' }
      ]
    },
    {
      day: 6,
      date: '07/02 (三)',
      title: '移動日：重返札幌',
      location: '札幌',
      activities: [
        { time: '上午', title: '搭車前往札幌', type: 'transport' },
        { time: '晚上', title: '🏨 入住：ラ・ジェント・ステイ札幌大通 (La\'gent Stay)', note: '已線上刷卡 105,460 円 (扣除折價券)', type: 'hotel' }
      ]
    },
    {
      day: 7,
      date: '07/03 (四)',
      title: '瀧野鈴蘭公園漫遊', 
      location: '札幌',
      activities: [
        { time: '上午', title: '札幌瀧野鈴蘭公園散步', type: 'sight' }, 
        { time: '中午', title: '午餐：公園內餐廳', type: 'food' }, 
        { time: '下午', title: '札幌市區自由活動', note: '購物與市區觀光', type: 'sight' }, 
        { time: '晚上', title: '晚餐：一蘭拉麵', type: 'food' },
        { time: '晚上', title: '🏨 續住：ラ・ジェント・ステイ札幌大通', type: 'hotel' }
      ]
    },
    { // 👈 就是少了這個左大括號！
      day: 8,
      date: '07/04 (五)',
      title: '積丹余市秘境一日遊',
      location: '積丹 / 余市',
      activities: [
        { time: '全日', title: 'KKday 夏日初戀浪花 一日遊', note: '含神威岬、余市酒廠、天狗山、採果。已付費 NT$ 14,286。', type: 'sight' },
        { time: '晚上', title: '🏨 入住：東急ステイ札幌大通', note: '已刷卡 78,624 円 (每間)', type: 'hotel' }
      ]
    },
    {
      day: 9,
      date: '07/05 (六)',
      title: '札幌市區美食巡禮',
      location: '札幌',
      activities: [
        { time: '上午', title: '早午餐：札幌北菓樓本店', type: 'food' },
        { time: '下午', title: '札幌市區漫遊', type: 'sight' },
        { time: '晚上', title: '晚餐：奧芝湯咖哩', type: 'food' },
        { time: '晚上', title: '🏨 續住：東急ステイ札幌大通', type: 'hotel' }
      ]
    },
    {
      day: 10,
      date: '07/06 (日)',
      title: '巧克力工廠與成吉思汗烤肉',
      location: '札幌',
      activities: [
        { time: '上午', title: 'ROYCE TOWN 巧克力工廠見學', type: 'sight' },
        { time: '晚上', title: '晚餐：炭焼ジンギスカン 北の風', note: '大啖北海道成吉思汗烤羊肉', type: 'food' },
        { time: '晚上', title: '🏨 續住：東急ステイ札幌大通', type: 'hotel' }
      ]
    },
    {
      day: 11,
      date: '07/07 (一)',
      title: '歷史與百萬夜景',
      location: '札幌',
      activities: [
        { time: '上午', title: '北海道開拓村', type: 'sight' },
        { time: '下午', title: '藻岩山 (Mt. Moiwa) 纜車', note: '欣賞札幌百萬夜景', type: 'sight' },
        { time: '晚上', title: '🏨 續住：東急ステイ札幌大通', type: 'hotel' }
      ]
    },
    {
      day: 12,
      date: '07/08 (二)',
      title: '滿載而歸',
      location: '新千歲',
      activities: [
        { time: '16:25', title: '星宇航空 JX851 返回台灣', note: '16:25 新千歲起飛，19:35 抵達桃園', type: 'transport' }
      ]
    }
  ]
};