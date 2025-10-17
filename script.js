const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");
const scrollContainer = document.querySelector(".scroll-container");

const box = document.querySelector(".child");
const boxWidth = box.offsetWidth; // 200px
const gap = 15; // gap in px
const scrollAmount = (boxWidth + gap) * 5; // scroll 5 boxes at a time

leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

