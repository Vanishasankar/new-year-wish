const scenes = document.querySelectorAll(".scene");
let index = 0;

function showScene(i) {
  scenes.forEach(scene => scene.classList.remove("active"));
  scenes[i].classList.add("active");
}

// Timeline (matches your seconds)
setTimeout(() => showScene(1), 18000); // Gift → Ticket
setTimeout(() => showScene(2), 24000); // Ticket → Memories
setTimeout(() => showScene(3), 30000); // Memories → Final

// Fireworks
const canvas = document.getElementById("fireworks");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function fireworks() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(
      Math.random()*canvas.width,
      Math.random()*canvas.height,
      2,
      0,
      Math.PI*2
    );
    ctx.fill();
    requestAnimationFrame(fireworks);
  }
  fireworks();
}
