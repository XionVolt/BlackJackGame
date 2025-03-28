"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askName = askName;
exports.askBetMoney = askBetMoney;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const commands_1 = require("./commands");
function askName() {
    const name = prompt('What is your name? ');
    return name;
}
function askBetMoney() {
    const bet = prompt("Place your bet: ");
    if (bet == '/rules') {
        (0, commands_1.displayRules)();
        return askBetMoney();
    }
    else if (isNaN(Number(bet))) {
        console.log("Invalid bet amount. Please enter a valid number.");
        return askBetMoney();
    }
    return Number(bet);
}
