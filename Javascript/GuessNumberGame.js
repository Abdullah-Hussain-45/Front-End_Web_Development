let choice = 1;
const targetNum = 35;
console.log("Welcome to the Guess Number Game.");
console.log("You have 3 choices to guess the number  between (1-50)");
while(choice <= 3){
    let userGuess =  Number(prompt("Enter the Guess Number: "));
    if(userGuess === targetNum){
        console.log("Congratulations! You have found the number.");
        break;
    }else if(userGuess < targetNum){
        console.log(userGuess," is less than target number")
    }else if(userGuess > targetNum){
        console.log(userGuess ," is greater than target number");

    }else{
        console.log("Invalid number.");
    }
    choice++;
}
console.log("Game over!");
console.log("The correct number was ",targetNum);