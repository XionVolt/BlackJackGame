"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askName = askName;
exports.askBetMoney = askBetMoney;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function askName() {
    const name = prompt('What is your name? ');
    return name;
}
function askBetMoney() {
    const bet = Number(prompt("Place your bet: "));
    return bet;
}
