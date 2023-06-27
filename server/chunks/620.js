"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 5620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6042);
/* harmony import */ var src_styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6192);
/* harmony import */ var src_styled_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default().section.withConfig({
  displayName: "SubTitle__Header",
  componentId: "sc-nnkdcz-0"
})(["\n  ", "\n  margin: 4rem auto 2rem;\n  padding-bottom: 0.6rem;\n  width: 100%;\n  font-size: 1.3rem;\n  font-weight: 400;\n  color: ", ";\n  border-bottom: 1px dashed;\n  border-bottom-color: ", ";\n  margin-top: ", ";\n  @media only screen and ", " {\n    display: ", ";\n  }\n"], (0,src_styled_mixins__WEBPACK_IMPORTED_MODULE_3__/* .flexMixin */ .Zv)('flex-start'), ({
  theme
}) => theme.text.primary, ({
  theme
}) => theme.border, props => props.mt, src_styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].device.laptop */ .Z.device.laptop, props => props.hidden ? 'none' : '');
const SVG = styled_components__WEBPACK_IMPORTED_MODULE_4___default().span.withConfig({
  displayName: "SubTitle__SVG",
  componentId: "sc-nnkdcz-1"
})(["\n  margin-right: 0.8rem;\n"]);
const After = styled_components__WEBPACK_IMPORTED_MODULE_4___default().span.withConfig({
  displayName: "SubTitle__After",
  componentId: "sc-nnkdcz-2"
})(["\n  font-size: .8rem;\n  margin-left: 1rem;\n"]);

const SubTitle = ({
  title,
  icon,
  mediaHidden = false,
  mt,
  after,
  domId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Header, {
    hidden: mediaHidden,
    mt: mt,
    id: domId,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(SVG, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
        name: icon,
        size: "1.8rem"
      })
    }), title, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(After, {
      children: after
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);

/***/ })

};
;