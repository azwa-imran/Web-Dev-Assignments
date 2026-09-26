let groceries = ["Milk", "Bread", "Eggs"];
let vegetables = ["Onion", "Tomato", "Potato"];

let fullList = groceries.concat(vegetables);
console.log("Full list=", fullList);

let priorityItems = fullList.slice(1, 4);
console.log("Priority items =", priorityItems);
console.log("after slice =", fullList);

let boughtItems = fullList.splice(3, 3);
console.log("Bought items =", boughtItems);
console.log("after splice =", fullList);

fullList.splice(1, 0, "Butter");
console.log("after splice =", fullList);

delete fullList[2];
console.log("Full list after delete=", fullList);
console.log("Length after delete =", fullList.length);