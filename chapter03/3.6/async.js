/**
 * 콘솔 결과 예측해보기
 * 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어갑니다
 * 따라서 파일 읽기 요청만 세 번을 보내고 console.log('끝')을 찍습니다.
 * 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알립니다.
 * 메인 스레드는 그제서야 등록된 콜백 함수를 실행합니다.
 */
const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});
console.log("끝");
