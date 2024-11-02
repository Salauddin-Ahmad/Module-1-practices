//generic constraints with keyof operator


type Vehicle = {
    bike: string;
    car: string;
    ship: string
}
type Owner = "bike" | "car" | "ship" ; //manually

type Owner2 = keyof Vehicle // through keyof

const  getPropertyValue = <X,Y extends keyof X
 >(obj: X, key : Y) => {
return obj[key] 
}



const ussser = {
    name :'mr. persian',
    age:26,
    address:'ctg'
}

const car = {
    model: 'toyota 100',
    year: 300
}

const rezult1 = getPropertyValue(car, 'model');

// obj

// const usar  = {
//     name: 'Mr. Persian',
//     age: 26,
//     address: 'ctg'
// }

// usar['name'] 


