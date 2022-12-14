// https://www.youtube.com/watch?v=mz6tAJMVmfM

function collatz(n) {
  if (n == 1) {
    return 0;
  } else if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else if (n % 2 === 1) {
    return 1 + collatz(3 * n + 1);
  }
}
