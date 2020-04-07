class Account {
    constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.balance = Number(startingBalance);
    }

    deposit(amount) {
        this.balance = this.balance + Number(amount);
    }

    withdraw(amount) {
        this.balance = this.balance - Number(amount);
    }

    showBalance() {
        return `${this.accountName}:${this.balance}`;
    }

}

class AccountController {
    constructor() {
        this.accList = [];
    }

    addAccount(accountName, startingBalance) {
        let newAccount = new Account(accountName, startingBalance);
        this.accList.push(newAccount);
    }

    removeAccount(accName) {
        for (let i = 0; i < this.accList.length; i++) {
            if (accName === this.accList[i].accountName) {
                this.accList.splice(i, 1)
            }
        }
    }

    totalBal() {
        let sum = 0;
        for (let i = 0; i < this.accList.length; i++) {
            sum += Number(this.accList[i].balance);
        }
        return sum;
    }

    highestBal() {
        let highValue = this.accList[0].balance;
        let highAccountName = this.accList[0].accountName;
        for (let i = 1; i < this.accList.length; i++) {
            if (highValue < this.accList[i].balance) {
                highValue = this.accList[i].balance;
                highAccountName = this.accList[i].accountName;
            }
        }
        return `${highAccountName}:${highValue}`;
    }

    lowestBal() {
        let lowValue = this.accList[0].balance;
        let lowAccountName = this.accList[0].accountName;
        for (let i = 1; i < this.accList.length; i++) {
            if (lowValue > this.accList[i].balance) {
                lowValue = this.accList[i].balance;
                lowAccountName = this.accList[i].accountName;
            }
        }
        return `${lowAccountName}:${lowValue}`;
    }
}
export { Account, AccountController };