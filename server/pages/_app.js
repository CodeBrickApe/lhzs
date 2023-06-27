"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/hooks/useDarkMode.ts

let ThemeMode;

(function (ThemeMode) {
  ThemeMode["LIGHT"] = "light";
  ThemeMode["DARK"] = "dark";
})(ThemeMode || (ThemeMode = {}));

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)('light');
  const {
    0: componentMounted,
    1: setComponentMounted
  } = (0,external_react_.useState)(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  (0,external_react_.useEffect)(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light');
    }

    setComponentMounted(true);
  }, []);
  return {
    theme,
    toggleTheme,
    componentMounted
  };
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./src/styled/theme.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const light = {
  background: {
    body: '#fff',
    primary: '#ffffff',
    secondary: '#fbfbfb',
    postCard: '#ffffff',
    blurCard: 'rgba(245, 245, 245, .8)',
    bestAlbumCard: '#e6e6e6',
    skeleton: 'rgba(0, 0, 0, 0.04)',
    tooltip: 'rgba(0, 0, 0, .7)',
    inlineCode: '#ebedf0',
    searchBox: '#ffffff',
    summaryBg: '#e6f6e6',
    mottoBg: 'rgba(0, 0, 0, .5)',
    postBg: '#ffffff'
  },
  text: {
    primary: '#666666',
    secondary: '#969696',
    header: '#504e4e',
    post: '#3b454e',
    tooltip: '#fff',
    base: '#1c1e21'
  },
  link: {
    primary: '#666666',
    secondary: '#5FB878'
  },
  border: '#e6e6e6',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  postSvg: '#fcf8db',
  codeEl: '#f0f0f0',
  homeBg: 'images/bg-day.jpg',
  cat: 'images/cat.png',
  mimicryBg: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
  mimicryShadow: '18px 18px 30px rgba(0, 0, 0, 0.1),-18px -18px 30px rgba(255, 255, 255, 1)',
  mimicryShadowHover: '0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px rgba(255, 255, 255, 0.8),inset 18px 18px 30px rgba(0, 0, 0, 0.1),inset -18px -18px 30px rgba(255, 255, 255, 1);'
};
const dark = {
  background: {
    body: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
    primary: '#181a1b',
    secondary: '#1d1f27',
    postCard: '#1d1f27',
    blurCard: 'rgba(27, 29, 30, .8)',
    bestAlbumCard: '#000000',
    skeleton: 'rgba(255, 255, 255, 0.08)',
    tooltip: 'rgba(255, 255, 255, .7)',
    inlineCode: '#444950',
    searchBox: '#202327',
    summaryBg: '#003130',
    mottoBg: 'rgba(225, 225, 225, .1)',
    postBg: 'rgba(225, 225, 225, .2)'
  },
  text: {
    primary: '#f5f6f7',
    secondary: '#cbc8c0',
    header: '#f5f6f7',
    post: '#f5f6f7',
    tooltip: '#000',
    base: '#f5f6f7'
  },
  link: {
    primary: '#f5f6f7',
    secondary: '#5FB878'
  },
  border: '#5b5b5b',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  postSvg: '#181a1b',
  codeEl: '#181a1b',
  homeBg: 'images/bg.png',
  cat: 'images/cat-white.png',
  mimicryBg: '#12161f',
  mimicryShadow: ' 11px 11px 20px #08090d,-11px -11px 20px #1c2331;',
  mimicryShadowHover: '0px 0px 0px rgba(0, 0, 0, .1), 0px 0px 0px rgba(0, 0, 0, .8),inset 11px 11px 31px #08090d,inset -11px -11px 31px #1c2331;'
};
const defaultTheme = {
  fontWeights: {
    normal: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6
  },
  colors: {
    primary: '#5FB878',
    sloganRed: '#ff3f1a',
    heartRed: '#f05228',
    white: '#ffffff',
    black: '#000000',
    pink: '#d62b6b',
    green: '#35c0c0',
    postTagColor: '#00965e',
    postTagBg: 'rgba(0, 150, 94, 0.1)',
    postTagBgHover: 'rgba(0, 150, 94, 0.2)',
    summaryBar: 'rgba(0, 150, 94, 0.6)',
    linkBlue: '#0070ba',
    sloganBlue: '#00a7e0',
    archiveBlue: '#6ecaf5',
    oneOpcityBlack: 'rgba(0, 0, 0, .1)',
    threeOpcityBlack: 'rgba(0, 0, 0, .3)',
    fiveOpcityBlack: 'rgba(0, 0, 0, .5)',
    sixOpcityBlack: 'rgba(0, 0, 0, .6)',
    sevenOpcityBlack: 'rgba(0, 0, 0, .7)',
    oneOpcityWhite: 'rgba(225, 225, 225, .1)',
    threeOpcityWhite: 'rgba(225, 225, 225, .3)',
    fiveOpcityWhite: 'rgba(225, 225, 225, .5)',
    sixOpcityWhite: 'rgba(225, 225, 225, .6)',
    sevenOpcityWhite: 'rgba(225, 225, 225, .7)',
    linkBase: '#25c3a0',
    orange: '#ffa500'
  },
  zIndex: {
    negative: -1,
    root: 0,
    positive: 1,
    fixed: 200,
    overlay: 400
  },
  headerHeight: '3.5rem'
};
const lightTheme = _objectSpread(_objectSpread({}, defaultTheme), light);
const darkTheme = _objectSpread(_objectSpread({}, defaultTheme), dark);
;// CONCATENATED MODULE: ./public/images/Arrow-sy.cur
/* harmony default export */ const Arrow_sy = ("data:;base64,AAACAAEAICAAAAMAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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");
// EXTERNAL MODULE: ./src/styled/breakpoints.ts
var breakpoints = __webpack_require__(6192);
;// CONCATENATED MODULE: ./src/styled/globalStyles.ts



const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["\n  html {\n    font-size: 16px;\n\n    @media only screen and ", " {\n      font-size: 15px;\n      overflow-x: hidden;\n    }\n  }\n\n\n  body {\n    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n    -webkit-font-smoothing: antialiased;  \n    color: ", ";  \n    cursor: url(", "), auto;\n    /* overflow: hidden; */\n    /* height: 100%; */\n  }\n  body {\n    height: 100%;\n    /* overflow: hidden; */\n    background: ", ";\n  }\n  a {\n    color: ", ";\n    text-decoration: none;\n  }  \n\n  p, figure {\n    margin: 0\n  } \n\n  h1, h2, h3, h4, h5, h6{\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  button {\n    outline: none;\n  }\n\n  code {\n    font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  }\n\n  /* aplayer CSS */\n  .aplayer-list-title, .aplayer-title {\n    color:#666 !important;\n  }\n\n  @media only screen and ", " {\n    .aplayer {\n      display: none;\n    }\n\n    .spinner-icon {\n      display: none!important;\n    }\n  }\n"], breakpoints/* default.device.laptop */.Z.device.laptop, ({
  theme
}) => theme.text.base, Arrow_sy, ({
  theme
}) => theme.background.body, ({
  theme
}) => theme.text.secondary, breakpoints/* default.device.laptop */.Z.device.laptop);
/* harmony default export */ const globalStyles = (GlobalStyle);
;// CONCATENATED MODULE: ./src/styled/starryBackground.ts


