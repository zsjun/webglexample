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

function drawBranch(context, v0, length, thickness, dir, bias) {
  const v = new Vector2D(1, 0).rotate(dir).scale(length);
  // console.log(v);
  const v1 = v0.copy().add(v);
  ctx.beginPath();
  ctx.moveTo(v0[0], v0[1]);
  ctx.lineTo(v1[0], v1[1]);
  ctx.stroke();
  if (thickness > 2) {
    const left = dir + 0.2;
    drawBranch(context, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
    const right = dir - 0.2;
    drawBranch(context, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
  }
}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(0, canvas.height);
ctx.scale(1, -1);
ctx.lineCap = 'round';
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
drawBranch(ctx, new Vector2D(150, 1), 100, 10, 1.6, 1);
