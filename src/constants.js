export const brandMap = {
  mercedes: "Mercedes-Benz/賓士",
  bmw: "BMW",
  toyota: "Toyota",
  ford: "Ford/福特",
  honda: "Honda",
  volkswagen: "Volkswagen/福斯",
  nissan: "Nissan",
  mazda: "Mazda",
  mitsubishi: "Mitsubishi/三菱",
  porsche: "Porsche/保時捷",
  lexus: "Lexus",
  audi: "Audi",
  alfaromeo: "Alfa Romeo",
};

export const carStyleMap = {
  "toyota-altis": "Corolla Altis",
  "mazda-3": "Mazda3",
  "honda-crv": "CR-V",
  "porsche-macan": "Macan",
  "toyota-yaris": "Yaris",
};

export const priceMap = {
  100000: "10萬以下",
  250000: "10萬-25萬",
  350000: "25萬-35萬",
  500000: "35萬-50萬",
  1000000: "50萬-100萬",
  1000001: "100萬以上",
};

export const otherMap = {
  year: "車齡",
  region: "地區",
  color: "車色",
  type: "車種",
  doors: "車門數",
  fuel: "燃料",
  passangers: "乘客數",
  transmission: "變數系統",
  gas: "排氣量",
};

export const yearMap = {
  "1down": "1年以內",
  "1to3": "1-3年",
  "3to5": "3-5年",
  "5to10": "5-10年",
  "10up": "10年以上",
};

export const carDoorMap = {};

export const cars = [
  // {
  //   id: "1",
  //   category: "mazda-3",
  //   title: "Mazda 3 2023款 2.0L",
  //   desc: "年底大優惠【專營職軍、軍公教、學生】實車實價透明車況，0元交車不是夢",
  //   detail: "桃園市 | 7天前更新 | 3231次瀏覽",
  //   price: "36.8萬",
  //   priceInNumber: 368000,
  //   year: "2023年",
  //   mileage: "9000km",
  // },
  // {
  //   id: "2",
  //   category: "toyota-altis",
  //   title: "Toyota Corolla Altis 2019款 1.8L",
  //   desc: "【全車改裝市場保值車，耐操好養首購適合】歡迎搜尋粉專/IG查看百台成交好評。",
  //   detail: "桃園市 | 4天內刊登 | 1807次瀏覽",
  //   price: "28.5萬",
  //   priceInNumber: 285000,
  //   year: "2018年",
  //   mileage: "13000km",
  // },
  // {
  //   id: "3",
  //   category: "mercedes",
  //   title: "M-Benz C250 Estate 2013款 1.8L",
  //   desc: "認賠 !!! 不留了 年前虧賣 25.8萬 車主長期在國外跑少車、絕無待修及事故",
  //   detail: "桃園市 | 7天前更新 | 1287次瀏覽",
  //   price: "25.8萬",
  //   priceInNumber: 258000,
  //   year: "2013年",
  //   mileage: "62000km",
  // },
  // {
  //   id: "4",
  //   category: "volkswagen",
  //   title: "Volkswagen Golf 2020款 1.4L",
  //   desc: "車市崩盤出清 中尾段閥門排氣管都改好 全原廠保養紀錄齊全 全額貸 超額貸皆可處理",
  //   detail: "桃園市 | 7天前更新 | 516次瀏覽",
  //   price: "36.2萬",
  //   priceInNumber: 362000,
  //   year: "2019年",
  //   mileage: "16000km",
  // },
  // {
  //   id: "5",
  //   category: "honda-crv",
  //   title: "Honda CR-V 2021款 1.5L",
  //   desc: "全北部最大盤商出沒 購車享好禮 ▶滿18即可辦理貸款，輕鬆月繳無負擔◀",
  //   detail: "桃園市 | 7天前更新 | 3826次瀏覽",
  //   price: "29.8萬",
  //   priceInNumber: 298000,
  //   year: "2020年",
  //   mileage: "13000km",
  // },
  // {
  //   id: "6",
  //   category: "porsche-macan",
  //   title: "Porsche Macan 2020款 2.0L",
  //   desc: "FB搜尋【永誠國際車業 】MACAN未領 PDLS 十八項 冷熱椅 20寸圈",
  //   detail: "桃園市 | 7天前更新 | 1494次瀏覽",
  //   price: "238萬",
  //   priceInNumber: 2380000,
  //   year: "2019年",
  //   mileage: "38000km",
  // },
  // {
  //   id: "7",
  //   category: "porsche-macan",
  //   title: "Porsche Macan 2023款 2.0L",
  //   desc: "正23 全新車ACC 冷熱椅 360環景 20吋框 卡拉拉白 全景 新車430萬",
  //   detail: "台中市 | 3天前更新 | 2730次瀏覽",
  //   price: "358.8萬",
  //   priceInNumber: 358800,
  //   year: "2023年",
  //   mileage: "100km",
  // },
  {
    id: "8",
    thumbnail:
      "https://p1.8891.com.tw/m943745/v5788/2023/09/09/1694248103372835_1024_768_3711808.jpg",
    category: "toyota-yaris",
    title: "Toyota Yaris  2008款 自排 1.5L",
    desc: "〈職軍．信用小白．首購〉低利率、免保人、全額貸款0元交車",
    price: 68000,
    mileage: 70000,
    license: 2007,
    color: "白色",
    carry: "5門5座",
    fuel: "汽油(1500cc)",
    wd: 2,
    place: "桃園市",
    review: true,
    verify: false,
    view: 7747,
    updated: 1700002596328,
    phone: "0962-xxx-xxx",
  },
  {
    id: "9",
    thumbnail:
      "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066681063040_1024_768_3721643.jpg",
    category: "toyota-altis",
    title: "Toyota Corolla Altis 2019款 手自排 1.8L",
    desc: "【年底崩盤大降價】入手好時機！！全額貸・超貸・ 免保人0元開回家・99%強力過件",
    price: 285000,
    mileage: 11000,
    license: 2018,
    color: "白色",
    carry: "4門5座",
    fuel: "汽油(1800cc)",
    wd: 2,
    place: "新北市",
    review: true,
    verify: false,
    view: 4730,
    updated: 1700402596328,
    phone: "0938-xxx-xxx",
  },
];

