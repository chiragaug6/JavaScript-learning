// Destructuring, Spread and Rest

const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];

// SPREAD

// Q. merge oneArray and twoArray
// Method-1
// const threeArray = oneArray.concat(twoArray);
// console.log(threeArray);

// Method-2
// const thirdArray = [oneArray, twoArray];
// console.log(thirdArray);


// Method-3  best method using spread oprator

const thirdArray = [...oneArray, ...twoArray];

console.log(thirdArray);

function testOne() {
    const arr = [...arguments];
    console.log(arr);
}

testOne(1, 2, 3, 4, 5, 6);


// REST 

function manyArguments() {
    console.log(typeof arguments);
    let args = Array.from(arguments);
    let finalArr = args.map(e => e);
    console.log(finalArr);
}

manyArguments(5, 4, 3, 2, 1);

function manyArgumentsV2(...args) {
    console.log(typeof args);
    let finalArr = args.map(e => e);
    console.log(finalArr);
}

manyArgumentsV2(1, 2, 3, 4, 5, 6);

const students = ["chirag", "harshil"];

const newStudent = ["heet", "vasoya", ...students, "yash"];

console.log(newStudent);

const sitename = "pwskill";

console.log([...sitename]);

function pwskill(...values) {
    return values;
}

console.log(pwskill("chirag", "solanki"));


