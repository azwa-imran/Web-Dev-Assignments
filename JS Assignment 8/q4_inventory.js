let inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
inventory.set("mangoes", 150);
inventory.set("apples", 450);
console.log("Bananas quantity=", inventory.get("bananas"));
console.log("Has oranges?", inventory.has("oranges"));
console.log("Has grapes?", inventory.has("grapes"));
inventory.delete("oranges");
console.log("Total products=", inventory.size);
console.log("Product names=", [...inventory.keys()]);
console.log("Quantities=", [...inventory.values()]);
inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});
inventory.clear();
console.log("Final size=", inventory.size);