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
// function greeting(name, age, favColor) {
//     console.log(`Hello ${name}! You are ${age} years old and your favorite color is ${favColor}.`);
// }

// function processUserInput(z) {
//     let y = prompt("What is your name?");
//     let a = prompt("What is your age?");
//     let b = prompt("What is your favorite color?");
//     z(y, a, b);
// }

// processUserInput(greeting);

// PROMISES EXAMPLE
const myPromise = new Promise((res, rej) => {
    let success = true; // to simulate the succecss or failure of an async operation
    if (success) {
        res("OPERATION WAS A SUCCESS");
    } else {
        rej("OPERATION FAILED");
    }
})

// PROMISES .then() and .catch() EXAMPLE

myPromise
    .then((message) => {
        console.log("working from the .then()")
        console.log(message)
    })
    .catch((error) => {
        console.log("NOT working from the .catch()")
        console.log(error)
    })
// .finally(console.log("this is the end of the .then() and .catch() example")); // optional

function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step One is complete");
            resolve();
        }, 1000)
    })
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step Two is complete");
            resolve();
        }, 1000)
    })
}

function stepThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step Three is complete");
            resolve();
        }, 1000)
    })
}

stepOne()
    .then(console.log("All steps are complete"))
    .then(stepThree)
    .then(stepTwo)
    .catch(error => console.log(error))