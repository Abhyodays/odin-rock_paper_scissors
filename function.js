function playRound(playerSelection, computerSelection) {
let output = document.querySelector('.output');
output.style.margin = '16px 0 0 0';
playerSelection = playerSelection.toLowerCase();
if(playerSelection == computerSelection){
  output.textContent="Draw!";
}
if(playerSelection=="rock" && computerSelection =="paper"){
output.textContent= "You Loose! Paper beats Rock";
}
if(playerSelection =="rock" && computerSelection =="scissor"){
  output.textContent= "You Won! Rock Beates Scissor";
}
if(playerSelection =="scissor" && computerSelection=="paper"){
  output.textContent= "You Won!,Scissor beats paper" ;
}
if(playerSelection =="scissor" && computerSelection =="rock"){
  output.textContent= "You Loose! Rock beats Scissor";
}
if(playerSelection =="paper" && computerSelection =="scissor"){
  output.textContent= "You Loose! Scissor beates paper";
}
if(playerSelection =="paper" && computerSelection=="rock"){
  output.textContent= "You win! Paper Beates Rock."
}
}
function play(playerSelection){

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
}
function computerPlay(){
  let choices = ['rock','paper','scissor'];
  return choices[Math.floor(Math.random()*choices.length)];
}
