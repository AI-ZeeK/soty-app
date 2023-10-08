export const womensSNBPic: string[] = [
  "/men/pic-1.webp",
  "/men/pic-2.webp",
  "/men/pic-3.webp",
  "/men/pic-4.webp",
  "/men/pic-5.webp",
  "/men/pic-6.webp",
  "/men/pic-7.webp",
  "/men/pic-8.webp",
  "/men/pic-9.webp",
];

export const mensSNBPic = [
  "/men/pic-1.webp",
  "/men/pic-2.webp",
  "/men/pic-3.webp",
  "/men/pic-4.webp",
];

interface SubNavType {
  head: string;
  bold?: boolean;
  news?: string;
  sale?: boolean;
  ad?: boolean;
}
export const womenSubNav: SubNavType[] = [
  {
    head: "KOURTNEY KARDASHIAN",
    bold: true,
  },
  {
    head: "NEW IN",
  },
  {
    head: "ALL CLOTHING",
  },
  {
    head: "DRESSES",
  },
  {
    head: "TOPS",
  },
  {
    head: "AUTUMN",
  },
  {
    head: "HALLOWEEN",
  },
  {
    head: "DENIM",
  },
  {
    head: "SHOES & ACCESSORIES",
  },
  {
    head: "BRANDS",
  },
  {
    head: "OUTLET",
    ad: true,
  },
  {
    head: "BRANDS",
    sale: true,
  },
];
export const menSubNav: SubNavType[] = [
  {
    head: "NEW IN",
    news: "NEW LINES ADDED DAILY!",
  },
  {
    head: "ALL CLOTHING",
  },
  {
    head: "MEN'S GOING OUT OUTFITS",
  },

  {
    head: "MEN'S ACTIVEWEAR",
  },
  {
    head: "PLUS & TALL",
  },
  {
    head: "THE MΛN COLLECTION",
  },
  {
    head: "SHOES & ACCESSORIES",
  },
  {
    head: "SALE",
    news: "UP TO 70% OFF SALE!*",
  },
];

export interface FooterType {
  head: string;
  grid?: boolean;
  subLink?: FooterType[];
  state?: boolean;
}

export const footerData: FooterType[] = [
  {
    head: "QUICK LINKS",
    grid: true,
    subLink: [
      {
        head: "Track My Order",
      },
      {
        head: "Help",
      },
      {
        head: "Returns",
      },
      {
        head: "Delivery Info",
      },
    ],
  },
  {
    head: "ABOUT US & MORE",
    state: false,
    subLink: [
      {
        head: "About boohoo",
      },
      {
        head: "men Size Guide",
      },
      {
        head: "Men Size Guide",
      },
      {
        head: "The boohoo App",
      },
      {
        head: "boohoo Premier",
      },
      {
        head: "Student Discount",
      },
      {
        head: "Discount & Promo Codes",
      },
      {
        head: "Get Exclusive Offers & Updates",
      },
      {
        head: "Gift Cards",
      },
      {
        head: "Refer a Friend",
      },
      {
        head: "Become an Affiliate",
      },
      {
        head: "Become a Partner",
      },
    ],
  },
  {
    head: "INFORMATION",
    state: false,
    subLink: [
      {
        head: "Sustainability",
      },
      {
        head: "Klarna",
      },
      {
        head: "Clearpay",
      },
      {
        head: "PayPal",
      },
      {
        head: "what3words",
      },
      {
        head: "Investor Relations",
      },
      {
        head: "Environmental & Social Responsibility",
      },
      {
        head: "Modern Slavery Statement 2022",
      },
      {
        head: "Careers",
      },
      {
        head: "T&Cs",
      },
      {
        head: "Privacy Notice - Updated July 2022",
      },
      {
        head: "About Cookies",
      },
      {
        head: "Sitemap",
      },
    ],
  },
];
interface CartPicType {
  img: string;
  head: string;
}
export const cartPics: CartPicType[] = [
  {
    img: "/cart/pic-1.webp",
    head: "NEW IN",
  },
  {
    img: "/cart/pic-2.webp",
    head: "DRESSES",
  },
  {
    img: "/cart/pic-3.webp",
    head: "TOPS",
  },
  {
    img: "/cart/pic-4.webp",
    head: "MENS",
  },
];

export interface WearsType {
  id: string;
  head: string;
  img: string;
  favourite: boolean;
  price: string;
}

