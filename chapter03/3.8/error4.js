/**
 * 예측이 불가능한 에러를 처리하는 방법
 */

process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

// throw에러는 프로세스를 멈추게 한다
// 즉, 미처 try/catch로 처리하지 못한 에러
setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

// uncaughtException 이벤트가 없다면 setTimeout은 실행되지 않는다
setTimeout(() => {
  console.log("실행됩니다");
}, 2000);

/**
 * process.on('uncaughtException')
 * 미처 try/catch로 처리하지 못한 에러가 발생했을 때 이벤트 리스너가 실행되고 프로세스가 유지된다
 * 1. setInterval, 1000ms 코드에서 에러 발생
 * 2. 에러를 throw했기 때문에 process 멈춤
 * 3. setTimeout, 2000ms 코드 실행 안됨
 * 4. 하지만 process.on('uncaughtException') 이벤트가 발생되었기 때문에
 * 5. process 멈춤 없이 setTimeout 코드가 실행
 * 6. setInterval 코드는 계속 에러를 발생시키는 중
 *
 * 단, 노드 공식 문서에 따르면 uncaughtException 이벤트는 최후의 수단으로 사용할 것을 명시하고 있다
 * 에러의 내용을 기록하고, process.exit()로 프로세스를 종료하는 것이 좋다
 */
