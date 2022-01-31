
// constants
const selectButtons = document.querySelectorAll(".game-button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerIcon = document.querySelector(".player-icon");
const computerIcon = document.querySelector(".computer-icon");
const display = document.getElementById("display");

// variables
let selection;
let playerCount = 0;
let computerCount = 0;
let randomNumber;


// update score
function UpdateScore(){
playerScore.innerHTML = playerCount;
computerScore.innerHTML = computerCount;
}
// get number between 1 nd 3
function getRandomNumber(){
randomNumber = Math.floor(Math.random() * 3 + 1);
}
// get player & computer pick
function playerSelect(){
    selectButtons.forEach(e => {
        e.addEventListener("click", function(){
            if(e.classList.contains("rock")){
                getRandomNumber();
                selection = 1;  
            }
            if(e.classList.contains("paper")){
                getRandomNumber();
                selection = 2;
            }
            if(e.classList.contains("scissors")){
                getRandomNumber();
                selection = 3;
            }
        })
    })
}
// update icons
function UpdateIcon(){
    if(selection == 1){
        playerIcon.innerHTML = `<img src="./assets/rock.png" alt="">`;
       } else if(selection == 2){
       playerIcon.innerHTML = `<img src="./assets/paper.png" alt="">`;
       } else{
       playerIcon.innerHTML = `<img src="./assets/scissors.png" alt="">`;
       }
   
       if(randomNumber == 1){
           computerIcon.innerHTML = `<img src="./assets/rock.png" alt="">`;
          } else if(randomNumber == 2){
          computerIcon.innerHTML = `<img src="./assets/paper.png" alt="">`;
          } else{
          computerIcon.innerHTML = `<img src="./assets/scissors.png" alt="">`;
       }
}
// compare player and computer picks, , update score, display win/loose text
function CompareSelection(){
    selectButtons.forEach(button => {
       button.addEventListener("click", function(){
        console.log(selection, randomNumber);
           if(selection === randomNumber){
            display.innerHTML = "DRAW";
           }
           if(selection == 1 && randomNumber == 3){
               display.innerHTML = "You WIN !";
               playerCount += 1;
           } else if(randomNumber == 1 && selection == 3){
            display.innerHTML = "You Loose !";
               computerCount += 1;
           }
        if(selection == 2 && randomNumber == 1){
            display.innerHTML = "You WIN !";
            playerCount += 1;
        } else if(randomNumber == 2 && selection == 1){
            display.innerHTML = "You Loose !";
            computerCount += 1;
        }
        if(selection == 3 && randomNumber == 2){
            display.innerHTML = "You WIN !";
            playerCount += 1;
        } else if(randomNumber == 3 && selection == 2){
            display.innerHTML = "You Loose !";
            computerCount += 1;
        }
       
    UpdateScore();
    UpdateIcon();
       })
    })





    


}
// container
function Game(){
    playerSelect();
    CompareSelection();
    
}

// run game
Game();



