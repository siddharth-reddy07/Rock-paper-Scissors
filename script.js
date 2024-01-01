const choices=document.querySelectorAll(".choice");


let user_score=0;
let comp_score=0;

const user_scorepara=document.querySelector("#user-score");
const comp_scorepara=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");
const msg_cont=document.querySelector(".msg-container")



const compChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
}

const showscore = (userwin) =>{
    if(userwin){
        user_score++;
        console.log("You win!");
        msg.innerText="You win!";
        user_scorepara.innerText=user_score;
    msg_cont.style.backgroundColor="green";
    }

    else{
        comp_score++;
        console.log("You loose!");
        msg.innerText="You loose!";
        comp_scorepara.innerText=comp_score;
    msg_cont.style.backgroundColor="red";
    }
}

const drawgame=()=>{
    console.log("draw");
    msg.innerText="Draw !";
    msg_cont.style.backgroundColor="grey";
}

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);

    const comp_choice = compChoice();
    console.log("Comp choice = ",comp_choice);


    if(userchoice===comp_choice){
        drawgame();
    }

    else{

        let userwin=true;

        if(userchoice==="rock"){
            //scissor,paper

            userwin = comp_choice==="paper" ? false : true;
        }

        else if(userchoice==="paper"){
            //rock,scissors

            userwin = comp_choice==="rock" ? true: false;
        }

        else{
            //rock,paper
            userwin = comp_choice==="rock" ? false : true;
        }

        showscore(userwin);

    }


}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
