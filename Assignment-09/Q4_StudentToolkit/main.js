import getTotalMarks, { getFullName } from "./studentTools.js";
const fullName = getFullName("Sara", "Ahmed");
const total = getTotalMarks(78, 85, 90, 82);
console.log("Full name:", fullName);
console.log("Total marks:", total);