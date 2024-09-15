// Immidiately Invoked Function Expression

(function connection() { //named iife
  console.log("DB Connected");
})();

// write iife like an arrow function

( // simple/unnamed iife
    (name) => 
        console.log(`DB Connected 2 ${name}`)
)("tooba"); //passing the parameters
