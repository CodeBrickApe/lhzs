"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DynamicEffect)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/DynamicEffectTitle/DynamicEffectTitle.tsx



const animate = (0,external_styled_components_.keyframes)(["\n 0%,\n  100% {\n        transform: translateY(0px);\n    }\n\n    50% {\n        transform: translateY(-20px);\n    }\n "]);
const Title = external_styled_components_default().div.withConfig({
  displayName: "DynamicEffectTitle__Title",
  componentId: "sc-1r1gufp-0"
})(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  top:50%;\n  transform: translateY(-50%);\n  font-size: 2.6rem;\n  z-index: 2;\n  color:#fff;\n"]);
const Word = external_styled_components_default().span.withConfig({
  displayName: "DynamicEffectTitle__Word",
  componentId: "sc-1r1gufp-1"
})(["\n    display: inline-block;\n    animation-name: ", ";\n    animation-duration: .4s;\n    animation-timing-function: ease-in-out;\n    animation-delay:  calc(0.1s * var(--delay));\n    font-family: 'REEJI-BigYoung-BoldGB', '\u5FAE\u8F6F\u96C5\u9ED1', \"Open Sans\", sans-serif;\n    font-weight: 800;\n"], animate);

const DynamicEffectTitle = ({
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Title, {
    children: title === null || title === void 0 ? void 0 : title.split('').map((word, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx(Word, {
        style: {
          '--delay': i
        },
        children: word
      }, i);
    })
  });
};

/* harmony default export */ const DynamicEffectTitle_DynamicEffectTitle = (DynamicEffectTitle);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/FirstCM.js
var w,
    c,
    h,
    ctx,
    opts,
    tick,
    lines,
    dieX,
    dieY,
    baseRad,
    requestIDList = [];
const RenderFirstCanvas = () => {
  c = document.querySelector('#canvas');
  w = c.width = window.innerWidth, h = c.height = window.innerHeight, ctx = c.getContext('2d'), opts = {
    len: 20,
    count: 50,
    baseTime: 10,
    addedTime: 10,
    dieChance: .05,
    spawnChance: 1,
    sparkChance: .1,
    sparkDist: 10,
    sparkSize: 2,
    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10,
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,
    cx: w / 2,
    cy: h / 2,
    repaintAlpha: .04,
    hueChange: .1
  }, tick = 0, lines = [], dieX = w / 2 / opts.len, dieY = h / 2 / opts.len, baseRad = Math.PI * 2 / 6;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);
  loop();
};
const ResetFirstCanvas = () => {
  c.width = w;
  c.height = h;
  ctx.clearRect(0, 0, w, h);
  if (requestIDList.length > 0) requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function loop() {
  let requestId = window.requestAnimationFrame(loop);
  requestIDList.push(requestId);
  ++tick;
  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(new Line());
  lines.map(function (line) {
    line.step();
  });
}

function Line() {
  this.reset();
}

Line.prototype.reset = function () {
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  this.rad = 0;
  this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
  this.color = opts.color.replace('hue', tick * opts.hueChange);
  this.cumulativeTime = 0;
  this.beginPhase();
};

Line.prototype.beginPhase = function () {
  this.x += this.addedX;
  this.y += this.addedY;
  this.time = 0;
  this.targetTime = opts.baseTime + opts.addedTime * Math.random() | 0;
  this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
  this.addedX = Math.cos(this.rad);
  this.addedY = Math.sin(this.rad);
  if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) this.reset();
};

Line.prototype.step = function () {
  ++this.time;
  ++this.cumulativeTime;
  if (this.time >= this.targetTime) this.beginPhase();
  var prop = this.time / this.targetTime,
      wave = Math.sin(prop * Math.PI / 2),
      x = this.addedX * wave,
      y = this.addedY * wave;
  ctx.shadowBlur = prop * opts.shadowToTimePropMult;
  ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
  ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);
  if (Math.random() < opts.sparkChance) ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
}; // window.addEventListener('resize',
//   function () {
//     c = document.querySelector('#canvas')
//     ctx = c.getContext('2d')
//     w = c.width = window.innerWidth
//     h = c.height = window.innerHeight
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, w, h);
//     // opts.cx = w / 2;
//     // opts.cy = h / 2;
//     // dieX = w / 2 / opts.len;
//     // dieY = h / 2 / opts.len
//   });
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/SecondCM.js
var canvas,
    SecondCM_ctx,
    width,
    height,
    size,
    SecondCM_lines,
    SecondCM_tick,
    SecondCM_requestIDList = [];

function line() {
  this.path = [];
  this.speed = rand(10, 20);
  this.count = randInt(10, 30);
  this.x = width / 2, +1;
  this.y = height / 2 + 1;
  this.target = {
    x: width / 2,
    y: height / 2
  };
  this.dist = 0;
  this.angle = 0;
  this.hue = SecondCM_tick / 5;
  this.life = 1;
  this.updateAngle();
  this.updateDist();
}

line.prototype.step = function (i) {
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
  this.updateDist();

  if (this.dist < this.speed) {
    this.x = this.target.x;
    this.y = this.target.y;
    this.changeTarget();
  }

  this.path.push({
    x: this.x,
    y: this.y
  });

  if (this.path.length > this.count) {
    this.path.shift();
  }

  this.life -= 0.001;

  if (this.life <= 0) {
    this.path = null;
    SecondCM_lines.splice(i, 1);
  }
};

line.prototype.updateDist = function () {
  var dx = this.target.x - this.x,
      dy = this.target.y - this.y;
  this.dist = Math.sqrt(dx * dx + dy * dy);
};

line.prototype.updateAngle = function () {
  var dx = this.target.x - this.x,
      dy = this.target.y - this.y;
  this.angle = Math.atan2(dy, dx);
};

line.prototype.changeTarget = function () {
  var randStart = randInt(0, 3);

  switch (randStart) {
    case 0:
      // up
      this.target.y = this.y - size;
      break;

    case 1:
      // right
      this.target.x = this.x + size;
      break;

    case 2:
      // down
      this.target.y = this.y + size;
      break;

    case 3:
      // left
      this.target.x = this.x - size;
  }

  this.updateAngle();
};

