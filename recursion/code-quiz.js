// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// return the sum of all numbers from 1 up to the number passed in
function sumRange(n) {
  if (n === 1) return 1;
  else return n + sumRange(n - 1);
}

// return the base number to the power of the exponent
function power(b, x) {
  if (x === 0) return 1;
  else return b * power(b, x - 1);
}

// return the factorial of a number
function factorial(n) {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
}

// return true if every value in array returns true when passed as a parameter to
// the callback function
function all(arr, cb) {
  if (!arr.length) return true;
  else return cb(arr[0]) && all(arr.slice(1), cb);
}

// returns the product of all the numbers in an array of numbers
function productOfArray(arr) {
  if (!arr.length) return 1;
  else return arr[0] * productOfArray(arr.slice(1));
}

// return true if nested object contains value
function contains(nestedObject, val) {
  if (typeof nestedObject !== "object") return nestedObject === val;
  else return Object.values(nestedObject).some((obj) => contains(obj, val));
}

// return the total number of integers stored inside a multi-dimensional array
function totalIntegers(arr) {
  if (!Array.isArray(arr)) return Number.isInteger(arr) ? 1 : 0;
  else return arr.reduce((count, elem) => count + totalIntegers(elem), 0);
}

// sums the squares of numbers in an array that may contain more arrays
function sumSquares(arr) {
  if (!Array.isArray(arr)) return arr * arr;
  else return arr.reduce((sum, elem) => sum + sumSquares(elem), 0);
}

// return an array containing repetitions of the number argument
function replicate(times, num) {
  if (times <= 0) return [];
  else return [num, ...replicate(times - 1, num)];
}
