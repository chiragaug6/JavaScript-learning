function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your ascncronus code here
        setTimeout(() => {
            console.log("Hello SetTimeout");
            resolve("done") //or
            // reject("problem error")
        }, 3000);
    })
}

console.log("start");

let x = createPromise();
console.log("got a new promise");

x.then(function f(value) {
    console.log("Promise done", value);
}).then(function j() {
    console.log("second then");
})
    .catch(function p(value) {
        console.log("Problem error", value);
    }).finally(function fn() {
        console.log("finally");
    })

console.log("end");