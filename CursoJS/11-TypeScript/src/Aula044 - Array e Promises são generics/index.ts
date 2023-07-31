//Arrays e promises são Generics

const arr = [1, 2, 3, 4, 5, 6];

async function promise1() {
  return 1;
}

function promise2(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

promise1().then((value) => console.log(value)); //function promise1(): Promise<number>
promise2().then((value) => console.log(value)); //function promise2(): Promise<unknown>
export default 1;
