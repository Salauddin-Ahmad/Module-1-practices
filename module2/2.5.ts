// funccction with generics

const createArray = (param: string): string[] => {
  return [param];
};
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

// const res1 = createArray("Bangaldesh");

const res10 = createArrayWithTuple<string, number>("Bangladeshj", 222);

const resGeneric = createArrayWithTuple<string, { name: string }>("bd", {
  name: "asia",
});

type Userr = { id: number; name: string };

const resGenericObj = createArrayWithGeneric<Userr>({
  id: 222,
  name: "mr. pashan",
});

const addCourseToStudent = <T>(student: T) => {
  const course = "Next level web development";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({name: 'mrx', email: 'x@gmail', devType: 'nlwd'})

const student2 = addCourseToStudent({name: 'mry', email: 'y@gmail', hasWatch: 'nlwd'})
