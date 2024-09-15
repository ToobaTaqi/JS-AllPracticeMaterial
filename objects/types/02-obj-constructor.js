// const facebook1 = {}; // non singleton obj - object literal
const facebook2 = new Object(); // singleton object

facebook2.id = "123abc";
facebook2.name = "tooba";
// console.log(facebook2);

// merge objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj = { ...obj1, ...obj2 }; //1 "mostly used"
const obj = Object.assign({}, obj1, obj2); //Onject.assign(target,source,source,source,.....) "rarely used"

// console.log(obj);

// console.log(Object.keys(facebook2));
// console.log(Object.values(facebook2));
// console.log(Object.entries(facebook2));
// console.log(Object.hasOwnProperty("loggedIn"));

// ++++++++++++object de-structuring++++++++++++ //mostly used in reactjs to pass the props
const course = {
  coursename: "JavaScript",
  fee: 9000,
  courseInstructor: "Hitesh Choudhary",
};

// console.log(course['courseInstructor'], course.courseInstructor) //odd way

// extract a value from object
const { courseInstructor: instructor } = course;
console.log(instructor);
