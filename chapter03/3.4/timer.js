/**
 * setTimeout, setInterval, setImmediate는 노드에서 window 대신 global 객체 안에 들어 있습니다.
 * - setImmediate(callbackFn): 콜백 함수를 즉시 실행
 * 이 타이머 함수들은 모두 아이디를 반환합니다.
 * 아이디를 사용하여 타이머를 취소할 수 있습니다.
 * - clearTimeout(아이디): setTimeout을 취소
 * - clearInterval(아이디): setInterval을 취소
 * - clearImmediate(아이디): setImmediate를 취소
 */

const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다");
});

clearImmediate(immediate2);

/**
 * $ node timer
 * 즉시 실행
 * 1초마다 실행
 * 1.5초마다 실행
 * 1초마다 실행
 *
 * 초   실행                콘솔
 * 0    immediate          즉시 실행
 *      immediate2(clear)
 * 1    interval           1초마다 실행
 * 1.5  timeout            1.5초 후 실행
 * 2    interval           1초마다 실행
 * 2.5  timeout2(clear)
 *      interval(clear)
 */

setTimeout(() => {
  console.table([
    { 초: 0, 실행: "immediate, immediate2(clear)", 콘솔: "즉시 실행" },
    { 초: 1, 실행: "interval", 콘솔: "1초마다 실행" },
    { 초: 1.5, 실행: "timeout", 콘솔: "1.5초 후 실행" },
    { 초: 2, 실행: "interval", 콘솔: "1초마다 실행" },
    { 초: 2.5, 실행: "timeout2(clear), interval(clear)", 콘솔: "" },
  ]);
}, 2500);
