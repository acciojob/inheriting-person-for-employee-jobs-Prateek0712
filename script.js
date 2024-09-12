// function Person(name, age) { }
// function Employee(name, age, jobTitle) {}
class Person{
	#name;
	#age;
	constructor(name, age){
		this.#age = age;
		this.#name = name;
	}
  get name(){
    return this.#name;
  }
  get age(){
    return this.#age;
  }
	greet(){
		console.log("Hello, my name is " + this.#name +" and I am " + this.#age + " years old.");
	}
}

class Employee extends Person{
	#job;
	constructor(name, age, jobTitle){
		super(name, age);
		this.#job = jobTitle;
	}
	jobGreet(){
		console.log("Hello, my name is " + this.name +", I am " + this.age + " years old, and my job title is " + this.#job + ".");
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;