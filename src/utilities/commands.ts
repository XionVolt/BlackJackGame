export function displayRules(): void {
    console.log(`\n"==== Blackjack Rules ===="`);
    console.log("----------------------------------------------------------------");
    console.log("1. The goal is to get as close to 21 as possible without exceeding it.");
    console.log("2. Number cards (2-10) are worth their face value.");
    console.log("3. Face cards (J, Q, K) are worth 10 points each.");
    console.log("4. Aces can be worth either 1 or 11, depending on what benefits the player.");
    console.log("5. Each player starts with two cards, and can choose to 'Hit' (draw another card) or 'Stand' (keep their current hand).");
    console.log("6. The dealer must draw cards until their total is at least 17.");
    console.log("7. If the player's hand exceeds 21, they bust and lose the round.");
    console.log("8. If the player and dealer have the same total, it's a push (tie).");
    console.log("9. Blackjack (Ace + 10/J/Q/K) pays 3:2 if the dealer does not have Blackjack.");
    console.log("----------------------------------------------------------------");
    console.log("Type your next move!\n");
}

