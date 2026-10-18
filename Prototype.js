//Definition: A prototype allows objects to share methods instead of creating a separate copy of each method for every object.

function Student(name) {
    this.name = name;
}

Student.prototype.introduce = function () {
    console.log("My name is " + this.name);
};

const s1 = new Student("Ujjwal");
const s2 = new Student("Rahul");

s1.introduce();
s2.introduce();
