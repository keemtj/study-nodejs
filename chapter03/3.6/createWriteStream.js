const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");

writeStream.write("이 글을 씁니다. \n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();

writeStream.on("finish", () => {
  console.log("파일 쓰기 완료"); // 파일 쓰기 완료 후 콜백 호출
});
