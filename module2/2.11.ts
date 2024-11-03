// utility

type Person = {
  name: string;
  age: number;
  email?: string;
  ContactNo: string;
};

type NameAge = Pick<Person, "name" | "age">;

// omit
type cotactInfo = Omit<Person, "name" | "age">;

// Required

type PersonRequired = Required<Person>;

//partial
type PersonPartial = Partial<Person>;

// Readonly
type PersonReadonly = Readonly<Person>


const person1: Person = {
  name: "mr.x",
  age: 200,
  ContactNo: "017",
};

person1.name = 'mr. yz'

// record 
// type MyObj = {
//     a: string,
//     b: string,
// }

type MyObj = Record<string, string>

const EmptyObj : Record<string, unknown> = {}

EmptyObj.is = 55

const obj1: MyObj = {
    a: "aa",
    b: 'bb',
    c: 'cc',
    d: 'dd',


}

//
