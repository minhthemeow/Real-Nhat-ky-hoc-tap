const quicksort = arr => {
  if (arr.length <= 1) return arr;
  let subArr1 = [];
  let subArr2 = [];
  let pivot = arr[arr.length-1];
  for (let i=0; i<arr.length-1; i++) {
    if (arr[i] < pivot) subArr1.push(arr[i]);
    else subArr2.push(arr[i]);
  } 
  let arr1 = quicksort(subArr1);
  let arr2 = quicksort(subArr2);
  
  return [...arr1, pivot, ...arr2];
}

console.log(quicksort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));