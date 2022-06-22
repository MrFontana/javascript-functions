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

// Function Methods and Built in functions
// just making sure i remembered how to make a constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = name => `Hey, ${this.name}`;
	this.getName = name => this.name;
};

let person1 = new Person('Kevin', 32);
let person2 = new Person('Meghan', 33);
console.log(person1.sayHi());
console.log(person2.sayHi());

// Static function using .call method below
let sayHello = function(message) {
	console.log(`${message} ${this.name}`);
};

sayHello.call(person1, 'Hello There');
sayHello.call(person2, 'Geeeeeneral');

function introduction(name, profession) {
	console.log(`My name is ${name} and I am a ${profession}`);
	// console.log(this);
}

console.log('------- Below is using a standard function invocation -------');
introduction('Kevin', 'Web Developer');
console.log('------- Below is using .apply() -------');
introduction.apply(undefined, ['Kevin', 'Web Developer']);
console.log('------- Below is using .call() -------');
introduction.call(undefined, 'Kevin', 'Web Developer');

// .bind() example
let person3 = ('Elijah');
console.log(person3);

let getNameCopy = person2.getName.bind(person3);
console.log(getNameCopy());

// eval()
let x = 1;
let y = 2;
let s = 'abc'
console.log(eval('x + y + 1')); // 4
console.log(eval('x + y + s')); // 3abc

// parseInt()
console.log(parseInt('F', 16)); // 15
console.log(parseInt('15', 10)); // 15
console.log(parseInt('Hi', 10)); // NaN

// parseFloat()
console.log(parseFloat('3.99')); // 3.99
console.log(parseFloat('3.99e-1')); // 39.9
console.log(parseFloat('')); // NaN

// escape()
console.log(escape('text')); // text
console.log(escape(' ')); // %20
console.log(escape('abc&%')); // abc%26%25

// unescape()
console.log(escape('text')); // text
console.log(escape('%20')); // ' '
console.log(escape('abc%26%25')); // abc&%

