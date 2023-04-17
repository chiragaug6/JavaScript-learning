let emptySet = new Set();

// console.log(emptySet.size);

let myArr = [1, 2, 3, 4, 3];
let newSet = new Set(myArr);
// let newSet2 = new Set([...myArr]);

newSet.add(6);
// console.log(newSet.has(5));
// newSet.clear();
newSet.delete(2);
// console.log(newSet);

function setDiffrence(setA, setB) {
    return new Set([...setA].filter(el => !setB.has(el)));
}

let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([4, 5, 6, 7, 8]);
// console.log(setDiffrence(setA, setB));

/******************************************************* */
// MAP

let map = new Map();
// console.log(map.size);

let arr = [
    [1, "chirag"],
    [2, "asmita"],
    [3, "anjali"],
    [4, "khushali"],
    [5, "manshi"]
]

arr.map(arrayItem => map.set(arrayItem[0], arrayItem[1]));

console.log(map);



