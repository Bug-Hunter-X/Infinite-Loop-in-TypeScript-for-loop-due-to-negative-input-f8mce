function printNumbers(n: number): void {
  if (n < 0) {
    console.error('Input must be a non-negative number.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine
printNumbers(-5); // this now outputs an error message