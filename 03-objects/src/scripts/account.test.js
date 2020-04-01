import account from './account.js'

test('account test', () => {
    // console.log('we are in test');
    // const Steve = new Account("Steve",25);
    // console.log(Steve);
    // console.log(Steve.deposit(30));

    //initial balance 25
    const checkingAccount = new account.Account("Steve",25);
    expect(checkingAccount.curBalance).toBe(25);
    //deposit 10
    checkingAccount.deposit(10);
    console.log(checkingAccount.balance()); 
    expect(checkingAccount.balance()).toBe(35); 
    //withdraw 30
    checkingAccount.withdraw(30);
    console.log(checkingAccount.balance());
    expect(checkingAccount.balance()).toBe(5);
})

