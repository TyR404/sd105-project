let samples = {
  picture: "/pictures/sample-",
  currentPicture: 3,
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
  let imageLink = document.querySelector(".image-link");

  image.src = samples.picture + samples.currentPicture + ".png";
  imageLink.href = samples.picture + samples.currentPicture + ".png";
}

document.querySelector(".left").addEventListener("click", left);
document.querySelector(".right").addEventListener("click", right);

render();
