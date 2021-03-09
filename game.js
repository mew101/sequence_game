let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
$(document).on("keydown", function(){
  if(!started){
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }});

function nextSequence() {
  level ++;
  $("#level-title").html("level " + level);
  let randomNumber = Math.floor(Math.random() *4);
  let chosenColor = buttonColors[randomNumber];
  gamePattern.push(chosenColor);

  $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);

}
$(".btn").on("click", function(){
  var userColor = this.id;
  userClickedPattern.push(userColor);
  playSound(userColor);
  pressedShadow(userColor);
});


function playSound(name){
  let audio = new Audio("sounds/" + name +'.mp3');
  audio.play();
}
function pressedShadow(currentColor){
  $(".btn").on("click", function(){
    let userColor = this.id;
    $("." + userColor).addClass("pressed");
    setTimeout(function(){
      $("." + userColor).removeClass("pressed");
      }, 100);
  });
}
