const diffArray = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2]
  return newArr.filter(el => !(arr1.includes(el) && arr2.includes(el)))
}

console.log(diffArray([1, 2], [2, 3]))