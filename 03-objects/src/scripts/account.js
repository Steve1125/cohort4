class Account {
    constructor(accountName,startingBalance) {
        this.accountName = accountName;
        this.curBalance = startingBalance;
    }

    deposit (amount) {
        this.curBalance += amount;
    }

    withdraw (amount) {
        this.curBalance -= amount;
    }

    balance () {        
         return this.curBalance;
    }        
    
}
export default {Account};