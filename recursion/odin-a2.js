function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const halfA = arr.slice(0, Math.round(arr.length / 2));
    const halfB = arr.slice(Math.round(arr.length / 2));
    const sortedA = mergeSort(halfA);
    const sortedB = mergeSort(halfB);

    let sortedArr = [];

    while (sortedA.length || sortedB.length) {
      if (!sortedB.length) {
        sortedArr.push(sortedA.shift());
      } else if (!sortedA.length) {
        sortedArr.push(sortedB.shift());
      } else if (sortedA[0] < sortedB[0]) {
        sortedArr.push(sortedA.shift());
      } else {
        sortedArr.push(sortedB.shift());
      }
    }

    return sortedArr;
  }
}
