
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let leeftijd = parseFloat(await  userInput.question('geeft jouw leeftijd') )


if(leeftijd < 18){
    console.log('Stop! Deze website is enkel voor volwassenen!');
    }