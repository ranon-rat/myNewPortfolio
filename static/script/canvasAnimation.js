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
const canvas = document.getElementById("title");
const ctx = canvas.getContext("2d");
canvas.height = canvas.clientHeight;
canvas.width = canvas.offsetWidth;
var mouse = { x: 0, y: 0 };
window.addEventListener("resize", () => {
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.offsetWidth;
});
canvas.addEventListener("mousemove", (e) => {
    let rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const fet = yield fetch("https://api.github.com/users/ranon-rat/repos");
    const repos = yield fet.json();
    let particles = [];
    repos.forEach((repo) => {
        console.log(repo.stargazers_count * 5);
        particles.push(new classes.particles(canvas, repo.name, repo.stargazers_count));
    });
    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => __awaiter(void 0, void 0, void 0, function* () {
            requestAnimationFrame(particle.move.bind(particle, ctx, canvas));
            requestAnimationFrame(particle.connect.bind(particle, ctx, particles.concat([mouse])));
        }));
        requestAnimationFrame(classes.textAnimation.bind(classes.textAnimation, ctx, canvas));
    }), 10);
}))();
