try {
    const output = undefined;
    console.log(output[0]);
} catch (err) {
    // console.log(err);
    console.log("Error Handing in catch block");
} finally {
    console.log("Always Executed!");
}

try {
    console.log("try Starting");
    console.log(a);
    console.log("try ending");
} catch (err) {
    console.log("Error Handling", err);
}