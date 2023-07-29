type Overload = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const add: Overload = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((soma, vl) => (soma += vl), x + (y || 0));
  return x + (y || 0);
};

console.log(add(10));
console.log(add(10, 10));
console.log(add(10, 10, 10, 10));
