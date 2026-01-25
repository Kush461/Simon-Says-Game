// btns = document.querySelectorAll(".btn");
// for(btn of btns){
//     btn.addEventListener("click",function(){
//         console.log("button was clicked");
//     });
// }

let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four"];

let started = false;
let level = 0;
let highScore = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
}); 


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },100);
}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    //choose random button
    let randomIdx = Math.floor(Math.random()*3);//tracking by index
    let random = btns[randomIdx];
    let randomBtn = document.querySelector(`.${random}`);
    // console.log(randomBtn);
    gameSeq.push(random);
    console.log(gameSeq);
    btnFlash(randomBtn);
}
function checkAns(currIdx){
    if(userSeq[currIdx] == gameSeq[currIdx]){
        //case-1 
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),100);
        }
    }else{
        highest(level);
        h3.innerHTML = `Game Over!Your score was ${level}<br>Highest Score ${highScore}<br>.Press any key to start`;
       
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100);
        reset();
    }
}
function btnPress(){
    userSeq.push(this.getAttribute("id"));
    // console.log(userSeq);
    userFlash(this);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function highest(level){
    if(level > highScore){
        highScore = level;
    }
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}