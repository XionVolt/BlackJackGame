import { Player } from "./playerMoney";

export function placeBet(player: Player, betAmount: number): boolean {
    if (betAmount > player.getMoney()) {
        console.log("Insufficient funds to place this bet.");
        return false;
    }
    player.updateMoney(-betAmount);
    return true;
}

// takeInputs.ts
import promptSync from 'prompt-sync';


export function askName(): string {
    return promptSync()('What is your name? ');
}

export function askBetMoney(): number {
    let bet: number;
    do {
      bet = parseFloat(promptSync()('Enter your bet amount: '));
    } while (isNaN(bet) || bet <= 0); 
    return bet; 
}
