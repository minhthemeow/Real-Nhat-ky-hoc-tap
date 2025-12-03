/*
You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from 
the argument arrays, in the order they are first found in the arguments.
For example, an input like [1, 2, 4], [2, 3, 5] 
would have an output of [1, 2, 4, 3, 5].
*/

const uniteUnique = (...arrs) => {
  let unqArr = []
  for (let arr of arrs) {
    for (let val of arr) {
      if (unqArr.includes(val)) {
        continue
      } else {
        unqArr.push(val)
      }
    }
  }
  return unqArr
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))