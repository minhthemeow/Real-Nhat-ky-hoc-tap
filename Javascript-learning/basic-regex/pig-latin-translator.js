const translatePigLatin = str => {
  let firstChar = str[0];
  let regex = /^(?<first>[bcdfghjklmnpqrstvwxyz]+(?=[aeiou]))(?<last>.*)/i;
  if ("aiueo".includes(firstChar)) {
    return str + "way";
  }
  const match = str.match(regex);
  if (!match) {
    return str + "ay";
  }
  let newStr = str.replace(regex, '$<last>$<first>ay')
  return newStr;
}

console.log(translatePigLatin("california"));