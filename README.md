# JavaScripts_advance_prectices_1
# JavaScript Advanced Concepts — Revision Notes & Problem-Solving Handbook

> **Goal:** Understand JavaScript concepts deeply, develop logical thinking, write clean programs, and prepare for software developer interviews.

---

## Table of Contents

1. [How to Think Like a Programmer](#1-how-to-think-like-a-programmer)
2. [Universal Problem-Solving Approach](#2-universal-problem-solving-approach)
3. [Higher-Order Functions](#3-higher-order-functions)
4. [First-Class Functions](#4-first-class-functions)
5. [Constructor Functions](#5-constructor-functions)
6. [The ](#6-the-new-keyword)[`new`](#6-the-new-keyword)[ Keyword](#6-the-new-keyword)
7. [IIFE](#7-iife)
8. [Prototype](#8-prototype)
9. [Prototypal Inheritance](#9-prototypal-inheritance)
10. [`this`](#10-this-call-apply-and-bind)[, ](#10-this-call-apply-and-bind)[`call`](#10-this-call-apply-and-bind)[, ](#10-this-call-apply-and-bind)[`apply`](#10-this-call-apply-and-bind)[, and ](#10-this-call-apply-and-bind)[`bind`](#10-this-call-apply-and-bind)
11. [Pure and Impure Functions](#11-pure-and-impure-functions)
12. [Closures](#12-closures)
13. [Common Problem-Solving Patterns](#13-common-problem-solving-patterns)
14. [Practice Questions](#14-practice-questions)
15. [Debugging Checklist](#15-debugging-checklist)
16. [Revision Checklist](#16-revision-checklist)
17. [Interview Preparation](#17-interview-preparation)

---

## 1. How to Think Like a Programmer

Programming is not about remembering every line of code. It is about understanding a problem and finding a sequence of steps that solves it.

### The four levels of learning

| Level               | What you should be able to do                   |
| ------------------- | ----------------------------------------------- |
| Level 1: Understand | Explain what a concept means in simple English. |
| Level 2: Trace      | Predict the output without running the program. |
| Level 3: Implement  | Write a program without copying a solution.     |
| Level 4: Apply      | Use the concept to solve a new problem.         |

**Rule:** Do not move to the next level until you can explain the current level clearly.

### Example: Find the largest number

**Problem:** Find the largest number in an array.

Input:

```javascript
const numbers = [10, 5, 25, 8, 15];
```

Think before coding:

1. What is the input? An array of numbers.
2. What is the output? The largest number.
3. What is the simplest approach? Assume the first number is largest.
4. What must happen next? Compare every remaining number.
5. What happens when a larger number is found? Update the answer.

Solution:

```javascript
function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([10, 5, 25, 8, 15]));
// 25
```

The important skill is understanding *why* the comparison works, not memorizing the code.

---

## 2. Universal Problem-Solving Approach

Use this method whenever you receive a coding problem.

### Step 1: Understand the problem

Read the question carefully.

Ask yourself:

- What information am I receiving?
- What result should I return?
- Are there any restrictions?
- What should happen for empty or invalid input?

### Step 2: Identify input and output

Example:

```text
Input:  [1, 2, 3, 4, 5]
Task:   Return only even numbers
Output: [2, 4]
```

### Step 3: Solve manually

Before coding, work through a small example using pen and paper.

```text
1 → odd  → skip
2 → even → keep
3 → odd  → skip
4 → even → keep
5 → odd  → skip
```

### Step 4: Write pseudocode

Pseudocode describes the logic without worrying about JavaScript syntax.

```text
Create an empty result array.
Visit each number.
If the number is even, add it to the result.
Return the result.
```

### Step 5: Convert the logic into JavaScript

```javascript
function getEvenNumbers(numbers) {
    const result = [];

    for (const number of numbers) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }

    return result;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5]));
// [2, 4]
```

### Step 6: Test different cases

```javascript
console.log(getEvenNumbers([1, 3, 5])); // []
console.log(getEvenNumbers([2, 4, 6])); // [2, 4, 6]
console.log(getEvenNumbers([]));        // []
```

### Step 7: Improve the solution

Consider readability, performance, edge cases and whether a built-in method makes the code simpler.

**Remember this sequence:**

`Understand → Input/Output → Manual Example → Pseudocode → Code → Test → Improve`

---

## 3. Higher-Order Functions

### Definition

A higher-order function is a function that takes another function as an argument, returns a function, or does both.

### Example

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, multiply)); // 50
```

### How to think about it

1. `calculate()` receives two numbers.
2. It also receives a function.
3. That function defines the operation.
4. The higher-order function executes the operation.

### Important array methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// Transform every element
console.log(numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

// Select matching elements
console.log(numbers.filter(n => n > 3));
// [4, 5]

// Combine elements into one result
console.log(numbers.reduce((sum, n) => sum + n, 0));
// 15
```

| Method      | Purpose                            | Output                 |
| ----------- | ---------------------------------- | ---------------------- |
| `map()`     | Transform each element             | New array              |
| `filter()`  | Keep matching elements             | New array              |
| `reduce()`  | Accumulate a result                | Usually a single value |
| `forEach()` | Perform an action for each element | `undefined`            |

### When should you use it?

- When an operation should be reusable.
- When you want to transform or filter arrays.
- When different operations need to share the same algorithm.
- When working with callbacks and asynchronous JavaScript.

### Practice

1. Square every number in an array.
2. Return only numbers greater than 10.
3. Find the sum of all array elements.
4. Count how many even numbers exist.
5. Write a function that accepts another function as an argument.

---

## 4. First-Class Functions

### Definition

JavaScript treats functions as first-class values. Functions can be stored in variables, passed as arguments and returned from other functions.

```javascript
function greet() {
    return "Hello, Ujjwal!";
}

const sayHello = greet;

console.log(sayHello());
// Hello, Ujjwal!
```

Notice the difference:

```javascript
const first = greet;   // Store the function
const second = greet(); // Store its returned value
```

### How to recognize the concept

Whenever you see a function being assigned to a variable, passed to another function or returned from a function, first-class function behavior is involved.

### Practice

1. Store a multiplication function in a variable.
2. Pass a greeting function to another function.
3. Return a function from a function.
4. Explain the difference between `greet` and `greet()`.

---

## 5. Constructor Functions

### Definition

A constructor function is a traditional way to create multiple objects with the same general structure.

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Ujjwal", 22);
const student2 = new Student("Rahul", 21);

console.log(student1.name); // Ujjwal
console.log(student2.name); // Rahul
```

### How to think about it

Imagine that you need to create 100 student objects.

Instead of writing 100 objects manually, define one constructor and reuse it.

### When should you use it?

- When learning JavaScript's object model.
- When creating similar objects using traditional constructor functions.
- When understanding older JavaScript code.

Modern JavaScript also provides `class` syntax.

### Practice

1. Create a `Product` constructor.
2. Store product name and price.
3. Create three different products.
4. Add a method that prints product details.

---

## 6. The `new` Keyword

### Definition

The `new` keyword creates an object from a constructor function or class.

```javascript
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

const car = new Car("Tata", "Black");

console.log(car.brand); // Tata
console.log(car.color); // Black
```

### What does `new` do?

For a normal constructor function, JavaScript broadly:

1. Creates a new object.
2. Links that object's prototype to the constructor's `prototype`.
3. Calls the constructor with `this` set to the new object.
4. Returns the new object, unless the constructor explicitly returns another object.

### Important warning

Calling a constructor without `new` can produce different behavior or an error, especially in strict mode.

```javascript
const car = new Car("Tata", "Black"); // Correct
```

### Practice

1. Create a `Mobile` constructor.
2. Create two mobile objects.
3. Compare their properties.
4. Explain why `new` is required in this example.

---

## 7. IIFE — Immediately Invoked Function Expression

### Definition

An IIFE is a function expression that executes immediately after it is defined.

```javascript
(function () {
    const message = "Hello JavaScript";
    console.log(message);
})();
```

Output:

```text
Hello JavaScript
```

### How to recognize it

Look for a function expression followed immediately by `()`.

### Why is it useful?

IIFEs were commonly used to create local scopes and avoid polluting the global scope before JavaScript modules became widespread.

### Practice

1. Write an IIFE that prints your name.
2. Write an IIFE that calculates a sum.
3. Declare a variable inside an IIFE and try accessing it outside.
4. Explain why the variable is not accessible outside the function.

---

## 8. Prototype

### Definition

A prototype is an object used in JavaScript's inheritance mechanism. Objects can access properties and methods through their prototype chain.

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log("Hello, " + this.name);
};

const s1 = new Student("Ujjwal");
const s2 = new Student("Rahul");

s1.greet(); // Hello, Ujjwal
s2.greet(); // Hello, Rahul
```

### Why use a prototype?

Methods defined on `Student.prototype` can be shared by instances instead of creating a separate method for every student.

### Important distinction

- `Student.prototype` is the prototype object used by instances created with `new Student()`.
- `Object.getPrototypeOf(s1)` returns the prototype of `s1`.

### Practice

1. Create an `Employee` constructor.
2. Add a `work()` method to its prototype.
3. Create two employees.
4. Check whether both objects can access the same prototype method.

---

## 9. Prototypal Inheritance

### Definition

Prototypal inheritance lets an object access properties and methods from another object through its prototype chain.

```javascript
const animal = {
    eat() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking...");
};

dog.eat();  // Eating...
dog.bark(); // Barking...
```

### How to think about it

The `dog` object does not define `eat()` itself. JavaScript searches its prototype chain and finds the method on `animal`.

### Practice

1. Create a `vehicle` object.
2. Add a `start()` method.
3. Create a `car` object inheriting from `vehicle`.
4. Add a separate `drive()` method to `car`.
5. Explain which methods are owned by `car` and which are inherited.

---

## 10. `this`, `call()`, `apply()` and `bind()`

### Understanding `this`

In a regular method call, `this` generally refers to the object before the dot.

```javascript
const user = {
    name: "Ujjwal",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Ujjwal
```

The value of `this` depends on how a regular function is called. Arrow functions do not create their own `this`.

### `call()`

Calls a function immediately with a chosen `this` value.

```javascript
function introduce(city) {
    console.log(this.name + " from " + city);
}

const user = { name: "Ujjwal" };

introduce.call(user, "Patna");
// Ujjwal from Patna
```

### `apply()`

Works like `call()`, but supplies arguments in an array.

```javascript
introduce.apply(user, ["Patna"]);
// Ujjwal from Patna
```

### `bind()`

Returns a new function with `this` bound to the chosen object.

```javascript
const boundIntroduce = introduce.bind(user, "Patna");

boundIntroduce();
// Ujjwal from Patna
```

### Quick comparison

| Method    | Arguments                                     | Immediate execution |
| --------- | --------------------------------------------- | ------------------- |
| `call()`  | Separate arguments                            | Yes                 |
| `apply()` | Array of arguments                            | Yes                 |
| `bind()`  | Separate arguments; can be partially supplied | No                  |

### Practice

1. Create two user objects.
2. Write one function that prints a user's name.
3. Call the function using both objects.
4. Create a bound function and execute it later.
5. Explain how the result changes with each method.

---

## 11. Pure and Impure Functions

### Pure function

A pure function returns the same output for the same inputs and has no observable side effects.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
```

### Impure function

An impure function may depend on or modify external state, or produce another side effect.

```javascript
let total = 10;

function addToTotal(value) {
    total += value;
    return total;
}

console.log(addToTotal(5)); // 15
console.log(addToTotal(5)); // 20
```

### Why should you care?

Pure functions are easier to test, debug and reason about because they do not change external state.

### Practice

1. Write a pure function that squares a number.
2. Write an impure function that modifies a global variable.
3. Explain why the second function can produce different results for the same argument.
4. Rewrite the second function as a pure function.

---

## 12. Closures

### Definition

A closure occurs when a function retains access to variables from its outer lexical scope, even after that outer function has finished executing.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### How does it work?

1. `createCounter()` creates `count`.
2. The inner function refers to `count`.
3. The outer function returns the inner function.
4. The inner function retains access to that variable.
5. Every call updates the same `count`.

### Why are closures useful?

- Maintaining private state.
- Creating reusable function factories.
- Building counters.
- Event handlers and callbacks.
- Understanding how JavaScript remembers variables.

### Practice

1. Create a counter that decreases.
2. Create a function that remembers a user's name.
3. Create a function that multiplies numbers by a fixed value.
4. Create two counters and verify that they maintain separate state.
5. Explain why `count` remains accessible.

---

## 13. Common Problem-Solving Patterns

Many programming questions use a small set of recurring logical patterns.

| Pattern               | When to use it                             | Example problem                       |
| --------------------- | ------------------------------------------ | ------------------------------------- |
| Looping               | Visit every element                        | Find the largest number               |
| Filtering             | Keep elements that satisfy a condition     | Find even numbers                     |
| Transformation        | Change each element                        | Square array elements                 |
| Accumulation          | Build a total or result                    | Sum all numbers                       |
| Counting              | Count occurrences                          | Count vowels                          |
| Lookup                | Find a particular value                    | Search for a name                     |
| Frequency map         | Track how often values appear              | Find duplicate numbers                |
| Two pointers          | Process elements from two positions        | Reverse an array                      |
| Sliding window        | Process a continuous range efficiently     | Maximum sum of a subarray of size `k` |
| Recursion             | Solve smaller versions of the same problem | Factorial                             |
| Closure               | Retain state between calls                 | Counter                               |
| Higher-order function | Reuse behavior through callbacks           | Custom calculator                     |

### Example: Counting frequency

Problem: Count how many times each number appears.

```javascript
function countFrequency(numbers) {
    const frequency = {};

    for (const number of numbers) {
        frequency[number] = (frequency[number] || 0) + 1;
    }

    return frequency;
}

console.log(countFrequency([1, 2, 1, 3, 2, 1]));
// { '1': 3, '2': 2, '3': 1 }
```

Logic:

1. Start with an empty object.
2. Visit each number.
3. If the number exists, increment its count.
4. Otherwise, start its count at `1`.
5. Return the frequency object.

This pattern is useful for duplicate detection, character counting and many interview problems.

---

## 14. Practice Questions

Try solving each problem without looking at a solution.

### Level 1 — Basic

- [ ] Write a function that returns the square of a number.
- [ ] Find the largest number in an array.
- [ ] Return only even numbers from an array.
- [ ] Calculate the sum of an array.
- [ ] Count the number of vowels in a string.

### Level 2 — Intermediate

- [ ] Create a higher-order calculator function.
- [ ] Create a constructor for a `Product`.
- [ ] Add a shared method using a prototype.
- [ ] Create a counter using closures.
- [ ] Use `call()`, `apply()` and `bind()` with one function.
- [ ] Count the frequency of each character in a string.
- [ ] Remove duplicate elements from an array.

### Level 3 — Interview Practice

- [ ] Implement your own version of `map()`.
- [ ] Implement your own version of `filter()`.
- [ ] Implement your own version of `reduce()`.
- [ ] Create a private bank-account balance using closures.
- [ ] Create an object that inherits from another object.
- [ ] Find the first non-repeating character in a string.
- [ ] Find the maximum sum of a subarray of size `k`.
- [ ] Group an array of objects by a property.

### Rule for every question

Before checking a solution, write down:

1. Input.
2. Expected output.
3. Manual example.
4. Step-by-step logic.
5. Pseudocode.
6. JavaScript solution.
7. Test cases.
8. Time and space complexity, where relevant.

---

## 15. Debugging Checklist

When your program does not work, do not immediately rewrite everything.

Check the following:

- [ ] Is the function being called?
- [ ] Are the arguments correct?
- [ ] Are the variable names consistent?
- [ ] Is the function returning the expected value?
- [ ] Are you confusing `return` with `console.log()`?
- [ ] Is the loop starting and ending at the correct indexes?
- [ ] Is a variable changing unexpectedly?
- [ ] Have you tested empty arrays and boundary cases?
- [ ] Are you using `===` when strict equality is needed?
- [ ] Does `this` refer to the object you expect?
- [ ] Have you checked the browser console or terminal errors?

**Debugging strategy:** Find the first point where the actual result differs from the expected result. Investigate that point instead of guessing.

---

## 16. Revision Checklist

Use this checklist to measure your understanding.

### Functions

- [ ] I can explain first-class functions.
- [ ] I can explain higher-order functions.
- [ ] I understand callbacks and return values.
- [ ] I can use `map()`, `filter()` and `reduce()`.

### Objects and inheritance

- [ ] I can create objects using constructor functions.
- [ ] I understand the `new` keyword.
- [ ] I understand prototypes.
- [ ] I can explain prototypal inheritance.

### Function behavior

- [ ] I understand `this`.
- [ ] I can distinguish `call()`, `apply()` and `bind()`.
- [ ] I can explain pure and impure functions.
- [ ] I understand closures.
- [ ] I understand how an IIFE executes.

### Problem-solving

- [ ] I can break a question into smaller steps.
- [ ] I can write pseudocode before coding.
- [ ] I can solve a familiar problem without copying.
- [ ] I can test edge cases.
- [ ] I can explain my solution aloud.

---

## 17. Interview Preparation

For every concept, prepare three answers.

**Question 1: What is it?**

Give a simple definition.

**Question 2: Why do we use it?**

Explain the practical benefit.

**Question 3: Can you demonstrate it?**

Write a small example and explain its output.

### Example: Closure

**What is a closure?**

A closure is a function that retains access to variables from its outer scope.

**Why do we use closures?**

Closures allow functions to preserve state and support private variables.

**Can you demonstrate it?**

Use the `createCounter()` example from Section 12 and explain why the count increases across multiple calls.

### Final learning principle

> Understand the problem first. Identify the pattern. Write the logic. Test the result. Explain why the solution works.

You do not need to memorize every possible program. You need to learn how to recognize patterns and adapt your logic to new problems.

**Target:** Become capable of solving unfamiliar problems independently, not merely reproducing familiar code.