const star_anti = (0,external_styled_components_.keyframes)(["\n  0% {\n    transform: translateY(0px)\n  }\n  100% {\n    transform: translateY(-2000px)\n  }\n"]);
const Starts = external_styled_components_default().div.withConfig({
  displayName: "starryBackground__Starts",
  componentId: "sc-e7sx74-0"
})(["\n  width: 1px;\n  height: 1px;\n  background-color: transparent;\n  animation: ", " 50s linear infinite;\n  box-shadow: 1804px 1265px #FFF , 365px 332px #FFF , 86px 1888px #FFF , 1888px 484px #FFF , 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF , 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF , 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF , 1849px 19px #FFF , 1399px 200px #FFF , 972px 497px #FFF , 795px 1109px #FFF , 746px 970px #FFF , 1524px 972px #FFF , 1631px 389px #FFF , 1026px 1016px #FFF , 1295px 862px #FFF , 1258px 1876px #FFF , 791px 189px #FFF , 1519px 45px #FFF , 592px 1405px #FFF , 620px 130px #FFF , 1044px 1171px #FFF , 37px 1578px #FFF , 1589px 86px #FFF , 1024px 528px #FFF , 1613px 568px #FFF , 912px 1175px #FFF , 1177px 133px #FFF , 67px 1641px #FFF , 1168px 357px #FFF , 310px 1873px #FFF , 1187px 573px #FFF , 308px 1839px #FFF , 565px 24px #FFF , 1691px 1555px #FFF , 1384px 1551px #FFF , 179px 861px #FFF , 1850px 1966px #FFF , 1169px 1979px #FFF , 1182px 1522px #FFF , 616px 751px #FFF , 1083px 908px #FFF , 684px 766px #FFF , 67px 955px #FFF , 1813px 1714px #FFF , 1256px 1413px #FFF , 332px 803px #FFF , 1670px 1921px #FFF , 362px 211px #FFF , 1513px 423px #FFF , 1304px 1145px #FFF , 1292px 1168px #FFF , 611px 802px #FFF , 1297px 575px #FFF , 540px 1289px #FFF , 1551px 1678px #FFF , 1545px 237px #FFF , 423px 138px #FFF , 1088px 28px #FFF , 642px 1637px #FFF , 429px 1293px #FFF , 1276px 1900px #FFF , 1168px 1696px #FFF , 847px 837px #FFF , 151px 1395px #FFF , 1490px 75px #FFF , 1588px 131px #FFF , 1739px 1358px #FFF , 709px 624px #FFF , 343px 502px #FFF , 1342px 1690px #FFF , 175px 1722px #FFF , 964px 1299px #FFF , 892px 1326px #FFF , 519px 1142px #FFF , 1014px 193px #FFF , 1181px 360px #FFF , 325px 139px #FFF , 482px 1199px #FFF , 613px 8px #FFF , 1976px 1125px #FFF , 346px 60px #FFF , 1565px 818px #FFF , 268px 1590px #FFF , 213px 1666px #FFF , 800px 464px #FFF , 974px 1825px #FFF , 1066px 23px #FFF , 1995px 1499px #FFF , 666px 1130px #FFF , 1074px 1710px #FFF , 1636px 1483px #FFF , 1379px 1509px #FFF , 1221px 887px #FFF , 1857px 964px #FFF , 1046px 993px #FFF , 1875px 643px #FFF , 1504px 1607px #FFF , 1065px 641px #FFF , 1095px 752px #FFF , 566px 1737px #FFF , 1972px 1778px #FFF , 146px 1517px #FFF , 1923px 588px #FFF , 557px 881px #FFF , 1885px 1950px #FFF , 1739px 1598px #FFF , 1048px 501px #FFF , 1316px 705px #FFF , 1900px 1697px #FFF , 1187px 917px #FFF , 1688px 1025px #FFF , 648px 1634px #FFF , 1002px 572px #FFF , 603px 1995px #FFF , 215px 693px #FFF , 688px 1374px #FFF , 1389px 1166px #FFF , 1310px 1140px #FFF , 245px 587px #FFF , 845px 63px #FFF , 296px 1646px #FFF , 792px 350px #FFF , 756px 1493px #FFF , 1553px 1079px #FFF , 850px 66px #FFF , 963px 1904px #FFF , 81px 207px #FFF , 1776px 1634px #FFF , 1759px 521px #FFF , 1761px 1536px #FFF , 601px 1485px #FFF , 898px 153px #FFF , 48px 648px #FFF , 1644px 1109px #FFF , 1974px 60px #FFF , 1278px 653px #FFF , 616px 432px #FFF , 1179px 1849px #FFF , 739px 677px #FFF , 808px 1850px #FFF , 1104px 827px #FFF , 984px 888px #FFF , 1027px 44px #FFF , 1462px 1105px #FFF , 902px 1486px #FFF , 769px 441px #FFF , 431px 1195px #FFF , 4px 764px #FFF , 562px 7px #FFF , 952px 1744px #FFF , 822px 971px #FFF , 1016px 1804px #FFF , 1429px 1161px #FFF , 328px 1568px #FFF , 101px 746px #FFF , 649px 1484px #FFF , 1903px 569px #FFF , 733px 871px #FFF , 1554px 505px #FFF , 1076px 642px #FFF , 609px 641px #FFF , 996px 149px #FFF , 1595px 758px #FFF , 14px 1083px #FFF , 261px 767px #FFF , 1274px 1517px #FFF , 1412px 215px #FFF , 1651px 879px #FFF , 284px 1633px #FFF , 1439px 287px #FFF , 1717px 270px #FFF , 1107px 1063px #FFF , 1521px 1831px #FFF , 656px 1702px #FFF , 25px 230px #FFF , 1958px 1615px #FFF , 646px 675px #FFF , 1201px 343px #FFF , 1918px 1064px #FFF , 1932px 609px #FFF , 1203px 900px #FFF , 10px 575px #FFF , 1582px 1828px #FFF , 1184px 462px #FFF , 1px 1619px #FFF , 1440px 1071px #FFF , 1844px 1913px #FFF , 376px 1054px #FFF , 1883px 1236px #FFF , 571px 493px #FFF , 354px 1701px #FFF , 747px 60px #FFF , 11px 1142px #FFF , 1136px 1891px #FFF , 1682px 473px #FFF , 1537px 1520px #FFF , 902px 836px #FFF , 1313px 395px #FFF , 534px 341px #FFF , 230px 1614px #FFF , 14px 1387px #FFF , 1296px 1765px #FFF , 1064px 1270px #FFF , 761px 975px #FFF , 1855px 335px #FFF , 198px 110px #FFF , 1660px 598px #FFF , 1022px 933px #FFF , 518px 356px #FFF , 19px 865px #FFF , 471px 830px #FFF , 758px 358px #FFF , 541px 1652px #FFF , 320px 926px #FFF , 425px 1826px #FFF , 659px 353px #FFF , 708px 778px #FFF , 862px 641px #FFF , 475px 1362px #FFF , 1326px 1449px #FFF , 446px 802px #FFF , 391px 1169px #FFF , 496px 39px #FFF , 1534px 934px #FFF , 1822px 1809px #FFF , 1454px 237px #FFF , 187px 1555px #FFF , 1069px 1977px #FFF , 1880px 1508px #FFF , 279px 418px #FFF , 1938px 1980px #FFF , 1304px 530px #FFF , 1763px 187px #FFF , 1945px 1642px #FFF , 311px 1490px #FFF , 770px 1598px #FFF , 263px 330px #FFF , 1733px 1771px #FFF , 978px 34px #FFF , 325px 1776px #FFF , 873px 1460px #FFF , 365px 33px #FFF , 913px 1999px #FFF , 667px 1021px #FFF , 27px 572px #FFF , 950px 1858px #FFF , 448px 1205px #FFF , 1302px 1138px #FFF , 1269px 932px #FFF , 480px 132px #FFF , 770px 1871px #FFF , 952px 654px #FFF , 623px 90px #FFF , 419px 1683px #FFF , 930px 794px #FFF , 1327px 1651px #FFF , 769px 1536px #FFF , 895px 90px #FFF , 599px 1268px #FFF , 1645px 919px #FFF , 1672px 1080px #FFF , 1637px 1259px #FFF , 243px 1182px #FFF , 1509px 457px #FFF , 1374px 1469px #FFF , 751px 137px #FFF , 1097px 1008px #FFF , 1979px 1381px #FFF , 981px 1825px #FFF , 928px 1930px #FFF , 632px 422px #FFF , 812px 341px #FFF , 1077px 1832px #FFF , 203px 1452px #FFF , 664px 1531px #FFF , 1203px 57px #FFF , 1654px 1203px #FFF , 491px 174px #FFF , 1507px 735px #FFF , 964px 896px #FFF , 52px 1718px #FFF , 1435px 26px #FFF , 753px 635px #FFF , 890px 1847px #FFF , 42px 1353px #FFF , 717px 72px #FFF , 1845px 1212px #FFF , 344px 867px #FFF , 418px 855px #FFF , 899px 1124px #FFF , 1798px 1582px #FFF , 1774px 760px #FFF , 908px 1567px #FFF , 1647px 1210px #FFF , 299px 82px #FFF , 1179px 1317px #FFF , 938px 1580px #FFF , 82px 921px #FFF , 657px 1596px #FFF , 892px 1264px #FFF , 1161px 819px #FFF , 607px 1447px #FFF , 605px 679px #FFF , 1642px 595px #FFF , 1963px 525px #FFF , 1656px 1591px #FFF , 1467px 1743px #FFF , 167px 1420px #FFF , 471px 492px #FFF , 1077px 932px #FFF , 774px 1282px #FFF , 799px 701px #FFF , 400px 258px #FFF , 235px 1937px #FFF , 894px 562px #FFF , 1277px 907px #FFF , 435px 1360px #FFF , 507px 1253px #FFF , 1022px 833px #FFF , 351px 773px #FFF , 1126px 1969px #FFF , 1382px 1620px #FFF , 411px 59px #FFF , 187px 906px #FFF , 644px 1364px #FFF , 1721px 1451px #FFF , 1879px 1390px #FFF , 1396px 318px #FFF , 1002px 891px #FFF , 1930px 1454px #FFF , 1952px 496px #FFF , 1308px 1325px #FFF , 343px 475px #FFF , 285px 373px #FFF , 1329px 1591px #FFF , 901px 1875px #FFF , 966px 254px #FFF , 1624px 1577px #FFF , 371px 589px #FFF , 1918px 1494px #FFF , 841px 589px #FFF , 873px 1657px #FFF , 970px 1697px #FFF , 1354px 975px #FFF , 807px 1099px #FFF , 384px 1608px #FFF , 1600px 1739px #FFF , 110px 1310px #FFF , 687px 1611px #FFF , 324px 394px #FFF , 1267px 224px #FFF , 1122px 1919px #FFF , 1753px 578px #FFF , 611px 479px #FFF , 1494px 475px #FFF , 1595px 368px #FFF , 304px 1379px #FFF , 1663px 87px #FFF , 1789px 1471px #FFF , 941px 1861px #FFF , 287px 657px #FFF , 1882px 217px #FFF , 1766px 1960px #FFF , 144px 966px #FFF , 872px 943px #FFF , 1705px 1909px #FFF , 1318px 1173px #FFF , 1856px 1549px #FFF , 1722px 1482px #FFF , 196px 594px #FFF , 355px 1182px #FFF , 1242px 112px #FFF , 226px 344px #FFF , 674px 895px #FFF , 210px 2px #FFF , 1224px 488px #FFF , 220px 617px #FFF , 1857px 1348px #FFF , 426px 1026px #FFF , 1370px 720px #FFF , 109px 440px #FFF , 1940px 1575px #FFF , 978px 1443px #FFF , 308px 614px #FFF , 1392px 1351px #FFF , 635px 1231px #FFF , 1132px 616px #FFF , 756px 342px #FFF , 1968px 765px #FFF , 1020px 1877px #FFF , 1998px 1325px #FFF , 1296px 1303px #FFF , 1817px 223px #FFF , 1184px 907px #FFF , 546px 845px #FFF , 51px 705px #FFF , 1421px 735px #FFF , 1255px 700px #FFF , 249px 1908px #FFF , 1701px 351px #FFF , 173px 1658px #FFF , 1088px 1476px #FFF , 1930px 1787px #FFF , 689px 1312px #FFF , 615px 1006px #FFF , 1870px 1229px #FFF , 1900px 546px #FFF , 1416px 141px #FFF , 1983px 945px #FFF , 1104px 1351px #FFF , 426px 701px #FFF , 431px 1597px #FFF , 893px 456px #FFF , 1976px 1914px #FFF , 1538px 673px #FFF , 916px 1386px #FFF , 304px 138px #FFF , 1038px 681px #FFF , 1349px 1740px #FFF , 1231px 552px #FFF , 35px 1435px #FFF , 588px 652px #FFF , 793px 575px #FFF , 542px 926px #FFF , 1252px 25px #FFF , 831px 332px #FFF , 718px 283px #FFF , 1327px 1952px #FFF , 1019px 704px #FFF , 888px 1117px #FFF , 1107px 1378px #FFF , 532px 505px #FFF , 1070px 552px #FFF , 346px 645px #FFF , 63px 1783px #FFF , 775px 879px #FFF , 165px 160px #FFF , 788px 1225px #FFF , 1562px 1520px #FFF , 56px 1522px #FFF , 439px 498px #FFF , 1988px 1521px #FFF , 254px 1363px #FFF , 1162px 816px #FFF , 219px 386px #FFF , 1789px 1315px #FFF , 1090px 1415px #FFF , 1361px 315px #FFF , 825px 1306px #FFF , 92px 548px #FFF , 1501px 1946px #FFF , 350px 1735px #FFF , 459px 1533px #FFF , 1417px 931px #FFF , 1849px 174px #FFF , 220px 1084px #FFF , 1357px 209px #FFF , 1974px 358px #FFF , 90px 808px #FFF , 1247px 765px #FFF , 1878px 725px #FFF , 1415px 87px #FFF , 1253px 943px #FFF , 1455px 1919px #FFF , 1321px 337px #FFF , 1210px 1600px #FFF , 1855px 1575px #FFF , 325px 936px #FFF , 1118px 892px #FFF , 703px 294px #FFF , 89px 891px #FFF , 239px 1548px #FFF , 280px 262px #FFF , 1401px 555px #FFF , 1092px 1638px #FFF , 673px 1207px #FFF , 1469px 1358px #FFF , 1253px 1986px #FFF , 1249px 1040px #FFF , 253px 484px #FFF , 1163px 775px #FFF , 426px 162px #FFF , 721px 1761px #FFF , 369px 510px #FFF , 702px 1599px #FFF , 1883px 483px #FFF , 680px 1604px #FFF , 870px 1599px #FFF , 976px 1808px #FFF , 916px 477px #FFF , 1223px 1636px #FFF , 506px 993px #FFF , 898px 1284px #FFF , 1013px 290px #FFF , 1189px 78px #FFF , 25px 588px #FFF , 960px 861px #FFF , 28px 526px #FFF , 959px 681px #FFF , 1426px 1329px #FFF , 294px 557px #FFF , 1907px 1320px #FFF , 1289px 1627px #FFF , 124px 451px #FFF , 967px 653px #FFF , 892px 1460px #FFF , 537px 1385px #FFF , 197px 1954px #FFF , 1543px 302px #FFF , 747px 1953px #FFF , 995px 1630px #FFF , 1423px 1221px #FFF , 1075px 983px #FFF , 1556px 1739px #FFF , 1068px 1425px #FFF , 81px 550px #FFF , 1668px 523px #FFF , 1158px 438px #FFF , 401px 1795px #FFF , 537px 1072px #FFF , 1px 326px #FFF , 249px 118px #FFF , 832px 1544px #FFF , 240px 153px #FFF , 651px 1077px #FFF , 1656px 542px #FFF , 1102px 606px #FFF , 1583px 788px #FFF , 1205px 1842px #FFF , 1657px 1793px #FFF , 1848px 1464px #FFF , 1285px 1395px #FFF , 662px 1227px #FFF , 1790px 134px #FFF , 577px 263px #FFF , 383px 702px #FFF , 1728px 1953px #FFF , 417px 57px #FFF , 1390px 574px #FFF , 1024px 287px #FFF , 1969px 753px #FFF , 1239px 1036px #FFF , 1063px 1313px #FFF , 1784px 1519px #FFF , 1665px 682px #FFF , 806px 1437px #FFF , 394px 917px #FFF , 904px 666px #FFF , 801px 1280px #FFF , 1392px 1930px #FFF , 1611px 1386px #FFF , 1809px 1507px #FFF , 1720px 1300px #FFF , 1721px 1287px #FFF , 969px 240px #FFF , 3px 1070px #FFF , 1198px 538px #FFF , 1416px 1001px #FFF , 1665px 1265px #FFF , 1010px 1275px #FFF , 772px 978px #FFF , 1980px 980px #FFF , 1283px 1573px #FFF , 444px 516px #FFF , 875px 737px #FFF , 258px 716px #FFF , 1698px 758px #FFF , 644px 238px #FFF , 19px 876px #FFF , 355px 1327px #FFF , 1602px 1846px #FFF , 548px 534px #FFF , 1498px 1473px #FFF , 1389px 1136px #FFF , 174px 771px #FFF , 955px 1931px #FFF , 403px 371px #FFF , 1502px 794px #FFF , 117px 876px #FFF , 536px 778px #FFF , 67px 393px #FFF , 119px 1918px #FFF , 1912px 1663px #FFF , 1141px 245px #FFF , 1105px 130px #FFF , 1218px 1608px #FFF , 662px 1502px #FFF , 1907px 927px #FFF , 521px 109px #FFF , 1885px 362px #FFF , 1785px 1935px #FFF , 781px 427px #FFF , 1446px 1991px #FFF , 164px 1539px #FFF , 1807px 1795px #FFF , 1922px 890px #FFF , 1245px 933px #FFF , 446px 450px #FFF , 1743px 79px #FFF , 1959px 310px #FFF , 1348px 749px #FFF , 1954px 128px #FFF , 1980px 1030px #FFF , 1850px 302px #FFF , 1074px 922px #FFF , 174px 403px #FFF , 1579px 733px #FFF , 653px 1958px #FFF , 1511px 1943px #FFF , 1037px 741px #FFF , 602px 1384px #FFF , 103px 402px #FFF , 1722px 1417px #FFF , 1732px 1916px #FFF , 1743px 1803px #FFF , 381px 721px #FFF , 964px 1700px #FFF , 1070px 341px #FFF , 1376px 1258px #FFF , 1884px 570px #FFF , 940px 280px #FFF , 1484px 1658px #FFF , 1806px 1875px #FFF , 1054px 917px #FFF , 1672px 103px #FFF , 783px 574px #FFF , 98px 347px #FFF , 555px 1136px #FFF , 1403px 1237px #FFF , 1203px 339px #FFF , 572px 35px #FFF , 932px 1783px #FFF , 1527px 1850px #FFF , 1959px 1109px #FFF , 892px 623px #FFF , 211px 1388px #FFF , 1581px 1806px #FFF , 868px 1053px #FFF , 1243px 1997px #FFF , 1004px 522px #FFF , 1241px 1707px #FFF , 376px 282px #FFF , 537px 878px #FFF , 1948px 979px #FFF , 532px 688px #FFF , 273px 958px #FFF , 581px 927px #FFF , 1060px 887px #FFF , 486px 1467px #FFF , 1122px 1834px #FFF , 1650px 1763px #FFF , 532px 302px #FFF , 314px 1111px #FFF , 1888px 683px #FFF , 1856px 1040px #FFF , 1780px 1338px #FFF , 24px 1564px #FFF , 1096px 1808px #FFF , 1202px 1968px #FFF , 214px 992px #FFF , 728px 515px #FFF , 247px 278px #FFF , 1670px 45px #FFF , 442px 1579px #FFF , 1143px 30px #FFF , 612px 72px #FFF , 1177px 1303px #FFF , 1898px 1255px #FFF , 378px 1667px #FFF , 326px 1929px #FFF , 1257px 766px #FFF , 1363px 1170px #FFF , 1090px 1667px #FFF , 711px 293px #FFF , 249px 1406px #FFF , 1589px 565px #FFF , 1451px 29px #FFF , 1171px 1459px #FFF , 1294px 1214px #FFF , 342px 942px #FFF , 1945px 353px #FFF , 741px 1185px #FFF , 894px 1453px #FFF , 593px 1584px #FFF , 518px 630px #FFF , 393px 756px #FFF , 34px 608px #FFF;\n\n  &::after{\n    content: \" \";\n    position: absolute;\n    top: 2000px;\n    width: 1px;\n    height: 1px;\n    background: transparent;\n    box-shadow: 1804px 1265px #FFF , 365px 332px #FFF , 86px 1888px #FFF , 1888px 484px #FFF , 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF , 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF , 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF , 1849px 19px #FFF , 1399px 200px #FFF , 972px 497px #FFF , 795px 1109px #FFF , 746px 970px #FFF , 1524px 972px #FFF , 1631px 389px #FFF , 1026px 1016px #FFF , 1295px 862px #FFF , 1258px 1876px #FFF , 791px 189px #FFF , 1519px 45px #FFF , 592px 1405px #FFF , 620px 130px #FFF , 1044px 1171px #FFF , 37px 1578px #FFF , 1589px 86px #FFF , 1024px 528px #FFF , 1613px 568px #FFF , 912px 1175px #FFF , 1177px 133px #FFF , 67px 1641px #FFF , 1168px 357px #FFF , 310px 1873px #FFF , 1187px 573px #FFF , 308px 1839px #FFF , 565px 24px #FFF , 1691px 1555px #FFF , 1384px 1551px #FFF , 179px 861px #FFF , 1850px 1966px #FFF , 1169px 1979px #FFF , 1182px 1522px #FFF , 616px 751px #FFF , 1083px 908px #FFF , 684px 766px #FFF , 67px 955px #FFF , 1813px 1714px #FFF , 1256px 1413px #FFF , 332px 803px #FFF , 1670px 1921px #FFF , 362px 211px #FFF , 1513px 423px #FFF , 1304px 1145px #FFF , 1292px 1168px #FFF , 611px 802px #FFF , 1297px 575px #FFF , 540px 1289px #FFF , 1551px 1678px #FFF , 1545px 237px #FFF , 423px 138px #FFF , 1088px 28px #FFF , 642px 1637px #FFF , 429px 1293px #FFF , 1276px 1900px #FFF , 1168px 1696px #FFF , 847px 837px #FFF , 151px 1395px #FFF , 1490px 75px #FFF , 1588px 131px #FFF , 1739px 1358px #FFF , 709px 624px #FFF , 343px 502px #FFF , 1342px 1690px #FFF , 175px 1722px #FFF , 964px 1299px #FFF , 892px 1326px #FFF , 519px 1142px #FFF , 1014px 193px #FFF , 1181px 360px #FFF , 325px 139px #FFF , 482px 1199px #FFF , 613px 8px #FFF , 1976px 1125px #FFF , 346px 60px #FFF , 1565px 818px #FFF , 268px 1590px #FFF , 213px 1666px #FFF , 800px 464px #FFF , 974px 1825px #FFF , 1066px 23px #FFF , 1995px 1499px #FFF , 666px 1130px #FFF , 1074px 1710px #FFF , 1636px 1483px #FFF , 1379px 1509px #FFF , 1221px 887px #FFF , 1857px 964px #FFF , 1046px 993px #FFF , 1875px 643px #FFF , 1504px 1607px #FFF , 1065px 641px #FFF , 1095px 752px #FFF , 566px 1737px #FFF , 1972px 1778px #FFF , 146px 1517px #FFF , 1923px 588px #FFF , 557px 881px #FFF , 1885px 1950px #FFF , 1739px 1598px #FFF , 1048px 501px #FFF , 1316px 705px #FFF , 1900px 1697px #FFF , 1187px 917px #FFF , 1688px 1025px #FFF , 648px 1634px #FFF , 1002px 572px #FFF , 603px 1995px #FFF , 215px 693px #FFF , 688px 1374px #FFF , 1389px 1166px #FFF , 1310px 1140px #FFF , 245px 587px #FFF , 845px 63px #FFF , 296px 1646px #FFF , 792px 350px #FFF , 756px 1493px #FFF , 1553px 1079px #FFF , 850px 66px #FFF , 963px 1904px #FFF , 81px 207px #FFF , 1776px 1634px #FFF , 1759px 521px #FFF , 1761px 1536px #FFF , 601px 1485px #FFF , 898px 153px #FFF , 48px 648px #FFF , 1644px 1109px #FFF , 1974px 60px #FFF , 1278px 653px #FFF , 616px 432px #FFF , 1179px 1849px #FFF , 739px 677px #FFF , 808px 1850px #FFF , 1104px 827px #FFF , 984px 888px #FFF , 1027px 44px #FFF , 1462px 1105px #FFF , 902px 1486px #FFF , 769px 441px #FFF , 431px 1195px #FFF , 4px 764px #FFF , 562px 7px #FFF , 952px 1744px #FFF , 822px 971px #FFF , 1016px 1804px #FFF , 1429px 1161px #FFF , 328px 1568px #FFF , 101px 746px #FFF , 649px 1484px #FFF , 1903px 569px #FFF , 733px 871px #FFF , 1554px 505px #FFF , 1076px 642px #FFF , 609px 641px #FFF , 996px 149px #FFF , 1595px 758px #FFF , 14px 1083px #FFF , 261px 767px #FFF , 1274px 1517px #FFF , 1412px 215px #FFF , 1651px 879px #FFF , 284px 1633px #FFF , 1439px 287px #FFF , 1717px 270px #FFF , 1107px 1063px #FFF , 1521px 1831px #FFF , 656px 1702px #FFF , 25px 230px #FFF , 1958px 1615px #FFF , 646px 675px #FFF , 1201px 343px #FFF , 1918px 1064px #FFF , 1932px 609px #FFF , 1203px 900px #FFF , 10px 575px #FFF , 1582px 1828px #FFF , 1184px 462px #FFF , 1px 1619px #FFF , 1440px 1071px #FFF , 1844px 1913px #FFF , 376px 1054px #FFF , 1883px 1236px #FFF , 571px 493px #FFF , 354px 1701px #FFF , 747px 60px #FFF , 11px 1142px #FFF , 1136px 1891px #FFF , 1682px 473px #FFF , 1537px 1520px #FFF , 902px 836px #FFF , 1313px 395px #FFF , 534px 341px #FFF , 230px 1614px #FFF , 14px 1387px #FFF , 1296px 1765px #FFF , 1064px 1270px #FFF , 761px 975px #FFF , 1855px 335px #FFF , 198px 110px #FFF , 1660px 598px #FFF , 1022px 933px #FFF , 518px 356px #FFF , 19px 865px #FFF , 471px 830px #FFF , 758px 358px #FFF , 541px 1652px #FFF , 320px 926px #FFF , 425px 1826px #FFF , 659px 353px #FFF , 708px 778px #FFF , 862px 641px #FFF , 475px 1362px #FFF , 1326px 1449px #FFF , 446px 802px #FFF , 391px 1169px #FFF , 496px 39px #FFF , 1534px 934px #FFF , 1822px 1809px #FFF , 1454px 237px #FFF , 187px 1555px #FFF , 1069px 1977px #FFF , 1880px 1508px #FFF , 279px 418px #FFF , 1938px 1980px #FFF , 1304px 530px #FFF , 1763px 187px #FFF , 1945px 1642px #FFF , 311px 1490px #FFF , 770px 1598px #FFF , 263px 330px #FFF , 1733px 1771px #FFF , 978px 34px #FFF , 325px 1776px #FFF , 873px 1460px #FFF , 365px 33px #FFF , 913px 1999px #FFF , 667px 1021px #FFF , 27px 572px #FFF , 950px 1858px #FFF , 448px 1205px #FFF , 1302px 1138px #FFF , 1269px 932px #FFF , 480px 132px #FFF , 770px 1871px #FFF , 952px 654px #FFF , 623px 90px #FFF , 419px 1683px #FFF , 930px 794px #FFF , 1327px 1651px #FFF , 769px 1536px #FFF , 895px 90px #FFF , 599px 1268px #FFF , 1645px 919px #FFF , 1672px 1080px #FFF , 1637px 1259px #FFF , 243px 1182px #FFF , 1509px 457px #FFF , 1374px 1469px #FFF , 751px 137px #FFF , 1097px 1008px #FFF , 1979px 1381px #FFF , 981px 1825px #FFF , 928px 1930px #FFF , 632px 422px #FFF , 812px 341px #FFF , 1077px 1832px #FFF , 203px 1452px #FFF , 664px 1531px #FFF , 1203px 57px #FFF , 1654px 1203px #FFF , 491px 174px #FFF , 1507px 735px #FFF , 964px 896px #FFF , 52px 1718px #FFF , 1435px 26px #FFF , 753px 635px #FFF , 890px 1847px #FFF , 42px 1353px #FFF , 717px 72px #FFF , 1845px 1212px #FFF , 344px 867px #FFF , 418px 855px #FFF , 899px 1124px #FFF , 1798px 1582px #FFF , 1774px 760px #FFF , 908px 1567px #FFF , 1647px 1210px #FFF , 299px 82px #FFF , 1179px 1317px #FFF , 938px 1580px #FFF , 82px 921px #FFF , 657px 1596px #FFF , 892px 1264px #FFF , 1161px 819px #FFF , 607px 1447px #FFF , 605px 679px #FFF , 1642px 595px #FFF , 1963px 525px #FFF , 1656px 1591px #FFF , 1467px 1743px #FFF , 167px 1420px #FFF , 471px 492px #FFF , 1077px 932px #FFF , 774px 1282px #FFF , 799px 701px #FFF , 400px 258px #FFF , 235px 1937px #FFF , 894px 562px #FFF , 1277px 907px #FFF , 435px 1360px #FFF , 507px 1253px #FFF , 1022px 833px #FFF , 351px 773px #FFF , 1126px 1969px #FFF , 1382px 1620px #FFF , 411px 59px #FFF , 187px 906px #FFF , 644px 1364px #FFF , 1721px 1451px #FFF , 1879px 1390px #FFF , 1396px 318px #FFF , 1002px 891px #FFF , 1930px 1454px #FFF , 1952px 496px #FFF , 1308px 1325px #FFF , 343px 475px #FFF , 285px 373px #FFF , 1329px 1591px #FFF , 901px 1875px #FFF , 966px 254px #FFF , 1624px 1577px #FFF , 371px 589px #FFF , 1918px 1494px #FFF , 841px 589px #FFF , 873px 1657px #FFF , 970px 1697px #FFF , 1354px 975px #FFF , 807px 1099px #FFF , 384px 1608px #FFF , 1600px 1739px #FFF , 110px 1310px #FFF , 687px 1611px #FFF , 324px 394px #FFF , 1267px 224px #FFF , 1122px 1919px #FFF , 1753px 578px #FFF , 611px 479px #FFF , 1494px 475px #FFF , 1595px 368px #FFF , 304px 1379px #FFF , 1663px 87px #FFF , 1789px 1471px #FFF , 941px 1861px #FFF , 287px 657px #FFF , 1882px 217px #FFF , 1766px 1960px #FFF , 144px 966px #FFF , 872px 943px #FFF , 1705px 1909px #FFF , 1318px 1173px #FFF , 1856px 1549px #FFF , 1722px 1482px #FFF , 196px 594px #FFF , 355px 1182px #FFF , 1242px 112px #FFF , 226px 344px #FFF , 674px 895px #FFF , 210px 2px #FFF , 1224px 488px #FFF , 220px 617px #FFF , 1857px 1348px #FFF , 426px 1026px #FFF , 1370px 720px #FFF , 109px 440px #FFF , 1940px 1575px #FFF , 978px 1443px #FFF , 308px 614px #FFF , 1392px 1351px #FFF , 635px 1231px #FFF , 1132px 616px #FFF , 756px 342px #FFF , 1968px 765px #FFF , 1020px 1877px #FFF , 1998px 1325px #FFF , 1296px 1303px #FFF , 1817px 223px #FFF , 1184px 907px #FFF , 546px 845px #FFF , 51px 705px #FFF , 1421px 735px #FFF , 1255px 700px #FFF , 249px 1908px #FFF , 1701px 351px #FFF , 173px 1658px #FFF , 1088px 1476px #FFF , 1930px 1787px #FFF , 689px 1312px #FFF , 615px 1006px #FFF , 1870px 1229px #FFF , 1900px 546px #FFF , 1416px 141px #FFF , 1983px 945px #FFF , 1104px 1351px #FFF , 426px 701px #FFF , 431px 1597px #FFF , 893px 456px #FFF , 1976px 1914px #FFF , 1538px 673px #FFF , 916px 1386px #FFF , 304px 138px #FFF , 1038px 681px #FFF , 1349px 1740px #FFF , 1231px 552px #FFF , 35px 1435px #FFF , 588px 652px #FFF , 793px 575px #FFF , 542px 926px #FFF , 1252px 25px #FFF , 831px 332px #FFF , 718px 283px #FFF , 1327px 1952px #FFF , 1019px 704px #FFF , 888px 1117px #FFF , 1107px 1378px #FFF , 532px 505px #FFF , 1070px 552px #FFF , 346px 645px #FFF , 63px 1783px #FFF , 775px 879px #FFF , 165px 160px #FFF , 788px 1225px #FFF , 1562px 1520px #FFF , 56px 1522px #FFF , 439px 498px #FFF , 1988px 1521px #FFF , 254px 1363px #FFF , 1162px 816px #FFF , 219px 386px #FFF , 1789px 1315px #FFF , 1090px 1415px #FFF , 1361px 315px #FFF , 825px 1306px #FFF , 92px 548px #FFF , 1501px 1946px #FFF , 350px 1735px #FFF , 459px 1533px #FFF , 1417px 931px #FFF , 1849px 174px #FFF , 220px 1084px #FFF , 1357px 209px #FFF , 1974px 358px #FFF , 90px 808px #FFF , 1247px 765px #FFF , 1878px 725px #FFF , 1415px 87px #FFF , 1253px 943px #FFF , 1455px 1919px #FFF , 1321px 337px #FFF , 1210px 1600px #FFF , 1855px 1575px #FFF , 325px 936px #FFF , 1118px 892px #FFF , 703px 294px #FFF , 89px 891px #FFF , 239px 1548px #FFF , 280px 262px #FFF , 1401px 555px #FFF , 1092px 1638px #FFF , 673px 1207px #FFF , 1469px 1358px #FFF , 1253px 1986px #FFF , 1249px 1040px #FFF , 253px 484px #FFF , 1163px 775px #FFF , 426px 162px #FFF , 721px 1761px #FFF , 369px 510px #FFF , 702px 1599px #FFF , 1883px 483px #FFF , 680px 1604px #FFF , 870px 1599px #FFF , 976px 1808px #FFF , 916px 477px #FFF , 1223px 1636px #FFF , 506px 993px #FFF , 898px 1284px #FFF , 1013px 290px #FFF , 1189px 78px #FFF , 25px 588px #FFF , 960px 861px #FFF , 28px 526px #FFF , 959px 681px #FFF , 1426px 1329px #FFF , 294px 557px #FFF , 1907px 1320px #FFF , 1289px 1627px #FFF , 124px 451px #FFF , 967px 653px #FFF , 892px 1460px #FFF , 537px 1385px #FFF , 197px 1954px #FFF , 1543px 302px #FFF , 747px 1953px #FFF , 995px 1630px #FFF , 1423px 1221px #FFF , 1075px 983px #FFF , 1556px 1739px #FFF , 1068px 1425px #FFF , 81px 550px #FFF , 1668px 523px #FFF , 1158px 438px #FFF , 401px 1795px #FFF , 537px 1072px #FFF , 1px 326px #FFF , 249px 118px #FFF , 832px 1544px #FFF , 240px 153px #FFF , 651px 1077px #FFF , 1656px 542px #FFF , 1102px 606px #FFF , 1583px 788px #FFF , 1205px 1842px #FFF , 1657px 1793px #FFF , 1848px 1464px #FFF , 1285px 1395px #FFF , 662px 1227px #FFF , 1790px 134px #FFF , 577px 263px #FFF , 383px 702px #FFF , 1728px 1953px #FFF , 417px 57px #FFF , 1390px 574px #FFF , 1024px 287px #FFF , 1969px 753px #FFF , 1239px 1036px #FFF , 1063px 1313px #FFF , 1784px 1519px #FFF , 1665px 682px #FFF , 806px 1437px #FFF , 394px 917px #FFF , 904px 666px #FFF , 801px 1280px #FFF , 1392px 1930px #FFF , 1611px 1386px #FFF , 1809px 1507px #FFF , 1720px 1300px #FFF , 1721px 1287px #FFF , 969px 240px #FFF , 3px 1070px #FFF , 1198px 538px #FFF , 1416px 1001px #FFF , 1665px 1265px #FFF , 1010px 1275px #FFF , 772px 978px #FFF , 1980px 980px #FFF , 1283px 1573px #FFF , 444px 516px #FFF , 875px 737px #FFF , 258px 716px #FFF , 1698px 758px #FFF , 644px 238px #FFF , 19px 876px #FFF , 355px 1327px #FFF , 1602px 1846px #FFF , 548px 534px #FFF , 1498px 1473px #FFF , 1389px 1136px #FFF , 174px 771px #FFF , 955px 1931px #FFF , 403px 371px #FFF , 1502px 794px #FFF , 117px 876px #FFF , 536px 778px #FFF , 67px 393px #FFF , 119px 1918px #FFF , 1912px 1663px #FFF , 1141px 245px #FFF , 1105px 130px #FFF , 1218px 1608px #FFF , 662px 1502px #FFF , 1907px 927px #FFF , 521px 109px #FFF , 1885px 362px #FFF , 1785px 1935px #FFF , 781px 427px #FFF , 1446px 1991px #FFF , 164px 1539px #FFF , 1807px 1795px #FFF , 1922px 890px #FFF , 1245px 933px #FFF , 446px 450px #FFF , 1743px 79px #FFF , 1959px 310px #FFF , 1348px 749px #FFF , 1954px 128px #FFF , 1980px 1030px #FFF , 1850px 302px #FFF , 1074px 922px #FFF , 174px 403px #FFF , 1579px 733px #FFF , 653px 1958px #FFF , 1511px 1943px #FFF , 1037px 741px #FFF , 602px 1384px #FFF , 103px 402px #FFF , 1722px 1417px #FFF , 1732px 1916px #FFF , 1743px 1803px #FFF , 381px 721px #FFF , 964px 1700px #FFF , 1070px 341px #FFF , 1376px 1258px #FFF , 1884px 570px #FFF , 940px 280px #FFF , 1484px 1658px #FFF , 1806px 1875px #FFF , 1054px 917px #FFF , 1672px 103px #FFF , 783px 574px #FFF , 98px 347px #FFF , 555px 1136px #FFF , 1403px 1237px #FFF , 1203px 339px #FFF , 572px 35px #FFF , 932px 1783px #FFF , 1527px 1850px #FFF , 1959px 1109px #FFF , 892px 623px #FFF , 211px 1388px #FFF , 1581px 1806px #FFF , 868px 1053px #FFF , 1243px 1997px #FFF , 1004px 522px #FFF , 1241px 1707px #FFF , 376px 282px #FFF , 537px 878px #FFF , 1948px 979px #FFF , 532px 688px #FFF , 273px 958px #FFF , 581px 927px #FFF , 1060px 887px #FFF , 486px 1467px #FFF , 1122px 1834px #FFF , 1650px 1763px #FFF , 532px 302px #FFF , 314px 1111px #FFF , 1888px 683px #FFF , 1856px 1040px #FFF , 1780px 1338px #FFF , 24px 1564px #FFF , 1096px 1808px #FFF , 1202px 1968px #FFF , 214px 992px #FFF , 728px 515px #FFF , 247px 278px #FFF , 1670px 45px #FFF , 442px 1579px #FFF , 1143px 30px #FFF , 612px 72px #FFF , 1177px 1303px #FFF , 1898px 1255px #FFF , 378px 1667px #FFF , 326px 1929px #FFF , 1257px 766px #FFF , 1363px 1170px #FFF , 1090px 1667px #FFF , 711px 293px #FFF , 249px 1406px #FFF , 1589px 565px #FFF , 1451px 29px #FFF , 1171px 1459px #FFF , 1294px 1214px #FFF , 342px 942px #FFF , 1945px 353px #FFF , 741px 1185px #FFF , 894px 1453px #FFF , 593px 1584px #FFF , 518px 630px #FFF , 393px 756px #FFF , 34px 608px #FFF;\n  }\n"], star_anti);
const StartsTwo = external_styled_components_default().div.withConfig({
  displayName: "starryBackground__StartsTwo",
  componentId: "sc-e7sx74-1"
})(["\n  width: 2px;\n  height: 2px;\n   background: transparent;\n  animation: ", " 100s linear infinite;\n  box-shadow: 114px 658px #FFF , 236px 768px #FFF , 1130px 1503px #FFF , 486px 592px #FFF , 1353px 1407px #FFF , 1583px 1741px #FFF , 450px 1479px #FFF , 1845px 327px #FFF , 1520px 361px #FFF , 580px 1699px #FFF , 1277px 1233px #FFF , 1697px 943px #FFF , 568px 1135px #FFF , 1273px 263px #FFF , 788px 126px #FFF , 1834px 1911px #FFF , 1147px 1652px #FFF , 651px 567px #FFF , 79px 1897px #FFF , 1590px 666px #FFF , 1362px 566px #FFF , 275px 367px #FFF , 556px 479px #FFF , 1063px 476px #FFF , 1337px 1119px #FFF , 1780px 1109px #FFF , 1323px 1655px #FFF , 1740px 1165px #FFF , 525px 60px #FFF , 1513px 1484px #FFF , 708px 280px #FFF , 429px 475px #FFF , 563px 1360px #FFF , 1580px 697px #FFF , 1702px 1164px #FFF , 1649px 1952px #FFF , 1580px 1812px #FFF , 70px 1190px #FFF , 1100px 98px #FFF , 1232px 1896px #FFF , 851px 1047px #FFF , 851px 30px #FFF , 596px 1486px #FFF , 666px 526px #FFF , 1855px 1342px #FFF , 80px 531px #FFF , 248px 1804px #FFF , 1990px 263px #FFF , 1796px 1640px #FFF , 1502px 862px #FFF , 1780px 488px #FFF , 1881px 1191px #FFF , 1063px 876px #FFF , 1614px 1073px #FFF , 1414px 666px #FFF , 1865px 289px #FFF , 687px 352px #FFF , 1329px 1312px #FFF , 279px 136px #FFF , 475px 756px #FFF , 1177px 435px #FFF , 1264px 921px #FFF , 467px 1496px #FFF , 391px 1359px #FFF , 666px 1083px #FFF , 1526px 1251px #FFF , 594px 564px #FFF , 991px 525px #FFF , 1511px 875px #FFF , 1935px 1049px #FFF , 1471px 1430px #FFF , 959px 604px #FFF , 1685px 72px #FFF , 1505px 1876px #FFF , 509px 1627px #FFF , 1065px 978px #FFF , 1860px 884px #FFF , 1038px 464px #FFF , 1051px 106px #FFF , 1056px 728px #FFF , 1953px 45px #FFF , 1483px 638px #FFF , 559px 845px #FFF , 1184px 922px #FFF , 1320px 1117px #FFF , 1572px 747px #FFF , 1971px 43px #FFF , 665px 13px #FFF , 1457px 1153px #FFF , 848px 154px #FFF , 1039px 1837px #FFF , 878px 795px #FFF , 1286px 1705px #FFF , 1946px 1143px #FFF , 1114px 1166px #FFF , 1747px 874px #FFF , 1894px 636px #FFF , 1316px 541px #FFF , 1953px 1620px #FFF , 1446px 1773px #FFF , 974px 833px #FFF , 1814px 1211px #FFF , 102px 335px #FFF , 327px 1868px #FFF , 348px 548px #FFF , 353px 1540px #FFF , 1212px 1872px #FFF , 1968px 129px #FFF , 1531px 644px #FFF , 1939px 559px #FFF , 1397px 1876px #FFF , 1446px 1446px #FFF , 1721px 603px #FFF , 924px 1171px #FFF , 1086px 1954px #FFF , 1798px 310px #FFF , 21px 1595px #FFF , 1462px 1948px #FFF , 149px 1752px #FFF , 804px 318px #FFF , 1262px 636px #FFF , 1051px 100px #FFF , 392px 560px #FFF , 654px 1236px #FFF , 1889px 1159px #FFF , 498px 394px #FFF , 522px 1889px #FFF , 1198px 579px #FFF , 1437px 1866px #FFF , 1049px 1064px #FFF , 286px 921px #FFF , 993px 1790px #FFF , 1557px 1997px #FFF , 1525px 532px #FFF , 481px 1561px #FFF , 790px 683px #FFF , 141px 17px #FFF , 1202px 28px #FFF , 518px 1927px #FFF , 90px 1677px #FFF , 1258px 370px #FFF , 1379px 1536px #FFF , 607px 474px #FFF , 163px 139px #FFF , 1025px 1359px #FFF , 815px 845px #FFF , 231px 1212px #FFF , 192px 806px #FFF , 313px 1946px #FFF , 1132px 1808px #FFF , 624px 767px #FFF , 379px 722px #FFF , 733px 1847px #FFF , 628px 1517px #FFF , 1559px 929px #FFF , 234px 397px #FFF , 1230px 1231px #FFF , 849px 726px #FFF , 1148px 786px #FFF , 546px 1533px #FFF , 477px 822px #FFF , 1325px 480px #FFF , 972px 383px #FFF , 334px 958px #FFF , 1032px 664px #FFF , 1781px 40px #FFF , 38px 1335px #FFF , 1634px 1691px #FFF , 1061px 680px #FFF , 1319px 304px #FFF , 82px 1776px #FFF , 1302px 509px #FFF , 1231px 746px #FFF , 1264px 1509px #FFF , 980px 495px #FFF , 1153px 1381px #FFF , 1981px 1918px #FFF , 70px 113px #FFF , 390px 736px #FFF , 1882px 1925px #FFF , 1380px 1326px #FFF , 257px 1681px #FFF , 860px 998px #FFF , 518px 1136px #FFF , 168px 905px #FFF , 500px 1882px #FFF , 1012px 1572px #FFF , 349px 1916px #FFF , 905px 1339px #FFF , 1940px 1803px #FFF , 23px 1159px #FFF , 9px 1559px #FFF , 1658px 776px #FFF , 820px 1361px #FFF , 171px 983px #FFF , 580px 1902px #FFF , 1268px 263px #FFF , 1734px 994px #FFF , 1872px 29px #FFF , 1475px 435px #FFF;\n  &::after {\n    content: \" \";\n    position: absolute;\n    top: 2000px;\n    width: 2px;\n    height: 2px;\n    background: transparent;\n    box-shadow: 114px 658px #FFF , 236px 768px #FFF , 1130px 1503px #FFF , 486px 592px #FFF , 1353px 1407px #FFF , 1583px 1741px #FFF , 450px 1479px #FFF , 1845px 327px #FFF , 1520px 361px #FFF , 580px 1699px #FFF , 1277px 1233px #FFF , 1697px 943px #FFF , 568px 1135px #FFF , 1273px 263px #FFF , 788px 126px #FFF , 1834px 1911px #FFF , 1147px 1652px #FFF , 651px 567px #FFF , 79px 1897px #FFF , 1590px 666px #FFF , 1362px 566px #FFF , 275px 367px #FFF , 556px 479px #FFF , 1063px 476px #FFF , 1337px 1119px #FFF , 1780px 1109px #FFF , 1323px 1655px #FFF , 1740px 1165px #FFF , 525px 60px #FFF , 1513px 1484px #FFF , 708px 280px #FFF , 429px 475px #FFF , 563px 1360px #FFF , 1580px 697px #FFF , 1702px 1164px #FFF , 1649px 1952px #FFF , 1580px 1812px #FFF , 70px 1190px #FFF , 1100px 98px #FFF , 1232px 1896px #FFF , 851px 1047px #FFF , 851px 30px #FFF , 596px 1486px #FFF , 666px 526px #FFF , 1855px 1342px #FFF , 80px 531px #FFF , 248px 1804px #FFF , 1990px 263px #FFF , 1796px 1640px #FFF , 1502px 862px #FFF , 1780px 488px #FFF , 1881px 1191px #FFF , 1063px 876px #FFF , 1614px 1073px #FFF , 1414px 666px #FFF , 1865px 289px #FFF , 687px 352px #FFF , 1329px 1312px #FFF , 279px 136px #FFF , 475px 756px #FFF , 1177px 435px #FFF , 1264px 921px #FFF , 467px 1496px #FFF , 391px 1359px #FFF , 666px 1083px #FFF , 1526px 1251px #FFF , 594px 564px #FFF , 991px 525px #FFF , 1511px 875px #FFF , 1935px 1049px #FFF , 1471px 1430px #FFF , 959px 604px #FFF , 1685px 72px #FFF , 1505px 1876px #FFF , 509px 1627px #FFF , 1065px 978px #FFF , 1860px 884px #FFF , 1038px 464px #FFF , 1051px 106px #FFF , 1056px 728px #FFF , 1953px 45px #FFF , 1483px 638px #FFF , 559px 845px #FFF , 1184px 922px #FFF , 1320px 1117px #FFF , 1572px 747px #FFF , 1971px 43px #FFF , 665px 13px #FFF , 1457px 1153px #FFF , 848px 154px #FFF , 1039px 1837px #FFF , 878px 795px #FFF , 1286px 1705px #FFF , 1946px 1143px #FFF , 1114px 1166px #FFF , 1747px 874px #FFF , 1894px 636px #FFF , 1316px 541px #FFF , 1953px 1620px #FFF , 1446px 1773px #FFF , 974px 833px #FFF , 1814px 1211px #FFF , 102px 335px #FFF , 327px 1868px #FFF , 348px 548px #FFF , 353px 1540px #FFF , 1212px 1872px #FFF , 1968px 129px #FFF , 1531px 644px #FFF , 1939px 559px #FFF , 1397px 1876px #FFF , 1446px 1446px #FFF , 1721px 603px #FFF , 924px 1171px #FFF , 1086px 1954px #FFF , 1798px 310px #FFF , 21px 1595px #FFF , 1462px 1948px #FFF , 149px 1752px #FFF , 804px 318px #FFF , 1262px 636px #FFF , 1051px 100px #FFF , 392px 560px #FFF , 654px 1236px #FFF , 1889px 1159px #FFF , 498px 394px #FFF , 522px 1889px #FFF , 1198px 579px #FFF , 1437px 1866px #FFF , 1049px 1064px #FFF , 286px 921px #FFF , 993px 1790px #FFF , 1557px 1997px #FFF , 1525px 532px #FFF , 481px 1561px #FFF , 790px 683px #FFF , 141px 17px #FFF , 1202px 28px #FFF , 518px 1927px #FFF , 90px 1677px #FFF , 1258px 370px #FFF , 1379px 1536px #FFF , 607px 474px #FFF , 163px 139px #FFF , 1025px 1359px #FFF , 815px 845px #FFF , 231px 1212px #FFF , 192px 806px #FFF , 313px 1946px #FFF , 1132px 1808px #FFF , 624px 767px #FFF , 379px 722px #FFF , 733px 1847px #FFF , 628px 1517px #FFF , 1559px 929px #FFF , 234px 397px #FFF , 1230px 1231px #FFF , 849px 726px #FFF , 1148px 786px #FFF , 546px 1533px #FFF , 477px 822px #FFF , 1325px 480px #FFF , 972px 383px #FFF , 334px 958px #FFF , 1032px 664px #FFF , 1781px 40px #FFF , 38px 1335px #FFF , 1634px 1691px #FFF , 1061px 680px #FFF , 1319px 304px #FFF , 82px 1776px #FFF , 1302px 509px #FFF , 1231px 746px #FFF , 1264px 1509px #FFF , 980px 495px #FFF , 1153px 1381px #FFF , 1981px 1918px #FFF , 70px 113px #FFF , 390px 736px #FFF , 1882px 1925px #FFF , 1380px 1326px #FFF , 257px 1681px #FFF , 860px 998px #FFF , 518px 1136px #FFF , 168px 905px #FFF , 500px 1882px #FFF , 1012px 1572px #FFF , 349px 1916px #FFF , 905px 1339px #FFF , 1940px 1803px #FFF , 23px 1159px #FFF , 9px 1559px #FFF , 1658px 776px #FFF , 820px 1361px #FFF , 171px 983px #FFF , 580px 1902px #FFF , 1268px 263px #FFF , 1734px 994px #FFF , 1872px 29px #FFF , 1475px 435px #FFF;\n  }\n"], star_anti);
const StartsThree = external_styled_components_default().div.withConfig({
  displayName: "starryBackground__StartsThree",
  componentId: "sc-e7sx74-2"
})(["\n  width: 3px;\n  height: 3px;\n  background: transparent;\n  box-shadow: 519px 875px #FFF , 1497px 751px #FFF , 1256px 88px #FFF , 1168px 1791px #FFF , 1884px 109px #FFF , 1465px 451px #FFF , 450px 370px #FFF , 1560px 703px #FFF , 1788px 1997px #FFF , 1047px 963px #FFF , 1281px 119px #FFF , 439px 96px #FFF , 164px 1956px #FFF , 1360px 930px #FFF , 1387px 347px #FFF , 1073px 1970px #FFF , 1296px 284px #FFF , 25px 1602px #FFF , 455px 944px #FFF , 1177px 738px #FFF , 633px 1142px #FFF , 1730px 1079px #FFF , 1283px 1606px #FFF , 674px 1186px #FFF , 513px 166px #FFF , 1077px 636px #FFF , 1811px 580px #FFF , 971px 1789px #FFF , 694px 1756px #FFF , 703px 1138px #FFF , 1290px 942px #FFF , 351px 1509px #FFF , 1904px 790px #FFF , 68px 819px #FFF , 1097px 362px #FFF , 1035px 331px #FFF , 180px 940px #FFF , 1776px 1229px #FFF , 1487px 781px #FFF , 1131px 1765px #FFF , 1684px 536px #FFF , 939px 367px #FFF , 1102px 1481px #FFF , 741px 887px #FFF , 167px 1132px #FFF , 1756px 529px #FFF , 608px 758px #FFF , 541px 1025px #FFF , 1976px 505px #FFF , 1349px 1257px #FFF , 815px 1388px #FFF , 505px 1351px #FFF , 33px 1945px #FFF , 861px 1695px #FFF , 678px 1360px #FFF , 1615px 727px #FFF , 1138px 726px #FFF , 30px 293px #FFF , 1624px 1044px #FFF , 683px 1242px #FFF , 1781px 1758px #FFF , 906px 1328px #FFF , 1066px 1764px #FFF , 1568px 664px #FFF , 1027px 1876px #FFF , 775px 1099px #FFF , 1605px 208px #FFF , 730px 837px #FFF , 1475px 1482px #FFF , 871px 1759px #FFF , 1240px 15px #FFF , 1987px 705px #FFF , 302px 1049px #FFF , 475px 1015px #FFF , 1843px 1296px #FFF , 493px 631px #FFF , 1613px 164px #FFF , 1863px 156px #FFF , 1479px 423px #FFF , 202px 1499px #FFF , 886px 969px #FFF , 904px 930px #FFF , 1853px 535px #FFF , 726px 914px #FFF , 435px 1205px #FFF , 1732px 1824px #FFF , 1212px 667px #FFF , 499px 31px #FFF , 552px 594px #FFF , 1715px 1814px #FFF , 775px 908px #FFF , 1949px 921px #FFF , 1267px 718px #FFF , 1830px 1960px #FFF , 338px 1325px #FFF , 466px 1120px #FFF , 140px 1675px #FFF , 1919px 664px #FFF , 1136px 771px #FFF , 1888px 1302px #FFF;\n  animation: ", " 150s linear infinite;\n  &::after {\n    content: \" \";\n    position: absolute;\n    top: 2000px;\n    width: 3px;\n    height: 3px;\n    background: transparent;\n    box-shadow: 519px 875px #FFF , 1497px 751px #FFF , 1256px 88px #FFF , 1168px 1791px #FFF , 1884px 109px #FFF , 1465px 451px #FFF , 450px 370px #FFF , 1560px 703px #FFF , 1788px 1997px #FFF , 1047px 963px #FFF , 1281px 119px #FFF , 439px 96px #FFF , 164px 1956px #FFF , 1360px 930px #FFF , 1387px 347px #FFF , 1073px 1970px #FFF , 1296px 284px #FFF , 25px 1602px #FFF , 455px 944px #FFF , 1177px 738px #FFF , 633px 1142px #FFF , 1730px 1079px #FFF , 1283px 1606px #FFF , 674px 1186px #FFF , 513px 166px #FFF , 1077px 636px #FFF , 1811px 580px #FFF , 971px 1789px #FFF , 694px 1756px #FFF , 703px 1138px #FFF , 1290px 942px #FFF , 351px 1509px #FFF , 1904px 790px #FFF , 68px 819px #FFF , 1097px 362px #FFF , 1035px 331px #FFF , 180px 940px #FFF , 1776px 1229px #FFF , 1487px 781px #FFF , 1131px 1765px #FFF , 1684px 536px #FFF , 939px 367px #FFF , 1102px 1481px #FFF , 741px 887px #FFF , 167px 1132px #FFF , 1756px 529px #FFF , 608px 758px #FFF , 541px 1025px #FFF , 1976px 505px #FFF , 1349px 1257px #FFF , 815px 1388px #FFF , 505px 1351px #FFF , 33px 1945px #FFF , 861px 1695px #FFF , 678px 1360px #FFF , 1615px 727px #FFF , 1138px 726px #FFF , 30px 293px #FFF , 1624px 1044px #FFF , 683px 1242px #FFF , 1781px 1758px #FFF , 906px 1328px #FFF , 1066px 1764px #FFF , 1568px 664px #FFF , 1027px 1876px #FFF , 775px 1099px #FFF , 1605px 208px #FFF , 730px 837px #FFF , 1475px 1482px #FFF , 871px 1759px #FFF , 1240px 15px #FFF , 1987px 705px #FFF , 302px 1049px #FFF , 475px 1015px #FFF , 1843px 1296px #FFF , 493px 631px #FFF , 1613px 164px #FFF , 1863px 156px #FFF , 1479px 423px #FFF , 202px 1499px #FFF , 886px 969px #FFF , 904px 930px #FFF , 1853px 535px #FFF , 726px 914px #FFF , 435px 1205px #FFF , 1732px 1824px #FFF , 1212px 667px #FFF , 499px 31px #FFF , 552px 594px #FFF , 1715px 1814px #FFF , 775px 908px #FFF , 1949px 921px #FFF , 1267px 718px #FFF , 1830px 1960px #FFF , 338px 1325px #FFF , 466px 1120px #FFF , 140px 1675px #FFF , 1919px 664px #FFF , 1136px 771px #FFF , 1888px 1302px #FFF;\n  }\n"], star_anti);
const StarryBackground = external_styled_components_default().div.withConfig({
  displayName: "starryBackground__StarryBackground",
  componentId: "sc-e7sx74-3"
})(["\n\n"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ShootingStar/ShootingStar.tsx
 // import './style.css'




const ShootingStar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: "extras",
    width: "100vw",
    height: "100vh",
    preserveAspectRatio: "none",
    children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("radialGradient", {
        id: "comet-gradient",
        cx: "0",
        cy: ".5",
        r: "0.5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "0%",
          stopColor: "rgba(255,255,255,.8)"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "100%",
          stopColor: "rgba(255,255,255,0)"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("g", {
      transform: "rotate(-135)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        className: "comet comet-a",
        fill: "url(#comet-gradient)",
        cx: "0",
        cy: "0",
        rx: "150",
        ry: "2"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("g", {
      transform: "rotate(20)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        className: "comet comet-b",
        fill: "url(#comet-gradient)",
        cx: "100%",
        cy: "0",
        rx: "150",
        ry: "2"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("g", {
      transform: "rotate(300)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        className: "comet comet-c",
        fill: "url(#comet-gradient)",
        cx: "40%",
        cy: "100%",
        rx: "150",
        ry: "2"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("g", {
      transform: "rotate(300)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        className: "comet comet-d",
        fill: "url(#comet-gradient)",
        cx: "10%",
        cy: "50%",
        rx: "150",
        ry: "2"
      })
    })]
  });
};

/* harmony default export */ const ShootingStar_ShootingStar = (ShootingStar);
;// CONCATENATED MODULE: ./src/components/ThemeBackground/ThemeBackground.tsx
function ThemeBackground_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ThemeBackground_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ThemeBackground_ownKeys(Object(source), true).forEach(function (key) { ThemeBackground_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ThemeBackground_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ThemeBackground_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const StratsBox = external_styled_components_default().div.withConfig({
  displayName: "ThemeBackground__StratsBox",
  componentId: "sc-1iqkxhf-0"
})(["\n  position: relative;\n  overflow: hidden ;\n  width: 100%;\n"]);

const ThemeBackground = ({
  Component,
  pageProps,
  theme
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StratsBox, {
    lightTheme: theme === 'light',
    children: [theme === 'light' ? '' : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Starts, {}), /*#__PURE__*/jsx_runtime_.jsx(StartsTwo, {}), /*#__PURE__*/jsx_runtime_.jsx(StartsThree, {}), /*#__PURE__*/jsx_runtime_.jsx(ShootingStar_ShootingStar, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, ThemeBackground_objectSpread({}, pageProps))]
  });
};

/* harmony default export */ const ThemeBackground_ThemeBackground = (ThemeBackground);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: ./src/shared/constants.ts
var constants = __webpack_require__(1870);
// EXTERNAL MODULE: ./src/components/Toast/Toast.tsx
var Toast = __webpack_require__(852);
;// CONCATENATED MODULE: external "lodash.throttle"
const external_lodash_throttle_namespaceObject = require("lodash.throttle");
var external_lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(external_lodash_throttle_namespaceObject);
;// CONCATENATED MODULE: ./src/components/RunCat/RunCat.tsx
function RunCat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function RunCat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RunCat_ownKeys(Object(source), true).forEach(function (key) { RunCat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RunCat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RunCat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const RunCat_scroll = (0,external_styled_components_.keyframes)(["\n0%{\n\t\tbackground-position:0 0;}\n\t100%{\n\t\t/* background-position:-1600px 0; */\n\t\tbackground-position:-2600px 0;\n    }\n"]);
const RunCatWrapper = external_styled_components_default().div.withConfig({
  displayName: "RunCat__RunCatWrapper",
  componentId: "sc-h5nc3t-0"
})([" \n \n  position: fixed;\n  z-index: 99999999;\n  bottom: 0rem;\n  right:2rem;\n  width:200px;\n\theight:126px;\n  margin-left: -100px;\n\t/* background:url(http://www.mrszhao.com/zb_users/upload/2018/06/stepsanimation/images/bear.png) no-repeat 0 0;\n\tanimation:", " 1s steps(8,end) infinite ; */\n\n\tbackground:url(", " ) no-repeat 0 0;\n\tanimation:", " 1s steps(13) infinite ;\n  animation-play-state:", ";\n  -webkit-animation-play-state:", ";\n  /* :hover{\n    animation-play-state:paused;\n    -webkit-animation-play-state:paused;\n  } */\n"], RunCat_scroll, ({
  theme
}) => theme.cat, RunCat_scroll, props => props.animation, props => props.animation);

class RunCat extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    RunCat_defineProperty(this, "handleScroll", external_lodash_throttle_default()(() => {
      clearTimeout(this.state.timer);
      const el = document.querySelector('.redpacket-icon'); // console.log('页面滑动');

      this.setState(RunCat_objectSpread(RunCat_objectSpread({}, this.state), {}, {
        animation: 'running'
      }));
      this.setState({
        timer: setTimeout(() => {
          // console.log(' 页面静止');
          this.setState(RunCat_objectSpread(RunCat_objectSpread({}, this.state), {}, {
            animation: 'paused'
          }));
        }, 500)
      });
    }, 100));

    this.state = {
      timer: null,
      animation: 'paused'
    };
  } // 组件加载时


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  } // 组件卸载时


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  } // 监听滚动


  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(RunCatWrapper, {
      animation: this.state.animation
    });
  }

}

/* harmony default export */ const RunCat_RunCat = (RunCat);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 32 modules
var Icon = __webpack_require__(6042);
// EXTERNAL MODULE: ./src/styled/mixins.ts
var mixins = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/components/SwitchTheme/styled.ts



const SVG = external_styled_components_default().span.withConfig({
  displayName: "styled__SVG",
  componentId: "sc-15y4aw-0"
})(["\n  ", "\n  background-color: var(--day-night);\n  display: inline-block;\n  border-radius: 50%;\n  &:first-child {\n    transform: ", ";\n  }\n\n  &:nth-child(2) {\n    transform: ", ";\n  }\n"], (0,mixins/* transitionMixin */.Ce)('all', 500, 'linear'), ({
  lightTheme
}) => !lightTheme ? 'translatey(0px)' : 'translatey(-55px)', ({
  lightTheme
}) => !lightTheme ? 'translatey(-55px)' : 'translatey(0px)');
const DayNight = external_styled_components_default().div.withConfig({
  displayName: "styled__DayNight",
  componentId: "sc-15y4aw-1"
})(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    z-index: 6;\n    width: 8rem;\n    height: 2.5rem;\n    padding: 0 .3rem;\n    overflow: hidden;\n    \n"]);
const SwitchThemeBox = external_styled_components_default().div.withConfig({
  displayName: "styled__SwitchThemeBox",
  componentId: "sc-15y4aw-2"
})(["\n    position: fixed;\n    top: 0.5rem;\n    right: 2.4rem;\n    z-index: 99999;\n    @media only screen and ", " {\n      display: none;\n    }\n"], breakpoints/* default.device.laptop */.Z.device.laptop);
;// CONCATENATED MODULE: ./src/components/SwitchTheme/SwitchTheme.tsx






const SwitchTheme = props => {
  const {
    onToggle,
    theme
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(SwitchThemeBox, {
    className: "SwitchTheme",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "SwitchThemeWrapper",
      className: theme === 'light' ? 'light switch' : 'dark',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "switch",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "checkbox",
          onChange: () => {
            // document.querySelector('#SwitchThemeWrapper')?.classList.toggle('switch');
            onToggle();
          },
          id: "switch"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "toggle-wrapper",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DayNight, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(SVG, {
              lightTheme: theme === 'light',
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
                name: "night",
                size: "2.2rem"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(SVG, {
              lightTheme: theme === 'light',
              children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
                name: "day",
                size: "2.2rem"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "tree-left",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "tree"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "trunk",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "branch"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "branch"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "tree-right",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "tree-back",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "trunk"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "tree-front",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "trunk"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "moon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "stars",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "star big-star",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "vertical"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "horizontal"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "star small-star",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "vertical"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "horizontal"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "sun"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "hills",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hill-left"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hill-right"
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const SwitchTheme_SwitchTheme = (SwitchTheme);
;// CONCATENATED MODULE: ./pages/_app.tsx

























function MZYBlog({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeStart', () => {// console.log(111111);
    });
    router.events.on('routeChangeComplete', () => external_nprogress_default().done());
    router.events.on('routeChangeError', () => external_nprogress_default().done());
  }, [router.events]);
  const {
    theme,
    toggleTheme
  } = useDarkMode();
  const themeMode = theme === ThemeMode.LIGHT ? lightTheme : darkTheme;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: themeMode,
    children: [/*#__PURE__*/jsx_runtime_.jsx(globalStyles, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_notistack_.SnackbarProvider, {
      maxSnack: constants/* SNACKBAR_MAX_NUM */.Ej,
      anchorOrigin: constants/* SNACKBAR_ANCHOR_ORIGIN */.eE,
      autoHideDuration: constants/* SNACKBAR_AUTO_HIDE_DURATION */.U4,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Toast/* SnackbarUtilsConfigurator */.x, {}), /*#__PURE__*/jsx_runtime_.jsx(ThemeBackground_ThemeBackground, {
        Component: Component,
        pageProps: pageProps,
        theme: theme
      }), /*#__PURE__*/jsx_runtime_.jsx(SwitchTheme_SwitchTheme, {
        theme: theme,
        onToggle: toggleTheme
      }), /*#__PURE__*/jsx_runtime_.jsx(RunCat_RunCat, {})]
    })]
  });
}

/* harmony default export */ const _app = (MZYBlog);

/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ SnackbarUtilsConfigurator)
/* harmony export */ });
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const InnerSnackbarUtilsConfigurator = ({
  setUseSnackbarRef
}) => {
  setUseSnackbarRef((0,notistack__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)());
  return null;
};

let useSnackbarRef;

const setUseSnackbarRef = useSnackbarRefProp => {
  useSnackbarRef = useSnackbarRefProp;
};

const SnackbarUtilsConfigurator = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(InnerSnackbarUtilsConfigurator, {
    setUseSnackbarRef: setUseSnackbarRef
  });
};
const toast = {
  success(msg) {
    this.toast(msg, 'success');
  },

  warning(msg) {
    this.toast(msg, 'warning');
  },

  info(msg) {
    this.toast(msg, 'info');
  },

  error(msg) {
    this.toast(msg, 'error');
  },

  toast(msg, variant = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant
    });
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toast);

