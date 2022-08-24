function recursiveFibonacci(n) {
  return n === 1 || n === 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

function iterativeFibonacci(n) {
  let a = 1;
  let b = 1;
  let sum = 1;

  for (let i = 3; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return sum;
}
