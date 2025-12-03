const titleCase = str => {
  let words = str.split(" ")
  // console.log(wordArr)
  for (let i=0; i<words.length; i++) {
    const word = words[i]
    if (word.length === 0) {
      continue // avoid blank str
    }
    const first = word[0].toUpperCase()
    // console.log(first)
    const rest = word.slice(1).toLowerCase()
    // console.log(rest)
    words[i] = first + rest
    // console.log(words)
  }
  return words.join(" ")
}

console.log(titleCase("sHoRt AnD sToUt"))