/***/ }),

/***/ 1870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CL": () => (/* binding */ SOCIAL_MEDIA),
/* harmony export */   "Ej": () => (/* binding */ SNACKBAR_MAX_NUM),
/* harmony export */   "U4": () => (/* binding */ SNACKBAR_AUTO_HIDE_DURATION),
/* harmony export */   "eE": () => (/* binding */ SNACKBAR_ANCHOR_ORIGIN)
/* harmony export */ });
/* unused harmony export BACK_TO_TOP_THRESHOLD */
const SNACKBAR_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'center'
};
const SNACKBAR_MAX_NUM = 1;
const SNACKBAR_AUTO_HIDE_DURATION = 3000;
const BACK_TO_TOP_THRESHOLD = 800;
const SOCIAL_MEDIA = {
  gitHub: {
    url: 'https://github.com/luhaizhou',
    icon: 'github'
  },
  wechat: {
    url: 'images/wxpay.jpg',
    icon: 'wechat'
  },
  lark: {
    url: 'https://www.feishu.cn/invitation/page/add_contact/?token=87boa15f-e27b-459b-a9e3-fac93177436c',
    icon: 'lark'
  },
  email: {
    url: 'mailto:luhz163@163.com',
    icon: 'email'
  },
  wxpay: {
    url: 'images/wxpay.jpg',
    icon: 'wxpay'
  },
  zfbpay: {
    url: 'images/wxpay.jpg',
    icon: 'zfbpay'
  }
};

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [632,84], () => (__webpack_exec__(4233)));
module.exports = __webpack_exports__;

})();