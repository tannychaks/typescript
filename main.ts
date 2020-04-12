export { }
let message = 'Hello, Tanny Chaks';
console.log(message);

let isMale: boolean = true;
const title = "Leaning typescript. Yipee!"
console.log(title);
console.log("Is he male? " + isMale);
let age: number = 24;
let name: string = "Tanmoy";

let sentence: string = `My name is ${name} and I am ${age} years old!`
console.log(sentence);

let list1: string[] = ['Tanny', 'Vishal', 'Lavanya'];
let list2: Array<string> = ["Tanny", "Vishal", "Lavanya"];

console.log(list1);
console.log(list2);

//tuple for mixed datatype. But here order and limit is fixed.
let tupleList: [string, number] = ['Tanny', 24];

console.log("Tuple list: ", tupleList);

enum Color { 'Red', 'Green', 'Blue' }
let col: Color = Color.Green;
console.log(col);

//'any' type doesn't throw any error and is generally used for dynamic input

let myVariable: any = 10;
console.log(myVariable);
/*
myVariable.name;
myVariable.toUpperCase();

console.log(myVariable); //This will show error. To counter this, TS ibrary has something called 'unknown' type
*/

let myVariable1: unknown = 'abcd';
let myVariable2: unknown = (myVariable1 as string).toUpperCase; // Type assertion is more like type casting
console.log(myVariable2);

let multiType: number | boolean; //pipe operator let us allow using multiple datatype to a variable(Union types)
multiType = 20;
console.log(multiType);

multiType = true;
console.log(multiType);

//Function in TS

function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("Sum = ", add(5, 10));

//Optional values can also be treated to change the function description

function add1(num1: number, num2?: number): number { //Optional parameters
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log("Sum = ", add1(5, 10));
console.log("Sum = ", add1(5));

//default parameters are like optional params but with a set value.
function add2(num1: number, num2: number = 20): number { //Default parameters
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log("Sum = ", add2(5, 10));
console.log("Sum = ", add2(5));

//Objects 
function getName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Tanny',
    lastName: 'Chaks'
};

getName(p);

//Uisng interface for a less clumsy and better looking code.
interface Person {
    firstName: string;
    lastName?: string; //we can also keep field as optional
}

function getName1(person: Person) {
    if (person.lastName)
        console.log(`${person.firstName} ${person.lastName}`)
    else
        console.log(`${person.firstName}`)
}

let p1 = {
    firstName: 'Tanny',
    lastName: 'Chaks'
};

let p2 = {
    firstName: 'Tanny',
};
getName1(p1);
getName1(p2);

//Class understanding in TS

class Employee {
    employeeName: string;
    employeeDesignation: string;

    constructor(employeeName: string, employeeDesignation: string) {
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
    }

    greet() {
        console.log(`Welcome ${this.employeeName} Sir. Your position in our company is ${this.employeeDesignation}`);
    }
}

let employee = new Employee('Tanny', 'Lead Developer');

console.log(employee.employeeName);
employee.greet();

//Inheritance

class Manager extends Employee {
    managerName: string;
    constructor(managerName: string) {
        super(managerName, "Lead Architect");
    }

    delegateTask() {
        console.log("Manager delegating task.");
    }
}

let manager = new Manager('Tanny');

manager.delegateTask();
console.log(manager.employeeName);
manager.greet();

//Access modifer, getters and setters using property
class Point {

    constructor(private x?: number, private y?: number) {
        /* One of the coolest feature of TS is that u need not set constructor.
        *  It automatically understands if you mention access modifier in parameter. 
        */
    }

    draw() {
        console.log(`X = ${this.x} , Y = ${this.y}`);
    }

    get X() {
        return this.x;
    }
    set X(value : number) {
        if(value < 0)
            throw new Error("Value must be positive.")
        this.x = value;
    }

}

let point = new Point(1,2);
point.draw();
console.log(point.X);
console.log(point.X = 10);
point.draw();