// canvas神经网络可视化动画特效
var w, h, ctx, opts, c, squareRange, squareAllowed, mostDistant,
  sinX, sinY,
  cosX, cosY,
  connections,
  toDevelop,
  data,
  all,
  tick,
  totalProb,
  animating,
  Tau, requestIDList = []
export const RenderFourteenCanvas = () => {

  c = document.querySelector('#canvas')
  w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext("2d"),
    opts = {
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
        x: w / 2,
        y: h / 2
      }
    },
    squareRange = opts.range * opts.range,
    squareAllowed = opts.allowedDist * opts.allowedDist,
    mostDistant = opts.depth + opts.range,
    sinX = sinY = 0,
    cosX = cosY = 0,
    connections = [],
    toDevelop = [],
    data = [],
    all = [],
    tick = 0,
    totalProb = 0,
    animating = false,
    Tau = Math.PI * 2;
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#ccc";
  ctx.font = "50px Verdana";
  ctx.fillText("Calculating Nodes", w / 2 - ctx.measureText("Calculating Nodes").width / 2, h / 2 - 15);
  window.setTimeout(init, 4);
}

export const ResetFourteenCanvas = () => {
  c.width = w
  c.height = h
  ctx.clearRect(0, 0, w, h);
  if (requestIDList.length > 0) requestIDList.forEach(ID => {
    cancelAnimationFrame(ID)
  })
}
function init () {
  connections.length = 0;
  data.length = 0;
  all.length = 0;
  toDevelop.length = 0;
  var a = new Connection(0, 0, 0, opts.baseSize);
  a.step = Connection.rootStep;
  connections.push(a);
  all.push(a);
  a.link();
  while (toDevelop.length > 0) {
    toDevelop[0].link();
    toDevelop.shift()
  }
  if (!animating) {
    animating = true;
    anim()
  }
}

function Connection (b, d, e, a) {
  this.x = b;
  this.y = d;
  this.z = e;
  this.size = a;
  this.screen = {};
  this.links = [];
  this.probabilities = [];
  this.isEnd = false;
  this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random()
}
Connection.prototype.link = function () {
  if (this.size < opts.minSize) {
    return this.isEnd = true
  }
  var m = [],
    f = opts.baseConnections + Math.random() * opts.addedConnections | 0,
    b = opts.connectionAttempts,
    a, d, l, g, q, j, r, p = {},
    o, n;
  while (m.length < f && --b > 0) {
    a = Math.random() * Math.PI;
    d = Math.random() * Tau;
    l = opts.baseDist + opts.addedDist * Math.random();
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
          o = false
        }
      }
      if (o) {
        for (var k = 0; k < m.length; ++k) {
          if (squareDist(p, m[k]) < squareAllowed) {
            n = false
          }
        }
      }
      if (o && n) {
        m.push({
          x: p.x,
          y: p.y,
          z: p.z
        })
      }
    }
  }
  if (m.length === 0) {
    this.isEnd = true
  } else {
    for (var k = 0; k < m.length; ++k) {
      var p = m[k],
        e = new Connection(p.x, p.y, p.z, this.size * opts.sizeMultiplier);
      this.links[k] = e;
      all.push(e);
      connections.push(e)
    }
    for (var k = 0; k < this.links.length; ++k) {
      toDevelop.push(this.links[k])
    }
  }
};
Connection.prototype.step = function () {
  this.setScreen();
  this.screen.color = (this.isEnd ? opts.endColor : opts.connectionColor).replace("light", 30 + ((tick * this.glowSpeed) % 30)).replace("alp", 0.2 + (1 - this.screen.z / mostDistant) * 0.8);
  for (var a = 0; a < this.links.length; ++a) {
    ctx.moveTo(this.screen.x, this.screen.y);
    ctx.lineTo(this.links[a].screen.x, this.links[a].screen.y)
  }
};
Connection.rootStep = function () {
  this.setScreen();
  this.screen.color = opts.rootColor.replace("light", 30 + ((tick * this.glowSpeed) % 30)).replace("alp", (1 - this.screen.z / mostDistant) * 0.8);
  for (var a = 0; a < this.links.length; ++a) {
    ctx.moveTo(this.screen.x, this.screen.y);
    ctx.lineTo(this.links[a].screen.x, this.links[a].screen.y)
  }
};
Connection.prototype.draw = function () {
  ctx.fillStyle = this.screen.color;
  ctx.beginPath();
  ctx.arc(this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau);
  ctx.fill()
};

function Data (a) {
  this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
  this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();
  this.screen = {};
  this.setConnection(a)
}
Data.prototype.reset = function () {
  this.setConnection(connections[0]);
  this.ended = 2
};
Data.prototype.step = function () {
  this.proportion += this.speed;
  if (this.proportion < 1) {
    this.x = this.ox + this.dx * this.proportion;
    this.y = this.oy + this.dy * this.proportion;
    this.z = this.oz + this.dz * this.proportion;
    this.size = (this.os + this.ds * this.proportion) * opts.dataToConnectionSize
  } else {
    this.setConnection(this.nextConnection)
  }
  this.screen.lastX = this.screen.x;
  this.screen.lastY = this.screen.y;
  this.setScreen();
  this.screen.color = opts.dataColor.replace("light", 40 + ((tick * this.glowSpeed) % 50)).replace("alp", 0.2 + (1 - this.screen.z / mostDistant) * 0.6)
};
Data.prototype.draw = function () {
  if (this.ended) {
    return --this.ended
  }
  ctx.beginPath();
  ctx.strokeStyle = this.screen.color;
  ctx.lineWidth = this.size * this.screen.scale;
  ctx.moveTo(this.screen.lastX, this.screen.lastY);
  ctx.lineTo(this.screen.x, this.screen.y);
  ctx.stroke()
};
Data.prototype.setConnection = function (a) {
  if (a.isEnd) {
    this.reset()
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
    this.proportion = 0
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
  e += opts.depth;
  this.screen.scale = opts.focalLength / e;
  this.screen.x = opts.vanishPoint.x + a * this.screen.scale;
  this.screen.y = opts.vanishPoint.y + b * this.screen.scale
};

function squareDist (d, e) {
  var f = e.x - d.x,
    g = e.y - d.y,
    i = e.z - d.z;
  return f * f + g * g + i * i
}

function anim () {

  let requestId = window.requestAnimationFrame(anim);
  requestIDList.push(requestId)
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = opts.repaintColor;
  ctx.fillRect(0, 0, w, h);
  ++tick;
  var b = tick * opts.rotVelX,
    d = tick * opts.rotVelY;
  cosX = Math.cos(b);
  sinX = Math.sin(b);
  cosY = Math.cos(d);
  sinY = Math.sin(d);
  if (data.length < connections.length * opts.dataToConnections) {
    var a = new Data(connections[0]);
    data.push(a);
    all.push(a)
  }
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.lineWidth = opts.wireframeWidth;
  ctx.strokeStyle = opts.wireframeColor;
  all.map(function (e) {
    e.step()
  });
  ctx.stroke();
  ctx.globalCompositeOperation = "source-over";
  all.sort(function (e, f) {
    return f.screen.z - e.screen.z
  });
  all.map(function (e) {
    e.draw()
  })
}
// window.addEventListener("resize", function () {
//   opts.vanishPoint.x = (w = c.width = window.innerWidth) / 2;
//   opts.vanishPoint.y = (h = c.height = window.innerHeight) / 2;
//   ctx.fillRect(0, 0, w, h)
// });
// window.addEventListener("click", init);