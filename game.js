//jshint esversion:6


let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let started = false;

/* start game */
$(document).on("keydown", function(){
  if(!started){
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }});

  /* checks for user click and calls sound and box shadow functions */
  $(".btn").on("click", function(){
    var userColor = $(this).attr("id");
    userPattern.push(userColor);

    playSound(userColor);
    pressedShadow(userColor);
    checkAnswer(userPattern.length - 1);
  });

/* check user with game sequence */
  function checkAnswer(currentLevel){
    if (userPattern[currentLevel] === gamePattern[currentLevel]){
      if (userPattern.length === gamePattern.length){
        setTimeout (function(){
          nextSequence();
        }, 1000);
      }
    }
      else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
          $("body").removeClass("game-over");
        }, 200);
        //$(document).on("keydown", function(){
        startOver();
        }
}


/* restart game */
function startOver(){
  started = false;
  gamePattern = [];
  level = 0;
}




function nextSequence() {
  userPattern = [];

  level ++;
  $("#level-title").html("level " + level);
  let randomNumber = Math.floor(Math.random() *4);
  let chosenColor = buttonColors[randomNumber];
  gamePattern.push(chosenColor);

  $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
}


/* plays sound */
function playSound(name){
  let audio = new Audio("sounds/" + name +'.mp3');
  audio.play();
}

/* Box shadow on user click */
function pressedShadow(currentColor){
  $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
      $("#" + currentColor).removeClass("pressed");
      }, 100);
  }
