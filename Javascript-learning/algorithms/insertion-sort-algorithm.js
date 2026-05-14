const insertionSort = arr => {
  for (let i=1; i<arr.length; i++) {
    let j = i-1;
    let temp = arr[i];
    for (j; j>=0; j--) {
      if (arr[j] > temp) {
        arr[j+1] = arr[j];
      } else break;
    }
    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort([23,1,10,5,2]));