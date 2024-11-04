// Define a BankAccount class to represent a bank account
class BankAccount {
    // `id` is public and readonly, meaning it can be accessed from outside but cannot be modified after initialization
    public readonly id: number;
    // `name` is public, so it can be accessed and modified from outside the class
    public name: string;
    // `_balance` is protected, meaning it can be accessed only within this class and its subclasses
    protected _balance: number;
  
    // Constructor to initialize the BankAccount with `id`, `name`, and `_balance`
    constructor(id: number, name: string, balance: number) {
      this.id = id;          // Assign the provided id to the id property
      this.name = name;      // Assign the provided name to the name property
      this._balance = balance; // Set the initial balance
    }
  
    // Public method to add a deposit amount to the balance
    public addDeposit(amount: number) {
      this._balance += amount; // Increase the balance by the deposit amount
    }
  
    // Public method to get the current balance; allows access to `_balance`
    public getBalance() {
      return this._balance; // Return the current balance
    }
  }
  
  // Define a StudentAccount class that extends BankAccount
  class StudentAccount extends BankAccount {
    // `test` method to demonstrate access to `_balance` from a subclass
    test() {
      console.log(this._balance); // Access `_balance` directly within the subclass
    }
  }
  
  // Create an instance of BankAccount with an id, name, and initial balance
  const goribManusherAccount = new BankAccount(111, "mr. gorib", 20);
  
  // Try to modify balance directly - not allowed as `_balance` is protected
  // goribManusherAccount.balance = 20; // This line would cause an error
  
  // Use addDeposit method to deposit 50 to the account
  goribManusherAccount.addDeposit(50);
  
  // Get the balance using getBalance method
  const myBalance = goribManusherAccount.getBalance();
  
  // Print the current balance to the console
  console.log(myBalance); // Expected output: 70
  