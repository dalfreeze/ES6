//////////////////////////
// Lecture: let and const

// // ES5
// var name5 = 'Jane Smith'
// var age5 = 23;
// name5 = 'Jane Miller'

// // ES6
// const name6 = 'Jane Smith'; // can't mutate
// let age6 = 23;


// ES5
// function driversLicense5(passedTest) {

//     if (passedTest) {
//         console.log(firstName); // comes back as undefined
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
// }

// driversLicense5(true);

// // ES6
// function driversLicense6(passedTest) {
//     //console.log(firstName) // this will now throw an error rather than returning undefined
//     let firstName;
//     const yearOfBirth = 1990; // const variables cannot be defined in a block and then accessed outside of the block in anyway. You cannot declare a const variable without defining it.
//     if (passedTest) {
//         firstName = 'John'; // in order to access defined variable outside of block, the variable has to be declared outside of block
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.') // don't have access to the variables in the if statement anymore if this line of code is moved outside of the if statement because let and const are block scoped, meaning only accessible in the block of code wrapped in curly braces in the if statement. Var is function scoped, meaning it's available to the entire function. To access variables defined in a block, they have to be declared outside of the block (but this only works for the let)
// };

// driversLicense6(true);


// let i = 23;

// for (let i = 0; i < 5; i++) { // this i variable in the for loop is block scoped, so it has nothing to do with the outside defined i
//     console.log(i);
// };

// console.log(i); // if initial i and for loop i were defined with var, this console.log would log "5", because that is the last value asigned to the i in the for loop

////////////////////////////
// Lecture: Blocks and IIFEs

// {
//     //this creates a block
// }

// {
//     const a = 1;
//     let b = 2;
//     var c = 3 // var will be available outside of the block because it is function scoped
// }

// // console.log(a, b); // doesn't work because the variables are in a block

// console.log(c);

////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
let d = new Date;

function calcAge(year) {
    return (d.getFullYear()) - year;
};

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.')

// ES6    // Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// New String Methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // returns true because it's checking if the string n starts with a J. Case sensitive.
console.log(n.endsWith('th')); // returns true because it's checking if the string n ends with a th. Case sensitive.
console.log(n.includes('n Sm')); // returns true because it's checking if the string n includes a n Sm. Case sensitive.

console.log(`${firstName} `.repeat(5));

