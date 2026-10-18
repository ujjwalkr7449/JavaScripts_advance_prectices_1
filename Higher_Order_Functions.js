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

// example of map(), fliter(), and reduce() higher-order functions
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 3));