line.prototype.draw = function (i) {
  SecondCM_ctx.beginPath();
  var rando = rand(0, 10);

  for (var j = 0, length = this.path.length; j < length; j++) {
    SecondCM_ctx[j === 0 ? 'moveTo' : 'lineTo'](this.path[j].x + rand(-rando, rando), this.path[j].y + rand(-rando, rando));
  }

  SecondCM_ctx.strokeStyle = 'hsla(' + rand(this.hue, this.hue + 30) + ', 80%, 55%, ' + this.life / 3 + ')';
  SecondCM_ctx.lineWidth = rand(0.1, 2);
  SecondCM_ctx.stroke();
};

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

;
const RenderSecondCanvas = () => {
  window.addEventListener('resize', onresize);
  canvas = document.getElementById('canvas');
  SecondCM_ctx = canvas.getContext('2d');
  size = 30;
  SecondCM_lines = [];
  SecondCM_reset();
  SecondCM_loop();
};

function SecondCM_reset() {
  width = Math.ceil(window.innerWidth / 2) * 2;
  height = Math.ceil(window.innerHeight / 2) * 2;
  SecondCM_tick = 0;
  SecondCM_lines.length = 0;
  canvas.width = width;
  canvas.height = height;
}

function create() {
  if (SecondCM_tick % 10 === 0) {
    SecondCM_lines.push(new line());
  }
}

function step() {
  var i = SecondCM_lines.length;

  while (i--) {
    SecondCM_lines[i].step(i);
  }
}

function clear() {
  SecondCM_ctx.globalCompositeOperation = 'destination-out';
  SecondCM_ctx.fillStyle = 'hsla(0, 0%, 0%, 0.1';
  SecondCM_ctx.fillRect(0, 0, width, height);
  SecondCM_ctx.globalCompositeOperation = 'lighter';
}

function draw() {
  SecondCM_ctx.save();
  SecondCM_ctx.translate(width / 2, height / 2);
  SecondCM_ctx.rotate(SecondCM_tick * 0.001);
  var scale = 0.8 + Math.cos(SecondCM_tick * 0.02) * 0.2;
  SecondCM_ctx.scale(scale, scale);
  SecondCM_ctx.translate(-width / 2, -height / 2);
  var i = SecondCM_lines.length;

  while (i--) {
    SecondCM_lines[i].draw(i);
  }

  SecondCM_ctx.restore();
}

function SecondCM_loop() {
  let requestId = window.requestAnimationFrame(SecondCM_loop);
  SecondCM_requestIDList.push(requestId);
  create();
  step();
  clear();
  draw();
  SecondCM_tick++;
}

function onresize() {
  SecondCM_reset();
}

