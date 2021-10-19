const sharContainer = document.querySelector("#share-container");
const shareBtn = document.querySelector("#share-btn");

sharContainer.addEventListener("click", toggleShareBox);
shareBtn.addEventListener("click", toggleShareBox);

function toggleShareBox() {
  sharContainer.classList.toggle("active");
  shareBtn.classList.toggle("active");
}
