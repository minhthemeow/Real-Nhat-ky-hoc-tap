const spinalCase = str => {
  const regex = /\s+|_/g;
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  newStr = newStr.replace(regex, "-").toLowerCase();
  return newStr;
}

console.log(spinalCase("This Is Spinal   Tap"))