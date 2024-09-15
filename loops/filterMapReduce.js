const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter method bhi apne andr callback leta h
const f = arr.filter((n) => {
  return n > 7;
});
// console.log(f);

// do above operation with forEach
const newArr = [];
arr.forEach((n) => {
  if (n > 7) {
    // let a=newArr.push(n)
    return newArr.push(n);
  }
});
// console.log(newArr);

// filter on array of objects
const books = [
  {
    title: "b1",
    genre: "history",
    year: 1992,
    author: "a1",
  },
  {
    title: "b2",
    genre: "finction",
    year: 1992,
    author: "a2",
  },
  {
    title: "b3",
    genre: "sci-fiction",
    year: 2000,
    author: "a3",
  },
  {
    title: "b4",
    genre: "non-fiction",
    year: 1998,
    author: "a4",
  },
  {
    title: "b5",
    genre: "comic",
    year: 2005,
    author: "a5",
  },
  {
    title: "b6",
    genre: "fiction",
    year: 2019,
    author: "a6",
  },
];

const filtered = books.filter((b) => {
  return b.year >= 2000 && b.genre === "fiction";
});
// console.log(filtered[2]);
// console.log(filtered);

// ++++++++++ map ++++++++++
const m = arr.map((m) => {
  return m + 10;
});
// console.log(m)

// ++++++++++ chaining methodes ++++++++++

const chain = arr
  .map((a) => a + 10)
  .filter((d) => d % 2 === 0)
  .filter((g) => g >= 15);
// console.log(chain);

// ++++++++++ reduce() ++++++++++
// mostly used in shopping carts when calculating total price of things user wanna purchase
const arr2 = [1, 2, 3];

const myTotal = arr2.reduce(
  (acc, currVal) =>
    // console.log(`acc=${acc} & currVal=${currVal}`)
    acc + currVal,
  0
); //0 is accumulator value

console.log(myTotal);

// question: create an array of objects and apply reduce to calculate total price
