// classes are introduce after ES6

class Phone {
    // properties --> variables --> data members 

    name;
    price;
    #rating;  // # is used to declare private variables and methods

    //constructor --> special method
    constructor(name, price, rating) {
        this.name = name;
        this.price = price;
        this.#rating = rating;
        // return 10;  if you're returning primitive then it will be avoided in constructor 
        // return { a: 10, b: 20 } //if you return non-primitive then it will be returned
        // constructor default return an object
        // like 
        // return this;
    }

    // A class may only have one constructor
    // constructor overloading is not supported in javascript
    // constructor() {

    // }

    get ratingGetter() {
        console.log(this.#rating);
    }

    set ratingSetter(r) {
        if (r < 0) return;
        if (r > 5) return;
        this.#rating = r;
    }

    // behaviours --> functions --> member function

    static sayHello() {
        console.log("Hello guy's");
    }

    buyNow() {
        console.log("this refers to", this);
    }

    displayInfo() {
        console.log("name is " + this.name + " price is " + this.price + " rating is " + this.#rating);
    }


    /**  JavaScript does not support function overloading natively.
     * If we will add functions with the same name and different arguments,
     *  it considers the last defined function*/

    // displayInfo(message) {
    //     console.log(message);
    // }

}


const vivo = new Phone("vivo Y91", 11000, 4.5); // new --> creates an empty plain object
// in the above piece of code we are calling the constructor method

// vivo.#rating = 4;

vivo.ratingGetter;

vivo.ratingSetter = 5;

vivo.ratingGetter;

console.log(vivo);

vivo.displayInfo();

// vivo.sayHello(); TypeError: vivo.sayHello is not a function 
/**static method can't asses by object  */

Phone.sayHello();  //to asses static method ==> className.staticMethodName() 

// vivo.buyNow();

// vivo.displayInfo();

// vivo.displayInfo("hello chirag");
