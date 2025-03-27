"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    money;
    constructor(initialMoney = 100) {
        this.money = initialMoney;
    }
    getMoney() {
        return this.money;
    }
    updateMoney(amount) {
        this.money += amount;
    }
}
exports.Player = Player;
