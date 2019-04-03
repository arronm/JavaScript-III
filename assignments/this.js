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


// Principle 3

// code example for New Binding
class Person {
  constructor (props) {
    this.name = props.name;
  }
  speak() {
    console.log(`Hello world, my name is ${this.name}.`);
  }
}

const arronName = { name: "Arron" }
const arron = new Person(arronName);
arron.speak();

// Principle 4

// code example for Explicit Binding
const jimbob = arron.speak.call({ name: "Jim" });
