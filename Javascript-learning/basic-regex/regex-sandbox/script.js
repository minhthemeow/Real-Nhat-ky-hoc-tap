const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


const getFlags = () => {
  const flagArr = [];
  if (caseInsensitiveFlag && caseInsensitiveFlag.checked) 
    flagArr.push("i");
  if (globalFlag && globalFlag.checked) 
    flagArr.push("g");
  return flagArr.join("");
}

const checkPattern = () => {
  const flag = getFlags();
  const re = new RegExp(regexPattern.value, flag);
  const str = stringToTest.textContent;

  if (re.test(str) && re && str) {
    if (flag && flag.includes("g")) {
    re.lastIndex = 0; // use for reset regex last index when using with global flag
    const matched = str.matchAll(re);
    const matchedArr = Array.from(matched);
    let matchedText = [];
    let text = str.replaceAll(re, `<span class="highlight">$&</span>`);
    stringToTest.innerHTML = text;
    for (let arr of matchedArr) {
      matchedText.push(arr[0]);
    }
    testResult.innerText = matchedText.join(", ");

    } else {
      const matched = str.match(re);
      let text = str.replace(re, `<span class="highlight">$&</span>`);
      stringToTest.innerHTML = text;
      testResult.textContent = matched[0];
    } 
  } else {
      testResult.textContent = "no match";
  }
}

testButton.addEventListener("click", checkPattern);


