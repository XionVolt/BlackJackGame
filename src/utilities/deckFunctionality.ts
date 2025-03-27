export type Card = { suit: string; value: string };

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function createDeck(): Card[] {
    return suits.flatMap(suit => values.map(value => ({ suit, value })));
}

export function shuffleDeck(deck: Card[]): Card[] {
    return deck.sort(() => Math.random() - 0.5);
}

export function drawCard(deck: Card[]): Card | null {
    return deck.length > 0 ? deck.pop()! : null;
}