const generatePassword = length => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = []
  let min = 0;
  let max = chars.length
  for (let i=0; i<length; i++) {
    let randomIndex = Math.floor(Math.random() * (max - min) + min)
    let randomChar = chars[randomIndex]
    password.push(randomChar)
  }
  return password.join("")
}

const password = generatePassword(8);
console.log("Generated password: " + password)