const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", {
  highWaterMark: 16,
}); // buffer size, 16B
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data: ", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error :", err);
});

/**
 * highWaterMark: buffer size, default 64KB
 */
