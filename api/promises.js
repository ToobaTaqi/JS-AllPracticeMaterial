// creation

const p = new Promise(function (resolve, reject) {
  // Do and async tasks
  // async tasks includes:
  // DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is completed");
    resolve(); //connection to the .then() in consumption
  }, 1000);
});

// consumption (relates directly to the "resolve")
p.then(function () {
  console.log("promise consumed");
});

// method 2 (creation and consumption both together at once)
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 promise consumed");
});

//
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 3");
    resolve({ username: "tooba", email: "abs@gmail.com" });
  }, 1000);
});

p3.then(function (user) {
  console.log(user);
});

//
const p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "tooba", pswrd: 123 });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

p4.then((user) => {
  console.log(user);
  return user.username && user.pswrd;
})
  .then((pswrd) => {
    //chaining
    console.log(pswrd);
  })
  .catch(function (error) {
    console.log("Error is:", error);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));

// another syntax
const p5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", pswrd: 123 });
    } else {
      reject("JS went wrong");
    }
  }, 1000);
});

async function consumP5() {
  try {
    const response = await p5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumP5();

// practice fetch - method 1

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response.json())
//     const data = await response.json(); //convert string response into json
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

// method 2
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => response.json())
  .then((data) => console.log(data))
  // .then((data) => console.log(data.id))
  .catch((error) => console.log(`Error : ${error}`));