export const CarImageMap = {
  8: [
    {
      src: "https://p1.8891.com.tw/m943745/v5788/2023/09/09/1694248103372835_1024_768_3711808.jpg",
      preview: "https://p1.8891.com.tw/2023/09/09/1694248103372835_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m943745/v5788/2023/09/09/1694248103657795_1024_768_3711808.jpg",
      preview: "https://p1.8891.com.tw/2023/09/09/1694248103657795_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m943745/v5788/2023/09/09/1694248103301762_1024_768_3711808.jpg",
      preview: "https://p2.8891.com.tw/2023/09/09/1694248103301762_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m943745/v5788/2023/09/09/1694248103688386_1024_768_3711808.jpg",
      preview: "https://p2.8891.com.tw/2023/09/09/1694248103688386_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m943745/v5788/2023/09/09/1694248103712588_1024_768_3711808.jpg",
      preview: "https://p2.8891.com.tw/2023/09/09/1694248103712588_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m943745/v5788/2023/09/09/1694248103352466_1024_768_3711808.jpg",
      preview: "https://p2.8891.com.tw/2023/09/09/1694248103352466_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m943745/v5788/2023/09/09/1694248104012403_1024_768_3711808.jpg",
      preview: "https://p1.8891.com.tw/2023/09/09/1694248104012403_160_120.jpg",
    },
  ],
  9: [
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066681063040_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066681063040_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066680972096_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066680972096_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m944303/v4955/2023/12/20/1703066679336691_1024_768_3721643.jpg",
      preview: "https://p1.8891.com.tw/2023/12/20/1703066679336691_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066680594728_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066680594728_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m944303/v4955/2023/12/20/1703066678513585_1024_768_3721643.jpg",
      preview: "https://p1.8891.com.tw/2023/12/20/1703066678513585_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066678693696_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066678693696_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066677946260_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066677946260_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066678150590_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066678150590_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066678081218_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066678081218_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066678896332_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066678896332_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066679753958_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066679753958_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066679486302_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066679486302_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m944303/v4955/2023/12/20/1703066679933745_1024_768_3721643.jpg",
      preview: "https://p1.8891.com.tw/2023/12/20/1703066679933745_160_120.jpg",
    },
    {
      src: "https://p1.8891.com.tw/m944303/v4955/2023/12/20/1703066680312171_1024_768_3721643.jpg",
      preview: "https://p1.8891.com.tw/2023/12/20/1703066680312171_160_120.jpg",
    },
    {
      src: "https://p2.8891.com.tw/m944303/v4955/2023/12/20/1703066680772770_1024_768_3721643.jpg",
      preview: "https://p2.8891.com.tw/2023/12/20/1703066680772770_160_120.jpg",
    },
  ],
};
