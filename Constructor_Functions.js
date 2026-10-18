//Definition: A constructor function is used to create multiple objects with similar properties.

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Ujjwal", 22);
const student2 = new Student("Rahul", 21);

console.log(student1.name);
console.log(student2.name);
console.log(student1.age);
