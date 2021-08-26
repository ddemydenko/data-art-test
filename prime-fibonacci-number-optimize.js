function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

function fibonacci(num, cache = []) {
  if (num <= 1) {
    return 1;
  }

  if (cache[num]) {
    return cache[num];
  }

  cache[num] = fibonacci(num - 1, cache) + fibonacci(num - 2, cache);

  return cache[num];
}

function nextPrimeFibonacci(number) {
  let i = 1;
  let fib = 0;

  do {
    fib = fibonacci(i);
    i++;
  } while (!(fib > number && isPrime(fib)));

  return fib;
}


module.exports = nextPrimeFibonacci;

