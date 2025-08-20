function bankAccount(initialBalance = 0) {
    let balance = initialBalance;

    function deposit(amount){
        if(amount > 0){
            balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${balance}`);
        }else{
            console.log("Invalid deposit amount.");
        }
    }

    function withdraw(amount){
        if(amount > 0 && amount <= balance){
            balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${balance}`);
        }else{
            console.log("Invalid withdraw amount.");
        }
    }

    function getBalance(){
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}


const myAccount = bankAccount(100);

myAccount.deposit(5000);
myAccount.withdraw(4000);
console.log(`Current balance: ${myAccount.getBalance()}`);
