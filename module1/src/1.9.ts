{
  // type alias

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  //  defined type with type Student
  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "Male",
    contactNo: "0123456789",
    address: "ctg",
  };

  //  defined type by typing manully

  const student2: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Mir",
    age: 45,
    gender: "male",
    contactNo: "9876543210",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;


  const add: Add = (num1, num2) => num1 + num2;

  //
}
