//Pure function: For the same inputs, it returns the same output and does not change external state.
//Impure function: It depends on or modifies external state, or produces other side effects.
let total = 10;

// Pure function
function add(a, b) {
    return a + b;
}

// Impure function
function addToTotal(value) {
    total += value;
    return total;
}

console.log(add(5, 3));

console.log(addToTotal(5));
console.log(addToTotal(5));