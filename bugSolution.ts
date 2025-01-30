function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both arguments must be numbers or convertible to numbers.');
  }

  return numA + numB;
}

const result1 = addSafe("1", 2); // Now correctly handles string and number input
const result2 = add(1,2); //Correct usage
console.log(result1); //Outputs 3
console.log(result2); //Outputs 3