//tipo - tuple

const cliente1: readonly [number, string] = [1, 'Luiz'];
const cliente2: [number, string?] = [2];
const cliente3: [number, string, ...string[]] = [3, 'Samuel'];

cliente2[1] = 'Daniel';
cliente3[2] = 'Veroni';
cliente2.pop();
// cliente1.pop(); Property 'pop' does not exist on type 'readonly

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
