const myReplace = (str, word, replacer) => {
  let firstOfWord = word[0];
  let firstOfReplacer = replacer[0];
  let isUpperCase = false;
  if (firstOfWord.charCodeAt() >= 65 && firstOfWord.charCodeAt() <= 90) {
    isUpperCase = true;
  }
  if (isUpperCase) {
    firstOfReplacer = firstOfReplacer.toUpperCase();
    return str.replace(word, firstOfReplacer + replacer.slice(1))
  } else {
    return str.replace(word, replacer.toLowerCase())
  }
}

console.log(myReplace("I think we should look up there", "up", "Down"))