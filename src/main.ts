import { createDeck, shuffleDeck, drawCard, Card,suitSymbols } from "./utilities/deckFunctionality";
import { Player } from "./utilities/playerMoney";
import { placeBet } from "./utilities/betLogic";
import { askName, askBetMoney, actionHitOrStand } from "./utilities/takeInputs";
import {displayRules,displayCommands,displayHand} from './utilities/display';
import { calculateTotal } from './utilities/calculate';

// ----- Main Function -----

function blackjackGame() {
    console.log("Welcome to Blackjack!");

    displayCommands();
    
    const playerName = askName();
    const player = new Player(); // first param takes initial money, so initial money can be change from here

    
    outestloop: while (player.getMoney() > 0) {
        let deck = shuffleDeck(createDeck());
        let playerHand: Card[] = [drawCard(deck)!, drawCard(deck)!];
        let dealerHand: Card[] = [drawCard(deck)!, drawCard(deck)!];
        
        console.log(`${playerName[0].toUpperCase() + playerName.slice(1).toLowerCase()}, you have $${player.getMoney()} for betting`);
        



        let bet = askBetMoney();
        if (!placeBet(player, bet)) continue;
        
        console.log(displayHand(playerHand));
        console.log(`Dealer's Hand: ${dealerHand[0].value}${suitSymbols[dealerHand[0].suit]}, [Hidden]`);
        
        // ------- Blackjack (Ace + 10/J/Q/K) --------

        if (calculateTotal(playerHand) === 21) {
            console.log("Blackjack! You win!");
            player.updateMoney(bet * 2.5); 
            continue;
        }

        // ---------------------------------------
        let playerTurn = true;
        while (playerTurn) {

            let action = actionHitOrStand()    

            if (action === "h") {
                const newCard = drawCard(deck)!;
                playerHand.push(newCard);
                console.log(`New Card: ${newCard.value}${suitSymbols[newCard.suit]}`);
                console.log(displayHand(playerHand));
                if (calculateTotal(playerHand) > 21) {
                    console.log("Bust! You lose.");
                    playerTurn = false;
                } else if (calculateTotal(playerHand) === 21) {
                    console.log("You win!");
                    player.updateMoney(bet * 2);
                    playerTurn = false
                    continue outestloop
                }

            } else if (action === "s") {
                playerTurn = false;
            }
            else if (action === "/rules") {
                displayRules();
            }

        }
        

        
        if (calculateTotal(playerHand) <= 21) {
            console.log("Dealer's Turn...");
            console.log(displayHand(dealerHand, true));
            
            while (calculateTotal(dealerHand) < 17) {
                const newCard = drawCard(deck)!;
                dealerHand.push(newCard);
                console.log(`Dealer Hits! New Card: ${newCard.value}${suitSymbols[newCard.suit]}`);
                console.log(displayHand(dealerHand, true));
            }
            
            const playerTotal = calculateTotal(playerHand);
            const dealerTotal = calculateTotal(dealerHand);
            if (dealerTotal > 21 || playerTotal > dealerTotal) {
                console.log("You win!");
                console.log('testing', bet*2)
                console.log('testing2', player.getMoney())
                player.updateMoney(bet * 2);
            } else if (playerTotal === dealerTotal) {
                console.log("Push! Your bet is returned.");
                player.updateMoney(bet);
            }
            else {
                console.log("Dealer wins.");
            }
        }
    }
    console.log("Game over! You're out of money.");
}

blackjackGame();