const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};
console.time("전체 시간");
console.log("평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담아주세요");

console.table([
  { name: "keem", birth: 1992 },
  { name: "lee", birth: 1987 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체 시간");

/**
 * $ node console
 * 평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.
 * abc 1 true
 * 에러 메시지는 console.error에 담아주세요
 * ┌─────────┬────────┬───────┐
 * │ (index) │  name  │ birth │
 * ├─────────┼────────┼───────┤
 * │    0    │ 'keem' │ 1992  │
 * │    1    │ 'lee'  │ 1987  │
 * └─────────┴────────┴───────┘
 * { outside: { inside: { key: 'value' } } }
 * { outside: { inside: [Object] } }
 * 시간 측정: 2.701ms
 * Trace: 에러 위치 추적
 *     at b (/Users/keem/Documents/study-nodejs/chapter03/3.4/console.js:29:11)
 *     at a (/Users/keem/Documents/study-nodejs/chapter03/3.4/console.js:32:3)
 *     at Object.<anonymous> (/Users/keem/Documents/study-nodejs/chapter03/3.4/console.js:34:1)
 *     at Module._compile (internal/modules/cjs/loader.js:1085:14)
 *     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
 *     at Module.load (internal/modules/cjs/loader.js:950:32)
 *     at Function.Module._load (internal/modules/cjs/loader.js:790:12)
 *     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
 *     at internal/main/run_main_module.js:17:47
 * 전체 시간: 21.398ms
 */
