//call() Calls a function immediately with a chosen this value and individual arguments.
function introduce(city, role) {
    console.log(this.name + " from " + city + ", " + role);
}

const user = { name: "Ujjwal" };

introduce.call(user, "Patna", "Developer");