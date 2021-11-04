function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
if(playerSelection=="rock" && computerSelection =="paper"){
return "You Loose!,Paper beats Rock";
}
if(playerSelection =="rock" && computerSelection =="scissor"){
  return "You Won!,Rock Beates Scissor";
}
if(playerSelection =="rock" && computerSelection == "rock"){
return "Draw!"
}
if(playerSelection =="scissor" && computerSelection == "scissor"){
return "Draw!";
}
if(playerSelection =="scissor" && computerSelection=="paper"){
  return "You Won!,Scissor beats paper" ;
}
if(playerSelection =="scissor" && computerSelection =="rock"){
  return "You Loose!,Rock beats Scissor";
}
if(playerSelection =="paper" && computerSelection =="paper"){
  return "Draw!";
}
if(playerSelection =="paper" && computerSelection =="scissor"){
  return "You Loose!,Scissor beates paper";
}
if(playerSelection =="paper" && computerSelection=="rock"){
  return "You win!,Paper Beates Rock."
}
}
function play(){
let playerSelection = prompt("Enter Rock/Paper/Scissor");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
}
function computerPlay(){
  let choices = ['rock','paper','scissor'];
  return choices[Math.floor(Math.random()*choices.length)];
}