const textInp = document.getElementById("text-input")
const charCount = document.getElementById("char-count")

const counting = inp => {
  let count = 0
  if (inp.length <= 50) {
    if (inp.length === 50) {
      charCount.style.color = "red"
      charCount.style.fontWeight = "bold"
    } else {
      charCount.style.color = "black"
      charCount.style.fontWeight = "normal"
    }
    count = inp.length
    charCount.textContent = `Character Count: ${count}/50`
  } else {
      textInp.value = textInp.value.slice(0, 50)
  }
}

textInp.addEventListener("input", () => counting(textInp.value))