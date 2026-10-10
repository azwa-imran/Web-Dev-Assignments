let orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];
console.log("Original orders=", orders);
let firstbigOrder = orders.find(amount => amount > 2000);
console.log("First order=", firstbigOrder);
let bigOrders = orders.filter(amount => amount > 1000);
console.log("Orders=", bigOrders);
let total = orders.reduce((sum, amount) => sum + amount, 0);
console.log("Total sales=", total);