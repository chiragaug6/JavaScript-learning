let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "flash", "superman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`spiderman Power :${this.spiderman}`);
    }
}

Object.prototype.chirag = function () {
    console.log("Hello I'm Chirag Solanki");
}

console.log(myHeros.chirag());
console.log(heroPower.chirag());

Array.prototype.sayHello = function () {
    console.log("Hello Arrays");
}

console.log(myHeros.sayHello());
// console.log(heroPower.sayHello()); //Error