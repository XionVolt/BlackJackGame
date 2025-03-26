function createDeck() {
    const suits = ['♠', '♥', '♦', '♣']; // Spades, Hearts, Diamonds, Clubs
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Card values
    const deck = [];
    // for every suit it runs
    for (const suit of suits) {
        valuelabel: for (let value of values) {
            if (value === 'J' || value === 'Q' || value === 'K') {
                deck.push({ suit, value: '10' }); // Convert J, Q, K to 10
                continue valuelabel;
            }
            deck.push({ suit, value }); // Create a card object and add it to the deck
        }
    }
    return deck;
}
// Example usage
const deck = createDeck();
// -------------  shuffleArray ------------------
function shuffleArray(array : typeof deck) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const shuffled_Array = shuffleArray(deck);

// -----------------   exports   --------------------

export { shuffled_Array  };