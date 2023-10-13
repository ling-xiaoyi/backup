const secondHand = document.getElementById("zhen");
var i = 0;

function a() {
  i += 6;
  secondHand.style.transform = `rotate(${i}deg)`;
  if (i >= 360) {
    i = 0;
  }
}

setInterval(a, 1000);
