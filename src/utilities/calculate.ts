import { Card } from '../utilities/deckFunctionality';
export function calculateTotal(hand: Card[]): number {
    let total = 0;
    let aces = 0;
    
    for (const card of hand) {
        if (card.value === "A") {
            aces += 1;
            total += 11;
        } else if (["K", "Q", "J"].includes(card.value)) {
            total += 10;
        } else {
            total += parseInt(card.value);
        }
    }
    
    while (total > 21 && aces > 0) {
        total -= 10;
        aces -= 1;
    }
    
    return total;
}