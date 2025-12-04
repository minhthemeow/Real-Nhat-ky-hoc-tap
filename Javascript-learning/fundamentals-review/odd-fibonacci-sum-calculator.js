const sumFibs = num => {
  let num1 = 0;
  let num2 = 1;
  let fiboArr = [num1, num2]
  let num3 = num1 + num2
  let sumOddFibo = 0;
  while (num3 <= num) {
    fiboArr.push(num3)
    num1 = num2
    num2 = num3
    num3 = num1 + num2
  }
  for (let fiboNum of fiboArr) {
    if (fiboNum % 2 !== 0) {
      sumOddFibo += fiboNum
    }
  }
  return sumOddFibo
}

console.log(sumFibs(4))