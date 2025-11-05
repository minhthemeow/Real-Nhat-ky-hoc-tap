function maskEmail (email) {
  let maskedPart = email.slice(1, email.indexOf("@")-1);
  let aster = "";
  let count = 1;
  while (count <= maskedPart.length) {
    aster += "*";
    count++;
  }
  let maskedEmail = email.replace(maskedPart, aster);
  return maskedEmail; 
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));