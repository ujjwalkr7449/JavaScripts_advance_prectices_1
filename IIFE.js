//IIFE (Immediately Invoked Function Expression)
//Definition: An IIFE is a function expression that executes immediately after it is defined.

(function () {
    const message = "I run immediately!";
    console.log(message);
})();
// (function(){})();

//Arrow function IIFE
(() => {
    const message = "I run immediately!";
    console.log(message);
})();