// eslint-disable-next-line semi
"use strict"

// Write functions countEvens which takes an array of integers and 
// returns the count of even integers in the array.
// Example:
// countEvens([1, 2, 3, 4, 5]); --> 2
// countEvens([10, 10, 10]); --> 3
// countEvens([1, 1, 1, 2]); --> 2


function countEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum++;
        }
    }
    return sum;
}

const numbers = [1, 1, 1, 2];

let count = countEvens(numbers);

// eslint-disable-next-line no-console
console.log(count);