var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var correctColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
colorDisplay.textContent = correctColor;

resetButton.addEventListener("click", function() {
  colors = generateRandomColor(6);
  correctColor = pickColor();
  colorDisplay.textContent = correctColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var selectedColor = this.style.backgroundColor;
    if (selectedColor === correctColor) {
      messageDisplay.textContent = "Correct Choice";
      changeColor();
    } else {
      messageDisplay.textContent = "Wrong Choice";
      this.style.backgroundColor = "white";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = correctColor;
    h1.style.backgroundColor = correctColor;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = rgbGenerator();
  }
  return arr;
}

function rgbGenerator() {
  var red = Math.floor(Math.random() * 256 - 1);
  var green = Math.floor(Math.random() * 256 - 1);
  var blue = Math.floor(Math.random() * 256 - 1);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
