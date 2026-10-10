let employees = [
    { name: 'Ali', department: 'IT', salary: 80000 },
    { name: 'Sara', department: 'HR', salary: 70000 },
    { name: 'Ashmil', department: 'IT', salary: 95000 },
    { name: 'eshan', department: 'Finance', salary: 85000 }
];
let Employees = employees.filter(emp => emp.department === 'IT');
console.log("IT employees=", Employees);
let highEarner = employees.find(emp => emp.salary > 90000);
console.log("Employee", highEarner);
let names = employees.map(emp => emp.name);
console.log("Employee names=", names);
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total salary=", totalSalary);