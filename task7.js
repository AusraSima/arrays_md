// eslint-disable-next-line semi
"use strict"

// Write function anyPositive which is given an array of numbers and 
// returns true if any element is positive and false otherwise.
// Example:
// anyPositive([1, 2, 3, 4, 5]); --> true
// anyPositive([1, 2, -3, 4, 5]); --> true
// anyPositive([0, 0, 1]); --> true
// anyPositive([-10, -10, -10]); --> false
// anyPositive([-10, -10, 1]); --> true

function arePositive(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){ sum++;}
    }
    let check = sum > 0 ? true : false;
    return check;
}

let numbers = [-10, -10, 1];

let result = arePositive(numbers);
// eslint-disable-next-line no-console
console.log(result);