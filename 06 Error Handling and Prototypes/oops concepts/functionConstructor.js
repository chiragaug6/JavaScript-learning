function phone(name, price, rating) {
    this.name = name;
    this.price = price;
    this.rating = rating;
}

const vivo = new phone("vivo Y91", 11000, 4.5);

console.log(vivo);

let x = {
    p: phone
};

x.p("realme 9YE", 20000, 4.4);

console.log(x);


/**
 * 1. this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * 1. return 10 => if you're returning primitive then it will be avoided in constructor 
 * 2. return { a: 10, b: 20 }  => if you return non-primitive then it will be returned
 * 3. constructor default return an object
 * 
 */