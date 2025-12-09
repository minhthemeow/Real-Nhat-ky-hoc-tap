/*
Create a function that takes an array of two numbers and returns 
the least common multiple (LCM) of those two numbers and all the numbers between them.
*/

const smallestCommons = (arr) => {
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[1];
  let newArr = [];
  let lcm = min;
  while (min <= max) {
    newArr.push(min);
    min++;
  }
  while (lcm) {
    if (newArr.every((el) => lcm % el == 0)) {
      return lcm;
    } else {
      lcm++;
    }
  }
};

console.log(smallestCommons([1, 5]));
