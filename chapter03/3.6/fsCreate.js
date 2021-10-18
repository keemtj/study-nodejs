const fs = require("fs").promises;
const constants = require("fs").constants;

fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더 없음");
      return fs.mkdir("./folder");
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    return fs.open("./folder/file.js", "w");
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd); // fd: file id
    return fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("이름 바꾸기 성공");
  })
  .catch((err) => {
    console.error(err);
  });

/**
 * node fsCreate
 * 폴더 없음
 * 폴더 만들기 성공
 * 빈 파일 만들기 성공 FileHandle {
 *   close: [Function: close],
 * [Symbol(kHandle)]: FileHandle {},
 * [Symbol(kFd)]: 23,
 * [Symbol(kRefs)]: 1,
 * [Symbol(kClosePromise)]: null
 * }
 * 이름 바꾸기 성공
 */
/**
 * node fsCreate
 * 이미 폴더 있음
 */
/**
 * 1. fs.access(경로, 옵션, 콜백)
 *    - F_OK: 파일 존재 여부
 *    - R_OK: 읽기 권한 여부
 *    - W_OK: 쓰기 권한 여부
 *    - 파일/폴더나 권한이 없다면 에러 발생: code 'ENOENT'
 *      (Error NO ENTry or Error NO ENTity; no such file or directory)
 * 2. fs.mkdir(경로, 콜백)
 * 3. fs.open(경로, 옵션, 콜백)
 * 4. fs.rename(기존 경로, 새 경로, 콜백)
 */
