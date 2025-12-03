const bouncer = arr => {
  let newArr = []
  for ( let el of arr) {
    let isTruthy = Boolean(el)
    if (!isTruthy) {
      continue;
    } else {
      newArr.push(el)
    }
  }
  return newArr
}

console.log(bouncer([7, "ate", "", false, 9]))