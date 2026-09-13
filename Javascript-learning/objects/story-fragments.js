const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

const compactFragments = arr => {
  const newArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === undefined) {
      console.log("[COMPACTED]");
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortFragments = arr => {
  const newArr = [arr[0]];
  for (let i=1; i<arr.length; i++) {
    let hasInserted = false;
    for (let j=0; j<newArr.length; j++) {
      if (arr[i].id < newArr[j].id) {
        newArr.splice(j, 0, arr[i]);
        hasInserted = true;
        break;
      }
    }
    if (!hasInserted) newArr.push(arr[i]);
  }
  return newArr;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupeFragments = arr => {
  const newArr = [];
  for(let i=0; i<arr.length; i++) {
    let hasNoDuplicate = true;
    for (let obj of newArr) {
      if (arr[i].id === obj.id) {
        hasNoDuplicate = false;
        console.log("[DEDUPED]");
        break;
      }
    }
    if (hasNoDuplicate) {
      newArr.push(arr[i]);
    } 
  }
  return newArr;
}

const dedupedFragments = dedupeFragments(sortedFragments);
// console.log(dedupedFragments)

const fillMissingFragments = arr => {
  const newArr = [arr[0]];
  let currentId = arr[0].id;
  for (let i=1; i<arr.length; i++) {
    if (currentId != arr[i].id-1) {
      currentId++;
      while (currentId < arr[i].id) {
        newArr.push({
          id: currentId,
          text: "[...]"
        });
        console.log("[FILLED]");   
        currentId++;    
      }
    }
    newArr.push(arr[i]);
    currentId = arr[i].id;
  }
  return newArr;
}

const filledFragments = fillMissingFragments(dedupedFragments);
// console.log(filledFragments)

const assembleStory = arr => {
  let story = "";
  for (let el of arr) {
    story += `${el.text}\n`;
  }
  return arr.map((el) => el.text).join("\n");
}

console.log(assembleStory(filledFragments))

