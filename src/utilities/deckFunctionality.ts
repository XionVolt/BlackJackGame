export const suitSymbols: Record<string, string> = {
    "Hearts": "♥", "Diamonds": "♦", "Clubs": "♣", "Spades": "♠"
};


export type Card = { suit: string; value: string };

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function createDeck(): Card[] {
    return suits.flatMap(suit => values.map(value => ({ suit, value })));
}

export function shuffleDeck(deck: Card[]): Card[] {

    // fisher yates shuffling
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
        }
        return deck;
    
}

export function drawCard(deck: Card[]): Card {
    return deck.pop()!;
}   