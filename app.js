// SCOPE EXAMPLE
let message1; // Global declaration
function greetings(name) {
	message1 = 'Message1 Inside Function';
}

greetings();
console.log(message1);

function greeting() {
	let message2 = 'Message2 inside function';
	let sayHi = function hi() {
		// let message2 = 'Hi'; // This will be ignored because it's refering to the same variable and 'Hello' will be output
		message2 = 'Message2 inside inner function'; // Reassigning the value will output the correct value
	};
	sayHi();
	console.log(message2);
}
greeting();

// Block scope example
// Print the value of count but get an error
// As soon as the code block is completed the count variable goes out of scope and results in an error
let message3 = 'Message3 global assignment';
if (message3 === 'Message3 global assignment') {
	// let count = 100; // this results in error because let and const have block scope
	var count = 100; // var has no block scope and will result in success but can lead to problems down the line so let and const are best practice
}
console.log(count); // Uncaught ReferenceError: Cannot access 'message3' before initialization

// Immediately Invoked Function Expression ( IIFE Pattern )
(function() {
	console.log('Message from within IIFE');
})();

// Assigning IIFE to a variable
let iife = (function() {
	return 'Message Inside iffe variable'; // Value is assigned to iife variable
})();
console.log(iife);

// Closures
let greeting2 = (function() {
	let message4 = 'Message4 inside closure';
	let getMessage = function() {
		return message4;
	};
	return {
		getMessage: getMessage
	};
})();
console.log(greeting2.getMessage());


function setupCounter(val) {
	return function counter() {
		return val++;
	}
}
let counter1 = setupCounter(0);
console.log(counter1()); // 0
console.log(counter1()); // 1
let counter2 = setupCounter(10);
console.log(counter2()) // 10

// Arrow Function Example

// Regular Function
let regularGreeting = function() {
	return 'Hello World! inside regularGreeting function';
};

let message5 = regularGreeting();
console.log(message5);

// Arrow Function
let arrowGreeting = () => 'Hello World! inside arrowGreeting function'; // Since the function body only has one statement you can have it even more simplified

let message6 = arrowGreeting();
console.log(message6);

// Further example
let greet = function greeting(name) {
	return `Hello ${name}`;
}
let message7 = greet('Kevin');
console.log(message7);

let greetArrow = (name, age, maritalStatus) => `Hello ${name}, I see you're ${age} and ${maritalStatus}`;
let message8 = greetArrow('Kevin Fontana', 32, 'married');
console.log(message8);

// Further Example
function sum(num1, num2) {
	return num1 + num2
}

let output = sum(10, 5);
console.log(output);

let arrowSum = (num1, num2) => num1 + num2;
let outputArrow = arrowSum(10, 10);
console.log(outputArrow);

// This Keyword
let messageObj = {
	name: 'Kevin',
	regularFunction: function() {
		console.log('messageObj: ', this); // messageObj
		console.log(`Hello ${this.name}`); // Hello Kevin
	},
	arrowFunction: () => {
		console.log(`Hi ${this.name}`) // This only prints "Hi" and is pointed to the window object 
		console.log('arrowFunction: ', this) // this is pointed to the window object 
	}
};
messageObj.regularFunction();
messageObj.arrowFunction();