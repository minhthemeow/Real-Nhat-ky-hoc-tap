const getAverage = arr => {
  let sum = 0;
  let averageScore = null
  for (let score of arr) {
    sum += score
  }
  averageScore = sum / arr.length
  return averageScore
}

const getGrade = score => {
  let letterGrade;
  if (score == 100) {
    letterGrade = "A+"
  } else if (score>=90 && score<=99) {
    letterGrade = "A"
  } else if (score>=90 && score<=99) {
    letterGrade = "A"
  } else if (score>=80 && score<=89) {
    letterGrade = "B"
  } else if (score>=70 && score<=79) {
    letterGrade = "C"
  } else if (score>=60 && score<=69) {
    letterGrade = "D"
  } else {
    letterGrade = "F"
  }
  return letterGrade;
}

const hasPassingGrade = score => {
    let grade = getGrade(score)
    if (grade === "F") {
      return false
    } else {
      return true
    }
}

const studentMsg = (scoreArr, studentScore) => {
  let hasPassed = hasPassingGrade(studentScore)
  let avgScore = getAverage(scoreArr)
  let grade = getGrade(studentScore)
  if (hasPassed) {
    return `Class average: ${avgScore}. Your grade: ${grade}. You passed the course.`
  } else {
    return `Class average: ${avgScore}. Your grade: ${grade}. You failed the course.`
  }
}

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85))