var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as classes from "./classes.js";
const canvas = document.getElementById("thecnologies");
const ctx = canvas.getContext("2d");
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
    "macos",
    "fastapi",
    "discord.js",
    "discord.py",
    "discordgo",
    "html",
    "markdown",
    "visual studio code",
    "vim",
    "neovim",
];
var mouse = { x: 0, y: 0 };
let particles = [];
thecnologies.forEach((i) => {
    particles.push(new classes.particles(canvas, i, 5));
    console.log(i);
});
canvas.addEventListener("mousemove", (e) => {
    let rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    particles.forEach((i) => __awaiter(void 0, void 0, void 0, function* () {
        requestAnimationFrame(i.move.bind(i, ctx, canvas));
        requestAnimationFrame(i.connect.bind(i, ctx, particles.concat([mouse])));
    }));
    ctx.fillStyle = "#1d1d1d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}), 10);
