/*
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. 
The lowest number will not always come first. 
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
*/
const sumAll = arr => {
  let [num1, num2] = arr
  let start = num1 < num2 ? num1 : num2
  let end = num1 > num2 ? num1 : num2
  let sum = 0
  while (start <= end) {
    sum += start
    start++;
  }
  return sum
}

console.log(sumAll([4, 1]))
