//Definition: A closure occurs when a function remembers and can access variables from its outer lexical scope, even after the outer function has finished executing.

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();
