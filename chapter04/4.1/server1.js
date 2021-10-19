const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // header
    res.write("<h1>Hello Node!</h1>"); // body, 클라이언트로 보낼 데이터
    res.end("<p>Hello Server!</p>"); // 응답 종료, 인수가 있다면 클라이언트로 데이터를 보냄
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });

/**
 * 클라이언트 -> 요청(포트:8080) -> 서버
 * 클라이언트 <-      응답      <- 서버
 */
