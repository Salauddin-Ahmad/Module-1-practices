// constrains

// constrains the types with the extends
const addCourseToStudent = <
T extends {id: number; name: string; email: string}
>(
    student: T
) => {
  const course = "Next level web development";
  return {
    ...student,
    course,
  };
};

const student3 = addCourseToStudent({id: 33, name: 'z', email: 'z@gmail.com',  })
const student1 = addCourseToStudent({
  id: 22,
  name: "mrx",
  email: "x@gmail",
  devType: "nlwd",
});

const student2 = addCourseToStudent({
  id: 23,
  name: "mry",
  email: "y@gmail",
  hasWatch: "nlwd",
});
