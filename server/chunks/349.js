"use strict";
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SixthDE_SixthDE)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/SixthDE/styled.ts

const SixthDEWrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__SixthDEWrapper",
  componentId: "sc-6beuaq-0"
})(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  margin: 0;\n  background: black;\n  -webkit-filter: invert(0);\n  filter: invert(0);\n  \n"]);
const CanvasOne = external_styled_components_default().canvas.withConfig({
  displayName: "styled__CanvasOne",
  componentId: "sc-6beuaq-1"
})(["\n position: absolute;\n top: 50%;\n    left: 50%;\n  z-index: 1;\n  -webkit-filter: hue-rotate(100deg) brightness(1);\n  filter: hue-rotate(100deg) brightness(1);\n  mix-blend-mode: difference;\n  -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n"]);
const CanvasTwo = external_styled_components_default().canvas.withConfig({
  displayName: "styled__CanvasTwo",
  componentId: "sc-6beuaq-2"
})(["\n  position: absolute;\n  top: 50%;\n    left: 50%;\n  mix-blend-mode: lighter;\n  -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n"]);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/SixthCM.js
var c,
    $,
    w,
    h,
    t,
    num,
    s,
    a,
    b,
    u,
    x,
    y,
    _x,
    _y,
    _t,
    canvas,
    ctx,
    tim,
    _u,
    col,
    requestIDList = [];

function RenderSixthCanvas() {
  c = document.getElementById('canv');
  $ = c.getContext('2d');
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  t = 0;
  num = 950;
  s, a, b, u = 0;
  x, y, _x, _y;
  _t = 1 / 16;
  anim();
  canvas = document.getElementsByTagName('canvas')[0];
  ctx = canvas.getContext('2d');
  canvas.width = canvas.height = 400;
  baum();
}
const ResetSixthCanvas = () => {
  if (requestIDList.length > 0) requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

var anim = function () {
  $.globalCompositeOperation = 'multiply';
  $.fillStyle = 'hsla(258,20%,50%,1)';
  $.fillRect(0, 0, w, h);
  $.globalCompositeOperation = 'lighter';

  for (var i = 0; i < .5; i++) {
    x = 0;
    _u = u + i * 2, col = u + _u * 8;
    $.beginPath();

    for (var j = 0; j < num; j++) {
      x -= .312 * Math.sin(15);
      y = x * Math.sin(i + 3.05 * t + x / 7) / 12;
      _x = x * Math.cos(b) + y * Math.sin(b);
      _y = x * Math.sin(b) - y * Math.cos(b);
      b = j * 2.1102 * Math.PI / -.1008;
      $.arc(w / 2 - _x, h / 2 - _y, random(.001, .6), 300, Math.PI * 2 + .1);
      $.lineWidth = .2;
    }

    var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 1, w / 2 + _x, h / 2 + _y);
    g.addColorStop(0.2, 'hsla(' + col + ',90%,50%,.2)');
    g.addColorStop(0.9, 'hsla(' + _u + ',95%,50%,.3)');
    g.addColorStop(1, 'hsla(0,0%,100%,.4)');
    $.strokeStyle = g;
    $.stroke();
  }

  t += _t / 2;
  u -= .2;
  let requestId = window.requestAnimationFrame(anim);
  requestIDList.push(requestId);
};

window.addEventListener('resize', function () {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);

function baum() {
  var a, b, c, d, e, x, y, r;
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "hsla(26,100%,0%,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "color-burn";
  tim = new Date().getTime() / Math.PI / 72;
  c = [];
  r = tim / 32;

  for (a = 0; a < 18; a++) {
    b = 160;
    if (a % 2 == 1) b = 100;
    x = Math.cos(r) * b;
    y = Math.sin(r) * b;
    c.push([200 + x, 200 + y]);
    r += Math.PI * 2 / 14;
  }

  for (a = 0; a < 7; a++) {
    b = c[a * 2];
    d = c[a * 2 + 1];
    e = c[(a * 2 + 13) % 14];
    tri([[200, 200], b, d], 0);
    tri([[200, 200], b, e], 0);
  }

  let requestId = window.requestAnimationFrame(baum);
  requestIDList.push(requestId);
}

function tri(p, ban) {
  var a, b, c, d, e, f, x, y, han, r1, r2;
  x = y = 0;

  for (a = 0; a < 3; a++) {
    x += p[a][0];
    y += p[a][1];
  }

  x = x / 3 - canvas.width / 2;
  y = y / 3 - canvas.height / 2;
  han = Math.pow(x * x + y * y, 0.5);
  c = 0.2 + Math.sin(tim / 13) * 0.15;
  r1 = 0.5 + Math.sin(han / 20 * (1 + Math.sin(tim / 19) * 0.7) + tim / 41) * c;
  r2 = 1 - r1;
  c = p[0][0] * (p[1][1] - p[2][1]);
  c += p[1][0] * (p[2][1] - p[0][1]);
  c += p[2][0] * (p[0][1] - p[1][1]);
  c = Math.abs(c);

  if (c < 100) {
    if (ban % 17 == 1) {
      a = (han + tim * 3) % 360 | 0;
      b = 0.4;
      if (ban % 12 > 8) b = 1;
      ctx.fillStyle = ctx.strokeStyle = "hsla(" + a * 2 + ",60%,40%,0.53)";
      ctx.beginPath();

      for (a = 0; a < p.length; a++) {
        b = p[a];
        ctx.globalCompositeOperation = "lighter";
        ctx.lineTo(b[0], b[1]);
      }

      ctx.fill();
      if (Math.random() < 0.2) return;
    }

    if (ban % 50 > 28) return;
    if (c < 20) return;
  }

  d = 0;

  for (a = 0; a < p.length; a++) {
    b = p[a];
    c = p[(a + 1) % p.length];
    x = b[0] - c[0];
    y = b[1] - c[1];
    e = Math.pow(x * x + y * y, 0.5);

    if (e > d) {
      d = e;
      f = a;
    }
  }

  a = p[f];
  b = p[(f + 1) % p.length];
  c = p[(f + 2) % p.length];
  x = a[0] * r1 + b[0] * r2;
  y = a[1] * r1 + b[1] * r2;
  tri([b, c, [x, y]], ban + 1);
  tri([c, a, [x, y]], ban + 2);
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/SixthDE/SixthDE.tsx






class SixthDE extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    RenderSixthCanvas();
  }

  componentWillUnmount() {
    ResetSixthCanvas();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SixthDEWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CanvasOne, {
        id: "canvas",
        height: "400",
        width: "400"
      }), /*#__PURE__*/jsx_runtime_.jsx(CanvasTwo, {
        id: "canv",
        width: "1500",
        height: "472"
      })]
    });
  }

}

/* harmony default export */ const SixthDE_SixthDE = (SixthDE);

/***/ })

};
;