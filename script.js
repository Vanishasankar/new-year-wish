let current = 0;
const scenes = document.querySelectorAll('.scene');
const music = document.getElementById('bgMusic');

function nextScene() {
  scenes[current].classList.remove('active');
  current++;
  scenes[current].classList.add('active');

  if (current === 1) music.play();
  if (current === 4) startFireworks();
}

// Custom name via URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "My Cutiepie 💖";
document.getElementById("nameText").innerText = `For ${name}`;

// Fireworks
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(
      Math.random()*canvas.width,
      Math.random()*canvas.height,
      Math.random()*3+1,
      0,
      Math.PI*2
    );
    ctx.fill();

    requestAnimationFrame(draw);
  }
  draw();
}
