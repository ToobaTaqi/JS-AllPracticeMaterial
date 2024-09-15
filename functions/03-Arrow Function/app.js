// this - refers the current context

const user = {
  username: "tooba",
  fee: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "shabbo";
// user.welcomeMessage();
// console.log(this);

// function example(){   //this cant work with functions
//     console.log(this)
// }
// example()

// +++++ Arrow Functions +++++

const example = () => {
  //this cant work with functions
  username = "toob";
  console.log(this.username);
  console.log(this);
};
// example()

const add = (n1, n2) => {
  return n1 + n2;
};
console.log(add(3, 5));

// +++++ Arrow Function with emplicit return +++++
const sub = (n1, n2) => n1 - n2;

console.log(sub(3,3))
