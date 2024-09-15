// +++++ Nested Objects +++++

// Create an object `student` with properties `name`, `age`, and `address`.

const student={
    name:"shabbir",
    age:"17",
// The `address` property should be an object with properties `street`, `city`, and `country`.
    address: {
        street:"Nazimabad",
        city:"Karachi",
        country:"Pakistan"
    }
}

// Access and log the `city` property of the `address` object.
// console.log(student.address.city)
console.log(student['address'].city)