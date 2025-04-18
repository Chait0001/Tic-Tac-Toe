let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new_game");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");



let turnO=true;
const win_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked.");
        if (turnO){
            box.innerText="O",
            turnO=false
        }else{
            box.innerText="X",
            turnO=true
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}

const showWinnner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
}
const checkWinner=()=>{
    for(let pattern of win_patterns){
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);
                showWinnner(pos1Val);

            }
            
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

