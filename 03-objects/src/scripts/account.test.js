import { Account, AccountController } from './account.js'

test('account test', () => {
    // console.log('we are in test');

    //initial balance 25
    const checkingAccount = new Account("Steve", 25);
    expect(checkingAccount.balance).toBe(25);

    //deposit 10
    checkingAccount.deposit(10);
    expect(checkingAccount.balance).toBe(35);

    //withdraw 30
    checkingAccount.withdraw(30);
    expect(checkingAccount.balance).toBe(5);

    expect(checkingAccount.showBalance()).toBe("Steve:5");
});



test('account controller test', () => {
    console.log("in the account controller test");
});

test('add account test', () => {
    const account = new AccountController();
    account.addAccount("checking", 10);
    //console.log(account.accList);
    expect(account.accList.length).toBe(1);
    expect(account.accList[0].accountName).toBe("checking");
    expect(account.accList[0].balance).toBe(10);

    account.addAccount("saving", 20);
    console.log(account.accList);
    expect(account.accList.length).toBe(2);
    expect(account.accList[1].accountName).toBe("saving");
    expect(account.accList[1].balance).toBe(20);
});

test('remove account test', () => {
    const account = new AccountController();
    account.addAccount("acc1", 10);
    account.addAccount("acc2", 20);

    account.removeAccount("acc2");
    console.log(account.accList);
    expect(account.accList.length).toBe(1);
    expect(account.accList[0].accountName).toBe("acc1");
    expect(account.accList[0].balance).toBe(10);
});

test('test total balance', () => {
    const account = new AccountController();
    account.addAccount("acc1", 10);
    account.addAccount("acc2", 20);
    account.addAccount("acc3", 30);
    account.addAccount("acc4", 40);
    console.log(account.accList[0].balance);
    console.log(account.accList[1].balance);
    console.log(account.accList[2].balance);
    console.log(account.accList[3].balance);
    console.log(account.totalBal());
    expect(account.totalBal()).toBe(100);
});

test('test highest balance', () => {
    const account = new AccountController();
    account.addAccount("acc1", 10);
    account.addAccount("acc2", 50);
    account.addAccount("acc3", 30);
    account.addAccount("acc4", 40);
    console.log(account.highestBal());
    expect(account.highestBal()).toBe("acc2:50");
});

test('test lowest balance', () => {
    const account = new AccountController();
    account.addAccount("acc1", 30);
    account.addAccount("acc2", 10);
    account.addAccount("acc3", 20);
    account.addAccount("acc4", 40);
    console.log(account.lowestBal());
    expect(account.lowestBal()).toBe("acc2:10");
})





