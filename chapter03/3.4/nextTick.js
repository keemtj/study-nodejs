setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));

/**
 * process.nextTick은 setImmediate나 setTimeout보다 먼저 실행됩니다
 * Promise.resolve도 nextTick처럼 다른 콜백들보다 우선시됩니다
 * process.nextTick과 Promise를 마이크로태스크(microtask)라고 따로 구분지어 부릅니다
 */
