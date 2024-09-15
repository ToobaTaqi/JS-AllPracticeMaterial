// actually higher order array loop
const coding = ["py", "js", "cpp", "java", "ruby"];

// Method 1
coding.forEach(function (item) {
  //by using callback function
  //   console.log(item);
});

// Method 2
// coding.forEach((item) => console.log(item)); //bu using arrow function

// Method 3

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe); //sirf function ka reference dena h usko execute nhi krna

// concept 2
coding.forEach(function (item, index, arr) {
//   console.log(item, index, arr);
});

// concept 3 - foreach on array of objects
const code = [
  {
    lang: "python",
    filename: "py",
  },
  {
    lang: "javascript",
    filename: "js",
  },
  {
    lang: "C++",
    filename: "cpp",
  },
];

code.forEach(
    (item)=>{
        console.log(item.filename)
    }
)