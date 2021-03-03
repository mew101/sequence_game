var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  $('#' + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  gamePattern.push(randomColor);
  //console.log(gamePattern);


}
nextSequence();
