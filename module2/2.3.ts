// generics type
// type GenericArray = Array<string>
type GenericArray<T> = Array<T>;

// const rollNumbers : number[] = [3, 6, 8];
const rollNumbers: GenericArray<number> = [3, 6, 8];

// const mentors: string[] = ['mr,x', 'mr,y', 'mr,z']
const mentors: Array<string> = ["mr,x", "mr,y", "mr,z"];
// const mentors: GenericArray = ['mrx', 'mry', 'mrz']

// const bollArray : boolean[] = [true, false, true];
const bollArray: GenericArray<boolean> = [true, false, true];

const useer: GenericArray<{ name: string; age: number }> = [
  {
    name: "john",
    age: 100,
  },
  {
    name: "jane",
    age: 150,
  },

];

const sums = (x: number, y: number, z: number) => x + y;

add(30, 20);


type GenericTuple<X,Y> = [X, Y]

// generic tuple
const manush : GenericTuple<string, string> = ['mr.x', 'mr.y']


const UserWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'persian', email:'a@gmail.com'}]