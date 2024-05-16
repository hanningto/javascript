// Write a JavaScript program that returns a subset of a string.
// Sample Data:
// dog
// Expected Output:
// ["d", "do", "dog", "o", "og", "g"

let word = "dog";

let word_array = word.split();
// console.log(word.length)
let x = 0;
let sld_arry = [];
let count = 0;
for (x; x < word.length; x++) {
  for (let y = x; y < word.length; y++) {
    sld = word.slice(x, y + 1);
    sl[count] = sld_arry;
    count += 1;
  }
}
console.log(sld_arry);