const ResetSecondCanvas = () => {
  canvas.width = width;
  canvas.height = height;
  SecondCM_ctx.clearRect(0, 0, width, height);
  if (SecondCM_requestIDList.length > 0) SecondCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/ThirdCM.js
var ThirdCM_c,
    ThirdCM_w,
    ThirdCM_h,
    ThirdCM_ctx,
    ThirdCM_opts,
    particles,
    ThirdCM_tick,
    ThirdCM_requestIDList = [];
const RenderThirdCanvas = () => {
  ThirdCM_c = document.querySelector('#canvas');
  ThirdCM_w = ThirdCM_c.width = window.innerWidth;
  ThirdCM_h = ThirdCM_c.height = window.innerHeight;
  ThirdCM_ctx = ThirdCM_c.getContext('2d');
  ThirdCM_opts = {
    baseBaseSize: 15,
    addedBaseSize: 5,
    baseVel: 2,
    addedVel: 1,
    baseTime: 60,
    addedTime: 20,
    overTime: 5,
    sliding: .99,
    particleChance: .9,
    particles: 100,
    templateParticleColor: 'hsla(hue,80%,40%,alp)',
    repaintAlpha: 'rgba(0,0,0,.1)',
    startColor: .2,
    fullColor: .5,
    stopColor: .6,
    timeToColorChange: 3
  };
  particles = [];
  ThirdCM_tick = 0;
  ThirdCM_ctx.fillStyle = '#222';
  ThirdCM_ctx.fillRect(0, 0, ThirdCM_w, ThirdCM_h);
  anim();
};
const ResetThirdCanvas = () => {
  ThirdCM_c.width = ThirdCM_w;
  ThirdCM_c.height = ThirdCM_h;
  ThirdCM_ctx.clearRect(0, 0, ThirdCM_w, ThirdCM_h);
  if (ThirdCM_requestIDList.length > 0) ThirdCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function Particle() {
  this.reset();
}

Particle.prototype.reset = function () {
  this.x = Math.pow(Math.random(), 1 / 4);
  this.y = ThirdCM_h / 2;
  var color = ThirdCM_opts.templateParticleColor.replace('hue', this.x * 360 * 2 + ThirdCM_tick * ThirdCM_opts.timeToColorChange);
  this.baseSize = (Math.random() + this.x) / 2 * (ThirdCM_opts.baseBaseSize + ThirdCM_opts.addedBaseSize * Math.random());
  this.gradient = ThirdCM_ctx.createRadialGradient(0, 0, 0, 0, 0, this.baseSize / 2);
  this.gradient.addColorStop(ThirdCM_opts.startColor, color.replace('alp', 0));
  this.gradient.addColorStop(ThirdCM_opts.fullColor, color.replace('alp', 1));
  this.gradient.addColorStop(ThirdCM_opts.stopColor, color.replace('alp', 1));
  this.gradient.addColorStop(1, color.replace('alp', 0));
  this.vx = -(1 + Math.random() / 10 - this.x) * (ThirdCM_opts.baseVel + Math.random() * ThirdCM_opts.addedVel);
  this.vy = Math.pow(this.x, 4) * (ThirdCM_opts.baseVel + Math.random() * ThirdCM_opts.addedVel) * (Math.random() < .5 ? -1 : 1);
  this.x *= ThirdCM_w / 2;

  if (Math.random() < .5) {
    this.x = ThirdCM_w - this.x;
    this.vx *= -1;
  }

  this.time = ThirdCM_opts.baseTime + ThirdCM_opts.addedTime * Math.random();
  this.tick = this.time + ThirdCM_opts.overTime;
};

Particle.prototype.step = function () {
  var size;

  if (this.tick <= this.time) {
    this.x += this.vx *= ThirdCM_opts.sliding;
    this.y += this.vy *= ThirdCM_opts.sliding;
    size = Math.pow(this.tick / this.time, 1 / 2);
  } else size = 1 - (this.tick - this.time) / ThirdCM_opts.overTime + .000001;

  --this.tick;
  ThirdCM_ctx.translate(this.x, this.y);
  ThirdCM_ctx.scale(size, size);
  ThirdCM_ctx.fillStyle = this.gradient;
  ThirdCM_ctx.fillRect(-this.baseSize / 2, -this.baseSize / 2, this.baseSize, this.baseSize);
  ThirdCM_ctx.scale(1 / size, 1 / size);
  ThirdCM_ctx.translate(-this.x, -this.y);
  if (this.tick <= 0) this.reset();
};

function anim() {
  let requestId = window.requestAnimationFrame(anim);
  ThirdCM_requestIDList.push(requestId);
  ThirdCM_ctx.globalCompositeOperation = 'source-over';
  ThirdCM_ctx.fillStyle = ThirdCM_opts.repaintAlpha;
  ThirdCM_ctx.fillRect(0, 0, ThirdCM_w, ThirdCM_h);
  ThirdCM_ctx.globalCompositeOperation = 'lighter';
  ++ThirdCM_tick;
  if (particles.length < ThirdCM_opts.particles && Math.random() < ThirdCM_opts.particleChance) particles.push(new Particle());
  particles.map(function (particle) {
    particle.step();
  }); // window.addEventListener('resize', function () {
  //   c = document.querySelector('#canvas')
  //   w = c.width = window.innerWidth;
  //   h = c.height = window.innerHeight;
  //   ctx.fillStyle = '#222';
  //   ctx.fillRect(0, 0, w, h);
  // })
}
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/FourthCM.js
var FourthCM_c,
    s,
    FourthCM_ctx,
    FourthCM_opts,
    util,
    FourthCM_particles,
    source,
    FourthCM_tick,
    FourthCM_requestIDList = [];
const RenderFourthCanvas = () => {
  FourthCM_c = document.querySelector('#canvas');
  s = FourthCM_c.width = FourthCM_c.height = 500;
  FourthCM_ctx = FourthCM_c.getContext('2d');
  FourthCM_opts = {
    particles: 200,
    particleBaseSize: 4,
    particleAddedSize: 1,
    particleMaxSize: 5,
    particleBaseLight: 5,
    particleAddedLight: 30,
    particleBaseBaseAngSpeed: .001,
    particleAddedBaseAngSpeed: .001,
    particleBaseVariedAngSpeed: .0005,
    particleAddedVariedAngSpeed: .0005,
    sourceBaseSize: 3,
    sourceAddedSize: 3,
    sourceBaseAngSpeed: -.01,
    sourceVariedAngSpeed: .005,
    sourceBaseDist: 130,
    sourceVariedDist: 50,
    particleTemplateColor: 'hsla(hue,80%,light%,alp)',
    repaintColor: 'rgba(0,0,0,.1)',
    enableTrails: false
  };
  util = {
    square: x => x * x,
    tau: 6.2831853071795864769252867665590057683943
  };
  FourthCM_particles = [];
  source = new Source();
  FourthCM_tick = 0;
  FourthCM_ctx.fillStyle = '#222';
  FourthCM_ctx.fillRect(0, 0, s, s);
  FourthCM_anim();
  FourthCM_c.addEventListener('mousemove', e => {
    var bbox = FourthCM_c.getBoundingClientRect();
    source.x = e.clientX - bbox.left - s / 2;
    source.y = e.clientY - bbox.top - s / 2;
    source.mouseControlled = true;
  });
  FourthCM_c.addEventListener('mouseleave', e => {
    var bbox = FourthCM_c.getBoundingClientRect();
    source.x = e.clientX - bbox.left - s / 2;
    source.y = e.clientY - bbox.top - s / 2;
    source.rad = Math.atan(source.y / source.x);
    if (source.x < 0) source.rad += Math.PI;
    source.mouseControlled = false;
  });
};
const ResetFourthCanvas = () => {
  if (FourthCM_requestIDList.length > 0) FourthCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function FourthCM_Particle() {
  this.dist = Math.sqrt(Math.random()) * s / 2;
  this.rad = Math.random() * util.tau;
  this.baseAngSpeed = FourthCM_opts.particleBaseBaseAngSpeed + FourthCM_opts.particleAddedBaseAngSpeed * Math.random();
  this.variedAngSpeed = FourthCM_opts.particleBaseVariedAngSpeed + FourthCM_opts.particleAddedVariedAngSpeed * Math.random();
  this.size = FourthCM_opts.particleBaseSize + FourthCM_opts.particleAddedSize * Math.random();
}

FourthCM_Particle.prototype.step = function () {
  var angSpeed = this.baseAngSpeed + this.variedAngSpeed * Math.sin(this.rad * 7 + FourthCM_tick / 100);
  this.rad += angSpeed;
  var x = this.dist * Math.cos(this.rad),
      y = this.dist * Math.sin(this.rad),
      squareDist = util.square(x - source.x) + util.square(y - source.y),
      sizeProp = Math.pow(s, 1 / 2) / Math.pow(squareDist, 1 / 2),
      color = FourthCM_opts.particleTemplateColor.replace('hue', this.rad / util.tau * 360 + FourthCM_tick).replace('light', FourthCM_opts.particleBaseLight + sizeProp * FourthCM_opts.particleAddedLight).replace('alp', .8);
  FourthCM_ctx.fillStyle = color;
  FourthCM_ctx.beginPath();
  FourthCM_ctx.arc(x, y, Math.min(this.size * sizeProp, FourthCM_opts.particleMaxSize), 0, util.tau);
  FourthCM_ctx.fill();
};

function Source() {
  this.x = 0;
  this.y = 0;
  this.rad = Math.random() * util.tau;
}

Source.prototype.step = function () {
  if (!this.mouseControlled) {
    var angSpeed = FourthCM_opts.sourceBaseAngSpeed + Math.sin(this.rad * 6 + FourthCM_tick / 100) * FourthCM_opts.sourceVariedAngSpeed;
    this.rad += angSpeed;
    var dist = FourthCM_opts.sourceBaseDist + Math.sin(this.rad * 5 + FourthCM_tick / 100) * FourthCM_opts.sourceVariedDist;
    this.x = dist * Math.cos(this.rad);
    this.y = dist * Math.sin(this.rad);
  }

  FourthCM_ctx.fillStyle = 'white';
  FourthCM_ctx.beginPath();
  FourthCM_ctx.arc(this.x, this.y, 1, 0, util.tau);
  FourthCM_ctx.fill();
};

function FourthCM_anim() {
  let requestId = window.requestAnimationFrame(FourthCM_anim);
  FourthCM_requestIDList.push(requestId);
  ++FourthCM_tick;
  if (!FourthCM_opts.enableTrails) FourthCM_ctx.globalCompositeOperation = 'source-over';
  FourthCM_ctx.fillStyle = FourthCM_opts.repaintColor;
  FourthCM_ctx.fillRect(0, 0, s, s);
  FourthCM_ctx.globalCompositeOperation = 'lighter';
  if (FourthCM_particles.length < FourthCM_opts.particles) FourthCM_particles.push(new FourthCM_Particle());
  FourthCM_ctx.translate(s / 2, s / 2);
  source.step();
  FourthCM_particles.map(particle => particle.step());
  FourthCM_ctx.translate(-s / 2, -s / 2);
}
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/TwelveCM.js
var TwelveCM_s, TwelveCM_w, TwelveCM_h, q, TwelveCM_ctx, p, interval;
const RenderTwelveCanvas = () => {
  q = document.querySelector('#canvas');
  TwelveCM_s = window.screen;
  TwelveCM_w = q.width = TwelveCM_s.width;
  TwelveCM_h = q.height = TwelveCM_s.height;
  TwelveCM_ctx = q.getContext("2d");
  p = Array(Math.floor(TwelveCM_w / 10) + 1).fill(0);

  const random = items => items[Math.floor(Math.random() * items.length)];

  const hex = "0123456789ABCDEFGHILMNOPQRST".split("");
  interval = setInterval(() => {
    TwelveCM_ctx.fillStyle = "rgba(0,0,0,.05)";
    TwelveCM_ctx.fillRect(0, 0, TwelveCM_w, TwelveCM_h);
    TwelveCM_ctx.fillStyle = "#0f0";
    p.map((v, i) => {
      TwelveCM_ctx.fillText(random(hex), i * 10, v);
      p[i] = v >= TwelveCM_h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }, 1000 / 30);
};
const ResetTwelveCanvas = () => {
  clearInterval(interval);
};
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/ThirteenCM.js
// canvas圆点连线粒子动画特效
var ThirteenCM_c,
    ThirteenCM_ctx,
    ThirteenCM_w,
    ThirteenCM_h,
    cx,
    cy,
    ThirteenCM_requestIDList = [];
var ps = [];
var ThirteenCM_p;
var ctr = 200;

var P = function (x, y) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.r = 1 + Math.random() * 10;
  this.sa = Math.random() * Math.PI * 2;
  this.ea = Math.random() * Math.PI * 2;
  this.rt = Math.random() * Math.PI * 2;
  this.vrt = 0;
  this.h = 0;
};

const RenderThirteenCanvas = () => {
  ThirteenCM_c = document.getElementById('canvas');
  ThirteenCM_ctx = ThirteenCM_c.getContext('2d');
  ThirteenCM_w = window.innerWidth;
  ThirteenCM_h = window.innerHeight;
  cx = ThirteenCM_w / 2;
  cy = ThirteenCM_h / 2;

  for (var i = 0; i < ctr; i++) {
    ThirteenCM_p = new P(Math.random() * ThirteenCM_w, Math.random() * ThirteenCM_h);
    ps.push(ThirteenCM_p);
  }

  ThirteenCM_loop();
};
const ResetThirteenCanvas = () => {
  ThirteenCM_c.width = ThirteenCM_w;
  ThirteenCM_c.height = ThirteenCM_h;
  ThirteenCM_ctx.clearRect(0, 0, ThirteenCM_w, ThirteenCM_h);
  if (ThirteenCM_requestIDList.length > 0) ThirteenCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};
P.prototype = {
  constructor: P,
  update: function () {
    this.vx += Math.random() * 0.1 - 0.05;
    this.vy += Math.random() * 0.1 - 0.05;
    this.vrt += Math.random() * 0.02 - 0.01;
    this.x += this.vx;
    this.y += this.vy;
    this.rt += this.vrt;
    var dx = cx - this.x;
    var dy = cy - this.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    this.h = dx / d * 360;

    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }

    if (this.x > ThirteenCM_w) {
      this.x = ThirteenCM_w;
      this.vx *= -1;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    }

    if (this.y > ThirteenCM_h) {
      this.y = ThirteenCM_h;
      this.vy *= -1;
    }
  },
  render: function (ctx) {
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'hsla(' + this.h + ', 100%, 50%, 0.5)';
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rt);
    ctx.beginPath();
    ctx.arc(0, 0, this.r, this.sa, this.ea);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
};

function ThirteenCM_loop() {
  let requestId = window.requestAnimationFrame(ThirteenCM_loop);
  ThirteenCM_requestIDList.push(requestId);
  ThirteenCM_ctx.clearRect(0, 0, ThirteenCM_w, ThirteenCM_h);

  for (var i = 0; i < ctr; i++) {
    ThirteenCM_p = ps[i];
    ThirteenCM_p.update();
    ThirteenCM_p.render(ThirteenCM_ctx);
  }

  for (var i = 0; i < ctr; i++) {
    var p1 = ps[i];

    for (var j = i + 1; j < ctr; j++) {
      var p2 = ps[j];
      var dx = p1.x - p2.x;
      var dy = p1.y - p2.y;
      var d = Math.sqrt(dx * dx + dy * dy);

      if (d < 50) {
        ThirteenCM_ctx.strokeStyle = 'rgba(225, 225, 225, 0.8)';
        ThirteenCM_ctx.beginPath();
        ThirteenCM_ctx.moveTo(p1.x, p1.y);
        ThirteenCM_ctx.lineTo(p2.x, p2.y);
        ThirteenCM_ctx.stroke();
      }
    }
  }
}

;
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/FourteenCM.js
// canvas神经网络可视化动画特效
var FourteenCM_w,
    FourteenCM_h,
    FourteenCM_ctx,
    FourteenCM_opts,
    FourteenCM_c,
    squareRange,
    squareAllowed,
    mostDistant,
    sinX,
    sinY,
    cosX,
    cosY,
    connections,
    toDevelop,
    data,
    FourteenCM_all,
    FourteenCM_tick,
    totalProb,
    animating,
    Tau,
    FourteenCM_requestIDList = [];
const RenderFourteenCanvas = () => {
  FourteenCM_c = document.querySelector('#canvas');
  FourteenCM_w = FourteenCM_c.width = window.innerWidth, FourteenCM_h = FourteenCM_c.height = window.innerHeight, FourteenCM_ctx = FourteenCM_c.getContext("2d"), FourteenCM_opts = {
    range: 180,
    baseConnections: 3,
    addedConnections: 5,
    baseSize: 5,
    minSize: 1,
    dataToConnectionSize: 0.4,
    sizeMultiplier: 0.7,
    allowedDist: 40,
    baseDist: 40,
    addedDist: 30,
    connectionAttempts: 100,
    dataToConnections: 1,
    baseSpeed: 0.04,
    addedSpeed: 0.05,
    baseGlowSpeed: 0.4,
    addedGlowSpeed: 0.4,
    rotVelX: 0.003,
    rotVelY: 0.002,
    repaintColor: "#111",
    connectionColor: "hsla(200,60%,light%,alp)",
    rootColor: "hsla(0,60%,light%,alp)",
    endColor: "hsla(160,20%,light%,alp)",
    dataColor: "hsla(40,80%,light%,alp)",
    wireframeWidth: 0.1,
    wireframeColor: "#88f",
    depth: 250,
    focalLength: 250,
    vanishPoint: {
      x: FourteenCM_w / 2,
      y: FourteenCM_h / 2
    }
  }, squareRange = FourteenCM_opts.range * FourteenCM_opts.range, squareAllowed = FourteenCM_opts.allowedDist * FourteenCM_opts.allowedDist, mostDistant = FourteenCM_opts.depth + FourteenCM_opts.range, sinX = sinY = 0, cosX = cosY = 0, connections = [], toDevelop = [], data = [], FourteenCM_all = [], FourteenCM_tick = 0, totalProb = 0, animating = false, Tau = Math.PI * 2;
  FourteenCM_ctx.fillStyle = "#222";
  FourteenCM_ctx.fillRect(0, 0, FourteenCM_w, FourteenCM_h);
  FourteenCM_ctx.fillStyle = "#ccc";
  FourteenCM_ctx.font = "50px Verdana";
  FourteenCM_ctx.fillText("Calculating Nodes", FourteenCM_w / 2 - FourteenCM_ctx.measureText("Calculating Nodes").width / 2, FourteenCM_h / 2 - 15);
  window.setTimeout(init, 4);
};
const ResetFourteenCanvas = () => {
  FourteenCM_c.width = FourteenCM_w;
  FourteenCM_c.height = FourteenCM_h;
  FourteenCM_ctx.clearRect(0, 0, FourteenCM_w, FourteenCM_h);
  if (FourteenCM_requestIDList.length > 0) FourteenCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function init() {
  connections.length = 0;
  data.length = 0;
  FourteenCM_all.length = 0;
  toDevelop.length = 0;
  var a = new Connection(0, 0, 0, FourteenCM_opts.baseSize);
  a.step = Connection.rootStep;
  connections.push(a);
  FourteenCM_all.push(a);
  a.link();

  while (toDevelop.length > 0) {
    toDevelop[0].link();
    toDevelop.shift();
  }

  if (!animating) {
    animating = true;
    FourteenCM_anim();
  }
}

function Connection(b, d, e, a) {
  this.x = b;
  this.y = d;
  this.z = e;
  this.size = a;
  this.screen = {};
  this.links = [];
  this.probabilities = [];
  this.isEnd = false;
  this.glowSpeed = FourteenCM_opts.baseGlowSpeed + FourteenCM_opts.addedGlowSpeed * Math.random();
}

Connection.prototype.link = function () {
  if (this.size < FourteenCM_opts.minSize) {
    return this.isEnd = true;
  }

  var m = [],
      f = FourteenCM_opts.baseConnections + Math.random() * FourteenCM_opts.addedConnections | 0,
      b = FourteenCM_opts.connectionAttempts,
      a,
      d,
      l,
      g,
      q,
      j,
      r,
      p = {},
      o,
      n;

  while (m.length < f && --b > 0) {
    a = Math.random() * Math.PI;
    d = Math.random() * Tau;
    l = FourteenCM_opts.baseDist + FourteenCM_opts.addedDist * Math.random();
    g = Math.cos(a);
    q = Math.sin(a);
    j = Math.cos(d);
    r = Math.sin(d);
    p.x = this.x + l * g * r;
    p.y = this.y + l * q * r;
    p.z = this.z + l * j;

    if (p.x * p.x + p.y * p.y + p.z * p.z < squareRange) {
      o = true;
      n = true;

      for (var k = 0; k < connections.length; ++k) {
        if (squareDist(p, connections[k]) < squareAllowed) {
          o = false;
        }
      }

      if (o) {
        for (var k = 0; k < m.length; ++k) {
          if (squareDist(p, m[k]) < squareAllowed) {
            n = false;
          }
        }
      }

      if (o && n) {
        m.push({
          x: p.x,
          y: p.y,
          z: p.z
        });
      }
    }
  }

  if (m.length === 0) {
    this.isEnd = true;
  } else {
    for (var k = 0; k < m.length; ++k) {
      var p = m[k],
          e = new Connection(p.x, p.y, p.z, this.size * FourteenCM_opts.sizeMultiplier);
      this.links[k] = e;
      FourteenCM_all.push(e);
      connections.push(e);
    }

    for (var k = 0; k < this.links.length; ++k) {
      toDevelop.push(this.links[k]);
    }
  }
};

Connection.prototype.step = function () {
  this.setScreen();
  this.screen.color = (this.isEnd ? FourteenCM_opts.endColor : FourteenCM_opts.connectionColor).replace("light", 30 + FourteenCM_tick * this.glowSpeed % 30).replace("alp", 0.2 + (1 - this.screen.z / mostDistant) * 0.8);

  for (var a = 0; a < this.links.length; ++a) {
    FourteenCM_ctx.moveTo(this.screen.x, this.screen.y);
    FourteenCM_ctx.lineTo(this.links[a].screen.x, this.links[a].screen.y);
  }
};

Connection.rootStep = function () {
  this.setScreen();
  this.screen.color = FourteenCM_opts.rootColor.replace("light", 30 + FourteenCM_tick * this.glowSpeed % 30).replace("alp", (1 - this.screen.z / mostDistant) * 0.8);

  for (var a = 0; a < this.links.length; ++a) {
    FourteenCM_ctx.moveTo(this.screen.x, this.screen.y);
    FourteenCM_ctx.lineTo(this.links[a].screen.x, this.links[a].screen.y);
  }
};

Connection.prototype.draw = function () {
  FourteenCM_ctx.fillStyle = this.screen.color;
  FourteenCM_ctx.beginPath();
  FourteenCM_ctx.arc(this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau);
  FourteenCM_ctx.fill();
};

function Data(a) {
  this.glowSpeed = FourteenCM_opts.baseGlowSpeed + FourteenCM_opts.addedGlowSpeed * Math.random();
  this.speed = FourteenCM_opts.baseSpeed + FourteenCM_opts.addedSpeed * Math.random();
  this.screen = {};
  this.setConnection(a);
}

Data.prototype.reset = function () {
  this.setConnection(connections[0]);
  this.ended = 2;
};

Data.prototype.step = function () {
  this.proportion += this.speed;

  if (this.proportion < 1) {
    this.x = this.ox + this.dx * this.proportion;
    this.y = this.oy + this.dy * this.proportion;
    this.z = this.oz + this.dz * this.proportion;
    this.size = (this.os + this.ds * this.proportion) * FourteenCM_opts.dataToConnectionSize;
  } else {
    this.setConnection(this.nextConnection);
  }

  this.screen.lastX = this.screen.x;
  this.screen.lastY = this.screen.y;
  this.setScreen();
  this.screen.color = FourteenCM_opts.dataColor.replace("light", 40 + FourteenCM_tick * this.glowSpeed % 50).replace("alp", 0.2 + (1 - this.screen.z / mostDistant) * 0.6);
};

Data.prototype.draw = function () {
  if (this.ended) {
    return --this.ended;
  }

  FourteenCM_ctx.beginPath();
  FourteenCM_ctx.strokeStyle = this.screen.color;
  FourteenCM_ctx.lineWidth = this.size * this.screen.scale;
  FourteenCM_ctx.moveTo(this.screen.lastX, this.screen.lastY);
  FourteenCM_ctx.lineTo(this.screen.x, this.screen.y);
  FourteenCM_ctx.stroke();
};

Data.prototype.setConnection = function (a) {
  if (a.isEnd) {
    this.reset();
  } else {
    this.connection = a;
    this.nextConnection = a.links[a.links.length * Math.random() | 0];
    this.ox = a.x;
    this.oy = a.y;
    this.oz = a.z;
    this.os = a.size;
    this.nx = this.nextConnection.x;
    this.ny = this.nextConnection.y;
    this.nz = this.nextConnection.z;
    this.ns = this.nextConnection.size;
    this.dx = this.nx - this.ox;
    this.dy = this.ny - this.oy;
    this.dz = this.nz - this.oz;
    this.ds = this.ns - this.os;
    this.proportion = 0;
  }
};

Connection.prototype.setScreen = Data.prototype.setScreen = function () {
  var a = this.x,
      b = this.y,
      e = this.z;
  var d = b;
  b = b * cosX - e * sinX;
  e = e * cosX + d * sinX;
  var f = e;
  e = e * cosY - a * sinY;
  a = a * cosY + f * sinY;
  this.screen.z = e;
  e += FourteenCM_opts.depth;
  this.screen.scale = FourteenCM_opts.focalLength / e;
  this.screen.x = FourteenCM_opts.vanishPoint.x + a * this.screen.scale;
  this.screen.y = FourteenCM_opts.vanishPoint.y + b * this.screen.scale;
};

function squareDist(d, e) {
  var f = e.x - d.x,
      g = e.y - d.y,
      i = e.z - d.z;
  return f * f + g * g + i * i;
}

function FourteenCM_anim() {
  let requestId = window.requestAnimationFrame(FourteenCM_anim);
  FourteenCM_requestIDList.push(requestId);
  FourteenCM_ctx.globalCompositeOperation = "source-over";
  FourteenCM_ctx.fillStyle = FourteenCM_opts.repaintColor;
  FourteenCM_ctx.fillRect(0, 0, FourteenCM_w, FourteenCM_h);
  ++FourteenCM_tick;
  var b = FourteenCM_tick * FourteenCM_opts.rotVelX,
      d = FourteenCM_tick * FourteenCM_opts.rotVelY;
  cosX = Math.cos(b);
  sinX = Math.sin(b);
  cosY = Math.cos(d);
  sinY = Math.sin(d);

  if (data.length < connections.length * FourteenCM_opts.dataToConnections) {
    var a = new Data(connections[0]);
    data.push(a);
    FourteenCM_all.push(a);
  }

  FourteenCM_ctx.globalCompositeOperation = "lighter";
  FourteenCM_ctx.beginPath();
  FourteenCM_ctx.lineWidth = FourteenCM_opts.wireframeWidth;
  FourteenCM_ctx.strokeStyle = FourteenCM_opts.wireframeColor;
  FourteenCM_all.map(function (e) {
    e.step();
  });
  FourteenCM_ctx.stroke();
  FourteenCM_ctx.globalCompositeOperation = "source-over";
  FourteenCM_all.sort(function (e, f) {
    return f.screen.z - e.screen.z;
  });
  FourteenCM_all.map(function (e) {
    e.draw();
  });
} // window.addEventListener("resize", function () {
//   opts.vanishPoint.x = (w = c.width = window.innerWidth) / 2;
//   opts.vanishPoint.y = (h = c.height = window.innerHeight) / 2;
//   ctx.fillRect(0, 0, w, h)
// });
// window.addEventListener("click", init);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/CanvasMethods/FifteenCM.js
// 炫酷canvs
var PHI, maxGeneration, frameDuration, duration, rotationSpeed, totalIterations, maxBaseSize, baseSizeSpeed;
var FifteenCM_canvas,
    FifteenCM_ctx,
    canvasWidth,
    canvasHeight,
    shapes,
    sizeVariation,
    iteration,
    animationDirection,
    sizeVariationRange,
    baseRotation,
    baseSize,
    c1,
    c1S,
    c2,
    c2S,
    c3,
    c3S,
    FifteenCM_requestIDList = [];
const RenderFifteenCanvas = () => {
  PHI = (1 + Math.sqrt(5)) / 2, // 1.618033988749895
  maxGeneration = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 5 : 6, frameDuration = 1000 / 60, duration = 3000, rotationSpeed = 0.3, totalIterations = Math.floor(duration / frameDuration), maxBaseSize = 100, baseSizeSpeed = 0.02;
  FifteenCM_canvas = document.getElementById("canvas");
  FifteenCM_ctx = FifteenCM_canvas.getContext("2d");
  canvasWidth = document.documentElement.clientWidth;
  canvasHeight = document.documentElement.clientHeight;
  shapes = [];
  iteration = 0;
  animationDirection = 1;
  sizeVariationRange = .15;
  baseRotation = 0;
  baseSize = 50;
  c1 = 43;
  c1S = 1;
  c2 = 205;
  c2S = 1;
  c3 = 255;
  c3S = 1;
  FifteenCM_canvas.setAttribute("width", canvasWidth);
  FifteenCM_canvas.setAttribute("height", canvasHeight);
  FifteenCM_ctx.globalCompositeOperation = "lighter";
  FifteenCM_animate();
};
const ResetFifteenCanvas = () => {
  FifteenCM_canvas.width = canvasWidth;
  FifteenCM_canvas.height = canvasHeight;
  FifteenCM_ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  if (FifteenCM_requestIDList.length > 0) FifteenCM_requestIDList.forEach(ID => {
    cancelAnimationFrame(ID);
  });
};

function Shape(gen, x, y, size, rotation) {
  this.generation = gen;
  this.size = size;
  this.rotation = -rotation;
  this.start = {
    x: x,
    y: y
  };
  this.end = {
    x_1: this.start.x + Math.cos(degToRad(this.rotation)) * this.size,
    y_1: this.start.y + Math.sin(degToRad(this.rotation)) * this.size,
    x_2: this.start.x + Math.cos(degToRad(this.rotation + 360 / 3)) * this.size,
    y_2: this.start.y + Math.sin(degToRad(this.rotation + 360 / 3)) * this.size,
    x_3: this.start.x + Math.cos(degToRad(this.rotation + 360 / 3 * 2)) * this.size,
    y_3: this.start.y + Math.sin(degToRad(this.rotation + 360 / 3 * 2)) * this.size
  };
  this.init();
}

Shape.prototype.init = function () {
  if (this.generation < maxGeneration) {
    var gen = this.generation + 1,
        newSize = this.size * sizeVariation,
        newRotation = this.rotation;
    shapes.push(new Shape(gen, this.end.x_1, this.end.y_1, newSize, newRotation));
    shapes.push(new Shape(gen, this.end.x_2, this.end.y_2, newSize, newRotation));
    shapes.push(new Shape(gen, this.end.x_3, this.end.y_3, newSize, newRotation));
  }

  this.draw();
};

Shape.prototype.draw = function () {
  FifteenCM_ctx.beginPath();
  FifteenCM_ctx.moveTo(this.start.x, this.start.y);
  FifteenCM_ctx.lineTo(this.end.x_1, this.end.y_1);
  FifteenCM_ctx.moveTo(this.start.x, this.start.y);
  FifteenCM_ctx.lineTo(this.end.x_2, this.end.y_2);
  FifteenCM_ctx.moveTo(this.start.x, this.start.y);
  FifteenCM_ctx.lineTo(this.end.x_3, this.end.y_3); //ctx.closePath();

  FifteenCM_ctx.strokeStyle = "rgba(" + c1 + "," + c2 + "," + c3 + "," + 1 / this.generation / 5 + ")";
  FifteenCM_ctx.stroke(); //ctx.fill();
};

function FifteenCM_animate() {
  //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  FifteenCM_ctx.globalCompositeOperation = "source-over";
  FifteenCM_ctx.fillStyle = "rgba(0,0,0,.1)";
  FifteenCM_ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  FifteenCM_ctx.globalCompositeOperation = "lighter";
  shapes = [];
  shapes.push(new Shape(0, canvasWidth / 2, canvasHeight / 2, baseSize, baseRotation));
  changeColor();
  iteration++;
  if (baseSize < maxBaseSize) baseSize += baseSizeSpeed;
  baseRotation += rotationSpeed;
  sizeVariation = easeInOutSine(iteration, 1 - sizeVariationRange * animationDirection, sizeVariationRange * 2 * animationDirection, totalIterations);

  if (iteration >= totalIterations) {
    iteration = 0;
    animationDirection *= -1;
  }

  let requestId = window.requestAnimationFrame(FifteenCM_animate);
  FifteenCM_requestIDList.push(requestId);
}

function degToRad(deg) {
  return Math.PI / 180 * deg;
}

function easeInOutSine(currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue / 2 * (1 - Math.cos(Math.PI * currentIteration / totalIterations)) + startValue;
}

function changeColor() {
  if (c1 == 0 || c1 == 255) c1S *= -1;
  if (c2 == 0 || c2 == 255) c2S *= -1;
  if (c3 == 0 || c3 == 255) c3S *= -1;
  c1 += 1 * c1S;
  c2 += 1 * c2S;
  c3 += 1 * c3S;
} // window.addEventListener("resize", function () {
//   canvasWidth = document.documentElement.clientWidth;
//   canvasHeight = document.documentElement.clientHeight;
//   canvas.setAttribute("width", canvasWidth);
//   canvas.setAttribute("height", canvasHeight);
//   ctx.strokeStyle = "rgba(66,134,240,.3)";
//   ctx.globalCompositeOperation = "lighter";
// });
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/styled.ts

const DynamicEffectBgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__DynamicEffectBgWrapper",
  componentId: "sc-1bqunne-0"
})(["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 22rem;\n  margin-bottom: 4rem;\n  text-align: center;\n  overflow: hidden;\n"]);
const CanvasWrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__CanvasWrapper",
  componentId: "sc-1bqunne-1"
})(["\n    background-color: ", ";\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n"], props => props.bgColor || '');
const Canvas = external_styled_components_default().canvas.withConfig({
  displayName: "styled__Canvas",
  componentId: "sc-1bqunne-2"
})(["\n  position: absolute;\n  top:  ", ";\n  left: ", ";\n  transform: translateY(-50%);\n"], props => props.top || '50%', props => props.left || 0);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dynamic.js
var dynamic = __webpack_require__(2217);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/TenthDE/TenthDE.tsx




