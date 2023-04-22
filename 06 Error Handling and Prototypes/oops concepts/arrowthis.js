/**
 * PROOF :
 * 
 * the theory of this keyword pointing to calling context is not valid in case of arrow function
 * 
 * arrow function find here this keyword in lexical scope.
 * 
 *  */

obj = {
    name: "chirag",
    funOne() {
        console.log("my name is", this.name);  // my name is chirag
    },

    funTwo: () => {
        console.log("my name is", this.name);  // my name is undefined
    }

}


obj.funOne();

obj.funTwo();