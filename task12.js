// eslint-disable-next-line semi
"use strict"

// Write a function integers which takes an array of numbers and 
// returns a new array containing only the integers in the given array.
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]


function isInteger(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const numbers = [3.14, 2.4, 7, 8.1, 2];

let integers = isInteger(numbers);

// eslint-disable-next-line no-console
console.log(integers);