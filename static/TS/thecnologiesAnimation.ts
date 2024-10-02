import * as classes from "./classes.js";
const canvas: HTMLCanvasElement = document.getElementById(
  "thecnologies"
) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext(
  "2d"
) as CanvasRenderingContext2D;
canvas.height = canvas.clientHeight;
canvas.width = canvas.offsetWidth;
window.addEventListener("resize", () => {
  canvas.height = canvas.clientHeight;
  canvas.width = canvas.offsetWidth;
});
const thecnologies = [
  "espressif",
  "arduino",
  "css",
  "git",
  "mongodb",
  "sqlite",
  "postgresql",
  "echo",
  "express",
  "nodejs",
  "docker",
  "golang",
  "python",
  "elixir",
  "typescript",
  "c++",
  "rust",
  "actix.rs",
  "rocket.rs",
  "phoenix",
  "mux",
  "gorilla/websockets",
  "plug",
  "linux",
  "sfml",
  "fastapi",
  "vim",
  "neovim",
  "haskell",
  "libp2p",
  "webrtc",
  "pion",

];
var mouse = { x: 0, y: 0 };
let particles: classes.particles[] = [];
thecnologies.forEach((i) => {
  particles.push(new classes.particles(canvas, i, 5));
  console.log(i);
});

canvas.addEventListener("mousemove", (e: any) => {
  let rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
setInterval(async () => {
  particles.forEach(async (i) => {
    requestAnimationFrame(i.move.bind(i, ctx, canvas));
    requestAnimationFrame(
      i.connect.bind(i, ctx, particles.concat([mouse] as classes.particles[]))
    );
  });
  ctx.fillStyle = "#121212";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}, 10);
