// let userScore = 0;
// let compScore = 0;

// const choices =document.querySelectorAll(".choice");
// const msg =document.querySelector("#msg");

// const userScorepara =document.querySelector("#user-score");
// const CompScorepara =document.querySelector("#comp-score");


// const drawGame = () =>{
//     msg.innerText = "Game Draw.";
//     msg.style.backgroundColor = "#081b31";
// }
// const showWinner = (userWin,userChoice,compChoice) =>{
//     if(userWin) {
//         userScore++;
//         userScorepara.innerText = userScore;
//         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     } else{
//        compScore++;
//        CompScorepara.innerText = compScore;
//         msg.innerText = `You Lost!  ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor = "red";
//     }

// }


// const genCompChoice =() => {
//     const options = ["rock","paper","scissor"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// };

// const playGame =(userChoice) =>{
   
//     const compChoice = genCompChoice();
    

//     if(userChoice === compChoice) {
//         drawGame();
//     } else {
//         let userWin = true;
//         if(userChoice === "rock") {
//            userWin = compChoice === "paper" ? false : true;
//         } else if( userChoice === "paper") {
//             userWin = compChoice === "scissor"? false : true;
//         } else{
//             userWin =compChoice === "rock" ? false : true;
//         }
//         showWinner(userWin,userChoice,compChoice);


//     }

// }

// choices.forEach((choice) => {
//     choice.addEventListener("click",() => {
//         const userChoice = choice.getAttribute("id")
//         playGame(userChoice);
        
//     });
// });


























let userScore = 0;
let compScore = 0;

let choices =document.querySelectorAll(".choice");


const genCompChoice =() =>{
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return  option[randIdx];
}

const playGame =(userScore) =>{
     const  compScore =genCompChoice();
     if(userScore === compScore) {
        drawGame();
     } else {
        let userWin = true;
        if(userScore === "rock") {
            userWin =compScore === "paper" ? false :true;
        } else if(userScore ==="paper") {
            userScore =compScore ==="scissor" ? false :true;
        } else{
            userWin =compScore ==="rock" ? false :true;
        }
     }

}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        console.log("button was clicked");
    })
})
