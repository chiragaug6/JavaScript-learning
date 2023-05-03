// sayHello ==> HOF

// sayHii ==> callbacks function

function sayHello(sayHii) {
    sayHii();
    console.log("Hello Bachho !!");
}

// sayHello(() => {
//     console.log("Hii Bachho !! badhiya !!");
// });


// example-2

console.log("start");

setTimeout(() => {
    console.log("Hello After 2 Sec delay");
}, 20)

console.log("end");
for (let i = 0; i < 10000; i++) { console.log(i); }

