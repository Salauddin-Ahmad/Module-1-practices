// ----------------------------------------------------------------------------
// --------------------practice 1 write first program--------------------------
// ----------------------------------------------------------------------------
// const logMessage = (message: string | number): void => {
//     console.log(message);
// };

// logMessage(`Hello World, I will complete this course successfully and become a Next level Web Developer!`);
// logMessage(123);  // This should work without issues

// interface Role {
//     admin: string,
//       user: string,
//         guest: string,
// }

// ----------------------------------------------------------------------------
// -------------------------------problem2------------------------------------
// ----------------------------------------------------------------------------

// type Role =  'admin' | 'user' | 'guest'

// const na =(name: string , age: number , role:  Role ) => {
//  console.log(`Name: ${name} and age ${age} Role: ${role}`);
// }

// na('hello', 33 , 'user')

// ----------------------------------------------------------------------------
// -------------------------------problem3----------------------------------
// ----------------------------------------------------------------------------

/***
  * Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:
Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

  * 
  */

// Define the Persoon type
// type Persoon = {
//     name: string;
//     address: string;
//     hair: 'black' | 'brown' | 'blonde';
//     eye: 'blue' | 'green' | 'brown';
//     income: number;
//     expense: number;
//     hobbies: string[];
//     familyMembers: string[];
//     job: {
//       title: string;
//       company: string;
//       salary: number;
//       yearsOfExperience: number;
//     };
//     skills: {
//       programming: string[];
//       language: string[];
//       design: string[];
//     };
//     maritalStatus: 'single' | 'married' | 'divorced';
//     friends: {
//       name: string;
//       age: number;
//       relationship: 'friend' | 'family' | 'stranger' | 'colleagues';
//     }[];
//   };
  
//   // Create an object of type Persoon
//   const persoon: Persoon = {
//     name: "John Doe",
//     address: "456 Elm St, Metropolis",
//     hair: "brown",
//     eye: "green",
//     income: 60000,
//     expense: 30000,
//     hobbies: ["guitar", "photography", "gaming"],
//     familyMembers: ["Jane Doe", "Sam Doe"],
//     job: {
//       title: "Product Manager",
//       company: "Innovatech",
//       salary: 85000,
//       yearsOfExperience: 8,
//     },
//     skills: {
//       programming: ["JavaScript", "Python"],
//       language: ["English", "Spanish"],
//       design: ["Photoshop", "Figma"],
//     },
//     maritalStatus: "married",
//     friends: [
//       { name: "Alice", age: 28, relationship: "friend" },
//       { name: "Bob", age: 34, relationship: "colleagues" },
//     ],
//   };
  
//   // Accessing properties
//   console.log(persoon.name);                // Output: John Doe
//   console.log(persoon.job.title);           // Output: Product Manager
//   console.log(persoon.skills.programming);  // Output: [ 'JavaScript', 'Python' ]
//   console.log(persoon.friends[0].name);     // Output: Alice
//   console.log(persoon.friends[1].relationship); // Output: colleagues
  


// ----------------------------------------------------------------------------
// -------------------------------problem4----------------------------------
// ----------------------------------------------------------------------------

/***
 * Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that: Takes a single string argument.
Returns the string in reverse order.

Example:
Input: "hello"
Output: "olleh"

 * 
 */


// const reverseString = (str: string) => {
//     return str.split('').reverse().join('');
// } 

// const r = reverseString('hello')
// console.log(r)



// ----------------------------------------------------------------------------
// -------------------------------problem4----------------------------------
// ----------------------------------------------------------------------------
 /**
  * 
  * \Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
  */



// const sum = (...numbers: number[]) : number => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// const b = sum(1,2,3,4,5)

// console.log(b)


// ----------------------------------------------------------------------------
// ------------------------------- problem6 -----------------------------------
// ----------------------------------------------------------------------------




/***
 * Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.
 * 
 * 
 */