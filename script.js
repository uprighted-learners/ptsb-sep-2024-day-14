// // browser window prompt method
// console.log('is that toby keith?')
// let promptText = "what is your name?"
// let defaultPromptValue = 'Toby Keith'
// let answer = prompt(`This is the prompt - ${promptText} Is it ${defaultPromptValue}`, defaultPromptValue)
// console.log("What is thoust nameth?", answer)

// // readline node.js example
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('What is your name? ', (answer) => {
//     console.log(`Hello ${answer}`);
//     rl.close();
// });

// practical example
// let age = parseInt(prompt("What is your age?"));
// rl.question('What is your age? ', (answer) => {
//     let yearsUntilOneHundred = 100 - answer;

//     console.log(`You have ${yearsUntilOneHundred} years until you are 100 years old.`);
//     rl.close();
// });
// console.log(`You have ${yearsUntilOneHundred} years until you are 100 years old.`)


// CALLBACK EXAMPLES
function greeting(name, age, favColor) {
    console.log(`Hello ${name}! You are ${age} years old and your favorite color is ${favColor}.`);
}

function processUserInput(z) {
    let y = prompt("What is your name?");
    let a = prompt("What is your age?");
    let b = prompt("What is your favorite color?");
    z(y, a, b);
}

processUserInput(greeting);