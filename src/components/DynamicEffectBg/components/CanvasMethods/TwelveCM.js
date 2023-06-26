var s, w, h, q, ctx, p, interval

export const RenderTwelveCanvas = () => {

  q = document.querySelector('#canvas')
  s = window.screen;
  w = (q.width = s.width);
  h = (q.height = s.height);
  ctx = q.getContext("2d");
  p = Array(Math.floor(w / 10) + 1).fill(0);
  const random = (items) => items[Math.floor(Math.random() * items.length)];

  const hex = "0123456789ABCDEFGHILMNOPQRST".split("");

  interval = setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    p.map((v, i) => {
      ctx.fillText(random(hex), i * 10, v);
      p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }, 1000 / 30);
}

export const ResetTwelveCanvas = () => {
  clearInterval(interval)
}


