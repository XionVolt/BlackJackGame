"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeck = createDeck;
exports.shuffleDeck = shuffleDeck;
exports.drawCard = drawCard;
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
function createDeck() {
    return suits.flatMap(suit => values.map(value => ({ suit, value })));
}
function shuffleDeck(deck) {
    // fisher yates shuffling
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
    return deck;
}
function drawCard(deck) {
    if (deck.length === 0) {
        console.log("Deck is empty! Reshuffling...");
        deck = shuffleDeck(createDeck());
    }
    console.log(deck.length);
    return deck.pop();
}
