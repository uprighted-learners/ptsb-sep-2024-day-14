// browser window prompt method
console.log('is that toby keith?')
let promptText = "what is your name?"
let defaultPromptValue = 'Toby Keith'
let answer = prompt(`This is the prompt - ${promptText} Is it ${defaultPromptValue}`, defaultPromptValue)
console.log("What is thoust nameth?", answer)

// readline node.js example
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your name? ', (answer) => {
    console.log(`Hello ${answer}`);
    rl.close();
});