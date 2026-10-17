const book = ["BK-104", "JS for Beginners", "Programming", 1200];
const [Id, title, ,price] = book;
const shortBook = ["BK-105", "Learning ES6"];
const [shortId, shortTitle, category = "General"] = shortBook;
console.log(`Book ${Id}: "${title}" costs Rs. ${price}.`);
console.log(`Book ${shortId}: "${shortTitle}" in  ${category} category.`);
console.log(book);
console.log(shortBook);