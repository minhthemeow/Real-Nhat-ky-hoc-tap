function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;
  if (current === null) return false;
  while (current.next !== null) {
    if (current.element === element) return true;
    current = current.next;
  }
  return false;
}

function getAt(list, index) {
  let current = list.head;
  let currentIndex = 0;
  if (current === null) return undefined;
  while (current !== null) {
    if (currentIndex === index) return current.element;
    current = current.next;
    currentIndex++;
  }
  return undefined;
}

function insertAt(list, index, element) {
  //check if given index is unreasonable
  if (index < 0 || index > list.length) return;
  const newNode = {
    element: element,
    next: null
  };
  
  //check insert at head
  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode
    list.length++;
    return;
  }

  let current = list.head;
  let currentIndex = 0;
  // check insert at midst and end
  while (current !== null) {
    if (currentIndex === index-1) {
      newNode.next = current.next;
      current.next = newNode;
      list.length++;
      return;
    }
    current = current.next;
    currentIndex++;
  }
}

function removeAt(list, index) {
  if (index < 0 || index > list.length) return;
  let current = list.head;
  let currentIndex = 0;
  // check remove at head
  if (index === 0) {
    list.head = current.next;
    current.next = null;
    list.length--;
    return;
  }
  // check remove at midst and end
  while (current !== null) {
    if (currentIndex === index-1) {
      const removeNode = current.next;
      current.next = removeNode.next;
      removeNode.next = null;
      list.length--;
      return;
    }
    current = current.next;
    currentIndex++;
  }
}

function clear(list) {
  if (list.length === 0) return;
  while (list.head !== null) {
    let current = list.head.next;
    list.head.next = null;
    list.head = current;
    list.length--;
  }
  return;
}

const myList = initList();
add(myList, 1);
add(myList, 3);
add(myList, 5);
console.log(myList);
clear(myList);
console.log(myList);