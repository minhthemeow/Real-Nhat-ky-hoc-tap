const permuteString = (str, prefix="", results=[]) => {
  if (str.length <= 0) {
    if (results.indexOf(prefix)>= 0) {
      return results;
    }
    results.push(prefix);
    return results;
  }
  for (let i=0; i<str.length; i++) {
    const nextChar = str[i];
    const rest = str.slice(0,i) + str.slice(i+1);
    permuteString(rest, prefix+nextChar, results);
  }
  return results;
}

console.log(permuteString("far"));
