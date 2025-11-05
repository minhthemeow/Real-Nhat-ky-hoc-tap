function truncateString (str, num) {
  if (str.length > num) {
    let truncatedStr;
    let newStr = str.slice(0, num);
    truncatedStr = newStr + "...";
    return truncatedStr;
  } else {
    return str;
  }
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))