// eslint-disable-next-line semi
"use strict"

// Write a function squareDance which takes an array of numbers and returns a 
// new array containing the result of squaring each of the numbers in the given array.
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance(number) {
        return Math.pow(number, 2);
}

const numbers = [1, 2, 3];

let count = numbers.map(squareDance);

// eslint-disable-next-line no-console
console.log(count);