"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const deckFunctionality_1 = require("./utilities/deckFunctionality");
const playerMoney_1 = require("./utilities/playerMoney");
const betLogic_1 = require("./utilities/betLogic");
const takeInputs_1 = require("./utilities/takeInputs");
const commands_1 = require("./utilities/commands");
const prompt = (0, prompt_sync_1.default)();
const suitSymbols = {
    "Hearts": "♥", "Diamonds": "♦", "Clubs": "♣", "Spades": "♠"
};
function displayHand(hand, isDealer = false) {
    const formattedHand = hand.map(card => `${card.value}${suitSymbols[card.suit]}`).join(", ");
    const total = calculateTotal(hand);
    return isDealer ? `Dealer's Hand: ${formattedHand} (Total: ${total})` : `Your Hand: ${formattedHand} (Total: ${total})`;
}
function calculateTotal(hand) {
    let total = 0;
    let aces = 0;
    for (const card of hand) {
        if (card.value === "A") {
            aces += 1;
            total += 11;
        }
        else if (["K", "Q", "J"].includes(card.value)) {
            total += 10;
        }
        else {
            total += parseInt(card.value);
        }
    }
    while (total > 21 && aces > 0) {
        total -= 10;
        aces -= 1;
    }
    return total;
}
function blackjackGame() {
    console.log("Welcome to Blackjack!\n--------------------------------------------------------------------------------");
    console.log('For rules, type "/rules, Good luck!"\n--------------------------------------------------------------------------------');
    const playerName = (0, takeInputs_1.askName)();
    const player = new playerMoney_1.Player(); // first param takes initial money, so initial money can be change from here
    while (player.getMoney() > 0) {
        let deck = (0, deckFunctionality_1.shuffleDeck)((0, deckFunctionality_1.createDeck)());
        let playerHand = [(0, deckFunctionality_1.drawCard)(deck), (0, deckFunctionality_1.drawCard)(deck)];
        let dealerHand = [(0, deckFunctionality_1.drawCard)(deck), (0, deckFunctionality_1.drawCard)(deck)];
        console.log(`${playerName}, you have $${player.getMoney()} for betting`);
        let bet = (0, takeInputs_1.askBetMoney)();
        if (!(0, betLogic_1.placeBet)(player, bet))
            continue;
        console.log(displayHand(playerHand));
        console.log(`Dealer's Hand: ${dealerHand[0].value}${suitSymbols[dealerHand[0].suit]}, [Hidden]`);
        let playerTurn = true;
        while (playerTurn) {
            let action = prompt("Do you want to (h)it or (s)tand? ").toLowerCase().trim();
            if (action === "h") {
                const newCard = (0, deckFunctionality_1.drawCard)(deck);
                playerHand.push(newCard);
                console.log(`New Card: ${newCard.value}${suitSymbols[newCard.suit]}`);
                console.log(displayHand(playerHand));
                if (calculateTotal(playerHand) > 21) {
                    console.log("Bust! You lose.");
                    playerTurn = false;
                }
            }
            else if (action === "s") {
                playerTurn = false;
            }
            else if (action === "/rules") {
                (0, commands_1.displayRules)();
            }
        }
        if (calculateTotal(playerHand) <= 21) {
            console.log("Dealer's Turn...");
            console.log(displayHand(dealerHand, true));
            while (calculateTotal(dealerHand) < 17) {
                const newCard = (0, deckFunctionality_1.drawCard)(deck);
                dealerHand.push(newCard);
                console.log(`Dealer Hits! New Card: ${newCard.value}${suitSymbols[newCard.suit]}`);
                console.log(displayHand(dealerHand, true));
            }
            const playerTotal = calculateTotal(playerHand);
            const dealerTotal = calculateTotal(dealerHand);
            if (dealerTotal > 21 || playerTotal > dealerTotal) {
                console.log("You win!");
                player.updateMoney(bet * 2);
            }
            else if (playerTotal === dealerTotal) {
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
