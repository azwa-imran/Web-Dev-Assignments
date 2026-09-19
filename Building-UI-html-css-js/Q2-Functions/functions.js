function greet() {
  console.log("Welcome to JavaScript!");
}
function greetUser(name) {
  console.log("Welcome, " + name + "!");
}
function addNumbers(num1, num2) {
  return num1 + num2;
}
greet();
greetUser("Ali");
const sum = addNumbers(5, 10);
console.log(sum);