export const womenWears: WearsType[] = [
  {
    id: "jhskcje8347r938",
    img: "/women/wears/pic-1.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MAXI DRESS",
    price: "12.00",
    favourite: false,
  },
  {
    id: "908csfsk",
    img: "/women/wears/pic-2.webp",
    head: "BLINK 182 BABY TEE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "0-d9shdjsk",
    img: "/women/wears/pic-3.webp",
    head: "BLINK 182 BABY TEE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "hcvd87980",
    img: "/women/wears/pic-4.webp",
    head: "KOURTNEY KARDASHIAN BARKER WIDE LEG JOGGER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "ds87sc9su",
    img: "/women/wears/pic-5.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY MAXI SKIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "jsdc90f93",
    img: "/women/wears/pic-6.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MINI DRESS",
    price: "10.00",
    favourite: false,
  },
  {
    id: "827eru9iochnsd",
    img: "/women/wears/pic-7.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "hkjsad8798",
    img: "/women/wears/pic-8.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED LONG SLEEVE TOP",
    price: "12.00",
    favourite: false,
  },
  {
    id: "hsc87e834",
    img: "/women/wears/pic-9.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "jhdfss87923",
    img: "/women/wears/pic-10.webp",
    head: "KOURTNEY KARDASHIAN BARKER HIGH NECK FLORAL PRINT MESH TOP",
    price: "10.00",
    favourite: false,
  },
  {
    id: "jhdf83879",
    img: "/women/wears/pic-11.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MAXI DRESS",
    price: "12.00",
    favourite: false,
  },
  {
    id: "hjsd838cvc",
    img: "/women/wears/pic-12.webp",
    head: "BLINK 182 BABY TEE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "jkjew83090",
    img: "/women/wears/pic-13.webp",
    head: "BLINK 182 BABY TEE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "kajc83e",
    img: "/women/wears/pic-14.webp",
    head: "KOURTNEY KARDASHIAN BARKER WIDE LEG JOGGER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "kljsdn8793",
    img: "/women/wears/pic-15.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY MAXI SKIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "jhei8343",
    img: "/women/wears/pic-16.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MINI DRESS",
    price: "10.00",
    favourite: false,
  },
  {
    id: "89wfuwcfgv",
    img: "/women/wears/pic-17.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "w9483ff3tv",
    img: "/women/wears/pic-18.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED LONG SLEEVE TOP",
    price: "12.00",
    favourite: false,
  },
  {
    id: "jsdf8947ur3",
    img: "/women/wears/pic-19.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "jhw89493fd",
    img: "/women/wears/pic-20.webp",
    head: "KOURTNEY KARDASHIAN BARKER HIGH NECK FLORAL PRINT MESH TOP",
    price: "10.00",
    favourite: false,
  },
  {
    id: "kjew893483",
    img: "/women/wears/pic-1.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MAXI DRESS",
    price: "12.00",
    favourite: false,
  },
  {
    id: "weufjkdsnvcds",
    img: "/women/wears/pic-2.webp",
    head: "BLINK 182 BABY TEE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "dbew983234t",
    img: "/women/wears/pic-3.webp",
    head: "BLINK 182 BABY TEE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "hsodc8933r3",
    img: "/women/wears/pic-4.webp",
    head: "KOURTNEY KARDASHIAN BARKER WIDE LEG JOGGER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "80vuisodjnvs",
    img: "/women/wears/pic-5.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY MAXI SKIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "9cf8w0fcds",
    img: "/women/wears/pic-6.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MINI DRESS",
    price: "10.00",
    favourite: false,
  },
  {
    id: "8fu0osnvk",
    img: "/women/wears/pic-7.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "9idpcskldcw",
    img: "/women/wears/pic-8.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED LONG SLEEVE TOP",
    price: "12.00",
    favourite: false,
  },
  {
    id: "nd98weiff",
    img: "/women/wears/pic-9.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "980w9fewjds",
    img: "/women/wears/pic-10.webp",
    head: "KOURTNEY KARDASHIAN BARKER HIGH NECK FLORAL PRINT MESH TOP",
    price: "10.00",
    favourite: false,
  },
  {
    id: "0isdsfsdvs",
    img: "/women/wears/pic-11.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MAXI DRESS",
    price: "12.00",
    favourite: false,
  },
  {
    id: "9d8w0eipofsd",
    img: "/women/wears/pic-12.webp",
    head: "BLINK 182 BABY TEE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "jsdovf93e",
    img: "/women/wears/pic-13.webp",
    head: "BLINK 182 BABY TEE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "0qwdipwfcw",
    img: "/women/wears/pic-14.webp",
    head: "KOURTNEY KARDASHIAN BARKER WIDE LEG JOGGER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "kjlzdf8w9r3",
    img: "/women/wears/pic-15.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY MAXI SKIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "i8vd0uiodvcx",
    img: "/women/wears/pic-16.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED MINI DRESS",
    price: "10.00",
    favourite: false,
  },
  {
    id: "7c8sdisv",
    img: "/women/wears/pic-17.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "8fv0eofedvv",
    img: "/women/wears/pic-18.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY HOODED LONG SLEEVE TOP",
    price: "12.00",
    favourite: false,
  },
  {
    id: "900ufsdfs",
    img: "/women/wears/pic-19.webp",
    head: "KOURTNEY KARDASHIAN BARKER SLINKY STRAPLESS MAXI DRESS",
    price: "15.00",
    favourite: false,
  },
  {
    id: "iuofiefvcsv",
    img: "/women/wears/pic-20.webp",
    head: "KOURTNEY KARDASHIAN BARKER HIGH NECK FLORAL PRINT MESH TOP",
    price: "10.00",
    favourite: false,
  },
];

