import promptSync from 'prompt-sync';
const prompt = promptSync();
import {displayRules} from './display';

export function askName () {
   const name = prompt('What is your name? '); 
   return name
}

export function askBetMoney () {
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

export function actionHitOrStand () {
    const action = prompt("(h)it or (s)tand? ").toLowerCase().trim();
    return action
} 


