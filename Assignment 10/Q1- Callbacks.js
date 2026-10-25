function calculate(num1, num2, callback) {
    callback(num1, num2);
}
calculate(10, 5, (a, b) => console.log("Sum=", a + b));
function calculateBill(price1, price2, price3, callback) {
    callback(price1, price2, price3);
}
calculateBill(200, 300, 500, (p1, p2, p3) => {
    console.log("Total bill=", p1 + p2 + p3);   
});
let balance = 10000;
function withdrawMoney(amount, callback) {
    console.log("Processing");
    setTimeout(() => {
        balance = balance - amount;
        callback(balance); 
    }, 2000);
}
withdrawMoney(3000, (remaining) => {
    console.log("Remaining balance=", remaining); 
});
console.log("This line runs before the withdrawal finishes");