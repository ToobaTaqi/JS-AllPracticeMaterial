// Objeect literal:
const user = {
  username: "Tooba",
  loginCount: "8",
  signedIn: true,
  getUserDetails: function () {
    // console.log(this.username)
    // console.log(this)
    // console.log("God user details from database");
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// Constructor functions:
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //   return this; //implicitely return - khudi return krdeta h
}
const user1 = new User("tooba", 12, true);
const user2 = new User("Shabbo", 10, false);
console.log(user1.constructor); //constructor is a referance of main function - khudka ref
console.log(user2);
// new keyword used to make new context and that is called constructor function
// new keyword use krte hi ek new object create hojata h jisko instance kehte heyn

// instanceof k baare m khudse prho
