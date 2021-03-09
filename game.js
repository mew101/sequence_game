buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() *4);
  var chosenColor = buttonColors[randomNumber];
  gamePattern.push(chosenColor);

  $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}
$(".btn").on("click", function(){
  var userColor = this.id;
  userClickedPattern.push(userColor);
});


function playSound(){
  $(".btn").on("click", function(){
      var audio = new Audio("sounds/" + chosenColor + ".mp3");
      audio.play();
  })
}


nextSequence();
