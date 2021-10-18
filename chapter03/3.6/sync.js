const fs = require("fs");

console.log("시작");
let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());
console.log("끝");

/**
 * 동기적으로 작업을 처리하지만
 * 백그라운드가 작업하는 동안 메인 스레드가 아무것도 하지 못하고 대기하게 된다
 * 메인 스레드가 일을 하지 않고 노는 시간이 생기므로 비효율적이다
 */
