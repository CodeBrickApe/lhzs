"use strict";
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 2250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MetaHead = ({
  title
}) => {
  const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("title", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1.0,maximum-scale=1.0,shrink-to-fit=no"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
      name: "description",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
      name: "theme-color",
      content: theme.background.primary
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("link", {
      rel: "icon",
      href: "/favicon_logo.ico"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaHead);

/***/ }),

/***/ 7312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: ./src/components/Head/Head.tsx
var Head = __webpack_require__(2250);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styled/mixins.ts
var mixins = __webpack_require__(16);
// EXTERNAL MODULE: ./src/styled/animations.ts
var animations = __webpack_require__(6156);
// EXTERNAL MODULE: ./src/styled/breakpoints.ts
var breakpoints = __webpack_require__(6192);
;// CONCATENATED MODULE: ./src/containers/Layout/components/Header/styled.ts




const NavBar = external_styled_components_default().nav.withConfig({
  displayName: "styled__NavBar",
  componentId: "sc-1j09oj-0"
})(["\n  box-sizing: border-box;\n  position: fixed;\n  ", "\n  width:100%;\n  padding: 0 2.4rem;\n  background: ", ";\n  opacity: 0.95;\n  box-shadow: 0 1px 40px -8px ", ";\n  z-index: 9999;\n  ", ";\n  top:-2px;\n  @media only screen and ", " {\n    display: none;\n  }\n"], (0,mixins/* flexMixin */.Zv)('space-between'), ({
  theme
}) => theme.background.primary, ({
  theme
}) => theme.colors.fiveOpcityBlack, (0,mixins/* transitionMixin */.Ce)('background', 250, 'linear'), breakpoints/* default.device.laptop */.Z.device.laptop);
const NavBarItem = external_styled_components_default().div.withConfig({
  displayName: "styled__NavBarItem",
  componentId: "sc-1j09oj-1"
})(["\n  ", "\n  margin-right: 28.5rem;\n\n  a {\n    position: relative;\n    ", "\n    white-space:nowrap;\n    margin-left: 1.6rem;\n    padding: 0 0.2rem;\n    height: ", ";\n    font-size: 1rem;\n    color: ", ";\n    ", "\n\n    &::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      left: 0;\n      width: 0;\n      height: 0.4rem;\n      background: ", ";\n      ", "\n    }\n\n    svg {\n      margin-right: 0.5rem;\n      width: 1.1rem;\n      height: 1.1rem;\n      fill: ", ";\n      ", "\n    }\n\n    &:hover {\n      color: ", ";\n      ", "\n\n      &::after {\n        width: 100%;\n      }\n\n      svg {\n        fill: ", ";\n        stroke: ", ";\n        ", "\n        ", "\n      }\n    }\n  }\n"], (0,mixins/* flexMixin */.Zv)('flex-start'), (0,mixins/* flexMixin */.Zv)(), ({
  theme
}) => theme.headerHeight, ({
  theme
}) => theme.text.primary, (0,mixins/* transitionMixin */.Ce)('color'), ({
  theme
}) => theme.colors.primary, (0,mixins/* transitionMixin */.Ce)('width'), ({
  theme
}) => theme.text.primary, (0,mixins/* transitionMixin */.Ce)('fill'), ({
  theme
}) => theme.colors.primary, (0,mixins/* transitionMixin */.Ce)('color'), ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primary, (0,mixins/* transitionMixin */.Ce)('fill'), (0,mixins/* animationMixin */.AV)(animations/* wrench */.UZ, 2000, 'ease', 'infinite'));
const Logo = external_styled_components_default().a.withConfig({
  displayName: "styled__Logo",
  componentId: "sc-1j09oj-2"
})(["\n  width: 14.67rem;\n  height: 2.93rem;\n  background: url('');\n  cursor: pointer;\n  ", "\n"], (0,mixins/* backgroundMixin */.Od)());
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(7621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 32 modules
var Icon = __webpack_require__(6042);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/containers/Layout/components/Header/Header.tsx






const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBar, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBarItem, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
            name: "home"
          }), "\u9996\u9875"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/post",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon/* Icon */.J, {
            name: "article"
          }), "\u6587\u7AE0"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/project",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\u9879\u76EE"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/archive",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\u5F52\u6863"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/friendLink",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\u53CB\u60C5\u94FE\u63A5"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/about",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "\u5173\u4E8E"
        })
      })]
    })]
  });
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/containers/Layout/styled.ts


