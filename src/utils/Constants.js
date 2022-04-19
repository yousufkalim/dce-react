const kRegExpEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const kRegExpPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const kRegExpPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const kRegExpUserName = /^[a-zA-Z0-9_\.]+$/;

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
];

const colors = [
  {
    name: "White",
    value: "#DADADC",
  },
  {
    name: "Silver Grey",
    value: "#949496",
  },
  {
    name: "Pink Purple",
    value: "#5D2D52",
  },
  {
    name: "Light Grey",
    value: "#8B898C",
  },
  {
    name: "Cameo Brown",
    value: "#B05173",
  },
  {
    name: "Date Red",
    value: "#93142A",
  },
  {
    name: "Muave",
    value: "#ED72DA",
  },
  {
    name: "Bright Pink",
    value: "#F4739F",
  },
  {
    name: "Red",
    value: "#D6080A",
  },
];

export {
  kRegExpEmail,
  kRegExpPassword,
  kRegExpPhone,
  kRegExpUserName,
  materialFabrics,
  colors,
};
