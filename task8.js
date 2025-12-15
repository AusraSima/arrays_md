// eslint-disable-next-line semi
"use strict"

// Write a function positives which is given an array of numbers and
//  returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

function isPositive(array){
    let newArray = [];
    for (let i = 0; i <array.length; i++){
        if (array[i] > 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const numbers = [-1, -2, -3];

let positives = isPositive(numbers);

// eslint-disable-next-line no-console
console.log(positives);
