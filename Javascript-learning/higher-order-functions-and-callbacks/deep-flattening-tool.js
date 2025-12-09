/* USER STORIES
1. You should have a function named steamrollArray.
2. The steamrollArray function should accept one argument: a nested array.
3. The function should flatten the nested array, accounting for varying levels of nesting.
4. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
5. Global variables should not be used.
*/

const steamrollArray = (arr) => {
  let work = arr.slice();
  let outcome = [];
  while (true) {
    let nextWork = [];
    let foundNested = false;
    for (let el of work) {
      if (!Array.isArray(el)) {
        outcome.push(el);
      } else {
        foundNested = true;
        for (let el2 of el) {
          nextWork.push(el2);
        }
      }
    }
    if (!foundNested) {
      break;
    }
    work = nextWork;
  }
  return outcome;
};
console.log(steamrollArray([[["a"]], [["b"]]]));
