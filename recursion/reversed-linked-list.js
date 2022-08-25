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

function iterativePrintReversedList(list) {
  let tmp = list;
  let arr = [];

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function recursivePrintReversedList(list) {
  if (list) {
    recursivePrintReversedList(list.next);
    console.log(list.value);
  }
}
