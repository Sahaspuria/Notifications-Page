const btnMark = document.querySelector(".notifications__header--read");
const count = document.querySelector(".count");
const userfield = document.querySelectorAll(".userfield");

btnMark.addEventListener("click", function () {
  count.textContent = 0;
  userfield.forEach((item) => item.classList.remove("active"));
});
