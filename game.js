buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() *4);
  var chosenColor = buttonColors[randomNumber];
  gamePattern.push(chosenColor);

  $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  $(".btn").on("click", function(){
      var audio = new Audio("sounds/" + chosenColor + ".mp3");
      audio.play();
  })
}
nextSequence();
