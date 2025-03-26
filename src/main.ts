// Imports
import {askName} from './utilities/takeInputs';
import {shuffled_Array} from './utilities/deckFunctionality';


// -------------------------------------------------------------------
// Taking user name
const name = askName();
console.log(`Hello ${name}!`, '\n\n');


// Bet functionality
// function placeBet()  // !import
// {
    
//     const bet = Number(prompt("Place your bet: "));
//     if (isNaN(bet)) {
//         console.log("Invalid bet. Please enter a number.",'\n');
//         placeBet();
//     } else if (bet > playerMoney) {
//         console.log(`You bet more money than you have. You have $${playerMoney}.`, '\n');
//         placeBet();
//     }
//     else if (bet <= 0) {
//         console.log(`You bet less money than you have. You have $${playerMoney}.`, '\n');
//         placeBet();
//     } else {
//         playerMoney -= bet;
//         console.log(`You bet $${bet} . Left: $${playerMoney}.`, '\n');
//     }
// }
function giveCards() {
    const playerCard = [shuffled_Array.pop(),shuffled_Array.pop()];
    const dealerCard = [shuffled_Array.pop(),shuffled_Array.pop()];    
     if (playerCard[0]!.value === 'A' || playerCard[1]!.value === 'A') {
        
     }   

    console.log(`Your hand: ${playerCard[0]!.value}, ${playerCard[1]!.value}. (Total: ${Number(playerCard[0]!.value)  + Number(playerCard[1]!.value)})`);
    console.log(`Dealer's hand: ${Number(dealerCard[0]!.value)}, [hidden]`);

}

placeBet();
giveCards();
