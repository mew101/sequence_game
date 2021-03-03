var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);


}

nextSequence();
