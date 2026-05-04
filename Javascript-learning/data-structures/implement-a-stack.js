const initStack = () => {
  return {
    collection: []
  }
}

const push = (stack, e) => stack.collection.push(e);

const pop = (stack, e) => {
  if (stack.collection.length === 0) return undefined;
  else {
    const top = stack.collection.pop(e);
    return top;
  }
};

const peek = (stack, e) => {
  if (stack.collection.length === 0) return undefined;
  else {
    const top = stack.collection[stack.collection.length - 1];
    return top;
  }
}

const isEmpty = stack => stack.collection.length == 0 || false;

const clear = stack => stack.collection = [];