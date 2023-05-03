function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your ascncronus code here
        setTimeout(() => {
            console.log("Hello SetTimeout");
            resolve(10) //or
            // reject("problem error")
        }, 3000);
    })
}


async function consume() {
    try {
        console.log("inside function");
        const response = await createPromise();
        console.log("response is", response);
        const response1 = await createPromise();
        console.log("response is", response1);
    } catch (error) {
        console.log("rejected with", error);
    }
}

console.log("start");

consume();

console.log("end");