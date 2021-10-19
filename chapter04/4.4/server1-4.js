/**
 * http2 모듈: SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용할 수 있게 한다
 * http/2는 http/1.1보다 개선되어 효율적으로 요청을 보낸다
 * 웹의 속도도 많이 개선된다
 */
const http2 = require("http2");
const fs = require("fs");

http2
  .createSecureServer(
    {
      cert: fs.readFileSync("도메인 인증서 경로"),
      key: fs.readFileSync("도메인 비밀키 경로"),
      ca: [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
      ],
    },
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Server!</p>");
    }
  )
  .listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다");
  });

/**
 * https 모듈과 거의 유사하다
 */
