setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.error(err);
  }
}, 1000);

/**
 * 에러는 발생하지만 try/catch로 잡을 수 있고, setInterval도 직접 멈추기 전까지 계속 실행된다
 * 시작
 * Error: 서버를 고장내주마!
 *     at Timeout._onTimeout (/Users/keem/Documents/study-nodejs/chapter03/3.8/error1.js:4:11)
 *     at listOnTimeout (internal/timers.js:557:17)
 *     at processTimers (internal/timers.js:500:7)
 * 시작
 * Error: 서버를 고장내주마!
 *     at Timeout._onTimeout (/Users/keem/Documents/study-nodejs/chapter03/3.8/error1.js:4:11)
 *     at listOnTimeout (internal/timers.js:557:17)
 *     at processTimers (internal/timers.js:500:7)
 * // 계속 반복
 */
