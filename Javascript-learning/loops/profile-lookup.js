let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, props) => {
  let hasName = false;
  let position = undefined;
  let hasProp = false;
  for (const obj of contacts) {
    if (obj["firstName"] == name) {
      hasName = true;
      position = contacts.indexOf(obj);
      if (props in obj) {
        hasProp = true;
      }
    }
  }
  if (hasName && hasProp) {
    return contacts[position][props]
  } else {
    if (!hasName) {
      return "No such contact";
    }
    if (!hasProp) {
      return "No such property";
    }
  }
  // console.log(hasName);
  // console.log(hasProp);
  // console.log(position);
}

console.log(lookUpProfile("Kristian", "lastName"))