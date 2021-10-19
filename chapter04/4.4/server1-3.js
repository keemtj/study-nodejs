/**
 * https는 아무나 사용할 수 있는 것이 아니다
 * 암호화를 적용하는 만큼, 그것을 인증해줄 수 있는 기관도 필요하다
 * 인증서는 인증 기관에서 구입해야 하며, Let's Encrypt 같은 기관에서 무료로 발급해주기도 한다
 *
 * 인증서 발급 과정은 복잡하고 도메인도 필요하므로 인증서를 발급받는 방법은 이 책에서 소개하지 않는다
 * 발급받은 인증서가 있다면 다음과 같이 하면 된다
 */
const https = require("https");
const fs = require("fs");

https
  .createServer(
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
    console.log("443번 포트에서 서버 대기 중입니다!");
  });

/**
 * 인증서를 구입하면 pem, crt, key 확장자를 가진 파일들을 제공한다
 * 파일들을 fs.readFileSync 메서드로 읽어서 cert, key, ca 옵션에 알맞게 넣으면 된다
 * 실제 서버에서는 80포트 대신 443포트를 사용한다
 */
