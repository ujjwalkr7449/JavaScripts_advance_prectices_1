//bind()  Returns a new function with this bound to the specified object. It does not execute the function immediately.

const boundIntroduce = introduce.bind(user, "Patna", "Developer");

boundIntroduce();
