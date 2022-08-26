// iterative fibonacci, sum each number with the one before it
function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) arr.push(i);
    else arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

// recursive fibonacci
function fibsRec(n) {
  if (n <= 2) return [0, 1].slice(0, n);
  else
    return [...fibsRec(n - 1), fibsRec(n - 1).at(-1) + fibsRec(n - 2).at(-1)];
}
