// shopping cart scenario

function calculation(...n1) {
  //using res parameters
  return n1;
}
// console.log(calculation(200, 350, 400).join(" "));

// +++++++++++ function with object +++++++++++
const user = {
  name: "tooba",
  phNo: 312,
};

function handleObject(anyObject) {
  // console.log(
  //   `username is ${anyObject.name} and phone number is ${anyObject.phNo} `
  // );
}

// handleObject(user);
handleObject({ name: "shabbir", phNo: "033" }); //direct object bhi pass kr skte heyn

// +++++++++++ function with array +++++++++++
const myArr = [200, 300, 400];
function returnVal(getArr) {
  return getArr[1];
}

// console.log(returnVal(myArr))
// console.log(returnVal([200, 400, 600, 800])); //same object ki trha direct array bhi pass kr skte

// +++++++++++ Global and local scope +++++++++++

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; //dont us var
}
// console.log(a, b, c);

// +++++++++++ mini hoisting +++++++++++

// console.log(v);
// var v = 300;

function one() {
  const name = "tooba";

  function two() {
    const website = "youtube.com";

    console.log(name);
  }
  // console.log(website); //error

  two();
}
one();

// same thin in conditional statements
if (true) {
  const name = "toob";
  if (name === "toob") {
    const stack = "MERN";

    console.log("inner", name, stack);
  }
  // console.log("outer",name,stack)//error
}
// console.log(name)//error

// +++++ Function expression VS named functions +++++

console.log(addone(5)); //hoisting

function addone(num1) {
  //named function
  return num1 + 1;
}
// console.log(addone(5))


// console.log(addtwo(5)); //hoisting not supported - error
const addtwo = function (
  num2 //function expression (function hold by a variable)
) {
  return num2 + 2;
};
// console.log(addtwo(5));
