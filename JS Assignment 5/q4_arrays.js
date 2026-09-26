let myArray = ["Apple", "Banana", "Mango"];
let myString = "Hello World";
let myNumber = 42;

console.log("Is myArray an array?", Array.isArray(myArray));   
console.log("Is myString an array?", Array.isArray(myString)); 
console.log("Is myNumber an array?", Array.isArray(myNumber)); 

const showArray = (arr) => {
    console.log("arr is=", arr);
};
showArray(myArray);

const showValue = (value) => {
    console.log("Value is=", value);
};
showValue(myNumber);