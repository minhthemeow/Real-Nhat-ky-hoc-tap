const adjacencyListToMatrix = list => {
  const matrix = [];
  let n = Object.keys(list);
  for (let i=0; i<n.length; i++) {
    let row = new Array(n.length).fill(0);
    for (let neighbor of list[i]) {
      row[neighbor] = 1;
    }
    matrix.push(row);
    console.log(row);
  }
  return matrix;
}

adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})