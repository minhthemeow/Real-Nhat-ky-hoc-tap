/* USER STORIES
1. You should have a destroyer function that accepts an array and one or more additional arguments.
2. The destroyer function should return a new array excluding all elements 
from the first argument that match any of the subsequent arguments.
3. The function must accept an indeterminate number of arguments.
*/

const destroyer = (arr, ...others) => {
  let newArr = []
  newArr = arr.filter(el => !(others.includes(el)))
  return newArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))