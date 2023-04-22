//for Arrow function

//you can't use arrow function as function constructor

const Product = (n, p, r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}

// TypeError: Product is not a constructor
const p = new Product("iphone", 100000, 5);

console.log(p);

//the theory of this keyword pointing to calling context is not valid in case of arrow function