const Layouts = external_styled_components_default().section.withConfig({
  displayName: "styled__Layouts",
  componentId: "sc-a60t2y-0"
})(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);
const Main = external_styled_components_default().main.withConfig({
  displayName: "styled__Main",
  componentId: "sc-a60t2y-1"
})(["\n  flex:1;\n  overflow-x: hidden;\n\n  @media only screen and ", " {\n    margin-top: 3.6rem;\n  }\n"], breakpoints/* default.device.laptop */.Z.device.laptop);
;// CONCATENATED MODULE: ./src/containers/Layout/Layout.tsx






const Layout = ({
  title,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layouts, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head/* default */.Z, {
      title: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: children
    })]
  });
};

/* harmony default export */ const Layout_Layout = (Layout);

/***/ }),

/***/ 6156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jt": () => (/* binding */ glitchLoop1),
/* harmony export */   "UZ": () => (/* binding */ wrench),
/* harmony export */   "YX": () => (/* binding */ glitchLoop2)
/* harmony export */ });
/* unused harmony exports pulse, horizontal, vertical, tada, mains, float, bang, gravity, position */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const pulse = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n 0% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(0.8);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n"]);
const wrench = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n 0% {\n    transform: rotate(-12deg);\n  }\n  8% {\n    transform: rotate(12deg);\n  }\n  10% {\n    transform: rotate(24deg);\n  }\n  18%,\n  20% {\n    transform: rotate(-24deg);\n  }\n  28%,\n  30% {\n    transform: rotate(24deg);\n  }\n  38%,\n  40% {\n    transform: rotate(-24deg);\n  }\n  48%,\n  50% {\n    transform: rotate(24deg);\n  }\n  58%,\n  60% {\n    transform: rotate(-24deg);\n  }\n  68% {\n    transform: rotate(24deg);\n  }\n  100%,\n  75% {\n    transform: rotate(0);\n  }\n"]);
const horizontal = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  0% {\n    transform: translate(0, 0);\n  }\n  6% {\n    transform: translate(5px, 0);\n  }\n  12% {\n    transform: translate(0, 0);\n  }\n  18% {\n    transform: translate(5px, 0);\n  }\n  24% {\n    transform: translate(0, 0);\n  }\n  30% {\n    transform: translate(5px, 0);\n  }\n  100%,\n  36% {\n    transform: translate(0, 0);\n  }\n"]);
const vertical = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  0% {\n    transform: translate(0, -3px);\n  }\n  4% {\n    transform: translate(0, 3px);\n  }\n  8% {\n    transform: translate(0, -3px);\n  }\n  12% {\n    transform: translate(0, 3px);\n  }\n  16% {\n    transform: translate(0, -3px);\n  }\n  20% {\n    transform: translate(0, 3px);\n  }\n  100%,\n  22% {\n    transform: translate(0, 0);\n  }\n"]);
const tada = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n   0% {\n    transform: scale(1);\n  }\n  10%,\n  20% {\n    transform: scale(0.9) rotate(-8deg);\n  }\n  30%,\n  50%,\n  70% {\n    transform: scale(1.3) rotate(8deg);\n  }\n  40%,\n  60% {\n    transform: scale(1.3) rotate(-8deg);\n  }\n  100%,\n  80% {\n    transform: scale(1) rotate(0);\n  }\n"]);
const mains = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);
const glitchLoop1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n   0% {\n    clip: rect(36px, 9999px, 9px, 0);\n  }\n\n  25% {\n    clip: rect(25px, 9999px, 99px, 0);\n  }\n\n  50% {\n    clip: rect(50px, 9999px, 102px, 0);\n  }\n\n  75% {\n    clip: rect(30px, 9999px, 92px, 0);\n  }\n\n  100% {\n    clip: rect(91px, 9999px, 98px, 0);\n  }\n"]);
const glitchLoop2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n 0% {\n    top: -1px;\n    left: 1px;\n    clip: rect(65px, 9999px, 119px, 0);\n  }\n\n  25% {\n    top: -6px;\n    left: 4px;\n    clip: rect(79px, 9999px, 19px, 0);\n  }\n\n  50% {\n    top: -3px;\n    left: 2px;\n    clip: rect(68px, 9999px, 11px, 0);\n  }\n\n  75% {\n    top: 0;\n    left: -4px;\n    clip: rect(95px, 9999px, 53px, 0);\n  }\n\n  100% {\n    top: -1px;\n    left: -1px;\n    clip: rect(31px, 9999px, 149px, 0);\n  }\n"]);
const float = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0);\n  }"]);
const bang = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  from {\n    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white;\n  }\n}"]);
const gravity = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["{\n  to {\n    transform: translateY(200px);\n    opacity: 0;\n  }\n}"]);
const position = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["\n  0%,\n  19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%,\n  39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%,\n  59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%,\n  79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%,\n  99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}"]);

/***/ })

};
;