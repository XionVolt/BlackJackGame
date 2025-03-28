import promptSync from 'prompt-sync';
const prompt = promptSync();
import {displayRules} from './commands';

function askName () {
   const name = prompt('What is your name? '); 
   return name
}

function askBetMoney () {
    const bet = prompt("Place your bet: ");
    if (bet == '/rules') {
        displayRules();
        return askBetMoney();
    }
    else if (isNaN(Number(bet))) {
        console.log("Invalid bet amount. Please enter a valid number.");
        return askBetMoney();
    }
    return Number(bet);
}



// --------- exports ------------
export { askName,askBetMoney }
