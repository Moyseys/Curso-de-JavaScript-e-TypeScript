let n: unknown;

n = 100;
n = '100';
n = true;
n = 1;

if (typeof n === 'number') console.log(n + 7);
