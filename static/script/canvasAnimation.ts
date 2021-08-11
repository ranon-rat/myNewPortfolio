import * as classes from "./classes.js";
const canvas: any = document.getElementById("title");
const ctx = canvas.getContext("2d");
canvas.height = canvas.clientHeight;
canvas.width = canvas.offsetWidth;
var mouse = { x: 0, y: 0 };
window.addEventListener("resize", () => {
  canvas.height = canvas.clientHeight;
  canvas.width = canvas.offsetWidth;
});
canvas.addEventListener("mousemove", (e:any) => {
  let rect=canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
(async () => {
  const fet = await fetch("https://api.github.com/users/ranon-rat/repos");
  const repos: any[] = await fet.json();

  let particles: classes.particles[] = [];
  repos.forEach((repo: any) => {
    console.log(repo.stargazers_count * 5);
    particles.push(
      new classes.particles(canvas, repo.name, repo.stargazers_count)
    );
  });

  setInterval(async () => {
    ctx.fillStyle = "#000";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(async (particle: classes.particles) => {
      requestAnimationFrame(particle.move.bind(particle, ctx, canvas));
      requestAnimationFrame(
        particle.connect.bind(
          particle,
          ctx,
          particles.concat([mouse] as classes.particles[])
        )
      );
    });
    requestAnimationFrame(
      classes.textAnimation.bind(classes.textAnimation, ctx, canvas)
    );
  }, 10);
})();
