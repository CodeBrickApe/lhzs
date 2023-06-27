"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 9983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EW": () => (/* binding */ getEssayFindOne),
/* harmony export */   "FX": () => (/* binding */ postEssayList),
/* harmony export */   "KV": () => (/* binding */ useEssayList),
/* harmony export */   "Ou": () => (/* binding */ useEssayRemarkList),
/* harmony export */   "Ru": () => (/* binding */ postAddEssayRemark),
/* harmony export */   "fk": () => (/* binding */ useEssayTag)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // 查看单个文章

const getEssayFindOne = data => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('/blog/essay/findOne', data); // 文章评论列表

const useEssayRemarkList = payload => {
  const {
    data,
    mutate,
    isValidating
  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([`/blog/remark/notes`, _objectSpread({}, payload)], (key, options) => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(key, options).then(res => res.data));
  return [data, {
    mutate,
    isValidating
  }];
}; // 新增文章评论

const postAddEssayRemark = data => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('/blog/remark/add', data); // 文章列表

const postEssayList = data => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('/blog/essay/list', data);
const useEssayList = payload => {
  const {
    data,
    mutate,
    isValidating
  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([`/blog/essay/list`, _objectSpread({}, payload)], (key, options) => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(key, options).then(res => res.data));
  return [data, {
    mutate,
    isValidating
  }];
}; // 文章标签列表

const useEssayTag = payload => {
  const {
    data,
    mutate,
    isValidating
  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([`/blog/tag/list`, _objectSpread({}, payload)], (key, options) => _utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(key, options).then(res => res.data));
  return [data, {
    mutate,
    isValidating
  }];
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;