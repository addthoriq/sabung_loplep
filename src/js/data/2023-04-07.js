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
  // Begin Muse
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
  // End Muse
  // Begin Aqours
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
  // End Aqours
  // Begin Nijigasaki
  {
    name: "Takasaki Yu",
    img: waifu + "116Takasaki-Yu-sFJm8z.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Uehara Ayumu",
    img: waifu + "102Uehara-Ayumu-KN13pl.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Nakasu Kasumi",
    img: waifu + "67Nakasu-Kasumi-1w2SQe.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Osaka Shizuku",
    img: waifu + "70Osaka-Shizuku-1WGIlr.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Uehara Ayumu",
    img: waifu + "102Uehara-Ayumu-KN13pl.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Asaka Karin",
    img: waifu + "24Asaka-Karin-3nF3em.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Miyashita Ai",
    img: waifu + "62Miyashita-Ai-f38Jhw.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Konoe Kanata",
    img: waifu + "50Konoe-Kanata-82Ei8T.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Yuki Setsuna",
    img: waifu + "110Yuki-Setsuna-2gVQWE.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Emma Verde",
    img: waifu + "28Emma-Verde-pVzmKV.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Tennoji Rina",
    img: waifu + "97Tennoji-Rina-YB8JUo.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Mifune Shioriko",
    img: waifu + "113Mifune-Shioriko-tNDNRT.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Mia Taylor",
    img: waifu + "123Mia-Taylor-jCx23M.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Lanzhu Zhong",
    img: waifu + "124Lanzhu-aPGOOW.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  // End Nijigasaki
  // Begin Liella
  {
    name: "Shibuya Kanon",
    img: waifu + "118Shibuya-Kanon-if8zlW.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Tang Keke",
    img: waifu + "119Tang-Keke-4Tr0Yx.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Arashi Chisato",
    img: waifu + "120Arashi-Chisato-eySO7L.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Heanna Sumire",
    img: waifu + "121Heanna-Sumire-Ben4YX.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Hazuki Ren",
    img: waifu + "122Hazuki-Ren-fZ9vXK.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Sakurakoji Kinako",
    img: waifu + "172Sakurakoji-Kinako-AMHcCz.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Yoneme Mei",
    img: waifu + "173Yoneme-Mei-DyEzzc.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Wakana Shiki",
    img: waifu + "174Wakana-Shiki-bnw0Nf.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  // End Liella
  // Begin SIM
  {
    name: "Tsubaki Rurika",
    img: waifu + "190Tsubaki-Rurika-wvwUXw.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Sumeragi Yuzuha",
    img: waifu + "191Sumeragi-Yuzuha-XmmDy4.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Hojo Yukino",
    img: waifu + "193Hojo-Yukino-akBBVv.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Amakusa Hikaru",
    img: waifu + "192Amakusa-Hikaru-PVsTib.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Mikasa Maya",
    img: waifu + "194Mikasa-Maya-qqB0Go.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Takizawa Anzu",
    img: waifu + "195Takizawa-Anzu-H00EFp.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Wakatsuki Misuzu",
    img: waifu + "196Wakatsuki-Misuzu-ozBLpg.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Kurusu Toa",
    img: waifu + "197Kurusu-Toa-3WilLJ.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Suzuka Rena",
    img: waifu + "199Suzuka-Rena-VldBcv.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  {
    name: "Harukaze Sayaka",
    img: waifu + "198Harukaze-Sayaka-xqLm3E.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["sim"]
    }
  },
  //End SIM
  // Begin Hasunosora
  {
    name: "Hinoshita Kaho",
    img: waifu + "203Hinoshita-Kaho-b66xLB.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  {
    name: "Murano Sayaka",
    img: waifu + "204Murano-Sayaka-ZMrSmy.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  {
    name: "Otomune Kozue",
    img: waifu + "205Otomune-Kozue-5FN8n5.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  {
    name: "Yugiri Tsuzuri",
    img: waifu + "206Yugiri-Tsuzuri-vf3xkb.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  {
    name: "Osawa Rurino",
    img: waifu + "207Osawa-Rurino-8OiQVw.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  {
    name: "Fujishima Megumi",
    img: waifu + "208Fujishima-Megumi-OzqU01.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["hasu"]
    }
  },
  // End Hasunosora
  // Seiyuu //
  // Begin Muse
  {
    name: "Nitta Emi",
    img: oshii + "4Nitta-Emi-Vjrbrn.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Nanjou Yoshino",
    img: oshii + "1Nanjou-Yoshino-1qdsZW.jpg",
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
  {
    name: "Mimori Suzuko",
    img: oshii + "13Mimori-Suzuko-x3kEDU.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Iida Riho",
    img: oshii + "2Iida-Riho-riv3IE.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Hori Eriko (Pile)",
    img: oshii + "10Pile-n1zLR2.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Kusuda Aina",
    img: oshii + "15Kusuda-Aina-88IUqs.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Kubo Yurika",
    img: oshii + "3Kubo-Yurika-jHYiNk.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Tokui Sora",
    img: oshii + "18Tokui-Sora-u0tO2w.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  // End Muse
  // Begin Aqours
  {
    name: "Inami Anju",
    img: oshii + "14Inami-Anju-3XoGqL.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Aida Rikako",
    img: oshii + "12Aida-Rikako-oGTpeT.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Suwa Nanaka",
    img: oshii + "8Suwa-Nanaka-41oTv0.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Komiya Arisa",
    img: oshii + "6Komiya-Arisa-lDoqLv.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Saitou Shuka",
    img: oshii + "17Saitou-Shuka-T5r1p3.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Kobayashi Aika",
    img: oshii + "10Pile-n1zLR2.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Takatsuki Kanako",
    img: oshii + "15Kusuda-Aina-88IUqs.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Suzuki Aina",
    img: oshii + "11Suzuki-Aina-0OFPJP.png",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  {
    name: "Furihata Ai",
    img: oshii + "7Furihata-Ai-Z5aiXl.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["aqours"]
    }
  },
  // End Aqours
  // Begin Niji
  {
    name: "Yano Hinaki",
    img: oshii + "39Yano-Hinaki-tRDHyk.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Oonishi Aguri",
    img: oshii + "21Oonishi-Aguri-7eHrbm.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Sagara Mayu",
    img: oshii + "24Sagara-Mayu-GIdqlm.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Maeda Kaori",
    img: oshii + "26Maeda-Kaori-inNoL9.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Kubota Miyu",
    img: oshii + "29Kubota-Miyu-ITCbxu.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Murakami Natsumi",
    img: oshii + "22Murakami-Natsumi-hdQ2Ln.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Kitou Akari",
    img: oshii + "28Kitou-Akari-irF1Rn.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Kusunoki Tomori",
    img: oshii + "23Kusunoki-Tomori-Pl4WFh.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Hayashi Coco",
    img: oshii + "126Hayashi-Coco-9G3kHD.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Sashide Maria",
    img: oshii + "27Sashide-Maria-uq69lV.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Tanaka Chiemi",
    img: oshii + "25Tanaka-Chiemi-rRsKdo.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Koizumi Moeka",
    img: oshii + "35Koizumi-Moeka-jZ6CRC.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Uchida Shu",
    img: oshii + "40Uchida-Shu-vPhN1O.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  {
    name: "Homoto Akina",
    img: oshii + "41Homoto-Akina-QvLzE2.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["niji"]
    }
  },
  // End Niji
  // Begin Liella
  {
    name: "Date Sayuri",
    img: oshii + "43Date-Sayuri-THCltI.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Liyuu",
    img: oshii + "45Liyuu-FWD5E6.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Misaki Nako",
    img: oshii + "47Misaki-Nako-BltLsQ.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Naomi Payton",
    img: oshii + "46Naomi-Payton-EgTuEA.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Aoyama Nagisa",
    img: oshii + "44Aoyama-Nagisa-zz8vye.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Suzuhara Nozomi",
    img: oshii + "96Suzuhara-Nozomi-EBwkRF.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Yabushima Akane",
    img: oshii + "97Yabushima-Akane-ow7F0q.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Ookuma Wakana",
    img: oshii + "98Ookuma-Wakana-WnTyPJ.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  {
    name: "Emori Aya",
    img: oshii + "99Emori-Aya-J4Jvn8.jpeg",
    opts: {
      dimensi: ["oshii"],
      gen: ["liella"]
    }
  },
  // End Liella
  // Begin SIM
  {
    name: "Horiuchi Marina",
    img: oshii + "108Horiuchi-Marina-504CMd.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Asai Nanami",
    img: oshii + "110Asai-Nanami-OgdHCa.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "An Julia",
    img: oshii + "111Ann-Julia-ji3HYC.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Koyama Rina",
    img: oshii + "112Koyama-Rina-xrBjkz.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Sato Minami",
    img: oshii + "113Sato-Minami-i971jQ.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Sekine Yuna",
    img: oshii + "109Sekine-Yuna-3m8ONs.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Mizuki Nishiba",
    img: oshii + "114Mizuki-Nishiba-iPuQXF.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Hoshimori Sana",
    img: oshii + "115Hoshimori-Sana-hAnvoF.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Mita Ibuki",
    img: oshii + "116Mita-Ibuki-dUlE4h.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  {
    name: "Aoyama Ruri",
    img: oshii + "117Aoyama-Ruri-WdRXl9.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["sim"]
    }
  },
  // End SIM
  // Begin Hasunosora
  {
    name: "Nirei Nozomi",
    img: oshii + "122Nirei-Nozomi-Ecy7GX.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  {
    name: "Nonaka Kokona",
    img: oshii + "120Nonaka-Kokona-kWePkb.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  {
    name: "Hanamiya Nina",
    img: oshii + "123Hanamiya-Nina-uElD1A.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  {
    name: "Sasaki Kotoko",
    img: oshii + "121Sasaki-Kotoko-JgSvYv.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  {
    name: "Tsukine Kona",
    img: oshii + "124Tsukine-Kona-v3luYu.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  {
    name: "Kan Kanna",
    img: oshii + "125Kan-Kanna-2eZwn3.jpg",
    opts: {
      dimensi: ["oshii"],
      gen: ["hasu"]
    }
  },
  // End Hasunosora
];
