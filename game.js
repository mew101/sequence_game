var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  var sound = new Audio("sounds/" + randomColor + ".mp3");

  $('#' + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  $('#' + randomColor).click(function() {
    sound.play();
  });




  //gamePattern.push(randomColor);
  //console.log(gamePattern);


};
nextSequence();
