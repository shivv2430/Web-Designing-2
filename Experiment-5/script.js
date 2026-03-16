
let employees = [];

function addEmployee(){

let name = document.getElementById("name").value.trim();
let id = document.getElementById("id").value.trim();
let salary = Number(document.getElementById("salary").value);
let dept = document.getElementById("department").value.trim();


if(name === "" || id === "" || salary === "" || dept === ""){
    alert("Please fill all the fields!");
    return;
}

let employee = {
    name: name,
    id: id,
    salary: salary,
    department: dept
};

employees.push(employee);

alert("Employee Added Successfully");

// Clear input fields
document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("department").value="";
}


function displayEmployees(){

let result="";

for(let emp of employees){
result += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Dept: ${emp.department} <br>`;
}

document.getElementById("output").innerHTML=result;
}


function filterSalary(){

let filtered = employees.filter(emp => emp.salary > 50000);

let result="";

for(let emp of filtered){
result += `${emp.name} - ${emp.salary} <br>`;
}

document.getElementById("output").innerHTML=result;
}


function totalSalary(){

let total = 0;

for(let emp of employees){
total += emp.salary;
}

document.getElementById("output").innerHTML="Total Salary = ₹ " + total;
}


function averageSalary(){

let total = 0;

for(let emp of employees){
total += emp.salary;
}

let avg = total / employees.length;

document.getElementById("output").innerHTML="Average Salary = ₹ " + avg;
}


function countDepartment(){

let dept = prompt("Enter Department Name");

let count = 0;

for(let emp of employees){
if(emp.department.toLowerCase() === dept.toLowerCase()){
count++;
}
}

document.getElementById("output").innerHTML =
"Employees in "+dept+" Department = " + count;
}