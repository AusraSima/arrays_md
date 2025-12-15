// eslint-disable-next-line semi
"use strict"

// Given an array of numbers, return their product. Use reduce metod.
// Example
// product([2, 4, 6]); // => 48 (i.e., 2 _ 4 _ 6)
// product([-10, 10]); // => -100 (i.e., -10 * 10)

function multNUms(x, y){
    return x * y;
}

const numbers = [10, -10];

let product = numbers.reduce(multNUms);

// eslint-disable-next-line no-console
console.log(product);
