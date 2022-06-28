const kRegExpEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const kRegExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const kRegExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const kRegExpUserName = /^[a-zA-Z0-9_\.]+$/;

const adNames = {
  women: ["SHIRT / BLOUSE", "JUMPSUIT / DUNGAREES", "VEST", "SKIRT", "TROUSERS / SHORTS", "DRESS", "TUNIC", "JACKET"],
  man: ["SHIRT", "VEST", "PANTS", "JACKET"],
  child: [
    // Girl
    "SHIRT / BLOUSE",
    "JUMPSUIT / DUNGAREES",
    "VEST",
    "SKIRT",
    "TROUSERS / SHORTS",
    "PYJAMAS",
    "DRESS",
    "TUNIC",
    "JACKET",
    "SCHOOL APRON",
    "DISGUISE",

    // Boy
    "SHIRT",
    "PANTS",
  ],
};

const materialFabrics = [
  {
    title: "Ribbed edges",
    description:
      "The ribbing is used in sewing to make the edges of sleeves, collars, etc. stretch clothing in jersey, knit, fleece for sweatshirts etc. It is a knitted fabric which is mainly used to tighten certain parts of clothing.",
  },
  {
    title: "Chambray",
    description:
      "Chambray fabric is a light canvas whose warp is a colored thread and the weft a white thread. It is often used to make shirts and can also be used to make light clothing and accessories.100% cotton",
  },
  {
    title: "plain cotton",
    description: "Range of quality plain poplin fabrics 100% cotton - 125 g/m²",
  },
  {
    title: "cotton fabric",
    description:
      "Custom cotton fabrics: Polka dots, stars, stripes, checks, flowers... Light cotton fabrics for children and adults.",
  },
  {
    title: "Crepe/Polyester",
    description:
      "Fabrics made of polyester, muslin and textured crepe. Polyester fabrics are soft and fluid and can be transparent or opaque. Crepe is a fabric with a slight texture made from synthetic yarns crossed specifically to obtain an irregular effect. They are used to make blouses, skirts, flowing dresses with a nice drape. The crepe can even be used to make ceremonial clothes: wedding dress. This type of fabric also lends itself to being draped for fuzzier garments.",
  },
  {
    title: "Lace",
    description:
      "Cotton and polyester lace fabrics for clothing: wedding dresses, formal wear. But also for customization or decoration: appliqués, dream catchers. Also consider textile art.",
  },
  {
    title: "Water repellent",
    description:
      "Water-repellent fabrics can be used to make jackets and coats but also accessories. Softshell fabric is used to make windproof mid-season coats. It is made of a water-repellent membrane against the rain and a layer of breathable micro-fleece. Trench fabrics are fluid and light and will make it possible to make light rain jackets but also shopping bags for example. Water-repellent fabrics can be used to make bags or saddlebags.",
  },
  {
    title: "double gauze",
    description:
      "Double cotton gauze fabric for clothing and decoration. Double cotton gauze is actually two thin layers of cotton gauze connected by tiny, almost invisible stitches.",
  },
  {
    title: "Lining",
    description:
      "Satin lining for clothes, jackets, dresses, coats The satin lining has a nice hold and will also maintain your garment",
  },
  {
    title: "Scottish",
    description:
      "Scottish cut fabrics: burberry, checkered fabric, British fabric, Tartan... Different materials for this classic print.",
  },
  {
    title: "Sponge",
    description:
      "100% Oeko-tex certified cotton terry, thick quality 350 and 430 g/m² Very absorbent white and colored bamboo terry and microfiber, special washable diaper.",
  },
  {
    title: "Fake fur",
    description:
      "Acrylic faux fur cut fabric. Long pile or short pile for collars and cuffs, shepherd's vests, poufs, cushions. Synthetic fur lining.",
  },
  {
    title: "Festive",
    description: "Party fabrics, decoration, disguise, tulle, taffeta, sequins",
  },
  {
    title: "Felt",
    description:
      "Polyester felt fabric. Felt is used for decoration, disguises or accessories. Felt is a kind of soft and fine felt. It is classified as nonwovens since it is made up of many fibers compressed together.",
  },
  {
    title: "Net",
    description: "Net fabrics for bulk bag, washing bag, zero waste bag, bulk pocket.",
  },
  {
    title: "Gabardine",
    description:
      "Stretch or non-stretch gabardine fabric, in cotton or polyester. Gabardine is used for making pants especially but also for dresses in thick and rather stiff fabric. It will also be suitable for skirts and jackets.",
  },
  {
    title: "Jacquard",
    description: "Fabric type Jacquard, Brocade, damask... for making clothes such as jackets, dresses, skirts or pants.",
  },
  {
    title: "Jersey",
    description:
      "Jersey fabric is a thin, stretchy cotton fabric. It is used to make children's and adult clothes: skirts, pants, tops, pajamas... Also find viscose jersey fabrics more often appreciated for making women's clothes.",
  },
  {
    title: "Velor jersey",
    description: "Velor jersey fabric, for clothing and household linen: dressing gowns, pajamas, cuddly toys, etc.",
  },
  {
    title: "jersey sweatshirt",
    description:
      "Thick jersey fabrics, also called fleece, for making sweatshirts, jackets and sweaters. With a very soft side in brushed cotton or lighter terrycloth, jersey sweatshirt fabric is ideally sewn with a double feed foot and a double needle for keep its elasticity.",
  },
  {
    title: "Woolen",
    description:
      "Woolen type fabrics for making jackets, coats or textile art. Boiled wool, cashmere wool, polyester wool, plain and fancy",
  },
  {
    title: "Soft woolen fabric",
    description: "Fabric for making winter clothes such as dresses, skirts, pants, jackets",
  },
  {
    title: "Lange",
    description: "Very soft, the organic cotton or bamboo baby swaddle can also be used as a towel, glove, bed sheet or wipe",
  },
  {
    title: "Linen",
    description: "Range of 100% plain linen fabric, for making clothes: Shirts, pants, jackets...",
  },
  {
    title: "Meshes",
    description:
      "Knit and stretch fabrics for making adult and children's clothing. Knit-like stretch fabrics for making dresses, thin cardigans, sweaters.",
  },
  {
    title: "Quilted",
    description: "Quilted cotton piqué fabric for making sleeping bags, angel's nest, lining, accessories...",
  },
  {
    title: "Honeycomb",
    description: "Honeycomb terry fabrics of different qualities for making towels, tea towels, bathrobes, home accessories",
  },
  {
    title: "Cotton piqué",
    description: "Cotton piqué fabric, 100% cotton Plain and fancy fabrics, flat and quilted",
  },
  {
    title: "Fleece / comforter",
    description: "Fleece fabric cut, plain double-sided and printed, soft and light. For clothes, blankets, sleeping bags",
  },
  {
    title: "PUL washable diapers",
    description:
      "Special fabric for making washable diapers. PUL (Laminated Polyurethane) is a synthetic coating, quite flexible and relatively breathable. PUL is a waterproof and breathable material which is used to make protective pants for babies or incontinent people.",
  },
  {
    title: "Faux leather",
    description: "Faux leather fabric for clothing and making clothes but also for making accessories.",
  },
  {
    title: "Tulle",
    description:
      "Tulle fabric for making clothes, disguises and accessories or decoration.Tulle is a very light and transparent fabric with openings in the shape of regular hexagonal cells obtained by twisting the threads on themselves.",
  },
  {
    title: "Velvet",
    description:
      "Corduroy fabric by the meter, milleraies and large ribs, 100% cotton for making clothes: jackets, blazers, pants, cushions...",
  },
  {
    title: "Gingham",
    description:
      "Dyed woven gingham fabric: The yarns are dyed before being woven, which ensures that the pattern is always aligned with the weft of the fabric",
  },
];

let colors = [
  "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
  "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
  "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
  "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
  "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
  "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
  "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
  "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
  "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
  "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
  "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
  "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
  "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
  "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
  "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
  "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
  "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
  "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
  "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
  "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
  "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
  "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
  "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
  "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
  "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
  "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
  "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
  "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
  "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
  "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
  "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
  "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
  "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
  "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
  "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
  "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
  "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
  "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]

export { kRegExpEmail, kRegExpPassword, kRegExpPhone, kRegExpUserName, materialFabrics, adNames,colors };
