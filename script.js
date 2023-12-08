let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll(".reset");
let messageContainer = document.querySelector(".result");
let msg = document.querySelector(".msg");

let patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn = true;
let count = 0;

const reset = () => {
    turn = true;
    count = 0;
    enableBoxes();
    messageContainer.classList.add("hide");
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#ADF1D2";
        box.style.color = "blue";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    messageContainer.classList.remove("hide");
    msg.innerText = `WINNER IS ${winner}`;
};

const check = () => {
    for(let pattern of patterns) {
        let first = boxes[pattern[0]].innerText;
        let second = boxes[pattern[1]].innerText;
        let third = boxes[pattern[2]].innerText;

        if(first != "" && second != "" && third != "")
        {
            if(first===second && second===third)
            {
                showWinner(first);
                console.log("winner is " + first);
                disableBoxes();
                return true;
            }
        }
    }
};

const draw = () => {
    messageContainer.classList.remove("hide");
    msg.innerText = "GAME WAS DRAW";
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("button was clicked");
        if(turn)
        {
            box.innerText = "X";
            turn = false;
        }
        else
        {
            box.innerText = "O";
            box.style.color = "brown";
            turn = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "#76ab93";

        count++;

        let isWinner = check();

        if(count === 9 && !isWinner)
        {
            draw();
            disableBoxes();
        }
    });
});

resetBtn[0].addEventListener("click",reset);
resetBtn[1].addEventListener("click",reset);