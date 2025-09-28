let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")
let newgamebtn= document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".mesg-container")
let msg = document.querySelector("#mesg")
let turnO=true;

const winpatterns = [
[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
      if(turnO) {
         box.innerText="O";
         turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
    })
});

const resetgame=() => {
   turnO=true;
  enableboxes();
   msgcontainer.classList.add("hide");
   
}

const disableboxes=() => {
  for(box of boxes){
    box.disabled=true;}
};

const enableboxes=() => {
  for(box of boxes){
    box.disabled=false;
   box.innerText="";}
};

const showwinner=  (winner) => {
  msg.innerText= `Congratulation!, The winner is ${winner}`;
;
  msgcontainer.classList.remove("hide");
disableboxes();
};
const checkWinner =() =>{
for( let pattern of winpatterns) {
    console.log(pattern[0],pattern[1],pattern[2]);
  console.log(
    boxes[pattern[0]].innerText,
    boxes[pattern[1]].innerText,
    boxes[pattern[2]].innerText);
    let pos1valu= boxes[pattern[0]].innerText;
    let pos2valu= boxes[pattern[1]].innerText;
    let pos3valu= boxes[pattern[2]].innerText;
    if(pos1valu!=""&&pos2valu!=""&&pos3valu!=""){
if(pos1valu==pos2valu && pos2valu==pos3valu ){
  console.log("winner",pos1valu);
showwinner(pos1valu);}
    }
} 
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);