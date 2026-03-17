const display = document.getElementById("display");
const powerToggle = document.querySelector('#power-toggle input[type="checkbox"]');
const padBank = document.querySelectorAll("#pad-bank .drum-pad");

const playFromBtn = btn => {
  if (!btn) return;
  if (powerToggle && !powerToggle.checked) return;
  const audio = btn.querySelector("audio.clip");
  if (!audio) return;
  audio.play();
  display.textContent = btn.id || "unknown";
}

padBank.forEach(btn => btn.addEventListener("click", () => playFromBtn(btn)))

document.addEventListener("keydown", e => {
  const audio = document.getElementById(e.key.toUpperCase());
  if (!audio) return;
  const btn = audio.closest("button.drum-pad");
  playFromBtn(btn);
})
