let employee1 = {
     id: 1002,
    firstName: "Ashmil",
    lastName: "Khan",
    department: "IT",
    designation: "Developer",
    salary: 90000,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getInfo: function() {
        return "Employee " + this.id + " works in " + this.department;
    }
};
console.log("Full Name=", employee1.getFullName());
console.log("Info=", employee1.getInfo());
let employee2 = {
    id: 1003,
    firstName: "Kumail",
    lastName: "ali",
    department: "Accounting & Finance",
    salary: 80000,
     getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getInfo: function() {
        return "Employee " + this.id + " works in " + this.department;
    }
};
console.log("Full Name=", employee2.getFullName());
console.log("Info=", employee2.getInfo());