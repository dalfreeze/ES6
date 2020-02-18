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

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// let d = new Date;

// function calcAge(year) {
//     return (d.getFullYear()) - year;
// };

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.')

// // ES6    // Template literals
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// // New String Methods
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J')); // returns true because it's checking if the string n starts with a J. Case sensitive.
// console.log(n.endsWith('th')); // returns true because it's checking if the string n ends with a th. Case sensitive.
// console.log(n.includes('n Sm')); // returns true because it's checking if the string n includes a n Sm. Case sensitive.

// console.log(`${firstName} `.repeat(5));





////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1965, 1980, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

// ES6
let ages6 = years.map(el => 2016 - el); // with the map callback functions, you have access to the current element, the index, and the whole array

// Arrow function with multiple arguments
ages6 = years.map((el, i) => `Age element ${i +1}: ${2016-el}.`);

// Arrow function with multiple lines of code. Return is no longer implicit.
ages6 = years.map((el, i) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${i +1}: ${age}.`
});

// Arrow functions do not have their own *this* keyword. They have a lexical *this*

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         let self = this; // this is a workaround to avoid 'this' ending up pointing to the window/global object when this method is called as a function
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };

// box5.clickMe(); // this is a function call, so 'this' points to the global object

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => { // use empty parentheses when there are no functions passed in. Arrow function specifically allows the 'this' in here to point to the object regardless of where the method is called
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

// box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => { // using an arrow function here will change the 'this' to the globa score because this function shares the global scope
//         document.querySelector('.green').addEventListener('click', () => { // use empty parentheses when there are no functions passed in. Arrow function specifically allows the 'this' in here to point to the object regardless of where the method is called
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };

box6.clickMe();

// ES5
// function Person(name) {
//     this.name = name;
// };

// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this)); // have to use this method to define this as this

//     console.log(arr);
// };

// var friends = [
//     'Bob',
//     'Jane',
//     'Mark'
// ];

// new Person('John').myFriends5(friends);


// ES6

// function Person(name) {
//     this.name = name;
// };

// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el => `${this.name} is friends with ${el}`);
//     arr.forEach(cur => console.log(cur));
// };

// var friends = [
//     'Bob',
//     'Jane',
//     'Mark'
// ];

// new Person('Mike').myFriends6(friends);




//////////////////////////
// Lecture: Destructuring

// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];


// ES6
// const [name, age] = ['John', 26]; // creates a constant name and constant year and stores them as separate variables based on the array

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj; // destructures the obj and makes firstName and lastName their own const variables



// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// };

// const [age, retirement] = calcAgeRetirement(1990);



///////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });;


// ES6
const boxesArr6 = Array.from(boxes); // transforms node list to array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// Loops
// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue; // continues to the next iteration. If you use break here, it would break out of the loop completely once the if statement came up true
//     }

//     boxesArr5[i].textContent = 'I changed to blue';
// }


// ES6
// For Of loop
// Basically a combination of the for and forEach
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
};



// Finding elements in array

// ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]); // you have to do all of this just to pull out the number that is >= 18


// ES6
const ages = [12, 17, 8, 21, 14, 11];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18)); // use this if you don't want to know the index