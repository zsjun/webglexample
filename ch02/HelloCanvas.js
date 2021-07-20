// HelloCanvas.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById("webgl");

  // Get the rendering context for WebGL， 在cuon.utils.js 中，抹平浏览器差异，
  // canvas.getContext("webgl")
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }

  // Set clear color,指定清空canvas的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>， 清空颜色缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT);
}