const TenthDE = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "TenthWrapper",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "tenthDE",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
    })
  });
};

/* harmony default export */ const TenthDE_TenthDE = (TenthDE);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/EleventhDE/EleventhDE.tsx




const EleventhDE = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "EleventhDEWrapper",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "EleventhDE",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter anim",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "EleventhDE2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "EleventhDEOutter2 anim2",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "inner2"
        })
      })]
    })]
  });
};

/* harmony default export */ const EleventhDE_EleventhDE = (EleventhDE);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/EighthDE/EighthDE.tsx




const EighthDE = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "EighthDEWrapper",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "spinner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "spin",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "branch"
        })]
      })
    })]
  });
};

/* harmony default export */ const EighthDE_EighthDE = (EighthDE);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/SeventhDE/SeventhDE.tsx




const SeventhDE = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "SeventhDEWrapper",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "SeventhDE",
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot blue",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "SeventhDE",
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: "dot yellow",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
          cx: "50",
          cy: "50",
          r: "50"
        })
      })]
    })]
  });
};

/* harmony default export */ const SeventhDE_SeventhDE = (SeventhDE);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/components/FifthDE/FifthDE.tsx




const FifthDE = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "100vh",
      width: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("filter", {
        id: "filter-zjq145yry",
        children: [/*#__PURE__*/jsx_runtime_.jsx("feTurbulence", {
          baseFrequency: "0.0002",
          numOctaves: "10",
          seed: "629"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          values: "3.5 -2.1 0.4 -0.9 0.1 2.1 0.3 3.2 -3.7 -0.5 2.1 0.9 0.8 1.7 -0.5 -1.3 4 -2.4 0.7 1.9"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        width: "100%",
        height: "100%",
        filter: "url(#filter-zjq145yry)"
      })]
    })
  });
};

