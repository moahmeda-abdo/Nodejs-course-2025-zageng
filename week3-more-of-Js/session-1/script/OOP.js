/*
- OOP
- Classes & Objects
- Properties, Methods & Static Properties
- Constructor
- Built-in Constructors [Date, Math, String, Number]
- Inheritance & super keyword
- Encapsulation
*/

// Class Definition with Properties, Methods & Static Property
class Person {
    static gender = "male"; // Static Property

    constructor(name, age, city) { // Constructor
        this.name = name;
        this.age = age;
        this.city = city;
    }

    // Method
    sayHello() {
        console.log(`Hi, ${this.name}`);
    }

    // Another Method
    displayMessage() {
        console.log(`Hello, ${this.name} from ${this.city}`);
    }
}

const person1 = new Person("Osama", 39, "Egypt");
const person2 = new Person("Ali", 29, "Egypt");
const person3 = new Person("Mohamed", 35, "Egypt");

person1.sayHello();
console.log(Person.gender); // Accessing Static Property

// Built-in Constructors
const today = new Date();
console.log(`Day: ${today.getDay()}`);
console.log(`Month: ${today.getMonth() + 1}`); // Adding 1 because getMonth() is zero-based
console.log(`Minutes: ${today.getMinutes()}`);

const numString = "100";
console.log(Number(numString)); // Using Number Constructor
console.log(Math.max(10, 20, 30)); // Using Math Object

// Inheritance with super keyword
class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class Admin extends User {
    constructor(name, email, phone) {
        super(name, email, phone); // Using super keyword to call parent constructor
        this.permission = "admin";
    }
}

class SuperAdmin extends Admin {
    constructor(name, email, phone) {
        super(name, email, phone);
        this.permission = "superadmin";
    }
}

const admin1 = new Admin("Mo", "mo@domain.com", "01200");
console.log(admin1);

// Encapsulation Example
class Employee {
    #salary; // Private Field

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary; // Private Property
    }

    getSalary() { // Getter Method
        return this.#salary;
    }

    setSalary(newSalary) { // Setter Method
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid salary amount.");
        }
    }
}

const employee1 = new Employee("Ahmed", 28, 1500);
console.log(employee1.getSalary()); // Accessing private property through getter
employee1.setSalary(2000); // Modifying private property through setter
console.log(employee1.getSalary());
