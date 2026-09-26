let students = ["Ali", "Sara", "Ahmed", "Fatima", "Hamza"];

students.push("Zain");
console.log("After push:", students);
// pop() and shift() return the removed element
// so we store it in a variable to display which element was removed
let removedLast = students.pop();
console.log( "removedLast=", removedLast);
console.log("After pop:", students);

students.unshift("Anaya");
console.log("After unshift=", students);

let removedFirst = students.shift();
console.log("removed First=", removedFirst);
console.log("After shift=", students);

console.log("Final number of students=", students.length);