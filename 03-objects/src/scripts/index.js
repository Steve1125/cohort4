import { Account, AccountController } from './account.js'

const accountContr = new AccountController();

function createAcc(name, bal) {
    let div = document.createElement('div');

    let div1 = document.createElement('div');
    //div1.setAttribute("id","idDivAcc");
    div1.appendChild(document.createTextNode(idAccName.value));
    div.append(div1);

    let div2 = document.createElement('div');
    div2.appendChild(document.createTextNode(idStartBal.value));
    div.append(div2);

    let del = document.createElement('button');
    del.appendChild(document.createTextNode("Delete Account"));
    div.append(del);

    return div;
}

function accDropdownList(accname) {
    let option = document.createElement('option');
    option.setAttribute("id", "idOption");
    option.appendChild(document.createTextNode(accname));
    idSel.appendChild(option);
    return option;
}

document.body.addEventListener("click", (e) => {
    //Add account
    if (e.target.textContent === "Add Account") {
        if (idAccName.value !== "" && idStartBal !== "") {
            //console.log(idAccName.value,idStartBal.value);
            accountContr.addAccount(idAccName.value, idStartBal.value);
            //console.log(accountContr.accList[0]);

            let div = createAcc(idAccName.value, idStartBal.value);
            e.target.parentElement.insertBefore(div, div.nextSibling);
            //put account into dropdown
            let option = accDropdownList(idAccName.value);
            console.log(option);

            idAccName.value = "";
            idStartBal.value = "";
        }
    }

    //Delete Account
    if (e.target.textContent === "Delete Account") {
        let node = e.target.parentElement;
        // console.log(node);
        // console.log(node.childNodes);

        //Delete account card
        node.remove(node.childNodes);
        //Delete account in accList  
        accountContr.removeAccount(node.childNodes[0].textContent);
        //Delete account in dropdown list
        for (let i = 1; i < idSel.length; i++) {
            //console.log(idSel.options[i].text);
            if (idSel.options[i].text === node.childNodes[0].textContent) {
                idSel.remove(i);
            }
        }
    }

    if (e.target.textContent === "DEPOSIT") {
        console.log("in the deposit");
        for (let i = 1; i < idSel.length; i++) {
            if (idSel.options[i].selected) {
                if (idDeposit.value !== "") {
                    accountContr.accList[i - 1].deposit(idDeposit.value);
                    idDeposit.value = "";
                    console.log(accountContr.accList[i - 1].balance);
                }
            }
        }
    }

    if (e.target.textContent === "WITHDRAW") {
        console.log("in the withdraw");
        for (let i = 1; i < idSel.length; i++) {
            if (idSel.options[i].selected) {
                if (idWithdraw.value !== "" && accountContr.accList[i - 1].balance >= idWithdraw.value) {
                    console.log(accountContr.accList[i - 1].balance);
                    accountContr.accList[i - 1].withdraw(idWithdraw.value);
                    console.log(accountContr.accList[i - 1].balance);
                }
            }
        }
    }

    if (e.target.textContent === "Total Balance") {
        idTotal.value = accountContr.totalBal();
    }

    if (e.target.textContent === "Largest Account") {
        idLarge.value = accountContr.highestBal();
    }

    if (e.target.textContent === "Lowest Account") {
        idLow.value = accountContr.lowestBal();
    }
})
