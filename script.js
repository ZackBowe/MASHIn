function spawnParticle() {
  const p = document.createElement("div");
  p.className = "particle";

  // Pita 🎀 atau bunga 🌸
  p.innerText = Math.random() > 0.5 ? "🎀" : "🌸";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.getElementById("particles").appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 5000);
}

envelope.onclick = function () {
  music.src = "ssstik.io_1771054898171.mp3";
  music.play();

  // lempar banyak partikel
  for (let i = 0; i < 25; i++) {
    setTimeout(spawnParticle, i * 100);
  }
};




const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

envelope.onclick = function () {
  music.src = "ssstik.io_1771054898171.mp3";
  music.play();
};
