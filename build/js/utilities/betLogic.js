"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const takeInputs_1 = require("./takeInputs");
const playerMoney_1 = require("./playerMoney");
const betMoney = (0, takeInputs_1.askBetMoney)();
function placeaskBetMoney() {
    if (isNaN(betMoney)) {
        console.log("Invalid askBetMoney. Please enter a number.", '\n');
        placeaskBetMoney();
    }
    else if (betMoney > (0, playerMoney_1.getPlayerMoney)()) {
        console.log(`You askBetMoney more money than you have. You have $${(0, playerMoney_1.getPlayerMoney)()}.`, '\n');
        placeaskBetMoney();
    }
    else if (betMoney <= 0) {
        console.log(`You askBetMoney less money than you have. You have $${(0, playerMoney_1.getPlayerMoney)()}.`, '\n');
        placeaskBetMoney();
    }
    else {
        (0, playerMoney_1.setPlayerMoney)((0, playerMoney_1.getPlayerMoney)() - betMoney);
        console.log(`You askBetMoney $${takeInputs_1.askBetMoney} . Left: $${(0, playerMoney_1.getPlayerMoney)()}.`, '\n');
    }
}
