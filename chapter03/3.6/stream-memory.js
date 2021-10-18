const fs = require("fs");

console.log("before:", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");

readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream:", process.memoryUsage().rss);
});

/**
 * before: 20230144
 * stream: 60563456
 *
 * 스트림을 사용해서 파일을 복사했더니 메모리를 62MB밖에 차지하지 않습니다
 * 동영상 같은 큰 파일들을 전송할 때 이러한 이유로 스트림을 사용합니다
 */
