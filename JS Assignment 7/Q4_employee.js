let employee = {
    id: 1002,
    firstName: "Ashmil",
    lastName: "Khan",
    department: "IT",
    designation: "Developer",
    salary: 90000
};
console.log("First name=", employee.firstName);
console.log("Department=", employee.department);

console.log("Designation=", employee["designation"]);
console.log("Salary=", employee["salary"]);

employee.email = "shami66@gmail.com";
console.log("Email=", employee);

employee.salary = 95000;
console.log("Changing salary=", employee);

delete employee.designation;
console.log("Removing designation:", employee);

console.log("Final employee object:", employee);