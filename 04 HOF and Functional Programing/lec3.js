/* What is regex and Different Character in Regex 
and importance Writting regex with example  */

let pattern = 'pw';
let redExOne = new RegExp(pattern);

let flag = 'gi';
let RegExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi

const strToCheck = "Sigma Batch PW SIGMA CODE PW JAVASCRIPT HOF and Functional Programing";

const result = regExThree.test(strToCheck);

console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p_w');
console.log(oneMoreResult);

const webUrl = "https://pwskill.com/chirag%20solanki";

const usebleUrl = webUrl.replace(/%\d\d/, '-');

console.log(usebleUrl);