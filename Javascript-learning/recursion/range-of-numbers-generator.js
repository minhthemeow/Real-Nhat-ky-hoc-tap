const rangeOfNumbers = (start, end) => {
  let sortArr = [];
  if (end < start) {
    return [];
  } else {
    sortArr = rangeOfNumbers(start, end-1);
    sortArr.push(end);
    return sortArr;
  }
}

console.log(rangeOfNumbers(3, 9))