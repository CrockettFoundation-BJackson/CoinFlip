const coins = document.getElementsByClassName('coin');

for (let coin of coins) {
  coin.addEventListener("click", () => flipCoin(coin));
}

function flipCoin(coin) {
  coin.textContent = Math.random() < 0.5 ? "H" : "T";
  resetAnimation(coin);
}

function resetAnimation(coin) {
  coin.style.animation = "none";
  coin.offsetHeight;
  coin.style.animation = "flip 0.3s ease-out";
}
