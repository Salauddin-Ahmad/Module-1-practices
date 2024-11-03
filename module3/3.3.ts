//  type guards

// typeOf  --> type guard

type Alphanumeric = string | number;
const addss = (
  param1: Alphanumeric,
  param2: Alphanumeric,
): string | number => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};

const res11 = addss('2', '2');
console.log(res11)


// in guard 

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'admin'
}

const getUser = (user: NormalUser | AdminUser) => {
    
    if ('role' in user) {
        console.log( `My name is  ${user.name} and my role is ${user.role}` );
    } else {
        console.log( `My name is  ${user.name} `);
    }
}


const normalUser : NormalUser = {
    name: 'Mr Normal Bhai'
} 

const adminUser: AdminUser = {
    name: 'Mr admin Bhai',
    role: 'admin',
}


getUser(adminUser)