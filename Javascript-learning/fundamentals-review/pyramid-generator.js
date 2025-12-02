
const pyramid = (pattern, numOfRows, downward = false) => {

  const NL = '\n';
  let result = NL; // phải bắt đầu bằng newline

  if (!downward) {
    // Vertex hướng lên (bool = false): 1, 3, 5, ...
    for (let i = 0; i < numOfRows; i++) {
      const bricks = 2 * i + 1;
      const spaces = numOfRows - i - 1;
      result += ' '.repeat(spaces) + pattern.repeat(bricks) + NL;
    }
  } else {
    // Vertex hướng xuống (bool = true): (2*numOfRows - 1), ..., 3, 1
    for (let i = numOfRows; i >= 1; i--) {
      const bricks = 2 * i - 1;
      const spaces = numOfRows - i;
      result += ' '.repeat(spaces) + pattern.repeat(bricks) + NL;
    }
  }

  // đã kết thúc bằng newline vì mỗi dòng đều + NL
  return result;
};

console.log(pyramid('p', 5, true));
console.log(pyramid('p', 5, false));
