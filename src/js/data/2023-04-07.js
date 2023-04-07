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
  }
];

var waifu = "idol/";
var oshii = "voiceactress/";

dataSet[dataSetVersion].characterData = [
  {
    name: "Kosaka Honoka",
    img: waifu + "4Kousaka-Honoka-2nSYRU.png",
    opts: {
      dimensi: [ "waifu" ]
    }
  },
  {
    name: "Ayase Eli",
    img: waifu + "1Ayase-Eli-wRbUwD.png",
    opts: {
      dimensi: [ "waifu" ]
    }
  },
  {
    name: "Minami Kotori",
    img: waifu + "9Minami-Kotori-97bAtR.png",
    opts: {
      dimensi: [ "waifu" ]
    }
  },
  {
    name: "Nitta Emi",
    img: oshii + "4Nitta-Emi-Vjrbrn.jpg",
    opts: {
      dimensi: [ "oshii" ]
    }
  },
  {
    name: "Uchida Aya",
    img: oshii + "9Uchida-Aya-1NVeJV.jpg",
    opts: {
      dimensi: [ "oshii" ]
    }
  },
];
