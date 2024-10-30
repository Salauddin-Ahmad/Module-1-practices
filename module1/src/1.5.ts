// reference data types --> Object

// imlicit type infer
const user: {
//   company: "xyz corporation"; //literal types
   readonly company: string; 
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "xyz corporation",
  firstName: "Mezbaul",
  lastName: "Hussein",
  isMarried: true,
};

// user.company = "Programming Hero", //Cannot assign to 'company' because it is a read-only 

