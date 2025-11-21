const findLongestWordLength = str => {
  let words = str.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word
    } 
  }
  return longestWord.length;
}

console.log(findLongestWordLength("hi there how are you"))