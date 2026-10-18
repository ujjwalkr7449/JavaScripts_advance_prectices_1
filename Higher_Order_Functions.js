//Definition: A higher-order function is a function that takes another function as an argument or returns a function.

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
