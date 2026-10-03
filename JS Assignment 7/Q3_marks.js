let marks1 = [78, 45, 92, 66, 88, 54, 91, 73];

let marks2 = [60, 85, 70, 95];
let combinedMarks = marks1.concat(marks2);
console.log("Combined marks=", combinedMarks);

let smallerList = combinedMarks.slice(3, 7);
console.log("Smaller list =", smallerList);

combinedMarks.splice(5, 1, 100); 
console.log("After changing middle mark=", combinedMarks);

console.log("Total marks stored=", combinedMarks.length);

let sortedAscending = [...combinedMarks].sort((a, b) => a - b);
console.log("Sorted (lowest to highest):", sortedAscending);

let reversedMarks = [...sortedAscending].reverse();
console.log("Reversed (highest to lowest):", reversedMarks);

const showFinalMarks = (marks) => {
    console.log("Final marks array:", marks);
};
showFinalMarks(reversedMarks);