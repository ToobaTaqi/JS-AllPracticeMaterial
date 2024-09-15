const rn = Math.random() * 100 + 1;
// console.log(rn);
// console.log(parseInt(rn));
console.log(Math.round(rn));

const submit = document.querySelector("#subt");
const userInp = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")