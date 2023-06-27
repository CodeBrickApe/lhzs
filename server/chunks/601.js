"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TagCloud_TagCloud)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(7621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/containers/Post/components/TagCloud/styled.ts
var styled = __webpack_require__(4745);
;// CONCATENATED MODULE: ./src/containers/Post/components/TagCloud/dynamicEffect.js
let radius = 90,
    d = 200,
    dtr = Math.PI / 180,
    mcList = [],
    lasta = 1,
    lastb = 1,
    distr = true,
    tspeed = 11,
    size = 200,
    mouseX = 0,
    mouseY = 10,
    howElliptical = 1,
    aA = null,
    oDiv = null;
let sa, ca, sb, cb, sc, cc, per;
let dynamicEffect = null;
const renderDynamicEffect = function () {
  // window.onload = function () {
  mcList = [];
  let i = 0;
  let oTag = null;
  oDiv = document.querySelector(' #divTags .tagBox');
  aA = document.querySelectorAll(" #divTags span a");

  for (i = 0; i < aA.length; i++) {
    oTag = {};

    aA[i].onmouseover = function (obj) {
      return function () {
        obj.on = true;
        this.style.zIndex = 9999;
        this.style.filter = "alpha(opacity=100)";
        this.style.opacity = 1;
      };
    }(oTag);

    aA[i].onmouseout = function (obj) {
      return function () {
        obj.on = false;
        this.style.zIndex = obj.zIndex;
        this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")";
        this.style.opacity = obj.alpha;
        this.style.zIndex = obj.zIndex;
      };
    }(oTag);

    oTag.offsetWidth = aA[i].offsetWidth;
    oTag.offsetHeight = aA[i].offsetHeight;
    mcList.push(oTag);
  }

  sineCosine(0, 0, 0);
  positionAll();

  (function again() {
    update(); // console.log('arguments.callee', arguments.callee);

    dynamicEffect = setTimeout(() => {
      again();
    }, 40);
  })();
};

function update() {
  let a,
      b,
      c = 0;
  a = Math.min(Math.max(-mouseY, -size), size) / radius * tspeed;
  b = -Math.min(Math.max(-mouseX, -size), size) / radius * tspeed;
  lasta = a;
  lastb = b;

  if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
    return;
  }

  sineCosine(a, b, c);

  for (let i = 0; i < mcList.length; i++) {
    if (mcList[i].on) {
      continue;
    }

    let rx1 = mcList[i].cx;
    let ry1 = mcList[i].cy * ca + mcList[i].cz * -sa;
    let rz1 = mcList[i].cy * sa + mcList[i].cz * ca;
    let rx2 = rx1 * cb + rz1 * sb;
    let ry2 = ry1;
    let rz2 = rx1 * -sb + rz1 * cb;
    let rx3 = rx2 * cc + ry2 * -sc;
    let ry3 = rx2 * sc + ry2 * cc;
    let rz3 = rz2;
    mcList[i].cx = rx3;
    mcList[i].cy = ry3;
    mcList[i].cz = rz3;
    per = d / (d + rz3);
    mcList[i].x = howElliptical * rx3 * per - howElliptical * 2;
    mcList[i].y = ry3 * per;
    mcList[i].scale = per;
    let alpha = per;
    alpha = (alpha - 0.6) * (10 / 6);
    mcList[i].alpha = alpha * alpha * alpha - 0.2;
    mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
  }

  doPosition();
}

function positionAll() {
  let phi = 0;
  let theta = 0;
  let max = mcList.length;

  for (let i = 0; i < max; i++) {
    if (distr) {
      phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
      theta = Math.sqrt(max * Math.PI) * phi;
    } else {
      phi = Math.random() * Math.PI;
      theta = Math.random() * (2 * Math.PI);
    } //坐标变换


    mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
    mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
    mcList[i].cz = radius * Math.cos(phi);
    aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
    aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
  }
}

function doPosition() {
  let l = oDiv.offsetWidth / 2;
  let t = oDiv.offsetHeight / 2;

  for (let i = 0; i < mcList.length; i++) {
    if (mcList[i].on) {
      continue;
    }

    let aAs = aA[i].style;

    if (mcList[i].alpha > 0.1) {
      if (aAs.display != '') aAs.display = '';
    } else {
      if (aAs.display != 'none') aAs.display = 'none';
      continue;
    }

    aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
    aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px'; //aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
    //aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";

    aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
    aAs.zIndex = mcList[i].zIndex;
    aAs.opacity = mcList[i].alpha;
  }
}

function sineCosine(a, b, c) {
  sa = Math.sin(a * dtr);
  ca = Math.cos(a * dtr);
  sb = Math.sin(b * dtr);
  cb = Math.cos(b * dtr);
  sc = Math.sin(c * dtr);
  cc = Math.cos(c * dtr);
}

const clearDynamicEffect = () => {
  clearTimeout(dynamicEffect);
  dynamicEffect = null;
};
// EXTERNAL MODULE: ./src/containers/Post/components/SubHeader/SubHeader.tsx
var SubHeader = __webpack_require__(4600);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/containers/Post/components/TagCloud/TagCloud.tsx








class TagCloud extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    renderDynamicEffect();
  }

  componentWillUnmount() {
    clearDynamicEffect();
  }

  render() {
    var _this$props$tagData;

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styled/* SideWrapper */.fM, {
      id: "divTags",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SubHeader/* default */.Z, {
        title: "\u6807\u7B7E",
        icon: "tag_1"
      }), /*#__PURE__*/jsx_runtime_.jsx(styled/* SideContent */.cI, {
        className: "tagBox",
        children: (_this$props$tagData = this.props.tagData) === null || _this$props$tagData === void 0 ? void 0 : _this$props$tagData.map(item => /*#__PURE__*/jsx_runtime_.jsx(styled/* TagBox */.ac, {
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: `/post?tag=${item.label}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(styled/* TagBtn */.d3, {
              title: item.label,
              children: item.label
            })
          })
        }, item._id))
      })]
    });
  }

}

/* harmony default export */ const TagCloud_TagCloud = (TagCloud);

/***/ })

};
;