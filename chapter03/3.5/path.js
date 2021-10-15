const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("--------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log(
  "apth.basename - extname:",
  path.basename(string, path.extname(string))
);
console.log("--------------------------------");
console.log("path.parse()", path.parse(string));
console.log(
  "path.format():",
  path.format({
    dir: "/Users/keem/Documents/study-nodejs/chapter03/3.5",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize():",
  path.normalize(
    "/Users///keem//Documents//study-nodejs///chapter03/3.5///path.js"
  )
);
console.log("--------------------------------");
console.log("path.isAbsolute('/'):", path.isAbsolute("/"));
console.log("path.isAbsolute('/Users'):", path.isAbsolute("/Users"));
console.log("path.isAbsolute('/Users/keem'):", path.isAbsolute("/Users/keem"));
console.log("path.isAbsolute('./home'):", path.isAbsolute("./home"));
console.log("--------------------------------");
console.log(
  "path.relative():",
  path.relative(
    "/Users/keem/Documents/study-nodejs/chapter03/3.5/path.js",
    "/Users/keem/Documents/study-nodejs"
  )
);
console.log(__dirname);
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/users", ".", "/keem")
);
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "users", ".", "keem")
);
