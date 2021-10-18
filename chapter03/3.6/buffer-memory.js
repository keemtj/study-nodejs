/**
 * readFile 메서드를 사용하여 big.txt를 big2.txt로 복사하기
 */
const fs = require("fs");

console.log("before", process.memoryUsage().rss);

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big2.txt", data1);
console.log("buffer:", process.memoryUsage().rss);

/**
 * before 20221952
 * buffer: 1021165568
 *
 * 1GB 용량의 파일을 복사하기 위해 메모리에 파일을 모두 올려둔 후 writeFileSync를 수행했기 때문에
 * 순간적으로 18MB의 메모리 용량이 1GB를 넘어갔다
 */
