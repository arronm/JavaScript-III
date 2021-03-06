/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* INEW!
* 1. Implicit `this` will 'implicitly' point to the highest parent object from the referenced scope
* 2. new will bind `this` to that instantiated class object
* 3. Explicit `this` will bind to a function 'explicitly' specified through call, apply, bind
* 4. Window if there is no implicit object binding found, `this` will point to the window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.document;

// Principle 2

// code example for Implicit Binding
const person = {
  name: 'Arron',
  speak: function () {
    return `Hello implicit, my name is ${this.name}`;
  }
}

// Console Log for you Jamie!
console.log(person.speak());

// Principle 3

// code example for New Binding
function Person (props) {
  this.name = props.name;
  this.speak = function () {
    return `Hello new, my name is ${this.name}.`;
  }
}

// Console Log for you Jamie!
const arron = new Person({ name: 'Arron' });
console.log(arron.speak());

// Principle 4

// code example for Explicit Binding
console.log(arron.speak.call({ name: 'Jim' }));
