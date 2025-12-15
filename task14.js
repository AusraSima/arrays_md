// eslint-disable-next-line semi
"use strict"

// Write function countLessThan whitch takes an array of numbers and a threshold 
// number and return the count of elements in the array strictly less than the 
// threshold number. "Strictly less than" means we want numbers less than (<) 
// and not less than or equal to (<=).

// Example:
// countLessThan([1, 2, 3, 4, 5], 2); --> 1
// countLessThan([1, 2, 3, 4, 5], 17); --> 5
// countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); --> 0
// countLessThan([10, 10, 10, -10, 15, 7], 10); --> 2


function countLess(array, number) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < number) {
            sum++;
        }
    }
    return sum;
}

const numbers = [10, 10, 10, -10, 15, 7];

let count = countLess(numbers, 10);

// eslint-disable-next-line no-console
console.log(count);