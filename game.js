buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() *4);
  var chosenColor = buttonColors[randomNumber];
  gamePattern.push(chosenColor);

  $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
}
$(".btn").on("click", function(){
  var userColor = this.id;
  userClickedPattern.push(userColor);
});


function playSound(name){
  switch (name) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      //green.play();
      console.log("g");
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      //red.play();
      console.log("r");
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      //yellow.play();
      console.log("y");
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      //blue.play();
      console.log("b");
      break;
    default: console.log("something is broken.");




     }

}


nextSequence();
