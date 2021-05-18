const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);
const num1 = parseInt(prompt("enter the first number: "));
const num2 = parseInt(prompt("enter the seconde number: "));
const operation = prompt("Please choose the operation (+, -, /, *): ")
if(operation === '+'){
 console.log(num1 + num2)
}
else if(operation === '-'){
     console.log(num1 - num2)
}
else if(operation === '-'){
     console.log(num1 * num2)
}
else if(operation === '-'){
     console.log(num1 / num2)
}
else {
console.log("innvalid")
}



