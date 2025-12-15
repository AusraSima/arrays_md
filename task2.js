"use strict"

// Declaring the array
// let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// print the 3rd item here
// change the 'thursday' value to null here
// print the position of step 2


const myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

myArray.splice(0, 4, null);

document.getElementById("content").innerHTML = `Third item ${myArray[2]}<br>
changed position ${myArray[4]}`;