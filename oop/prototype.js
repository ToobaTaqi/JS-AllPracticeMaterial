// 1- object, new keyword in object

function multiplyBy5(n) {
  return n * 5;
}

// console.log(multiplyBy5(5));
// function ko object ki trha bhi behave krva skte heyn
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);
// object ka prototype null hota h

const username = "tooba";
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// tea.printMe();

// 2- prototype

// study Object.setPrototypeOf()