/**
 * Problem statement : create a method which return truelength of string by removing spacing in string 
 */

String.prototype.truelength = function () {
    return this.trim().length;
}

user = "chirag";

console.log(user.length);
console.log(user.truelength());

uname = "chirag          ";

console.log(uname.length);
console.log(uname.truelength());