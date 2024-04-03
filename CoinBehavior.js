const coins = document.getElementsByClassName('coin');

function flipCoin() {
  if (coins.length > 0) {
    var coin = coins[0];
    coin.textContent = Math.random() < 0.5 ? "H" : "T";
    resetAnimation(coin);
  }
}

function resetAnimation(coin) {
  coin.style.animation = "none";
  coin.offsetHeight;
  coin.style.animation = "flip 0.3s ease-out";
}

if (coins.length > 0) {
  coins[0].addEventListener("click", flipCoin);
}
