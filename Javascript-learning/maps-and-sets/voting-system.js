const poll = new Map();
const addOption = option => {
  if (!option) {
    return "Option cannot be empty.";
  } else {
    if (!poll.has(option)) {
      console.log(poll.has(option))
      poll.set(option, new Set());
      return `Option "${option}" added to the poll.`
    } else {
      return `Option "${option}" already exists.`
    }
  }
}

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    const optVal = poll.get(option);
    if (optVal.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    } else {
      optVal.add(voterId);
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}

const displayResults = () => {
  let result = "Poll Results:";
  poll.forEach((value,key) => result += `\n${key}: ${value.size} votes`);
  return result;
}

addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Spain");

console.log(poll);
vote("Turkey", 1);
vote("Morocco", 2);
vote("Turkey", 3);
console.log(displayResults());
