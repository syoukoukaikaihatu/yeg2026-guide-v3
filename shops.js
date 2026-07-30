/*
============================================================
 YEG祭2026 出店者情報
 今後の店名・提供品目・アルコール・写真名はこのファイルだけ編集
============================================================

【GitHubでの修正方法】
1. shops.js を開く
2. 右上の鉛筆マークを押す
3. ダブルクォーテーション " " の内側だけ修正
4. Commit changes を押す

【注意】
・idの数字、{ }、カンマは消さないでください。
・写真だけ変更するときは同じ画像ファイル名で上書きしてください。
・imageを空欄にすると写真を表示しません。
============================================================
*/

window.SHOPS = [
  // 1番
  {
    id: 1,
    name: "アイドルブース",
    description: "物販ブースブッパン",
    alcohol: "無し",
    image: "exhibitor-01.webp",
    imageFit: "auto"
  },

  // 2番
  {
    id: 2,
    name: "ゆきいもゆりちゃんカフェ",
    description: "冷やしキュウリヒ",
    alcohol: "無し",
    image: "exhibitor-02.png",
    imageFit: "auto"
  },

  // 3番
  {
    id: 3,
    name: "個別教育Can",
    description: "フランクフルト",
    alcohol: "無し",
    image: "exhibitor-03.webp",
    imageFit: "contain"
  },

  // 4番
  {
    id: 4,
    name: "YEGブース",
    description: "",
    alcohol: "有り",
    image: "exhibitor-04.webp",
    imageFit: "auto"
  },

  // 5番
  {
    id: 5,
    name: "和香",
    description: "焼きそば、大人のかき氷オトナゴオリ",
    alcohol: "有り",
    image: "exhibitor-05.webp",
    imageFit: "logo"
  },

  // 6番
  {
    id: 6,
    name: "居酒屋祇園",
    description: "焼き鳥",
    alcohol: "有り",
    image: "exhibitor-06.webp",
    imageFit: "auto"
  },

  // 7番
  {
    id: 7,
    name: "T’sキッチン",
    description: "かき氷、イチゴ飴、光るドリンクボトル",
    alcohol: "有り",
    image: "exhibitor-07.webp",
    imageFit: "auto"
  },

  // 8番
  {
    id: 8,
    name: "飛騨九兵衛",
    description: "かき氷、チョコバナナ",
    alcohol: "有り",
    image: "exhibitor-08.webp",
    imageFit: "auto"
  },

  // 9番
  {
    id: 9,
    name: "カラオケ酒場 じゅん婆",
    description: "きゅうりの一本漬け",
    alcohol: "有り",
    image: "exhibitor-09.webp",
    imageFit: "auto"
  },

  // 10番
  {
    id: 10,
    name: "ぱりぱりんご",
    description: "りんご飴、ラムネ、水、ドリンク",
    alcohol: "無し",
    image: "exhibitor-10.webp",
    imageFit: "auto"
  },

  // 11番
  {
    id: 11,
    name: "Ninotti",
    description: "ジェラート、ドリンク",
    alcohol: "有り",
    image: "exhibitor-11.webp",
    imageFit: "auto"
  },

  // 12番
  {
    id: 12,
    name: "いつめしplus",
    description: "・ホットドッグ ・フランクフルト フライドポテト ・ドリンク かき氷 ・冷やしパイン",
    alcohol: "無し",
    image: "exhibitor-12.webp",
    imageFit: "contain"
  },

  // 13番
  {
    id: 13,
    name: "しぇるぶーる",
    description: "タコライス等、タコス、ポテトフライ、 揚げ物、いちご削り",
    alcohol: "有り",
    image: "exhibitor-13.webp",
    imageFit: "auto"
  },

  // 14番
  {
    id: 14,
    name: "Koke Kokio",
    description: "韓国料理、ソーセージチーズかけ ドリンク",
    alcohol: "有り",
    image: "exhibitor-14.webp",
    imageFit: "auto"
  },

  // 15番
  {
    id: 15,
    name: "SMOKO",
    description: "そば粉のガレット、ドリンク",
    alcohol: "無し",
    image: "exhibitor-15.png",
    imageFit: "auto"
  },

  // 16番
  {
    id: 16,
    name: "HOUEI COFFEE",
    description: "コーヒー飲料",
    alcohol: "無し",
    image: "exhibitor-16.webp",
    imageFit: "logo"
  },

  // 17番
  {
    id: 17,
    name: "ガキゲンキッチンカー",
    description: "肉巻きおにぎり、チキンステーキ、 イカ串、牛カルビ串、かき氷",
    alcohol: "有り",
    image: "exhibitor-17.webp",
    imageFit: "auto"
  },

  // 18番
  {
    id: 18,
    name: "まんまるキッチン",
    description: "そば飯、明石焼き、フルーツジュース、 各種ドリンク、",
    alcohol: "有り",
    image: "exhibitor-18.webp",
    imageFit: "auto"
  },

  // 19番
  {
    id: 19,
    name: "くまさんのカステラ",
    description: "くまさんのカステラ、かき氷",
    alcohol: "無し",
    image: "exhibitor-19.webp",
    imageFit: "auto"
  },

  // 20番
  {
    id: 20,
    name: "ゴールドキッチン",
    description: "ケバブ",
    alcohol: "無し",
    image: "exhibitor-20.webp",
    imageFit: "auto"
  },

  // 21番
  {
    id: 21,
    name: "crepe shop sunny's",
    description: "クレープ・アメリカンポテト ソフトドリンク・かき氷・アルコール 肉巻きおにぎり",
    alcohol: "有り",
    image: "exhibitor-21.webp",
    imageFit: "auto"
  },

  // 22番
  {
    id: 22,
    name: "旅するKitchen car岳",
    description: "串焼き、スムージー、焼きそば、フライドポテト、唐揚げ",
    alcohol: "有りア",
    image: "exhibitor-22.png",
    imageFit: "auto"
  },

  // 23番
  {
    id: 23,
    name: "uis_kitchen",
    description: "串焼き、焼きそば、フライドポテト、ドリンク",
    alcohol: "有り",
    image: "exhibitor-23.png",
    imageFit: "auto"
  },

  // 24番
  {
    id: 24,
    name: "植物ショクブツ",
    description: "",
    alcohol: "無し",
    image: "exhibitor-24.webp",
    imageFit: "auto"
  }

];