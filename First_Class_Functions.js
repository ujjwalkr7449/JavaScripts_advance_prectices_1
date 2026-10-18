//Definition: In JavaScript, functions are treated like values. You can store them in variables, pass them to other functions and return them from functions.

function greet() {
    return "Hello, Ujjwal!";
}

const message = greet;

console.log(message());


const a = greet;   // Stores the function
const b = greet(); // Stores the returned value