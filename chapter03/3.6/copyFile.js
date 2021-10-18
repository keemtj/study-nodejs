/**
 * Node v8.5 이후 createReadStream이나 createWriteStream을 pipe하지 않아도 파일을 복사할 수 있다
 */
const fs = require("fs").promises;

fs.copyFile("readme4.txt", "writeme4.txt")
  .then(() => {
    console.log("복사 완료");
  })
  .catch((error) => {
    console.error(error);
  });
