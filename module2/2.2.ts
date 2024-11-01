// interface

// type aliases
type User1 = {
  name: string;
  age: number;
};


interface User2 {
    name: string,
    age: number,
  }

// extend the role propertie
type UserWithRole1 = User1 & {role: string}

// extend the role propertie with interface
interface UserWithRole2  extends User1 {
    role: string,
  
}

const user1: UserWithRole1 = {
    name: "Persian",
    age: 100,
    role: "Admin"
  };

  type rollNumber = number;

  //js --> object, array --> object 

  type  Roll1 = number[];

  interface Roll2  {
    [index: number] : number
  }

  const rollNumber: Roll1 = [1, 2, 3]

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const adds : Add2 = (num1: number, num2: number) => num1 + num2;






