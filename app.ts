var names:string = "Hello TypeScript";
var count:number = 100;
var mystatus:boolean = true;
let run:boolean = false;
let fnames:any = 100;

console.log("Hello world");

document.getElementById("id1").innerHTML = names;

document.write("Count is type: "+typeof(count)+"<br>");

document.write("mystatus is type: "+typeof(mystatus)+"<br>");

document.write("runnings is type: "+typeof(run)+"<br>");


//array
var employee:any[]= ["A","B"];
employee.push("C#");
employee.push("JAVA");
employee.push("500");
employee.push(1000);

console.log(employee.toString());

//interface
interface Player{
    realname:string;
    hp:number;
    weapon:string;
    attack:()=>string
}//player
let p1:Player={
    realname:"SAM Puriwat",
    hp:100,
    weapon:"Sword",
    attack:():string=>{
        return "player attack";
    }

}
console.log(p1.realname);
console.log(p1.attack());

//enum
enum Color{
    red=10,yellow=15,green
}
console.log("Status "+ Color.red);

enum numerConstant{
    pi=3.14,
    e=2.71
}
console.log(numerConstant.pi*(6*6));

//Operator//Function

function showMessage(){
    console.log("TypeScript myScript");
}
showMessage();
//Optional Parameters
//using "?"" for null parameter
function addProduct(id:number,name?:string,price?:numerConstant) {
    console.log("ID: "+id);
    console.log("Name: "+name);
    if(price!=undefined){
    console.log("Price: "+price);
    }

}
//Rest Parameters
function addNumber(num1:number,num2:number){
    let sum:number = num1+num2;
    console.log(sum);
}
function addNumberRest(...nums:number[]){
    var sum:number=0;
    var i;
    for(i=0;i<nums.length;i++){
        sum += nums[i];
    }
    console.log(sum);
}
//Class and Opbject
class Employee{
    private id:number;
    private name:string;
    private gender:number;
    private salary:number;
    private department:string;
    constructor(id:number,name:string,gender:number,salary:number){
        console.log("Create Object");
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        
        
    }
    //method
    display():void{
        console.log("ID: "+this.id);
        console.log("Name: "+this.name);
        console.log("Gender: "+this.gender);
        console.log("Salary: "+this.salary);
    }
    //setter method
    setDepartment(dep:string):void{
        this.department = dep;
    }
    //getter method
    getDepartment():string{
        return this.department;
    }

}
let emp1 = new Employee(101,"SAM Puriwat",1,50000);
emp1.setDepartment("Programmer");
let emp2 = new Employee(102,"Ann Jutaporn",0,30000);
emp1.display();
console.log(emp1.getDepartment());
emp2.display();




//addProduct(1001,"iPhone",25000);
//addProduct(1002,"iPhone");


//addNumber(1,2);
//addNumberRest(1,2,3);


