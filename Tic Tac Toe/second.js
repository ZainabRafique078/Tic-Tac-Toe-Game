let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetGamebtn = document.querySelector("#reset-game");
let newGamebtn = document.querySelector("#new-game");
let boxes = document.querySelectorAll(".box");
let turnO = true;//first condition before playing game it already exists from start
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// to reset our game 
const resetGame = ()=>{
    turnO = true;
    enableboxes();
msgcontainer.classList.add("hide");
}
//first step is to make buttons to perform some actions 
boxes.forEach((box) => {
    box.addEventListener("click" ,() =>{
        console.log("button was clicked");
        if (turnO){
            box.innerText = "O"
            turnO= false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner ();
    });
});  //first step ends here
//after we play our game , we make sure that box should be disabled in that way we're not able to click any button 
const disableboxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};
// if we want to play new game we should enable all boxes also their is no innertext written in it 
const enableboxes =()=>{
    for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
};
//third step is to show winner on top
const showWinner = (Winner)=>{
msg.innerText = `Congratulations Winner is ${Winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
};
//second step is to check winner
const checkWinner = ()=>{
    for (let pattern of winpatterns) {
      let pos1Val = boxes [pattern[0]] . innerText;
      let pos2Val = boxes [pattern[1]] . innerText;
      let pos3Val = boxes [pattern[2]] . innerText; 
      if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
if (pos1Val===pos2Val && pos2Val===pos3Val){
console.log("Winner" , pos1Val);
showWinner(pos1Val);
}
      }
    }
};//second step end's here
//last step is to make reset and new game btn to perform action
newGamebtn.addEventListener("click" , resetGame);
resetGamebtn.addEventListener("click" , resetGame);