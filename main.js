"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello, Tanny Chaks';
console.log(message);
var isMale = true;
var title = "Leaning typescript. Yipee!";
console.log(title);
console.log("Is he male? " + isMale);
var age = 24;
var name = "Tanmoy";
var sentence = "My name is " + name + " and I am " + age + " years old!";
console.log(sentence);
var list1 = ['Tanny', 'Vishal', 'Lavanya'];
var list2 = ["Tanny", "Vishal", "Lavanya"];
console.log(list1);
console.log(list2);
//tuple for mixed datatype. But here order and limit is fixed.
var tupleList = ['Tanny', 24];
console.log("Tuple list: ", tupleList);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var col = Color.Green;
console.log(col);
//'any' type doesn't throw any error and is generally used for dynamic input
var myVariable = 10;
console.log(myVariable);
/*
myVariable.name;
myVariable.toUpperCase();

console.log(myVariable); //This will show error. To counter this, TS ibrary has something called 'unknown' type
*/
var myVariable1 = 'abcd';
var myVariable2 = myVariable1.toUpperCase; // Type assertion is more like type casting
console.log(myVariable2);
var multiType; //pipe operator let us allow using multiple datatype to a variable(Union types)
multiType = 20;
console.log(multiType);
multiType = true;
console.log(multiType);
//Function in TS
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum = ", add(5, 10));
//Optional values can also be treated to change the function description
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log("Sum = ", add1(5, 10));
console.log("Sum = ", add1(5));
//default parameters are like optional params but with a set value.
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log("Sum = ", add2(5, 10));
console.log("Sum = ", add2(5));
//Objects 
function getName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Tanny',
    lastName: 'Chaks'
};
getName(p);
function getName1(person) {
    if (person.lastName)
        console.log(person.firstName + " " + person.lastName);
    else
        console.log("" + person.firstName);
}
var p1 = {
    firstName: 'Tanny',
    lastName: 'Chaks'
};
var p2 = {
    firstName: 'Tanny'
};
getName1(p1);
getName1(p2);
//Class understanding in TS
var Employee = /** @class */ (function () {
    function Employee(employeeName, employeeDesignation) {
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome " + this.employeeName + " Sir. Your position in our company is " + this.employeeDesignation);
    };
    return Employee;
}());
var employee = new Employee('Tanny', 'Lead Developer');
console.log(employee.employeeName);
employee.greet();
//Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName, "Lead Architect") || this;
    }
    Manager.prototype.delegateTask = function () {
        console.log("Manager delegating task.");
    };
    return Manager;
}(Employee));
var manager = new Manager('Tanny');
manager.delegateTask();
console.log(manager.employeeName);
manager.greet();
//Access modifer, getters and setters using property
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        /* One of the coolest feature of TS is that u need not set constructor.
        *  It automatically understands if you mention access modifier in parameter.
        */
    }
    Point.prototype.draw = function () {
        console.log("X = " + this.x + " , Y = " + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value must be positive.");
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.draw();
console.log(point.X);
console.log(point.X = 10);
point.draw();
