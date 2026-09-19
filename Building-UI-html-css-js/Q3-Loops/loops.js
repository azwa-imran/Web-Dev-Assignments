let n = parseInt(prompt("Enter a number:"));
for (let row = 1; row <= n; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += col;
  }

  console.log(line);
}