export const menWears: WearsType[] = [
  {
    id: "67hsdp",
    img: "/men/wears/pic-1.webp",
    head: "BOXY FLANNEL CHECK SHIRT",
    price: "12.00",
    favourite: false,
  },
  {
    id: "01ksdp",
    img: "/men/wears/pic-2.webp",
    head: "OVERSIZED ROTTWEILER PRINT ACID WASH T-SHIRT",
    price: "8.00",
    favourite: false,
  },
  {
    id: "619idp",
    img: "/men/wears/pic-3.webp",
    head: "RELAXED CARGO MULTI GRAFFITI PRINT TROUSER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "60pxdp",
    img: "/men/wears/pic-4.webp",
    head: "OVERSIZED LEOPARD GRAPHIC HOODIE",
    price: "20.00",
    favourite: false,
  },
  {
    id: "67qtsi",
    img: "/men/wears/pic-5.webp",
    head: "QUILTED ZIP THROUGH PUFFER WITH HOOD",
    price: "10.00",
    favourite: false,
  },
  {
    id: "67pzal",
    img: "/men/wears/pic-6.webp",
    head: "FIXED WAIST RELAXED APPLIQUE CARGO GUSSET TROUSER",
    price: "10.00",
    favourite: false,
  },
  {
    id: "90dwsdp",
    img: "/men/wears/pic-7.webp",
    head: "DISTRESSED HEM PANEL AND BADGE CHECK SHIRT",
    price: "15.00",
    favourite: false,
  },
  {
    id: "92jcskcxp",
    img: "/men/wears/pic-8.webp",
    head: "DIGITAL BEAR GRAPHIC HOODIE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "0djkdwce9",
    img: "/men/wears/pic-9.webp",
    head: "REGULAR FIT CORD JACKET WITH BORG COLLAR",
    price: "15.00",
    favourite: false,
  },
  {
    id: "iqcw0k",
    img: "/men/wears/pic-10.webp",
    head: "OVERSIZED POUR HOMME GRAPHIC T-SHIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "1wicxjwc",
    img: "/men/wears/pic-11.webp",
    head: "SKINNY BANDANA MULTI CARGO BUCKLE TROUSER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "09wednkwdcnw",
    img: "/men/wears/pic-12.webp",
    head: "MAN COLOUR BLOCK HOODIE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "kdnce812",
    img: "/men/wears/pic-13.webp",
    head: "OVERSIZED GRAPHIC RHINESTONE T-SHIRT",
    price: "12.00",
    favourite: false,
  },
  {
    id: "skjcjbqc88",
    img: "/men/wears/pic-14.webp",
    head: "FIXED WAIST RELAXED GUSSET APPLIQUE TROUSER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "oeqhcw8u",
    img: "/men/wears/pic-15.webp",
    head: "OVERSIZED FLORIDA LICENSE HOODIE",
    price: "10.00",
    favourite: false,
  },
  {
    id: "jhkc7qe9cye",
    img: "/men/wears/pic-16.webp",
    head: "OVERSIZED WORLDWIDE GRAFFITI PRINT TRACKSUIT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "837dyjcekce",
    img: "/men/wears/pic-17.webp",
    head: "OVERSIZED LA EMBROIDERY T-SHIRT",
    price: "15.00",
    favourite: false,
  },
  {
    id: "098wickdc",
    img: "/men/wears/pic-18.webp",
    head: "BOXY ALL OVER PRINT KNITTED JUMPER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "dwuw09c",
    img: "/men/wears/pic-19.webp",
    head: "FIXED WAIST RELAXED MULTI CARGO POPPER HEM CORD TROUSER",
    price: "15.00",
    favourite: false,
  },
  {
    id: "09diiwncsw",
    img: "/men/wears/pic-20.webp",
    head: "OVERSIZED WORLDWIDE BUTTERFLY GRAPHIC HOODIE",
    price: "10.00",
    favourite: false,
  },
  {
    id: "09didios",
    img: "/men/wears/pic-1.webp",
    head: "BOXY FLANNEL CHECK SHIRT",
    price: "12.00",
    favourite: false,
  },
  {
    id: "0scij0dsc",
    img: "/men/wears/pic-2.webp",
    head: "OVERSIZED ROTTWEILER PRINT ACID WASH T-SHIRT",
    price: "8.00",
    favourite: false,
  },
  {
    id: "90sqwidij",
    img: "/men/wears/pic-3.webp",
    head: "RELAXED CARGO MULTI GRAFFITI PRINT TROUSER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "98s0fpjsdcs",
    img: "/men/wears/pic-4.webp",
    head: "OVERSIZED LEOPARD GRAPHIC HOODIE",
    price: "20.00",
    favourite: false,
  },
  {
    id: "98scfiosjkc",
    img: "/men/wears/pic-5.webp",
    head: "QUILTED ZIP THROUGH PUFFER WITH HOOD",
    price: "10.00",
    favourite: false,
  },
  {
    id: "kjcs9d03",
    img: "/men/wears/pic-6.webp",
    head: "FIXED WAIST RELAXED APPLIQUE CARGO GUSSET TROUSER",
    price: "10.00",
    favourite: false,
  },
  {
    id: "98sicfdcpskdln",
    img: "/men/wears/pic-7.webp",
    head: "DISTRESSED HEM PANEL AND BADGE CHECK SHIRT",
    price: "15.00",
    favourite: false,
  },
  {
    id: "09sickdsl",
    img: "/men/wears/pic-8.webp",
    head: "DIGITAL BEAR GRAPHIC HOODIE",
    price: "12.00",
    favourite: false,
  },
  {
    id: "kjhdfs09ds",
    img: "/men/wears/pic-9.webp",
    head: "REGULAR FIT CORD JACKET WITH BORG COLLAR",
    price: "15.00",
    favourite: false,
  },
  {
    id: "29e0u2odjkn",
    img: "/men/wears/pic-10.webp",
    head: "OVERSIZED POUR HOMME GRAPHIC T-SHIRT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "hjds89fuso",
    img: "/men/wears/pic-11.webp",
    head: "SKINNY BANDANA MULTI CARGO BUCKLE TROUSER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "8uwioejfcn",
    img: "/men/wears/pic-12.webp",
    head: "MAN COLOUR BLOCK HOODIE",
    price: "8.00",
    favourite: false,
  },
  {
    id: "9sdf0s9f",
    img: "/men/wears/pic-13.webp",
    head: "OVERSIZED GRAPHIC RHINESTONE T-SHIRT",
    price: "12.00",
    favourite: false,
  },
  {
    id: "8sf0sdioc",
    img: "/men/wears/pic-14.webp",
    head: "FIXED WAIST RELAXED GUSSET APPLIQUE TROUSER",
    price: "20.00",
    favourite: false,
  },
  {
    id: "jhdsicv8s9o",
    img: "/men/wears/pic-15.webp",
    head: "OVERSIZED FLORIDA LICENSE HOODIE",
    price: "10.00",
    favourite: false,
  },
  {
    id: "hdsf8700",
    img: "/men/wears/pic-16.webp",
    head: "OVERSIZED WORLDWIDE GRAFFITI PRINT TRACKSUIT",
    price: "10.00",
    favourite: false,
  },
  {
    id: "hsdf8s798",
    img: "/men/wears/pic-17.webp",
    head: "OVERSIZED LA EMBROIDERY T-SHIRT",
    price: "15.00",
    favourite: false,
  },
  {
    id: "u0dfsdjkcns",
    img: "/men/wears/pic-18.webp",
    head: "BOXY ALL OVER PRINT KNITTED JUMPER",
    price: "12.00",
    favourite: false,
  },
  {
    id: "jofdis8f797",
    img: "/men/wears/pic-19.webp",
    head: "FIXED WAIST RELAXED MULTI CARGO POPPER HEM CORD TROUSER",
    price: "15.00",
    favourite: false,
  },
  {
    id: "hckjschs78",
    img: "/men/wears/pic-20.webp",
    head: "OVERSIZED WORLDWIDE BUTTERFLY GRAPHIC HOODIE",
    price: "10.00",
    favourite: false,
  },
];
