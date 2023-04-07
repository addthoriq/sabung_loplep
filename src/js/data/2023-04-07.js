dataSetVersion = "2023-04-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter berdasarkan Dimensi",
    key: "dimensi",
    checked: false,
    sub: [
      { name: "2D (Waifu)", key: "waifu" },
      { name: "3D (Oshii)", key: "oshii" },
    ]
  },
  {
    name: "Filter berdasarkan Gen",
    key: "gen",
    checked: false,
    sub: [
      { name: "μ's", key: "muse" },
      { name: "Aqours", key: "aqours" },
      { name: "Nijigasaki", key: "niji" },
      { name: "Liella", key: "liella" },
      { name: "School Idol Musical", key: "sim" },
      { name: "Hasunosora", key: "hasu" },
    ]
  },
];

var waifu = "idol/";
var oshii = "voiceactress/";

dataSet[dataSetVersion].characterData = [
  {
    name: "Kosaka Honoka",
    img: waifu + "4Kousaka-Honoka-2nSYRU.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Ayase Eli",
    img: waifu + "1Ayase-Eli-wRbUwD.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: ["muse"]
    }
  },
  {
    name: "Minami Kotori",
    img: waifu + "9Minami-Kotori-97bAtR.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: ["muse"]
    }
  },
  {
    name: "Sonoda Umi",
    img: waifu + "13Sonoda-Umi-Gr3Hk1.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Hashizora Rin",
    img: waifu + "2Hoshizora-Rin-1hRTnq.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Nishikino Maki",
    img: waifu + "10Nishikino-Maki-85vaOk.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Tojo Nozomi",
    img: waifu + "15Toujou-Nozomi-lfnEwQ.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Koizumi Hanayo",
    img: waifu + "3Koizumi-Hanayo-wuvH3R.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Yazawa Nico",
    img: waifu + "18Yazawa-Nico-giFa6q.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Takami Chika",
    img: waifu + "14Takami-Chika-MumE0U.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Sakurauchi Riko",
    img: waifu + "12Sakurauchi-Riko-p2EuTb.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Matsuura Kanan",
    img: waifu + "8Matsuura-Kanan-aT2Td5.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kurosawa Dia",
    img: waifu + "6Kurosawa-Dia-6ovIG8.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Watanabe You",
    img: waifu + "17Watanabe-You-En1r2L.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Tsushima Yoshiko",
    img: waifu + "16Tsushima-Yoshiko-NdFuZH.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kunikida Hanamaru",
    img: waifu + "5Kunikida-Hanamaru-TomAYd.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Ohara Mari",
    img: waifu + "11Ohara-Mari-nI3CW6.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kurosawa Ruby",
    img: waifu + "7Kurosawa-Ruby-RoBWBL.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Nitta Emi",
    img: oshii + "4Nitta-Emi-Vjrbrn.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Uchida Aya",
    img: oshii + "9Uchida-Aya-1NVeJV.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
];
