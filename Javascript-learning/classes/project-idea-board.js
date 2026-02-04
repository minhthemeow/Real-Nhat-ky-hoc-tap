const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
}

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea)
  }

  unpin(idea) {
    const index = this.ideas.indexOf(idea);
    if (index > -1) {
      this.ideas.splice(index, 1);
    }
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)`;
    if (this.ideas)
      this.ideas.forEach(idea => result += `\n${idea.title} (${idea.status.description}) - ${idea.description}`);
    return result + "\n"
  }
}
// test
const prjBoard = new ProjectIdeaBoard("Tech Projects Board");
const prj = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");
prjBoard.pin(prj);
console.log(prjBoard.formatToString())
