//checks if a string ends with the given target string.
let confirmEnding = (str, strToCheck) => {
  let checkPortion = str.slice(-strToCheck.length);
  return checkPortion == strToCheck ? true : false;
}
console.log(confirmEnding("Bastian", "n"))