/* USER STORIES
In this lab, you will create a function that filters an array of objects and 
returns only those objects that match all key-value pairs in a given source object.

1. You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
2. The whatIsInAName function should return a new array containing only the objects 
from the collection that have all the key–value pairs present in the source object.
3. If no objects match all the key–value pairs from the source, the function should return an empty array.
*/

const whatIsInAName = (objs, obj) => {
  let arr = []
  for (let el of objs) {
    let objKeyLen = Object.keys(obj).length
    let elKeyLen = 0
    for (let key in el) {
      if (key in obj && el[key] === obj[key]) {
        elKeyLen++
      }
    }
    if (elKeyLen == objKeyLen) {
      arr.push(el)
    }
  }
  return arr
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))