const selectionSort = arr => {
  for (let i=0; i<arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j=i+1; j<arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 7]))