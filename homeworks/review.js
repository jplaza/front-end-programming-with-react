// Square the value of every element in the array. Presume that you will only
// get numbers in the input array.

const input1 = [1, 2, 3, 4, 5];

input1

input1.map(function(number) {
  return Math.pow(number, 2)
}); //=

input1.map(number => Math.pow(number, 2)); //=

// Sum of every positive element

const numbers = [1, -4, 12, 0, -3, 29, -150];

let sumi = 0;
for (const number of numbers) {
  if(number > 0) {
    sumi += number
  }
}
sumi;

const isPositive = num => num > 0;
const sum = (a, b) => a + b;

numbers.filter(isPositive).reduce(sum) //=

// User spread with sum
const nums = [1231, 55454]
sum(...nums)