/* harmony default export */ const FifthDE_FifthDE = (FifthDE);
;// CONCATENATED MODULE: ./src/components/DynamicEffectBg/DynamicEffect.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const NinthDE = dynamic_default()(() => __webpack_require__.e(/* import() */ 806).then(__webpack_require__.bind(__webpack_require__, 2806)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../src/components/DynamicEffectBg/DynamicEffect.tsx -> " + 'src/components/DynamicEffectBg/components/NinthDE/NinthDE']
  }
});
const SixthDE = dynamic_default()(() => __webpack_require__.e(/* import() */ 349).then(__webpack_require__.bind(__webpack_require__, 380)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../src/components/DynamicEffectBg/DynamicEffect.tsx -> " + './components/SixthDE/SixthDE']
  }
});

class DynamicEffectBg extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchMethods", isRender => {
      this.setState({
        current: this.state.current,
        bgcolor: ''
      });

      switch (this.state.current) {
        case 1:
          isRender ? RenderFirstCanvas() : ResetFirstCanvas();
          break;

        case 2:
          this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
            bgcolor: '#000'
          }));
          isRender ? RenderSecondCanvas() : ResetSecondCanvas();
          break;

        case 3:
          isRender ? RenderThirdCanvas() : ResetThirdCanvas();
          break;

        case 4:
          this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
            bgcolor: '#000',
            top: 'calc(50%)',
            left: 'calc(50% - 250px)'
          }));
          isRender ? RenderFourthCanvas() : ResetFourthCanvas();
          break;

        case 12:
          isRender ? RenderTwelveCanvas() : ResetTwelveCanvas();
          break;

        case 13:
          this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
            bgcolor: '#0d2935'
          }));
          isRender ? RenderThirteenCanvas() : ResetThirteenCanvas();
          break;

        case 14:
          isRender ? RenderFourteenCanvas() : ResetFourteenCanvas();
          break;

        case 15:
          isRender ? RenderFifteenCanvas() : ResetFifteenCanvas();
          break;
      }
    });

    this.state = {
      current: Math.floor(Math.random() * 14) + 1,
      // current: 14,
      bgcolor: ''
    };
  }

  componentDidMount() {
    this.fetchMethods(true);
  }

  componentWillUnmount() {
    this.fetchMethods(false);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DynamicEffectBgWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(DynamicEffectTitle_DynamicEffectTitle, {
        title: this.props.title || ''
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CanvasWrapper, {
        bgColor: this.state.bgcolor,
        children: [[1, 2, 3, 4, 12, 13, 14, 15].indexOf(this.state.current) > -1 && /*#__PURE__*/jsx_runtime_.jsx(Canvas, {
          id: "canvas",
          width: "1500",
          height: "472",
          top: this.state.top,
          left: this.state.left
        }), this.state.current === 5 && /*#__PURE__*/jsx_runtime_.jsx(FifthDE_FifthDE, {}), this.state.current === 6 && /*#__PURE__*/jsx_runtime_.jsx(SixthDE, {}), this.state.current === 7 && /*#__PURE__*/jsx_runtime_.jsx(SeventhDE_SeventhDE, {}), this.state.current === 8 && /*#__PURE__*/jsx_runtime_.jsx(EighthDE_EighthDE, {}), this.state.current === 9 && /*#__PURE__*/jsx_runtime_.jsx(NinthDE, {}), this.state.current === 10 && /*#__PURE__*/jsx_runtime_.jsx(TenthDE_TenthDE, {}), this.state.current === 11 && /*#__PURE__*/jsx_runtime_.jsx(EleventhDE_EleventhDE, {})]
      })]
    });
  }

}

/* harmony default export */ const DynamicEffect = (DynamicEffectBg);

/***/ })

};
;