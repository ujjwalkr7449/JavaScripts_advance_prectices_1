//Definition: The new keyword creates an object using a constructor function or class.
function Mobile(brand, price) {
    this.brand = brand;
    this.price = price;
}

const phone = new Mobile("Samsung", 20000);

console.log(phone.brand);
console.log(phone.price);
