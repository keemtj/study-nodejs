<details>
<summary>목차</summary>

- 📗 Chapter06. 익스프레스 웹 서버 만들기 [🔗](#-chapter06-익스프레스-웹-서버-만들기)

  - 📖 6.1 익스프레스 프로젝트 시작하기 [🔗](#-익스프레스-프로젝트-시작하기)
  - 📖 6.2 자주 사용하는 미들웨어 [🔗](#-자주-사용하는-미들웨어)
    - 🔖 6.2.1 morgan [🔗](#-morgan)
    - 🔖 6.2.2 static [🔗](#-static)
    - 🔖 6.2.3 body-parser [🔗](#-body-parser)
    - 🔖 6.2.4 cookie-parser [🔗](#-cookie-parser)
    - 🔖 6.2.5 express-session [🔗](#-express-session)
    - 🔖 6.2.6 미들웨어의 특성 활용하기 [🔗](#-미들웨어의-특성-활용하기)
    - 🔖 6.2.7 multer [🔗](#-multer)
  - 📖 6.3 Router 객체로 라우팅 분리하기 [🔗](#-Router-객체로-라우팅-분리하기)
  - 📖 6.4 req와 res 객체 살펴보기 [🔗](#-req와-res-객체-살펴보기)
  - 📖 6.5 템플릿 엔진 사용하기 [🔗](#-템플릿-엔진-사용하기)
    - 🔖 6.5.1 퍼그 [🔗](#-퍼그)
    - 🔖 6.5.2 넌적스 [🔗](#-넌적스)

</details>

## 📗 Chapter06. 익스프레스 웹 서버 만들기

익스프레스는 http 모듈의 요청과 응답 객체에 추가 기능들을 부여했다. 기존 메서드들도 계속 사용할 수 있지만, 편리한 메서드들을 추가하여 기능을 보완했다. 또한 코드를 분리하기 쉽게 만들어 관리하기도 용이합니다. if문으로 요청 메서드와 주소를 구별하지 않아도 된다.

- express에서 라우터(router)는 기본적으로 아래와 같은 형태를 가진다.

```javascript
app.METHOD(PATH, HANDLER);
```

- METHOD: http 요청 메소드(get, post, put, patch, delete, options)
- PATH: 경로
- HANDLER: 실행될 함수
- **미들웨어는 req, res, next를 매개변수로 가지는 함수**로써 app.use, app.get, app.post 등으로 장착한다.
- 에러 처리 미들웨어만 예외적으로 err, req, res, next의 4개의 매개변수를 갖는다.

자세한 내용은 아래에서 확인한다.

### 📖 익스프레스 프로젝트 시작하기

- 익스프레스, nodemon을 설치한다.

```shell
$ npm i express
$ npm i -D nodemon
```

- package.json의 scripts 부분의 start 속성을 변경한다.
- 앞으로 서버 코드를 수정하면 nodemon이 서버를 자동으로 재시작한다.

```json
{
  "name": "learn-express",
  ...
  "main": "app.js",
  "scripts": {
    "start": "nodemon app"
  },
  ...
}
```

```javascript
const express = require("express");
const path = require("path");

const app = express();
// 서버가 실행될 포트를 설정
// app.set(키, 값), app.get(키)로 가져올 수 있다.
app.set("port", process.env.PORT || 3000);

// 주소에 대한 GET 요청이 올 때 어떤 동작을 할지 적는 부분
app.get("/", (req, res) => {
  // 동작: 'Hello Express'를 send(응답)함
  res.send("Hello Express");
  // 동작: 'index.html'파일을 send(응답)함
  res.sendFile(path.join(__dirname, "index/html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
```

- localhost:3000에 접속하면 "Hello Express" 또는 HTML이 표시된다.
- GET 요청 외에도 POST, PUT, PATCH, DELETE, OPTIONS에 대한 라우터를 위한 `app.post`, `app.put`, `app.patch`, `app.delete`, `app.options` 메서드가 존재한다.

### 📖 자주 사용하는 미들웨어

- 미들웨어는 익스프레스의 핵심이다. 요청과 응답의 중간(미들)에 위치하여 미들웨어라고 부른다.
- 뒤에 나오는 라우터와 에러 핸들러 또한 미들웨어의 일종이다.
- 미들웨어는 요청과 응답을 조작하여 기능을 추가하기도 하고, 나쁜 요청을 걸러내기도 한다.
- `app.use(미들웨어)`

```javascript
...
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행된다.');
  // 다음 미들웨어로 넘어가는 함수
  next();
});

// 라우터에 미들웨어가 2개 연결되어 있음
app.get('/', (req, res, next) => { // 미들웨어1
  console.log('GET / 요청에서만 실행된다.');
  // 다음 미들웨어로 넘어가는 함수
  // 미들웨어2로 넘어간다
  next();
}, (req, res) => { // 미들웨어2
  throw new Error('에러가 발행하면 에러 처리 미들웨어로 간다.');
});

app.use((err, req, res, next) => { // 에러처리 미들웨어
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {...}
```

| 코드                       | 실행                                       |
| -------------------------- | ------------------------------------------ |
| app.use(미들웨어)          | 모든 요청에서 미들웨어 실행                |
| app.use('/abc', 미들웨어)  | abc로 시작하는 요청에서 미들웨어 실행      |
| app.get('/abc', 미들웨어)  | abc로 시작하는 GET 요청에서 미들웨어 실행  |
| app.post('/abc', 미들웨어) | abc로 시작하는 POST 요청에서 미들웨어 실행 |

- 미들웨어를 통해 요청과 응답에 다양한 기능을 추가할 수 있고, 이미 많은 사람이 유용한 기능들을 패키지로 만들었다.
- `morgan`, `cookie-parser`, `express-session`
- 미들웨어 내부에 req, res, next가 들어 있고, next도 내부적으로 호출한다.

```javascript
...
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require('dotenv');

dotenv.config();
...
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
...
```

> **dotenv**  
> dotenv 패키지는 .env 파일을 읽어서 process.env로 만든다. process.env를 별도의 파일로 관리하는 이유는 보안과 설정의 편의성 때문이다. .env 파일만 잘 관리하면 비밀 키를 지킬 수 있다.

#### 🔖 morgan

- 기존 로그 외에 추가적인 로그를 볼 수 있다.
- `app.use(morgan("dev"))`
- dev 외에 combined, common, short, tiny 등을 넣을 수 있다.
- 개발환경에서는 `"dev"`, 배포 환경에서는 `"combined"`를 주로 사용한다.

```shell
# dev 모드 기준 로그
GET / 500 7.409ms -  50
# [HTTP method] [주소] [HTTP status code] [응답 속도] - [응답 바이트]
```

#### 🔖 static

- 정적 파일들을 제공하는 라우터 역할을 한다.
- 별도로 설치할 필요 없이 express 객체 안에서 제공되는 미들웨어이다.
- 정적 파일들이 담겨 있는 폴더를 지정하면 된다. 일반적으로 public 폴더로 지정되어 있다.
- 실제 서버의 폴더 경로에는 public이 들어 있지만, 요청 주소에는 public이 들어 있지 않다. 이는 외부인이 서버의 구조를 쉽게 파악할 수 없기 때문에 보안에 큰 도움이 된다.
- 정적 파일을 알아서 제공해주므로 fs.readfile로 파일을 직접 읽어서 전송할 필요가 없다. 만약 **요청 경로에 해당하는 파일이 없으면** 알아서 내부적으로 **next를 호출**한다. 파일을 발견했다면 다음 미들웨어는 실행되지 않는다. 응답으로 파일을 보내고 next를 호출하지 않기 때문이다.

```javascript
app.use("요청 경로", express.static("실제 경로"));
app.use("/", express.static(path.join(__dirname, "public")));
```

#### 🔖 body-parser

- Request body에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어이다.
- form 데이터나 Ajax 요청의 데이터를 처리한다.
- 단, 멀티파트(이미지, 동영상, 파일) 데이터는 처리하지 못한다. multer 모듈을 사용해야 한다.

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

> **urlencoded**  
> false: 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석한다.  
> true: npm 패키지인 qs 모듈을 사용하여 쿼리스트링을 해석한다.

- express 4.16.0 버전부터 body-parser 미들웨어의 일부 기능이 익스프레스에 내장되었다.
- 직접 설치해야 하는 경우도 있다. Raw, Text 형식의 데이를 추가로 해석할 수 있다.

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.raw());
app.use(bodyParser.text());
```

#### 🔖 cookie-parser

- 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만든다.
- name=keem 쿠키를 보냈다면 req.cookies는 { name: 'keem' }가 된다.
- 유효 기간이 지난 쿠키는 알아서 걸러낸다.
- 쿠키는 클라이언트에서 위조하기 쉬우므로 비밀 키를 통해 만들어낸 서명을 쿠키 값 뒤에 붙인다.
- name=keem.sign과 같은 모양이 된다. 서명된 쿠키는 req.cookies 대신 req.signedCookies 객체에 들어 있다.
- 쿠키를 생성/제거하기 위해서는 res.cookie, res.clearCookie 메서드를 사용한다.
- `res.cookie(키, 값, 옵션)` 형식으로 사용한다. 옵션은 `domain`, `expires`, `httpOnly`, `maxAge`, `path`, `secure`, `signed` 등이 있다.

```javascript
app.use(cookieParser(비밀키));
```

```javascript
res.cookie("name", "keem", {
  expires: new Date(Date.now() + 900000),
  httpOnly: true,
  secure: true,
});
res.clearCookies("name", "keem", { httpOnly: true, secure: true });
```

- 쿠키를 지우려면 키와 값 외에 옵션도 정확히 일치해야 한다. 단, expires나 maxAge 옵션은 일치할 필요가 없다.
- signed 옵션을 true로 설정하면 쿠키 뒤에 서명이 붙게된다.
- 내 서버가 쿠키를 만들었다는 것을 검증할 수 있으므로 대부분의 경우 서명 옵션을 켜두는 것이 좋다.
- 서명을 위한 비밀 키는 cookieParser 미들웨어에 인수로 넣은 process.env.COOKIE_SECRET이 된다.

#### 🔖 express-session

- 세션 관리용 미들웨어다. 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 유용하다. req.session 객체 안에 유지된다.
- express-session 1.5 버전 이전에는 내부적으로 cookie-parser를 사용하고 있어서 cookie-parser 미들웨어보다 뒤에 위치해야 했지만, 1.5 버전 이후부터는 사용하지 않게 되어 순서가 상관 없다.
- express-session은 세션 관리 시 클라이언트에 쿠키를 보낸다. 이것이 세션 쿠키이다.
- cookie 옵션은 세션 쿠키에 대한 설정으로 일반적인 쿠키 옵션이 모두 제공된다.
- `httpOnly: true`로 설정해 클라이언트에서 쿠키를 확인하지 못하도록 했고, `secure: false`로 해서 https가 아닌 환경에서도 사용할 수 있게 했다.
- 배포시에는 https를 적용하고 `secure: true`로 설정하는 것이 좋다.
- 현재는 메모리에 세션을 저장하도록 되어 있어서 서버를 재시작하면 메모리가 초기화되어 세션이 모두 사라지게 된다.
- 배포시에는 store에 데이터베이스를 연결하여 세션을 유지하는 것이 좋다(레디스).

```javascript
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
```

```javascript
req.session.name = "keem"; // 세션 등록
req.sessionID; // 세션 아이디 확인
req.session.destroy(); // 세션 모두 제거

req.session.save();
// 세션 강제 저장
// 일반적으로 요청이 끝날 때 자동으로 호출되므로 직접 save 메서드를 호출할 일은 없다.
```

- 개발자 도구에서 쿠키를 확인해보면 express-session에서 서명한 쿠키 앞에는 s:가 붙는다. 실제로는 encodeURIComponent 함수가 실행되어 s%3A가 된다.
- s%3A의 뒷부분이 실제 암호화된 쿠키 내용이다.

#### 🔖 미들웨어의 특성 활용하기

- **미들웨어는 req, res, next를 매개변수로 가지는 함수**로써 app.use, app.get, app.post 등으로 장착한다.
- 에러 처리 미들웨어만 예외적으로 err, req, res, next의 4개의 매개변수를 갖는다.
- 특정한 주소의 요청에만 미들웨어가 실행되게 하려면 첫 번째 인수에 주소를 넣는다.

```javascript
app.use((req, res, next) => {
  console.log("모든 요청에 다 실행된다.");
  next();
});
```

- 동시에 여러 개의 미들웨어를 장작할 수도 있다.
- 다음 미들웨어로 넘어가려면 next 함수를 호출한다. 내부적으로 next를 호출하기도 한다.
- next를 호출하지 않는 미들웨어는 res.send, res.sendFile 등의 메서드로 응답을 보내야 한다.
- express.static과 같은 미들웨어는 정적 파일을 제공할 때 next 대신 res.sendFile 메서드로 응답을 보낸다. 따라서 정적 파일을 제공하는 경우 express.json, express.urlencoded, cookieParser 미들웨어는 실행되지 않는다.
- 미들웨어 장착 순서에 따라 어떤 미들웨어는 실행되지 않을 수도 있다.
- next 또는 응답을 보내지 않으면 클라이언트는 응답을 받지못하고 기다리기만 한다.

> - **next:** 다음 미들웨어로
> - **next('route'):** 다음 라우터로
> - **next(error):** 에러 핸들러로

```javascript
app.use(
  morgan("dev"),
  express.static("/", path.join(__dirname, "public")),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(process.env.COOKIE_SECRET)
);
```

- 미들웨어 간에 데이터를 전달할 때는 세션을 사용하거나 req 객체에 데이터를 넣어두면 된다.
- 세션을 사용하면 세션이 유지되는 동안에 데이터도 계속 유지된다는 단점이 있다.
- 요청이 끝날 때까지만 데이터를 유지하고 싶다면 req 객체를 이용한다.
- 새로운 요청이 오면 req.data는 초기화된다.

```javascript
app.use(
  (req, res, next) => {
    req.data = "데이터 넣기";
    next();
  },
  (req, res, next) => {
    console.log(req.data); // 데이터 받기
  }
);
```

> **app.set과의 차이**  
> app.set으로 익스프레스에서 데이터를 저장할 수 있다. app.get 또는 res.app.get으로 어디서든지 데이터를 가져올 수 있다. 하지만 app.set을 사용하지 않고 req 객체에 데이터를 넣어서 다음 미들웨어로 전달하는 이유가 있다. app.set은 익스프레스에서 전역적으로 사용되므로 사용자 개개인의 값을 넣기에는 부적절하다. app.set은 주로 앱 전체의 설정을 공유할 때 사용하면 된다.  
> req 객체는 요청을 보낸 사용자 개개인에게 귀속되므로 req 객체를 통해 개인의 데이터를 전달하는 것이 좋다.

- 미들웨어를 사용할 때 유용한 패턴이 있다. 미들웨어 안에 미들웨어를 넣는 방식이다.

```javascript
app.use(morgan("dev"));
// 또는
app.use((req, res, next) => {
  morgan("dev")(req, res, next);
});
```

- 이 패턴은 기존 미들웨어의 기능을 확장할 수 있고, 조건문에 따라 다른 미들웨어를 적용하여 분기처리할 수 있다.

```javascript
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});
```

#### 🔖 multer

- 이미지, 동영상 등을 비롯한 여러가지 파일들을 멀티파트 형식으로 업로드할 때 사용하는 미들웨어이다.

> **멀티파트 형식**  
> enctype이 multipart/form-data인 폼을 통해 업로드하는 데이터의 형식을 의미한다.

- 멀티파트 형식으로 업로드하는 데이터는 개발자 도구의 **Network** 탭에서 확인할 수 있다.
- 폼을 통해 업로드하는 파일은 body-parser로는 처리할 수 없고 직접 파싱하기도 어렵기 때문에 multer 미들웨어를 사용한다.

| 이름   | 미들웨어     | 기능                     |
| ------ | ------------ | ------------------------ |
| multer | single       | 이미지 하나는 req.file로 |
|        |              | 나머지 정보는 req.body로 |
|        | array,fields | 이미지들은 req.files로   |
|        |              | 나머지 정보는 req.body로 |
|        | none         | 모든 정보를 req.body로   |

- **6.2/learn-express**에서 코드 참조

### 📖 Router 객체로 라우팅 분리하기

- 익스프레스를 사용하는 이유 중 하나는 바로 라우팅을 깔끔하게 관리할 수 있다는 점이다.
- app.get 같은 메서드가 라우터 부분이다. 라우터를 많이 연결하면 app.js 코드가 매우 길어지므로 익스프레스에서는 라우터를 분리할 수 있는 방법을 제공한다.
- app.use로 라우터를 연결할 때 주소가 합쳐진다는 것을 염두에 두면 된다.
- **6.3/learn-express**에서 코드 참조

```javascript
// routes/index.js
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello express");
});

module.exports = router;
```

```javascript
// routes/user.js
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello user");
});

module.exports = router;
```

```javascript
// app.js
const indexRouter = require("./routes");
const userRouter = require("./routes/user");

app.use("/", indexRouter);
app.use("/user", userRouter);
```

- 같은 주소의 라우터를 여러 개 만들어도 된다.
- 라우터가 몇 개든 간에 next를 호출하여 다음 미들웨어를 실행시킨다.
- next('route')로 호출하게 되면 다음 미들웨어들은 건너뛰고 주소와 일치하는 다음 라우터로 넘어간다.
- 라우터 주소에는 정규표현식을 비롯한 특수 패턴을 사용할 수 있다.
- `/user/:id`의 `:id`와 같은 매개변수 패턴으로 req.params 객체 안에 들어있다. `:id`는 `req.params.id`, `:type`은 `req.params.type`으로 조회가 가능하다.
- 단, 주의할 점은 일반 라우터보다 뒤에 위치해야 한다.

```javascript
router.get("/user/:id", (req, res) => {
  console.log("이 라우터만 실행된다.");
});
router.get("/user/like", (req, res) => {
  console.log("전혀 실행되지 않는다.");
});
// 두 라우터의 순서를 바꾸면 모두 실행된다.
```

- 주소에 쿼리스트링을 쓸 때도 있다.
- 쿼리스트링의 키-값 정보는 req.query 객체 안에 들어있다.
- 예를 들어 `/users/123?limit=5&skip=10`이라는 주소의 요청이 들어왔을 때 req.params와 req.query 객체는 다음과 같다.

```shell
{ id: '123' } { limit: '5', skip: '10' }
```

- 익스프레스는 자체적으로 404 에러를 처리해주지만, 웬만하면 일치하는 라우터가 없을 때 404 상태 코드를 응답하는 미들웨어를 만들어주는 것이 좋다.

```javascript
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
```

- 주소는 같지만 메서드가 다른 코드가 있을 때 이를 하나의 덩어리로 줄일 수 있다.

```javascript
router.get("/abc", (req, res) => {
  res.send("GET /abc");
});
router.post("/abc", (req, res) => {
  res.send("POST /abc");
});
// 중복되는 주소의 여러 라우터를 하나로 묶어준다.
router
  .route("/abc")
  .get((req, res) => {
    res.send("GET /abc");
  })
  .post((req, res) => {
    res.send("POST /abc");
  });
```

### 📖 req와 res 객체 살펴보기

익스프레스의 req, res 객체는 http 모듈의 req, res를 확장한 것이다. 기존 http 모듈의 메서드도 사용할 수 있고, 익스프레스가 추가한 메서드나 속성을 사용할 수도 있다.

**req 객체**

- `req.app:` app 객체에 접근할 수 있다.
- `req.body:` body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체이다.
- `req.cookies:` cookies-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체이다.
- `req.ip:` 요청의 ip 주소가 담겨 있다.
- `req.params:` 라우트 매개변수에 대한 정보가 담긴 객체이다.
- `req.query:` 쿼리스트링에 대한 정보가 담긴 객체이다.
- `req.signedCookies:` 서명된 쿠키들은 req.cookies 대신 여기에 담겨있다.
- `req.get(헤더 이름):` 헤더의 값을 가져오고 싶을 때 사용하는 메서드이다.

**res 객체**

- `res.app:` app 객체에 접근할 수 있다.
- `res.cookie(키, 값, 옵션):` 쿠키를 설정하는 메서드이다.
- `res.clearCookie(키, 값, 옵션):` 쿠키를 제거하는 메서드이다.
- `res.end():` 데이터 없이 응답을 보낸다.
- `res.json(JSON):` JSON 형식의 응답을 보낸다.
- `res.redirect(주소):` 리다이렉트할 주소와 함께 응답을 보낸다.
- `res.render(뷰, 데이터):` 템플릿 엔진을 렌더링해서 응답할 때 사용하는 메서드이다.
- `res.send(데이터):` 데이터와 함께 응답을 보낸다.
- `res.sendFile(경로):` 경로에 위치한 파일을 응답한다.
- `res.set(헤더, 값):` 응답의 헤더를 설정한다.
- `res.status(코드):` 응답 시의 HTTP 상태 코드를 지정한다.

req나 res 객체의 메서드는 메서드 체이닝을 지원하는 경우가 많다.

```javascript
res.status(201).cookie("test", "test").redirect("/admin");
```

### 📖 템플릿 엔진 사용하기

- 대표적인 템플릿 엔진으로 퍼그(Pug)와 넌적스(Nunjucks)가 있다.

> **EJS를 사용하지 않는 이유**  
> 노드 생태계에서 EJS나 Handlebars 같은 템플릿 엔진도 많이 사용하지만, 레이아웃 기능은 없다.

#### 🔖 퍼그

- 문법이 간단해서 코드의 양이 많이 줄어든다.
- Ruby와 문법이 비슷하며 HTML과는 문법이 많이 달라 호불호가 갈린다.
- 익스프레스와 연결하기 위해 아래와 같은 부분이 들어있어야 한다.

```shell
$ npm i pug
```

```javascript
// app.js
...
app.set('port', process.env.PORT || 3000);
// 퍼그(Pug) 연결
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
...
```

#### 🔖 넌적스

- HTML 문법을 그대로 사용하되 추가로 자바스크립트 문법을 사용할 수 있고, 파이썬의 템플릿 엔진인 Twig와 문법이 유사하다.
- 퍼그와는 연결 방법이 다소 다르다.

```shell
$ npm i nunjucks
```

```javascript
// app.js
...
const nunjucks = require("nunjucks");
...
app.set('view engine', 'html');
// 확장자는 html을 사용한다.
// 넌적스임을 구분하려면 njk 확장자를 쓰고 view engine도 njk로 바꾼다.

nunjucks.configure('views', {
  express: app,
  watch: true,
});
...
```

#### 🔖 에러 처리 미들웨어

- 에러 발생 시 error.html을 render할 수 있도록 에러 처리 미들웨어를 작성한다.

```javascript
// 404 응답처리 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
```

> **app.locals, req.app.locals, res.locals의 차이**
>
> `app.locals`
>
> - 자바스크립트 객체이고, 프로퍼티들은 애플리케이션 내의 지역 변수들이다.
> - 애플리케이션의 라이프 타임 동안 유효하다.
>
> `req.app.locals`
>
> - 미들웨어에서 app의 지역 변수들을 사용할 수 있게 해준다.
>
> `res.locals`
>
> - res.locals의 프로퍼티들은 request의 라이프 타임 동안에만 유효하다.
> - **html/view 클라이언트 사이드로 변수들을 보낼 수 있으며, 그 변수들은 오로지 거기서만 사용할 수 있다.**
>
> 출처: https://rat2.tistory.com/18
