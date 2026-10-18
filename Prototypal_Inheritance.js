//Definition: Prototypal inheritance allows an object to access properties and methods from another object through its prototype chain.

const animal = {
    eat: function () {
        console.log("Animal is eating");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Dog is barking");
};

dog.eat();
dog.bark();
