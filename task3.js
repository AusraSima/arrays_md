"use strict"

// Write a function max that takes an array of numbers returns the highest number in the array.

function findMax(arr){
    return Math.max(...arr);
}

let numbers = [1, 0, -1, 20, 105, -26];

let result = findMax(numbers);

document.getElementById("content").innerHTML = result;