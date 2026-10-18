//These concepts help you control the value of this when a function executes.
const user = {
    name: "Ujjwal",
    greet: function () {
        console.log(this.name);
    }
};

user.greet();