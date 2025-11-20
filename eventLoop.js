
console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout 0ms');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise 1');
});

console.log('4: Synchronous');

setTimeout(() => {
  console.log('5: Timeout 10ms');
}, 10);

Promise.resolve().then(() => {
  console.log('6: Promise 2');
});

console.log('7: End');

