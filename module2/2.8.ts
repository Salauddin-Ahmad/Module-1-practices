// promise


type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
const getTodo = async (): Promise<Todo> => {
   const resp = await fetch('https://jsonplaceholder.typicode.com.todos.1')

   const data = resp.json();
   return data
}



// simulate

type Something = {something: string}
const createPromise = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
    const data: Something = { something: "something" };
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Data not available"));
    }
  });
};

// calling crate promise fucntion

const showData = async (): Promise<Something> => {
  const data: Something = await createPromise();
  console.log(data);
  return data;
};

showData();
