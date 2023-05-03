let score = 4;
function one() {
    let scrore = 1;
    console.log(scrore);
}

function two() {
    let score = 2;
    console.log(score);
}

function three() {
    console.log(score);
}

// one();
// two();
// three();
// console.log(score);


function outerFun() {
    let outerVar = "I am at Scope Level 1";

    function innerFun() {
        let innerVal = "I am at Scope Level 2";
        console.log(outerVar);
    }
    console.log(innerVal);
    innerFun();
}

// outerFun();

let globalVal = 0;
function fun() {
    let val1 = 1;
    function innerOfFun() {
        let val2 = 2;
        console.log(val2, val1, globalVal);

        function innerOfInnerFun() {
            let val3 = 3;
            console.log(val3, val2, val1, globalVal);
        }
        innerOfInnerFun();
    }
    innerOfFun();
}

// fun();


// clouser

function perentFun() {
    let perentval = "Helo I'm Perent Value";

    function childFun() {
        console.log(perentval);
    }
    childFun();
}

// perentFun();


// Example - 1 of Clouser

const sayHello = "Hello Everyone !!!";

setTimeout(function () {
    console.log(sayHello);
}, 1000);


// Example - 1 of Clouser and scoping

let lengthCount = 0;

let numbers = [5, 8, 9, 4, 6, 6, 7,];

numbers.forEach((num) => {
    lengthCount++;
});

console.log("Length of array :", lengthCount);
