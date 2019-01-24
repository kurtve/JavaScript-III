"use strict";

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding:

This is the global or default binding.  In the browser, this will be the window object.
In Node, it would be...probably undefined.

* 2. Implicit binding:

In implicit binding, 'this' is bound to whatever is on the left side of the dot when
a method is invoked.

* 3. New binding:

This binding is created when using the 'new' keyword to instantiate an object.

* 4. Explicit binding:

An explicit binding occurs when using .call, .apply, or .bind to specify as a parameter what
object should get bound with a function.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log('\nWindow binding:');

console.log(`Window size: ${this.innerHeight} x ${this.innerWidth}`);


// Principle 2

// code example for Implicit Binding
console.log('\nImplicit binding:');

const jack = {
	name: 'Jack',
	speak: function() {return `My name is ${this.name}`;}
};

console.log(jack.speak());


// Principle 3

// code example for New Binding
console.log('\nNew binding:');

function Person(name) {
	this.name = name;
	this.speak = () => `My name is ${this.name}`;
}

const jill = new Person('Jill');

console.log(jill.speak());


// Principle 4

// code example for Explicit Binding
console.log('\nExplicit binding:');

function dance(slickmoves) {
	return `${this.name} does the ${slickmoves}`;
}

console.log(dance.call(jack, "hokey-pokey"));
console.log(dance.call(jill, "twist"));

