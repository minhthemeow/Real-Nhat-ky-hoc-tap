const largestOfAll = matrix => {
  let biggestOfEach = []
  for (let i=0; i< matrix.length; i++){
    let biggest = matrix[i][0]
    for (let j=1; j<matrix[i].length; j++) {
      if (matrix[i][j] > biggest) {
        biggest = matrix[i][j]
      }
    }
    biggestOfEach.push(biggest)
  }
  return biggestOfEach;
} 

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))