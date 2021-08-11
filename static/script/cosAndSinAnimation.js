"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const canvas = document.getElementById("cos-sin-animation");
const ctx = canvas.getContext("2d");
var t = 0;
function x2(t) {
    return Math.sin(t / 10) * 100 + Math.sin(t / 15) * 100;
}
function y2(t) {
    return Math.cos(t / 10) * 100;
}
function x1(t) {
    return Math.sin(t / 10) * 100;
}
function y1(t) {
    return Math.cos(t / 10) * 100 + Math.cos(t / 12) * 50;
}
function line(t, ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#0afdd8";
    ctx.moveTo(canvas.width / 2 + x1(t), canvas.height / 2 + y1(t));
    ctx.lineTo(canvas.width / 2 + x2(t), canvas.height / 2 + y2(t));
    ctx.stroke();
}
setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
        requestAnimationFrame(line.bind(line, t + i, ctx));
    }
    t++;
    ctx.restore();
    ctx.fillStyle = "#1d1d1d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}), 10);
