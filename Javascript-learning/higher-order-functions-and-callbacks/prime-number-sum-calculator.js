const sumPrimes = num => {
  let sum = 0
  let primeNum = 2
  if (num<2) {
    return sum
  } else if (num == 2) {
    sum = 2
    return sum
  } else {
      while (primeNum <= num) {
        let flag = true
        for (let i=2; i < primeNum; i++) {
          if (primeNum % i == 0) {
            flag = false
          }
        }
        if (flag) {
          sum += primeNum
        }
        primeNum++
      }
    }
  return sum
}
console.log(sumPrimes(5))