let clickCount = 0;
const clickCounter = document.getElementById("clicks");

document.addEventListener("click", () => {
  clickCount++;
  clicks.textContent = " " + clickCount;
});