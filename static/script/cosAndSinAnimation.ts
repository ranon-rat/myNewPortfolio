const canvas: HTMLCanvasElement = document.getElementById(
  "cos-sin-animation"
) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
var t = 0;

function x2(t: number) {
  return Math.sin(t / 10) * 100 + Math.sin(t / 15) * 100;
}
function y2(t: number) {
  return Math.cos(t / 10) * 100;
}
function x1(t: number) {
  return Math.sin(t / 10) * 100;
}
function y1(t: number) {
  return Math.cos(t / 10) * 100 + Math.cos(t / 12) * 50;
}
function line(t: number, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.strokeStyle = "#0afdd8";
  ctx.moveTo(canvas.width / 2+x1(t), canvas.height / 2+y1(t));
  ctx.lineTo(canvas.width / 2+x2(t), canvas.height / 2+y2(t));
  ctx.stroke();
}

setInterval(async () => {
  ctx.beginPath();
 
  for (let i = 0; i <= 40; i++) {
    requestAnimationFrame(line.bind(line, t + i, ctx));
  }
  t++;

  ctx.restore();
  
 
  ctx.fillStyle = "#1d1d1d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}, 10);
