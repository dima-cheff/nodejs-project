import confetti from "canvas-confetti";

const button = document.querySelector("#celebrate");

button.addEventListener("click", () => {
  confetti({
    particleCount: 500,
    spread: 360,
    gravity: 0.5
  });
});
