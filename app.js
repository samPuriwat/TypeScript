var names = "Hello TypeScript";
var count = 100;
var mystatus = true;
var run = false;
var fnames = 100;
console.log("Hello world");
document.getElementById("id1").innerHTML = names;
document.write("Count is type: " + typeof (count) + "<br>");
document.write("mystatus is type: " + typeof (mystatus) + "<br>");
document.write("runnings is type: " + typeof (run) + "<br>");
//array
var employee = ["A", "B"];
employee.push("C#");
employee.push("JAVA");
employee.push("500");
employee.push(1000);
console.log(employee.toString());
var p1 = {
    realname: "SAM Puriwat",
    hp: 100,
    weapon: "Sword",
    attack: function () {
        return "player attack";
    }
};
console.log(p1.realname);
console.log(p1.attack());
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["yellow"] = 15] = "yellow";
    Color[Color["green"] = 16] = "green";
})(Color || (Color = {}));
console.log("Status " + Color.red);
var numerConstant;
(function (numerConstant) {
    numerConstant[numerConstant["pi"] = 3.14] = "pi";
    numerConstant[numerConstant["e"] = 2.71] = "e";
})(numerConstant || (numerConstant = {}));
console.log(numerConstant.pi * (6 * 6));
//Operator//Function
function showMessage() {
    console.log("TypeScript myScript");
}
showMessage();
//Optional Parameters
//using "?"" for null parameter
function addProduct(id, name, price) {
    console.log("ID: " + id);
    console.log("Name: " + name);
    if (price != undefined) {
        console.log("Price: " + price);
    }
}
//Rest Parameters
function addNumber(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}
function addNumberRest() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
//Class and Opbject
var Employee = /** @class */ (function () {
    function Employee(id, name, gender, salary) {
        console.log("Create Object");
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }
    //method
    Employee.prototype.display = function () {
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Gender: " + this.gender);
        console.log("Salary: " + this.salary);
    };
    //setter method
    Employee.prototype.setDepartment = function (dep) {
        this.department = dep;
    };
    //getter method
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
var emp1 = new Employee(101, "SAM Puriwat", 1, 50000);
emp1.setDepartment("Programmer");
var emp2 = new Employee(102, "Ann Jutaporn", 0, 30000);
emp1.display();
console.log(emp1.getDepartment());
emp2.display();
//addProduct(1001,"iPhone",25000);
//addProduct(1002,"iPhone");
//addNumber(1,2);
//addNumberRest(1,2,3);
