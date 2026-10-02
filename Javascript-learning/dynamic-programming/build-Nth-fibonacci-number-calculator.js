// Implement tabulation
const fibonacci = n => {
  const sequence = [0, 1];
  if (n == 0 || n == 1) {
    return n;
  } else if (n < 0) {
    return;
  } 
  for (let i=2; i<=n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence[sequence.length-1];
}

console.log(fibonacci(10))

// Implement memoization

// const fibonacci = (n, memo={}) => {
//   if (memo[n] !== undefined) return memo[n];
//   if (n<0) {
//     return;
//   } else if (n <= 1) {
//     return n;
//   }

//   memo[n] = fibonacci(n-1) + fibonacci(n-2);
//   return memo[n]
// }

// console.log(fibonacci(15))