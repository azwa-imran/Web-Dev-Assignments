let count = 0;
for (let roll = 1; roll <= 20; roll++) {
  if (roll === 13) {
    continue;   
  }
  if (roll === 18) {
    break;      
  }
  console.log("Calling roll number " + roll);
  count++;
}
console.log("Total roll numbers called = " + count);