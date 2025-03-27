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
    return deck.sort(() => Math.random() - 0.5);
}
function drawCard(deck) {
    return deck.length > 0 ? deck.pop() : null;
}
