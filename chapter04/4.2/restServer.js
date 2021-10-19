const http = require("http");
const fs = require("fs").promises;

const users = {}; // 데이터 저장용

http
  .createServer(async (req, res) => {
    try {
      console.log("req.method:", req.method, "|", "req.url:", req.url);
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./restFront.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data);
        } else if (req.url === "/about") {
          const data = await fs.readFile("./about.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data);
        } else if (req.url === "/users") {
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(JSON.stringify(users));
        }
        // 주소가 /도 /about도 아니면
        try {
          const data = await fs.readFile(`.${req.url}`);
          return res.end(data);
        } catch (error) {
          // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found Error 발생
        }
      } else if (req.method === "POST") {
        if (req.url === "/user") {
          let body = "";
          // 요청의 body를 stream 형식으로 받음
          req.on("data", (data) => {
            body += data;
          });
          // 요청의 body를 다 받은 후 실행됨
          return req.on("end", () => {
            console.log("POST 본문(Body):", body);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201);
            res.end("등록 성공");
          });
        }
      } else if (req.method === "PUT") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          let body = "";
          req.on("data", (data) => {
            body += data;
          });
          return req.on("end", () => {
            console.log("PUT 본문(Body):", body);
            users[key] = JSON.parse(body).name;
            return res.end(JSON.stringify(users));
          });
        }
      } else if (req.method === "DELETE") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          delete users[key];
          return res.end(JSON.stringify(users));
        }
      }
      res.writeHead(404);
      return res.end("NOT FOUND");
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8082, () => {
    console.log("8082번 포트에서 서버 대기 중입니다");
  });

/**
 * POST/PUT의 요청을 처리할 때 req.on('data'), req.on('end')의 사용
 * req, res는 내부적으로 스트림(readStream, writeStream)으로 되어 있으므로
 * 요청/응답의 데이터가 스트림 형식으로 전달된다
 */
