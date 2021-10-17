/**
 * stdout: 표준(standard) 출력
 * st
 */
const exec = require("child_process").exec;

// const process = exec("dir"); // window
const process = exec("ls"); // linux, mac

process.stdout.on("data", function (data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
  console.error(data.toString());
}); // 실행 에러
