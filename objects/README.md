### Basic Exercises

## 1 Object Creation and Property Access:
   - Create an object `book` with properties `title`, `author`, and `year`.
   - Access and log the `title` property of the `book` object.
   - Add a new property `genre` to the `book` object.
   - Update the `year` property to the current year.
   - Delete the `author` property from the `book` object.

## 2. Methods in Objects:
   - Create an object `calculator` with methods `add`, `subtract`, `multiply`, and `divide`.
   - Each method should take two numbers as arguments and return the result.
   - Use the `calculator` object to perform some calculations and log the results.

3. **Nested Objects:**
   - Create an object `student` with properties `name`, `age`, and `address`.
   - The `address` property should be an object with properties `street`, `city`, and `country`.
   - Access and log the `city` property of the `address` object.

### Intermediate Exercises

4. **Prototypes:**
   - Create a constructor function `Person` with properties `firstName` and `lastName`.
   - Add a method `fullName` to the prototype of `Person` that returns the full name.
   - Create two instances of `Person` and log their full names using the `fullName` method.

5. **Inheritance:**
   - Create a constructor function `Employee` that inherits from `Person` and adds a `position` property.
   - Add a method `introduce` to the prototype of `Employee` that introduces the person with their full name and position.
   - Create an instance of `Employee` and call the `introduce` method.

6. **Object Methods:**
   - Create an object `library` with properties `name` and `books` (an array of book objects).
   - Add methods `addBook`, `removeBook`, and `listBooks` to manage the `books` array.
   - Use the `library` object to add, remove, and list books.

### Advanced Exercises

7. **Object Destructuring:**
   - Create an object `employee` with properties `id`, `name`, `position`, and `salary`.
   - Use destructuring to extract the `name` and `position` properties into variables.
   - Log the extracted variables.

8. **Spread Operator:**
   - Create two objects `obj1` and `obj2` with some properties.
   - Use the spread operator to merge `obj1` and `obj2` into a new object `mergedObj`.
   - Log the `mergedObj`.

9. **Object.assign() and Deep Copy:**
   - Create a nested object `original` with several properties and nested objects.
   - Use `Object.assign()` to create a shallow copy of `original`.
   - Modify the shallow copy and observe the changes in the original object.
   - Write a function to create a deep copy of the `original` object and demonstrate that changes to the deep copy do not affect the original object.

10. **Real-world Scenario:**
    - Create an object `project` with properties `name`, `description`, `tasks` (an array of task objects).
    - Each `task` object should have properties `title`, `status`, and `deadline`.
    - Add methods to the `project` object to:
      - Add a new task.
      - Mark a task as complete.
      - List all tasks.
      - List all pending tasks.
    - Use the `project` object to manage a sample project with multiple tasks.

### Extra Challenges

11. **Dynamic Property Names:**
    - Create an object with dynamic property names using computed property names.
    - Write a function that takes a key and a value as arguments and adds them as a property to an object.

12. **Setters and Getters:**
    - Create an object with private properties and use getters and setters to access and modify these properties.
    - Demonstrate the use of these getters and setters with some examples.

