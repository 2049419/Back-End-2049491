//3.
//a)
function Person(firstName, lastName){
    //b)
    this.firstName = firstName,
    this.lastName = lastName;
}

//c)
Person.prototype.greet = function() {
        console.log("Hello " + this.firstName + " " + this.lastName);
}

//d)
var john = new Person("John", "Doe");
var jane = new Person("Jane", "Doe");
john.greet();
jane.greet();

//e))
Person.prototype.age = null;
var john2 = new Person("John", "Doe");
john2.age = 30;
console.log(john2);

//g))
Person.prototype.greet2 = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + ", you are " + this.age + " years old.");
}
john2.greet2();

//4.
