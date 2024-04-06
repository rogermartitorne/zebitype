const englishTexts = [
  "The old oak tree stood sentinel at the edge of the forest, its gnarled branches reaching towards the sky. Beneath its leafy canopy, a sense of peace enveloped the clearing. The air was filled with the earthy scent of fallen leaves and the distant sound of birdsong. As the sun dipped below the horizon, casting long shadows across the forest floor, a feeling of calm washed over the land.",

  "In the heart of the city, amidst the hustle and bustle of everyday life, there lay a hidden oasis of tranquility. Tucked away down a narrow alleyway, the courtyard was a haven of greenery and solitude. Lush vines climbed the walls, their delicate tendrils reaching out towards the sun. The sound of trickling water filled the air, as a small fountain bubbled in the center of the courtyard.",

  "On the windswept moors, where the heather bloomed purple and the grasses swayed in the breeze, there stood a solitary cottage. Its thatched roof was weathered and worn, but its windows glowed with warmth and light. Inside, the fire crackled merrily in the hearth, casting dancing shadows on the walls. The scent of freshly baked bread wafted through the air, mingling with the tang of woodsmoke.",

  "High atop the cliffs, where the waves crashed against the rocks below, there stood a lighthouse. Its beacon cut through the darkness, guiding ships safely home through the treacherous waters. Inside, the lighthouse keeper tended to his duties, keeping a watchful eye on the horizon. As the storm raged outside, he stood steadfast at his post, a solitary figure against the elements.",

  "In the heart of the desert, where the sand dunes stretched for miles in every direction, there lay an oasis. Its waters shimmered like liquid silver in the sunlight, a precious jewel amidst the barren landscape. Palm trees swayed gently in the breeze, their fronds whispering secrets to the wind. Around the oasis, life flourished in abundance, a testament to the resilience of nature.",

  "Deep in the heart of the jungle, where the trees towered overhead and the air was thick with humidity, there lay a hidden temple. Its ancient ruins were overgrown with moss and vines, their secrets buried beneath centuries of foliage. As shafts of sunlight pierced the canopy above, illuminating the temple's crumbling walls, a sense of mystery hung heavy in the air.",

  "In the shadow of the mountains, where the snow-capped peaks reached towards the heavens, there lay a valley. Its meadows were carpeted with wildflowers, their vibrant hues a stark contrast to the rocky terrain. A river wound its way through the valley, its waters crystal clear and icy cold. As the first light of dawn touched the mountaintops, a sense of magic descended upon the land.",

  "Along the banks of the river, where the willow trees swayed in the gentle breeze and the water lapped softly against the shore, there lay a small village. Its whitewashed cottages clustered together, their windows glowing warmly in the twilight. As the stars began to twinkle overhead, the villagers gathered in the town square, their laughter echoing through the night.",

  "In the depths of the ocean, where the sunlight could not penetrate and the pressure was crushing, there lay a hidden world. Its coral reefs were a riot of color, teeming with life of every shape and size. Strange and wonderful creatures darted through the darkness, their phosphorescent glow illuminating the depths. As the currents ebbed and flowed, the ocean sang its ancient song.",

  "In the heart of the forest, where the trees stood tall and proud and the undergrowth was thick and lush, there lay a hidden glade. Its floor was carpeted with moss and ferns, soft underfoot and cool to the touch. Sunlight filtered through the canopy above, dappling the ground in shifting patterns of light and shadow. As the birds sang their evening chorus, a sense of peace settled over the glade.",
];

