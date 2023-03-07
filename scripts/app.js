let samples = {
  picture: "/pictures/sample-",
  currentPicture: 1,
};

function left() {
  if (samples.currentPicture === 1) {
    samples.currentPicture = 4;
  } else {
    samples.currentPicture--;
  }
  render();
}

function right() {
  if (samples.currentPicture === 4) {
    samples.currentPicture = 1;
  } else {
    samples.currentPicture++;
  }
  render();
}

function render() {
  let image = document.querySelector(".sample");
  image.src = samples.picture + samples.currentPicture + ".png";
}

document.querySelector(".left").addEventListener("click", left);
document.querySelector(".right").addEventListener("click", right);

render();
