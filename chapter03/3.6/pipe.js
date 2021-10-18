/**
 * Node v8.5 이전 방식/3.6.3절 참고
 * createReadStream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있다
 * 파일 복사와 비슷하다
 * 스트림끼리 연결하는 것을 '파이핑한다(pipe처럼 데이터가 흐른다)'라고 표현한다
 */

const fs = require("fs");

const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("writeme3.txt");
readStream.pipe(writeStream);
// readme4.txt를 writeme3.txt로 보내주세요.
// readme4.txt의 데이터가 writeme3.txt로 넘어간다
