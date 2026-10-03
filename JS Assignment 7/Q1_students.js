let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

console.log("Is Ayesha present?", students.includes("Ayesha"));
console.log("First Sara position=", students.indexOf("Sara"));
console.log("Last Sara position=", students.lastIndexOf("Sara"));
// let firstAStudent = students.find(name => name.startsWith("A"));
// console.log("First student name starts with A=", firstAStudent);
                        //    or
console.log("First student name starts with A=", students.find(name => name.startsWith("A")));
// let firstAIndex = students.findIndex(name => name.startsWith("A"));
// console.log("Position of first A student=", firstAIndex);
                           // or
console.log("Position of first A student=", students.findIndex(name => name.startsWith("A")));
// let lastAStudent = students.filter(name => name.endsWith("d")).pop();
// let lastAIndex = students.lastIndexOf(lastAStudent);
// console.log("Last student ending in 'd'=", lastAStudent);
// console.log("Position of that student=", lastAIndex);
                            // or
console.log("Last student ending in d=", students.filter(name => name.endsWith("d")).pop());