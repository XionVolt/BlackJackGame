"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerMoney = getPlayerMoney;
exports.setPlayerMoney = setPlayerMoney;
// Player Initial Money 
let playerMoney = 100;
function getPlayerMoney() {
    return playerMoney;
}
function setPlayerMoney(money) {
    playerMoney = money;
}
