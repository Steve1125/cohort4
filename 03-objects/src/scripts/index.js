import { Account, AccountController } from './account.js'

const accountContr = new AccountController();

function createAcc(name) {    
    let div = document.createElement('div');
    div.setAttribute('class',"card bg-light md-3");
    //div.setAttribute("style","display:flex;justify-content:center");
    div.setAttribute("style","max-width: 15rem");

    let div1 = document.createElement('div');
    div1.setAttribute("class","card-header");
    div1.setAttribute("style","text-align: center");
    div1.appendChild(document.createTextNode(name));
    div.append(div1);

    let input = document.createElement('input');
    input.setAttribute('placeholder','CAD$');
    input.setAttribute('id','idBal');
    input.setAttribute("style","text-align:right");
    div.append(input);

    let button = document.createElement('button');
    button.setAttribute("class","btn-outline-success");
   // button.setAttribute("style","display:flex justify-content:center")
    button.appendChild(document.createTextNode('Balance'));
    div.append(button);

    let del = document.createElement('button');
    del.setAttribute("class","btn-outline-success");
    del.appendChild(document.createTextNode("Delete"));
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
    if (e.target.textContent === "ADD") {
        if (idAccName.value !== "" && idStartBal !== "") {
            //console.log(idAccName.value,idStartBal.value);
            accountContr.addAccount(idAccName.value, idStartBal.value);
            //console.log(accountContr.accList[0]);

            let div = createAcc(idAccName.value);
            e.target.parentElement.insertBefore(div, div.nextSibling);
            //put account into dropdown
            let option = accDropdownList(idAccName.value);
            //console.log(option);

            idAccName.value = "";
            idStartBal.value = "";
        }
    }

    if(e.target.textContent === "Balance"){
        let node = e.target.parentElement;
        //console.log(e.target.parentElement.childNodes[0]);
        for (let i = 0;i<accountContr.accList.length;i++){
            if(node.childNodes[0].textContent === accountContr.accList[i].accountName){
                node.childNodes[1].value = accountContr.accList[i].balance;
            
            }
        }
        //     //console.log(accountContr.accList[i].balance);
        //     idBal.value = accountContr.accList[i].balance;
        //}
    }

    //Delete Account
    if (e.target.textContent === "Delete") {
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
                    idWithdraw.value = "";
                    console.log(accountContr.accList[i - 1].balance);
                }
            }
        }
    }

    if (e.target.textContent === "TOTAL") {
        idTotal.value = accountContr.totalBal();
    }

    if (e.target.textContent === "LARGEST") {
        idLarge.value = accountContr.highestBal();
    }

    if (e.target.textContent === "LOWEST") {
        idLow.value = accountContr.lowestBal();
    }
})