const spanishTexts = [
  "El sol se ponía detrás de las colinas, y la densa niebla otoñal descendía sobre el valle. Juan estaba junto a la ventana, su aliento empañando el cristal mientras observaba cómo el mundo exterior se desvanecía en la oscuridad. Se envolvió más apretado en su chal, sintiendo el frío penetrar en sus huesos. Eran noches como estas las que le hacían extrañar el calor del verano, los largos días llenos de sol y risas.",

  "Mientras contemplaba el paisaje brumoso, los recuerdos inundaban su mente. Recordaba correr por los campos con sus hermanos, persiguiéndose unos a otros y riendo hasta que les dolían los costados. Recordaba los picnics junto al río, el sabor de las fresas frescas en su lengua y el sonido del canto de los pájaros llenando el aire. Pero esos días habían quedado atrás, perdidos en el paso del tiempo.",

  "Ahora, el único sonido que rompía el silencio de la noche era el aullido lejano de un lobo solitario. Juan tembló, sintiéndose de repente muy solo en el mundo. Deseaba el consuelo de un fuego cálido y la compañía de seres queridos, pero sabía que eso era solo un sueño. En realidad, estaba solo en la fría oscuridad, con nada más que sus recuerdos para hacerle compañía.",

  "Pero incluso en medio de su soledad, Juan encontraba consuelo en la belleza de la noche. Observaba cómo la luna se elevaba sobre el horizonte, arrojando un resplandor plateado sobre el paisaje. Observaba cómo las estrellas centelleaban en el cielo, como diamantes esparcidos sobre una manta de terciopelo. Y observaba cómo la niebla comenzaba lentamente a levantarse, revelando el mundo en todo su esplendor tranquilo.",

  "Y en ese momento, Juan se dio cuenta de que incluso en los momentos más oscuros, aún hay belleza por descubrir. Podía estar solo, pero no estaba verdaderamente perdido. Porque mientras hubiera belleza en el mundo, habría esperanza. Y mientras hubiera esperanza, habría una razón para seguir adelante, para seguir luchando, no importa cuán oscura pueda parecer la noche.",

  "La brisa marina acariciaba suavemente la costa, trayendo consigo el salado aroma del océano. María caminaba por la playa desierta, sintiendo la arena tibia bajo sus pies descalzos. A lo lejos, las olas rompían suavemente contra las rocas, creando una melodía suave y relajante. Cerró los ojos y respiró hondo, dejándose llevar por la tranquilidad del momento.",

  "Mientras paseaba por la orilla, María recogía conchas y piedras lisas, admirando sus formas y colores. Cada uno era un tesoro único, una pequeña joya de la naturaleza. Los guardaba en su bolsillo, como recuerdos de su día en la playa. Miró hacia el horizonte, donde el sol se hundía lentamente en el mar, pintando el cielo de tonos dorados y rosados.",

  "A medida que avanzaba la tarde, María se sentó en la arena y contempló el espectáculo frente a ella. Las gaviotas volaban en círculos sobre su cabeza, sus graznidos llenando el aire. Algunos surfistas se aventuraban en las olas, deslizándose con gracia sobre la cresta del agua. Y en la distancia, un grupo de delfines saltaba en el horizonte, como bailarines en el océano.",

  "El tiempo parecía detenerse mientras María se sumergía en la serenidad del momento. No había preocupaciones ni problemas, solo la belleza simple y tranquila de la naturaleza. Se prometió a sí misma que volvería a este lugar especial siempre que necesitara encontrar paz y renovación. Y con ese pensamiento en mente, se levantó y continuó su paseo por la playa, llevando consigo la calma del océano en su corazón.",

  "En el corazón del bosque, donde los árboles se alzaban altos y orgullosos y la maleza era espesa y exuberante, había una clara escondida. Su suelo estaba cubierto de musgo y helechos, suave bajo los pies y fresco al tacto. La luz del sol se filtraba a través del dosel de arriba, salpicando el suelo con patrones cambiantes de luz y sombra. Mientras los pájaros cantaban su coro vespertino, una sensación de paz se instalaba en la clara.",
];

const russianTexts = [
  "Солнце уже зашло за холмы, и плотный осенний туман опустился на долину. Иван стоял у окна, его дыхание затуманило стекло, когда он наблюдал, как мир снаружи исчезает во тьме. Он крепче обмотал плед вокруг плеч, чувствуя, как холод проникает в кости. Именно ночи, как эти, заставляли его скучать по теплу лета, длинные дни, наполненные солнцем и смехом.",

  "Пока он глядел на туманный пейзаж, его разум наполняли воспоминания. Он помнил, как бегал по полям со своими братьями, гоняясь друг за другом и смеясь до упаду. Он помнил пикники у реки, вкус свежих клубники на языке и звук птичьего щебета, наполняющий воздух. Но эти дни были позади, ушли со временем.",

  "Теперь единственный звук, который нарушал тишину ночи, был далекий вой одинокого волка. Иван дрожал, внезапно чувствуя себя очень одиноким в этом мире. Он мечтал о теплом огне и о компании близких, но знал, что это всего лишь мечта. На самом деле, он был один в холодной тьме, с ничем, кроме своих воспоминаний, чтобы ему помочь.",

  "Но даже посреди своего одиночества Иван находил утешение в красоте ночи. Он наблюдал, как луна взошла над горизонтом, бросая серебряное сияние на пейзаж. Он видел, как звезды мерцали на небе, как бриллианты, разбросанные по бархатной одеялу. И он видел, как туман медленно начинал подниматься, раскрывая мир во всей его тихой красе.",

  "И в этот момент Иван осознал, что даже в самые темные времена всегда есть место для красоты. Он мог быть один, но он не был настояще потерянным. Потому что пока есть красота в мире, есть надежда. И пока есть надежда, есть причина идти вперед, продолжать бороться, несмотря на то, как темной может показаться ночь.",

  "В тени гор, где снежные вершины стремились к небу, лежала долина. Ее луга были покрыты дикими цветами, их яркие оттенки контрастировали с каменистой местностью. Река извивалась по долине, ее воды были кристально чистыми и ледяными. Когда первые лучи рассвета касались вершин гор, на землю опускалась магия.",

  "По берегам реки, где ивы колыхались на легком ветру и вода ласково облизывала берег, находилась маленькая деревня. Ее белоснежные домики собирались вместе, их окна светились теплом в сумерках. Когда звезды начинали мерцать на небе, жители деревни собирались на главной площади, их смех разносился по ночи.",

  "В самом сердце океана, где солнечный свет не мог проникнуть, и давление было огромным, был скрытый мир. Его коралловые рифы были пестрыми, кишащими жизнью разнообразными формами. Странные и удивительные существа мчались сквозь тьму, их фосфоресцирующее свечение освещало глубины. Пока течения приливов и отливов менялись, океан пел свою древнюю песню.",

  "В самом сердце леса, где деревья стояли высоко и гордо, а подлесок был густым и пышным, лежала скрытая поляна. Ее пол был усыпан мхом и папоротниками, мягким под ногами и прохладным на ощупь. Солнечный свет проникал сквозь верхний ярус, создавая на полу меняющиеся узоры света и тени. Пока птицы пели свой вечерний хор, в поляне устанавливался покой.",
];

