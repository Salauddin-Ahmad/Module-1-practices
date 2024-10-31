// ternary operator || optional chaining || nullish coalescing

const age: number = 14;

if (age >= 18) {
  console.log("adult");
} else {
  console.log("child");
}

const isAdult = age >= 18 ? "adult" : "child";

console.log({ isAdult });

// nullish coalescing operator
// null / undefined ------> decision making

const isAuthenticated = undefined;

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";

console.log({ result1 }, { result2 });

type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentaddress: string;
    permanentaddress?: string;
  };


};
const users: User = {
    name: 'Persian',
    address: {
        city: 'ctg',
        road: 'awesome road',
        presentaddress: 'ctg',
    }
}

const permanentaddress= users?.address?.permanentaddress ?? 'No permanent address';

console.log({permanentaddress})
