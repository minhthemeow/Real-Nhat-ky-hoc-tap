/*
USER STORIES:
Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.
*/

const frankenSplice = (arr1, arr2, index) => {
  // console.log(arr1)
  let mergedArr = arr2.slice()
  for (let i=0; i<arr1.length; i++) {
    mergedArr.splice(index+i, 0, arr1[i]);
  }
  // console.log(arr2)
  return mergedArr
}

console.log(frankenSplice([1, 2], ["a", "b"], 1))