const latvianTexts = [
  "Saulriets krāsoja debesis ar dzeltenu, oranžu un rozā krāsu, radaot burvīgu ainavu. Pēc aizvadītās dienas darba brīža šis miers bija īpaši iecerēts. Daba apkārt klusēja, un tikai putni dziedāja nelielas dziesmas. Es stāvēju uz savas mājas pagalma, baudot šo klusumu un mieru.",

  "Mežs bija kluss un mierīgs, tikai laši pār pludmali veidoja saviem krelles pamatīgus nospiedumus. Zem kājām plīvuroja ziemas sniegs, piekarsējot kājās un liekot atskatīties uz skaisto ainavu. Viens pats es staigāju pa šo kluso ainavu, sajūtot pilnīgu brīvību un mieru sirdī.",

  "Skaisti un krāšņi rudens koki klāja ceļu malas ar saviem dzeltenajiem, oranžajiem un sarkanajiem lapu klājiem. Gaisā plūda vēss vējš, nestot sevī smaržu no aizvadītās rudens vasaras. Es staigāju pa ceļu, elpojot šo rudens aromātu, un baudīju krāšņo ainavu apkārt.",

  "Rudens debesis bija pilnas ar baltām, pūkainām mākoņiem, kas lēnām kustējās pāri mierīgajam debesu jumtam. Gaisā bija dzirdams vēja šņākšana un koku lapu šņākšana. Es guva mieru, skatoties uz šīm peldējošajām mākoņu masām, kas kustējās pa debesīm.",

  "Daba bija klusa un mierīga, un es pati sēdēju uz pazemes, skatoties uz zvaigznājiem. Mierīgs un kluss vakars, kurā varēja iemaldīties savās domās un baudīt klusumu. Es pamanīju, ka zvaigznes ir kaut kas tāds, kas mani nomierināja, un es justos mierīga, vērojot tos.",

  "Es biju pazemē, kur mākoņi bija mierīgi un klusi, un debesis bija zils un bezgalīgs. Daba mani ieskauja ar savu mieru un klusumu, un es ļāvos šai brīvībai un mieram, kas mani pārņēma. Es sajutu sevi vienmērīgi elpojam, klausoties klusajās debesīs un domājot par dzīvi.",

  "Pludmale bija klusa un tukša, un jūra bija mierīga un klusa. Es staigāju pa šo kluso pludmali, kur vēja pūšana un viļņu šūpošana radīja mierīgu un klusu atmosfēru. Es pamanīju, ka klusums un miers šajā vietā ir kaut kas tāds, kas mani mierina un iedvesmo.",

  "Lai gan laiks bija vēss un sauss, daba bija pilna ar dzīvību un enerģiju. Putni dziedāja dziesmas, un ziedi smaržoja maigi. Es staigāju pa šo krāšņo ainavu, izbaudot to klusumu un mieru. Man patika, kā daba apkārt mani ieskauja ar savu mieru un skaistumu.",

  "Es staigāju pa mežu, kur koki bija pilni ar dzīvību un dzirksteļojošu krāsu. Zem kājām bija svaigs sniegs, kas veidoja aizsargājošu seglu pār zemi. Es jutu, kā mana sirds piepildījās ar prieku un mieru, kad es klusajā un mierīgajā mežā staigāju pa sniegu.",

  "Skaisti un krāsni rudens koki klāja zemi ar savu zeltaino, oranžo un sarkano lapu klāju. Es staigāju pa šo krāšņo ainavu, elpojot svaigo gaisu un baudot dabas skaistumu. Man patika, kā koki krāsoja ainavu ar savu dzelteno, oranžo un sarkano lapu krāsu.",
];

// Example usage:
// console.log(latvianTexts[Math.floor(Math.random() * latvianTexts.length)]);
