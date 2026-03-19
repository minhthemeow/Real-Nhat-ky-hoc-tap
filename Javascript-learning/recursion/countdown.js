const countdown = number => {
  let countdownArr = [];
  if (number<1) {
    return [];
  } else {
    countdownArr = countdown(number-1);
    countdownArr.unshift(number);
    return countdownArr;
  }
}

console.log(countdown(5));