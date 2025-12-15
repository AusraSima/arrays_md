// eslint-disable-next-line semi
"use strict"

// Write a function evens which takes an array of numbers and returns 
// a new array containing only the even numbers in the given array.

function isEven(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const numbers = [1, -2, 3, 4, 5, 6, 7, 8];

let evens = isEven(numbers);

// eslint-disable-next-line no-console
console.log(evens);