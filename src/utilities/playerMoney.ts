export class Player {
    private money: number;

    constructor(initialMoney: number = 100) {
        this.money = initialMoney;
    }

    getMoney(): number {
        return this.money;
    }

    updateMoney(amount: number): void {
        this.money += amount;
    }
}
