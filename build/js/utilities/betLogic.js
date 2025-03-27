"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeBet = placeBet;
exports.askName = askName;
exports.askBetMoney = askBetMoney;
function placeBet(player, betAmount) {
    if (betAmount > player.getMoney()) {
        console.log("Insufficient funds to place this bet.");
        return false;
    }
    player.updateMoney(-betAmount);
    return true;
}
// takeInputs.ts
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function askName() {
    return (0, prompt_sync_1.default)()('What is your name? ');
}
function askBetMoney() {
    let bet;
    do {
        bet = parseFloat((0, prompt_sync_1.default)()('Enter your bet amount: '));
    } while (isNaN(bet) || bet <= 0);
    return bet;
}
