const fs = require("fs").promises;

// 프로미스의 에러는 catch하지 않아도 알아서 처리된다
// setInterval(() => {
//   fs.unlink("./abcdefg.js");
// }, 1000);

// 단, 노드 버전이 올라감에 따라 바뀔 수 있다
// 따라서 프로미스를 사용할 때는 항상 catch를 붙여주는 것을 권장한다
setInterval(() => {
  fs.unlink("./abcdefg.js").catch((err) => {
    console.error(err);
  });
}, 1000);

/**
 * (node:82115) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, unlink './abcdefg.js'
 * (Use `node --trace-warnings ...` to show where the warning was created)
 * (node:82115) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async
 * function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on
 * unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.
 * html#cli_unhandled_rejections_mode). (rejection id: 1)
 * (node:82115) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not
 * handled will terminate the Node.js process with a non-zero exit code.
 * // 계속 반복
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
 */
