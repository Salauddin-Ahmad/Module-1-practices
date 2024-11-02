// Defining a Vehicle type with specific properties
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
};

// Manually creating a union type that matches Vehicle's property keys
type Owner = "bike" | "car" | "ship";

// Using `keyof` operator to automatically derive a union type of Vehicle's keys
type Owner2 = keyof Vehicle; // Equivalent to: "bike" | "car" | "ship"

// Generic function `getPropertyValue` that retrieves a property value from an object
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    // Returns the value of the specified key in the object
    return obj[key];
};

// Example object `ussser` with various properties (not used in function)
const ussser = {
    name: 'mr. persian',
    age: 26,
    address: 'ctg'
};

// Another example object `car` with properties for demonstration
const car = {
    model: 'toyota 100',
    year: 300
};

// Using `getPropertyValue` to retrieve the 'model' property from the `car` object
const rezult1 = getPropertyValue(car, 'model'); // Returns: 'toyota 100'
