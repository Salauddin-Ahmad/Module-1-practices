// Getter and setter

//  acceess modifiers

class BankAccount {
    public  readonly id: number;
    public name: string;
    protected _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    

    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }

    // getter
    get balance() {
      return this._balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance += amount;
    // }
  
    private getBalance() {
      return this._balance;
    }
    getHiddenMethod(){
        return this.getBalance();  // accessing private method
    }
  
  }
  
  class StudentAccount extends BankAccount {
      test() {
          this.getHiddenMethod();
      }
  }
  
  const goribManusherAccount = new BankAccount(111, "mr. gorib", 50);
  
//   goribManusherAccount.deposit = 0;
//   // goribManusherAccount.balance = 20;
//   goribManusherAccount.addDeposit(50) //function call
//   const myBalance = goribManusherAccount.getBalance() //function call korte hose
  
goribManusherAccount.deposit = 50;

const myBalance = goribManusherAccount.balance; //property er mot kore 
  console.log(myBalance);
  