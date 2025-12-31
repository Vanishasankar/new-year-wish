const scenes = document.querySelectorAll(".scene");

function showScene(i) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[i].classList.add("active");
}

/*
Timeline (matches your description exactly)
9–12   : Scene 1
12–18  : Scene 2
18–24  : Scene 3
24–30  : Scene 4
30–32  : Scene 5
*/

setTimeout(() => showScene(1), 12000);
setTimeout(() => showScene(2), 18000);
setTimeout(() => showScene(3), 24000);
setTimeout(() => showScene(4), 30000);
