"use strict"

// Write a function sumNumbers which is given an array of numbers and returns 
// the sum of the numbers. Do the same with reduce() method.

function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function sumTwo(x, y){
    return x + y;
}

const numbers = [1, -2, 10, -5, 16, 0, 42];

let result1 = sumNumbers(numbers);
let result2 = numbers.reduce(sumTwo, numbers[0]);
result2 -= numbers[0];

document.getElementById("content").innerHTML = `${result1}<br>${result2} `;