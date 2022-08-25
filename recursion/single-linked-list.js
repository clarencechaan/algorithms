// https://javascript.info/recursion

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function iterativePrintList(list) {
  let curr = list;

  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

function recursivePrintList(list) {
  if (list) {
    console.log(list.value);
    recursivePrintList(list.next);
  }
}
