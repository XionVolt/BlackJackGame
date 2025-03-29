"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deckFunctionality_1 = require("./utilities/deckFunctionality");
const playerMoney_1 = require("./utilities/playerMoney");
const betLogic_1 = require("./utilities/betLogic");
const takeInputs_1 = require("./utilities/takeInputs");
const display_1 = require("./utilities/display");
const calculate_1 = require("./utilities/calculate");
// ----- Main Function -----
function blackjackGame() {
    console.log("Welcome to Blackjack!");
    (0, display_1.displayCommands)();
    const playerName = (0, takeInputs_1.askName)();
    const player = new playerMoney_1.Player(); // first param takes initial money, so initial money can be change from here
    while (player.getMoney() > 0) {
        let deck = (0, deckFunctionality_1.shuffleDeck)((0, deckFunctionality_1.createDeck)());
        let playerHand = [(0, deckFunctionality_1.drawCard)(deck), (0, deckFunctionality_1.drawCard)(deck)];
        let dealerHand = [(0, deckFunctionality_1.drawCard)(deck), (0, deckFunctionality_1.drawCard)(deck)];
        console.log(`${playerName[0].toUpperCase() + playerName.slice(1).toLowerCase()}, you have $${player.getMoney()} for betting`);
        let bet = (0, takeInputs_1.askBetMoney)();
        if (!(0, betLogic_1.placeBet)(player, bet))
            continue;
        console.log((0, display_1.displayHand)(playerHand));
        console.log(`Dealer's Hand: ${dealerHand[0].value}${deckFunctionality_1.suitSymbols[dealerHand[0].suit]}, [Hidden]`);
        // ------- Blackjack (Ace + 10/J/Q/K) --------
        if ((0, calculate_1.calculateTotal)(playerHand) === 21) {
            console.log("Blackjack! You win!");
            player.updateMoney(bet * 2.5);
            continue;
        }
        // ---------------------------------------
        let playerTurn = true;
        while (playerTurn) {
            let action = (0, takeInputs_1.actionHitOrStand)();
            if (action === "h") {
                const newCard = (0, deckFunctionality_1.drawCard)(deck);
                playerHand.push(newCard);
                console.log(`New Card: ${newCard.value}${deckFunctionality_1.suitSymbols[newCard.suit]}`);
                console.log((0, display_1.displayHand)(playerHand));
                if ((0, calculate_1.calculateTotal)(playerHand) > 21) {
                    console.log("Bust! You lose.");
                    playerTurn = false;
                }
            }
            else if (action === "s") {
                playerTurn = false;
            }
            else if (action === "/rules") {
                (0, display_1.displayRules)();
            }
        }
        if ((0, calculate_1.calculateTotal)(playerHand) <= 21) {
            console.log("Dealer's Turn...");
            console.log((0, display_1.displayHand)(dealerHand, true));
            while ((0, calculate_1.calculateTotal)(dealerHand) < 17) {
                const newCard = (0, deckFunctionality_1.drawCard)(deck);
                dealerHand.push(newCard);
                console.log(`Dealer Hits! New Card: ${newCard.value}${deckFunctionality_1.suitSymbols[newCard.suit]}`);
                console.log((0, display_1.displayHand)(dealerHand, true));
            }
            const playerTotal = (0, calculate_1.calculateTotal)(playerHand);
            const dealerTotal = (0, calculate_1.calculateTotal)(dealerHand);
            if (dealerTotal > 21 || playerTotal > dealerTotal) {
                console.log("You win!");
                console.log('testing', bet * 2);
                console.log('testing2', player.getMoney());
                player.updateMoney(bet * 2);
            }
            else if (playerTotal === dealerTotal) {
                console.log("Push! Your bet is returned.");
                player.updateMoney(bet);
            }
            else if (playerTotal === 21) {
                console.log("You win!");
                player.updateMoney(bet * 2);
            }
            else {
                console.log("Dealer wins.");
            }
        }
    }
    console.log("Game over! You're out of money.");
}
blackjackGame();
