const cards = document.querySelectorAll(".card")
const gameBoard=Array(9).fill("");

const results = document.querySelector(".results")
const player1Input = document.querySelector(".player1")
const player2Input = document.querySelector(".player2")
let gameOver=false;


function createPlayer(name,marker){
return{
    name:name,
    marker:marker
}
let gameOver=false;

}
const player1 = createPlayer("player 1",
      `  <div>
           <svg viewBox="0 0 24 24" width="50" height="100"><line x1="6" y1="6"
                                                              x2="18" y2="18" stroke="red"
                                                              stroke-width="2"></line>
                                                              <line x1="18" y1="6"
                                                              x2="6" y2="18"
                                                              stroke="red" stroke-width="2"></line>
                                                            </svg>
        </div>`);
const player2 = createPlayer("player2",`
        <div>
            <svg viewBox="0 0 24 24" width="50" height="100"> <circle
                                                                cx="12" cy="12"
                                                                r="10" stroke="blue" 
                                                                stroke-width="2" fill="none">
                                                               </circle>
            </svg>
        </div>`);

let currentPlayer = player1
cards.forEach((card,index)=>{
    card.addEventListener("click",()=>{
        if (gameOver) return;
        if(card.innerHTML===""&&currentPlayer===player1){
            card.innerHTML = currentPlayer.marker
            gameBoard[index]=currentPlayer.marker
             gameAlysis();

            currentPlayer=player2
        }else if(card.innerHTML===""&&currentPlayer===player2){
            card.innerHTML=currentPlayer.marker
            gameBoard[index]=currentPlayer.marker
             gameAlysis();

            currentPlayer=player1
        }
    });
});
function gameAlysis(){
    const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
winningCombinations.forEach(combination=>{
    if(gameBoard[combination[0]]===player1.marker&&
        gameBoard[combination[1]]===player1.marker&&
        gameBoard[combination[2]]===player1.marker
        ){
            results.textContent = `Congratulations ${player1Input.value},you won!`;
            gameOver = true;
    }else if(gameBoard[combination[0]]===player2.marker&&
             gameBoard[combination[1]]===player2.marker&&
             gameBoard[combination[2]]===player2.marker){
            results.textContent =  `Congratulations ${player2Input.value},you won!`;
            gameOver = true;
        }
    
})
         if(gameBoard.every(cell =>cell !== "")){
            results.textContent = "It's a draw";}
}



const restartButton = document.querySelector(".restart-button")
restartButton.addEventListener("click",()=>{
results.textContent = "RESULTS";
player1Input.value = "";
player2Input.value = "";
gameBoard.fill("");
gameOver = false;
cards.forEach(card=>{
    card.innerHTML = "";
})
})

gameAlysis();

