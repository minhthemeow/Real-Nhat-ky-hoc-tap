/*
Write a function named chunkArrayInGroups that takes an array as first argument 
and a number as second argument. The function should split the array into smaller 
arrays of length equal to the second argument and returns them as a two-dimensional array.
*/

const chunkArrayInGroups = (arr, num) => {
  let arrLen = arr.length;
  let curArr = arr.slice();
  let chunks = [];
  console.log(curArr)
  while (arrLen > num) {
    chunks.push(curArr.slice(0, num));
    curArr = curArr.slice(num);
    arrLen = curArr.length;
    console.log(curArr)
  }
  chunks.push(curArr.slice(0, num));
  return chunks
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))