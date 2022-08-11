/* Write your code below

Given a word, return true if that word contains only unique characters. Return false otherwise.
*/

function checkIfUnique(word){
    const arr = word.split('');

    const check = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
        check.push('false')
        }else {
        check.push('true')
    }
}

console.log(checkIfUnique('Monday'));
console.log(checkIfUnique('Moon'));  