function regularShape(edges = 3, x, y, step) {
  const ret = [];
  const delta = Math.PI * (1 - (edges - 2) / edges);
  let p = new Vector2D(x, y);
  const dir = new Vector2D(step, 0);
  ret.push(p);
  for (let i = 0; i < edges; i++) {
    p = p.copy().add(dir.rotate(delta));
    ret.push(p);
  }
  return ret;
}
// draw(regularShape(3, 128, 128, 100)); // 绘制三角形
// draw(regularShape(6, -64, 128, 50)); // 绘制六边形
// draw(regularShape(11, -64, -64, 30)); // 绘制十一边形
// draw(regularShape(60, 128, -64, 6));

function draw(context, v) {
  console.log(v);
  for (let i = 0; i < v.length; i++) {
    // ctx.beginPath();
    ctx.moveTo(v[i][0], v[i][1]);
    if (i + 1 < v.length) {
      ctx.lineTo(v[i + 1][0], v[i + 1][1]);
    }
    ctx.stroke();
    // ctx.closePath();
  }
}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.translate(canvas.width / 2, canvas.height / 2);
// ctx.scale(1, -1);
ctx.lineCap = 'round';
// const ret = regularShape(3, 128, 128, 100);
// draw(ctx, ret);
const ret = regularShape(6, -64, 128, 50);
draw(ctx, ret); // 绘制六边形
// draw(ctx, regularShape(11, -64, -64, 30)); // 绘制十一边形
// draw(ctx, regularShape(60, 128, -64, 6));
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
