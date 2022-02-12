let humanScore=0;
let compScore=0;

function computerPlay()
{
  let a=['Rock','Paper','Scissors'];
  let m= Math.floor(Math.random()*3);
  return a[m];
}

function oneRound(playerSelection,computerSelection)
{
  let ps=playerSelection.toLowerCase();
  let cs=computerSelection.toLowerCase();
   if(ps==="rock")
   {
     if(cs==="paper")
     {compScore++;
       return "you lose .Paper beats Rock";

     }
     else if(cs==="rock")
     {
       return "its a tie";
     }
     else{humanScore++;
       return "you win.rock beats scissors";
     }
   }
else if(ps==="paper")
{
  if(cs==="rock")
  { humanScore++;
    return "you win .Paper beats Rock";
  }
  else if(cs==="paper")
  {
    return "its a tie";
  }
  else
  {compScore++;
    return "you lose .scissors beats paper";
  }
}
   else{
     if(cs==="rock")
     {  compScore++;
       return "you lose.rock beats scissors";
     }
     else if(cs==="scissors")
     {
       return "its a tie";
     }

     else{humanScore++;
       return "you win.scissors beats paper";
     }
   }
}





function game()
{
  for(let i=1;i<=5;i++)
  {
    let user=prompt("enter your choice");
    let comp=computerPlay();
    let a=oneRound(user,comp);
    alert(a);
  }
  if(humanScore>compScore)
  {alert("you win");}
  else if(humanScore===compScore)
  {
    alert("its a draw");
  }

  else{
    alert("you lose");
  }


}

game();
