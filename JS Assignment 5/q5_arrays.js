let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
console.log("Products=", products.length);

console.log("First product=", products.at(0));
console.log("Last product=", products.at(-1));

products.push("Webcam");
console.log("After push=", products);

products.unshift("Speaker");
console.log("After unshift=", products);

let removedLast = products.pop();
console.log("Removed Last=", removedLast);
console.log("After pop=", products);

let removedFirst = products.shift();
console.log("Removed First=", removedFirst);
console.log("After shift=", products);

let newProducts = ["Charger", "USB Cable"];
let allProducts = products.concat(newProducts);
console.log("After concat=", allProducts);

let smallerList = allProducts.slice(0, 3);
console.log("Smaller List=", smallerList);

allProducts.splice(1, 1, "Gaming Mouse"); 
console.log("After splice =", allProducts);

console.log("Final list =", allProducts.join(", "));

const showFinalArray = (arr) => {
    console.log("Final array=", arr);
};
showFinalArray(allProducts);
console.log("Is allProducts an array?", Array.isArray(allProducts));