$(document).ready(function() {

   
      var winCount = 0; 
      $("#wScore").text("Wins: " + winCount);
      var lossCount = 0;
      $("#lScore").text("Losses: " + lossCount);
      var userScore = 0; 
      var gameScore = Math.floor(Math.random() * 100) + 19; 
      var crystalOne = Math.floor(Math.random() * 12) + 1; 
      var crystalTwo = Math.floor(Math.random() * 12) + 1;
      var crystalThree = Math.floor(Math.random() * 12) + 1; 
      var crystalFour = Math.floor(Math.random() * 12) + 1; 
      $("#gScore").text("Match Score: " + gameScore);
      $("#uScore").text("Your Score: " + userScore);
      console.log(gameScore);
      console.log(crystalOne);
      console.log(crystalTwo);
      console.log(crystalThree);
      console.log(crystalFour);
  
    // resets the values of the game
    function resetGame() {
      userScore = 0;
      gameScore = Math.floor(Math.random() * 100) + 19; 
      crystalOne = Math.floor(Math.random() * 12) + 1; 
      crystalTwo = Math.floor(Math.random() * 12) + 1; 
      crystalThree = Math.floor(Math.random() * 12) + 1; 
      crystalFour = Math.floor(Math.random() * 12) + 1; 
      $("#gScore").text("Game Score: " + gameScore);
      $("#uScore").text("User Score: " + userScore);
      console.log(gameScore);
      console.log(crystalOne);
      console.log(crystalTwo);
      console.log(crystalThree);
      console.log(crystalFour);
    }
  
    // creates function for a game win
    function winGame() {
      alert("You win! Play again!");
      winCount = winCount + 1;
      $("#wScore").text("Wins: " + winCount);
      resetGame();
    }
  
    // creates function for a game loss
    function loseGame() {
      alert("You lose! Try again!");
      lossCount = lossCount + 1;
      $("#lScore").text("Losses: " + lossCount);
      resetGame();
    }
  
    // creates on click function for crystalOne
    $("#crystal1").click(function() {
      userScore = userScore + crystalOne; // adds value of crystalOne to userScore
      console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    // creates on click function for crystalTwo
    $("#crystal2").click(function() {
      userScore = userScore + crystalTwo; // adds value of crystalTwo to userScore
      console.log("User Score: " + userScore);
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    // creates on click function for crystalThree
    $("#crystal3").click(function() {
      userScore = userScore + crystalThree; // adds value of crystalThree to userScore
      console.log("User Score: " + userScore);
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
    // creates on click function for crystalFour
    $("#crystal4").click(function() {
      userScore = userScore + crystalFour; // adds value of crystalFour to userScore
      console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
          winGame();
        } else if (userScore > gameScore) {
          loseGame();
        }
    });
  
  });