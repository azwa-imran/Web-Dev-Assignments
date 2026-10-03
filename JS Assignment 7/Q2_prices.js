let prices = [1200, 450, 3000, 750, 1500, 250];
//  a-b ensures numeric comparison
let ascending = [...prices].sort((a, b) => a - b);
console.log("Lowest to highest=", ascending);

let descending = [...prices].sort((a, b) => b - a);
console.log("Highest to lowest=", descending);

console.log("Original list=", prices);
console.log("Reversed list=", [...prices].reverse());

let randomOrder = [...prices].sort(() => Math.random() - 0.5);
console.log("Random order =", randomOrder);