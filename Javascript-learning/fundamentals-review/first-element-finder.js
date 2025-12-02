/*
The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns true.
Example:

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined

*/

const findElement = (arr, func) => {
  for (let i=0; i<arr.length; i++) {
    if(func(arr[i])) {
      return arr[i]
    } else {
      continue;
    }
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))