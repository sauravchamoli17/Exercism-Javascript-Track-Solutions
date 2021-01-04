export class BankAccount {
  constructor() {
    this.accBalance = 0;
  }

  open() {
    if(this.isAccount)
     throw new ValueError;
    this.isAccount = true;
  }

  close() {
    if(!this.isAccount)
     throw new ValueError;
    this.accBalance = 0;
    this.isAccount = false;
  }

  deposit(depositMoney) {
    if(!this.isAccount || Math.sign(depositMoney) == -1)
     throw new ValueError;
    this.accBalance = this.accBalance + depositMoney;
  }

  withdraw(withdrawMoney) {
    if(!this.isAccount || withdrawMoney > this.balance || Math.sign(withdrawMoney) == -1)
     throw new ValueError;
    this.accBalance = this.accBalance - withdrawMoney;
  }

  get balance() {
    if(!this.isAccount)
     throw new ValueError;
    return this.accBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}