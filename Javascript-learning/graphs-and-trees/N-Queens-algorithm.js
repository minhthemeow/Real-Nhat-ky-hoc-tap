const dfsNQueens = n => {
  if (n < 1) return [];
  const solutions = [];
  let current = [];

  const isValid = (current, row, col) => {
      if (current.length == 0) return true;
      for (let oldRow=0; oldRow<current.length; oldRow++) {
        let oldCol = current[oldRow];
        if (oldCol === col) return false;
        if (Math.abs(row-oldRow) === Math.abs(col-oldCol)) return false;
      }
      return true;
    }

  const dfs = () => { 
    if (current.length === n) {
      solutions.push([...current]);
      return;
    }
    let row = current.length;
    for (let col = 0; col<n; col++) {
      if (isValid(current, row, col)) {
        current.push(col);
        dfs();
        current.pop();
      } 
    }   
  } 
  dfs();
  return solutions;
}

console.log(dfsNQueens(4))