// for loop solution
function forLoopSumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// recursion solution
function recursionSumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + recursionSumTo(n - 1);
  }
}

// arithmetic progression solution
function arithmeticSumTo(n) {
  return (n * (1 + n)) / 2;
}

// fastest solution is arithmetic progression solution because it doesn't make a
// calculation for every number up to n

// slowest solution is recursion solution because a new call to the function is made
// for every number up to n

// we cannot use recursion for n = 100000 because the maximal recursion depth is
// limited by the JavaScript engine
