/**
 * 노드 자체에서 잡아주는 에러
 */
const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);

/**
 * fs.unlink로 존재하지 않는 파일을 지우고 있다
 * 다행히 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지는 않는다
 * 에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 된다
 *
 * [Error: ENOENT: no such file or directory, unlink './abcdefg.js'] {
 *   errno: -2,
 *   code: 'ENOENT',
 *   syscall: 'unlink',
 *   path: './abcdefg.js'
 * }
 * [Error: ENOENT: no such file or directory, unlink './abcdefg.js'] {
 *   errno: -2,
 *   code: 'ENOENT',
 *   syscall: 'unlink',
 *   path: './abcdefg.js'
 * }
 * // 계속 반복
 *
 * 3.6절에서처럼 에러를 throw하면 노드 프로세스가 멈춰버린다
 * throw를 하는 경우 반드시 try/catch문으로 throw한 에러를 잡아야 한다
 */
