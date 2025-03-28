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

export function drawCard(deck: Card[]): Card | null {
    if (deck.length === 0) {
        console.log("Deck is empty! Reshuffling...");
        deck = shuffleDeck(createDeck());  
    }
    console.log(deck.length)
    return deck.pop()!;
}   //! this function should be updated because it not properly handle the case when deck becomes empty(see if condition)