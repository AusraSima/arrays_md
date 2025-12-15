// eslint-disable-next-line semi
"use strict"

// Write function allPositive which is given an array 
// of numbers and returns true if every element is positive 
// and false otherwise.


function arePositive(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){ sum++;}
    }
    let check = sum === arr.length ? true : false;
    return check;
}

let numbers = [0, 0, 1];

let result = arePositive(numbers);
// eslint-disable-next-line no-console
console.log(result);
