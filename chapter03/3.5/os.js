const os = require("os");

console.log("운영체제 정보-------------------------------------");
console.log("os.arch()", os.arch());
console.log("os.platform()", os.platform());
console.log("os.type()", os.type());
console.log("os.uptime()", os.uptime());
console.log("os.hostname()", os.hostname());
console.log("os.release()", os.release());

console.log("경로---------------------------------------------");
console.log("os.homedir()", os.homedir());
console.log("os.tmpdir()", os.tmpdir());

console.log("cpu 정보-----------------------------------------");
console.log("os.cpus()", os.cpus());
console.log("os.cpus().length", os.cpus().length);

console.log("메모리 정보---------------------------------------");
console.log("os.freemem()", os.freemem());
console.log("os.totalmem()", os.totalmem());

/**
 * os.constants: 에러가 발생했을 때, EADDRINUSE or ECONNRESET 같은 에러 코드를 함께 보여줍니다
 * 너무 많아서 발생할 때 마다 검색해보는 것이 좋습니다
 */
