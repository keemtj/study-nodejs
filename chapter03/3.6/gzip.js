const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const zlibStream = zlib.createGzip(); // 스트림을 지원하는 메서드
const writeStream = fs.createWriteStream("./readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);

/**
 * 파일을 압축하는 zlib 모듈 제공
 * zlib의 createGzip 메서드가 스트림을 지원하므로 readStream과 writeStream 중간에서 파이핑을 할 수 있다
 * readme4.txt.gz 압축파일이 생성됨
 */
