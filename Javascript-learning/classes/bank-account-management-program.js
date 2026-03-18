class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount
      });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount: amount
      });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const result = "Deposits: ";
    const depositArr = [];
    for (let transac of this.transactions) {
      if (transac.type == "deposit") {
        depositArr.push(transac.amount);
        depositArr.push(",");
      }
    }
    const lastIndex = depositArr.length-1;
    if (lastIndex >= 0) {
      depositArr.splice(lastIndex, 1);
      return result + depositArr.join("");
    } else {
      return result;
    }
  }

  listAllWithdrawals() {
    const result = "Withdrawals: ";
    const withdrawArr = [];
    for (let transac of this.transactions) {
      if (transac.type == "withdraw") {
        withdrawArr.push(transac.amount);
        withdrawArr.push(",");
      }
    }
    const lastIndex = withdrawArr.length-1;
    if (lastIndex >= 0) {
      withdrawArr.splice(lastIndex, 1);
      return result + withdrawArr.join("");
    } else {
      return result;
    }
  }
}

const myAccount = new BankAccount();

myAccount.deposit(100);
myAccount.deposit(200);
myAccount.deposit(400);
myAccount.withdraw(50);
myAccount.withdraw(150);

console.log(myAccount.listAllDeposits());
console.log(myAccount.checkBalance());
console.log(myAccount.transactions);
console.log(myAccount.listAllDeposits());