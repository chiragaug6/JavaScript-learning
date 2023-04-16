/*
Array Methods :
1. For each
2. map
3. filter,
4. reduce,
5. every,
6. find,
7. sort
*/

let arr = [99, 53, 57, 12, 45];

//1. forEach

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("New :", index, element, arr);
})

let studentNames = ["chirag", "asmita", "anjali", "dhaval", "khusali"];

studentNames.forEach((ele) => console.log(ele.toUpperCase()));

//2. map Method

studentNames.map((name, index, arr) => {
    console.log(index, name, arr);
})

studentNames.map((name) => {
    console.log(name.toUpperCase());
})

//3. filter Method

const nameStartWithA = studentNames.filter((name) => {
    return name.startsWith("a");
})

console.log(nameStartWithA);


//4. reduce
//shopping card Example

const cartBill = [500, 300, 400, 60];

const sumOfCardBill = cartBill.reduce((prev, curr) => prev + curr, 0);

console.log(sumOfCardBill);


// 5. every

//game Score type check

const gameScore = [200, 300, 100, 150, 40, 50];

//check if all values are number
// console.log(typeof gameScore[0]); //number

const gameScoreCheck = gameScore.every((score) => typeof score === 'number');

console.log("result :", gameScoreCheck);

// 6. find
//return first element where condition is true
const above200 = gameScore.find((score) => score > 200);

console.log(above200);

//7. sort
//8. findIndex
//9. some





