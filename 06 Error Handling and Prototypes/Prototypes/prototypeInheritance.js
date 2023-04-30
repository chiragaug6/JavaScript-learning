let vivo = {
    name: "vivo Y91",
    price: 10000,
    rating: 4.1
};

// Method 1 for Inheritance

let mi = {
    batteryLife: "4 years",
    // __proto__: vivo
}


console.log(mi.rating);

// Method 2 for Inheritance

// mi.__proto__ = vivo;

console.log(mi.rating);

// Method 3 for Inheritance (most Used method)

// Object.setPrototypeOf(mi, vivo);

console.log(mi.rating);

