//nested if else
let winning=19;
let userguess=+prompt("Guess a number");
if(winning===userguess){
    console.log("Guess is right");
}
else if(userguess > winning){
    console.log("You have guessed a wrong number");

}
else{
    console.log("Your guess is too low!");
}