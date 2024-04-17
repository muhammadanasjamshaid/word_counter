// Import the "Inqurir" Module, which is A COMMAND LINE  interface for Node.js
import inquirer from 'inquirer';
// Declare a contant "answer" and assign it to the result of inquirer.promt fuction
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to count the word: "
    }]);
const word = answers.Sentence.trim();
// print the arry of word to the console
console.log(word);
// print the word count of the sentence to the console
console.log(`Your Sentence word count is ${word.length}`);
