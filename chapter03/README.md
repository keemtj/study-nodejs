<details>
<summary>목차</summary>

- 📗 Chapter03. 노드 기능 알아보기 [🔗](#-chapter03-노드-기능-알아보기)
  - 📖 3.1 REPL 사용하기 [🔗](#-REPL-사용하기)
  - 📖 3.2 JS 파일 실행하기 [🔗](#-JS-파일-실행하기)
  - 📖 3.3 모듈로 만들기 [🔗](#-모듈로-만들기)
  - 📖 3.4 노드 내장 객체 알아보기 [🔗](#-노드-내장-객체-알아보기)
    - 🔖 3.4.1 global [🔗](#-global)
    - 🔖 3.4.2 console [🔗](#-console)
    - 🔖 3.4.3 타이머 [🔗](#-타이머)
    - 🔖 3.4.4 filename과 dirname [🔗](#-filename과-dirname)
    - 🔖 3.4.5 module, exports, require [🔗](#-module과-exports-그리고-require)
    - 🔖 3.4.6 process [🔗](#-process)
  - 📖 3.5 노드 내장 모듈 사용하기 [🔗](#-노드-내장-모듈-사용하기)
    - 🔖 3.5.1 os [🔗](#-os)
    - 🔖 3.5.2 path [🔗](#-path)
    - 🔖 3.5.3 url [🔗](#-url)
    - 🔖 3.5.4 querystring [🔗](#-querystring)
    - 🔖 3.5.5 crypto [🔗](#-crypto)
    - 🔖 3.5.6 util [🔗](#-util)
    - 🔖 3.5.7 worker_threads [🔗](#-worker_threads)
    - 🔖 3.5.8 child_process [🔗](#-child_process)
    - 🔖 3.5.9 기타 모듈 [🔗](#-기타-모듈)
  - 📖 3.6 파일 시스템 접근하기 [🔗](#-JS-파일-시스템-접근하기)
    - 🔖 3.6.1 동기 메서드와 비동기 메서드 [🔗](#-동기-메서드와-비동기-메서드)
    - 🔖 3.6.2 버퍼와 스트림 이해하기 [🔗](#-버퍼와-스트림-이해하기)
    - 🔖 3.6.3 기타 fs 메서드 알아보기 [🔗](#-기타-fs-메서드-알아보기)
    - 🔖 3.6.4 스레드풀 알아보기 [🔗](#-스레드풀-알아보기)
  - 📖 3.7 이벤트 이해하기 [🔗](#-이벤트-이해하기)
  - 📖 3.8 예외 처리하기 [🔗](#-예외-처리하기)
    - 🔖 3.8.1 자주 발생하는 에러들 [🔗](#-자주-발생하는-에러들)

</details>

## 📗 Chpater03 노드 기능 알아보기

### 📖 REPL 사용하기

- 자바스크립트는 스크립트 언어이므로 미리 컴파일을 하지 않아도 즉석에서 코드를 실행할 수 있다.
- **REPL**: 코드를 읽고(Read), 해석하고(Eval), 결과를 반환하고(Print), 종료 전까지 반복한다(Loop)
- 한두 줄짜리 코드를 테스트 해보는 용도로는 좋지만 여러 줄의 코드를 실행하기엔 불편하다.

```shell
$ node
> const str = 'Hello world, hello node';
undefined
> console.log(str);
Hello world, hello node
undefined
> .exit
```

### 📖 JS 파일 실행하기

- 자바스크립트 파일을 생성하여 실행할 수 있다.
- REPL에서 입력하는 것이 아닌 콘솔에서 입력해야 한다.
- `node [자바스크립트 파일 경로]` 명령어를 입력한다.

```javascript
// sayHelloWorld.js
function sayHelloWorld() {
  console.log("hello world");
}
sayHelloWorld();
```

```shell
$ node sayHelloWorld.js # 확장자 생략 가능
hello world
```

### 📖 모듈로 만들기

- 노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와 다르다.

> **모듈이란**  
> 특정한 기능을 하는 함수나 변수들의 집합이다. 모듈은 자체로도 하나의 프로그램이면서 다른 프로그램의 부품으로도 사용할 수 있다. 예를 들어 수학에 관련된 코드들만 모아서 모듈을 하나 만들 수 있다.

- 여러 프로그램에서 해당 모듈을 재사용할 수 있다.
- 보통 파일 하나가 모듈 하나가 된다.
- 파일별로 코드를 모듈화할 수 있어 관리하기 편하다.

> **ES2015 묘듈**  
> ES2015가 도입되면서 자바스크립트도 자체 모듈 시스템 문법이 생기게 되었다. 이 문법은 노드의 모듈 시스템과 조금 다르다.
>
> ```javascript
> // func.mjs
> import { odd, even } from "./var";
>
> function checkOddOrEven(num) {
>   if (num % 2) {
>     return odd;
>   }
>   return even;
> }
>
> export default checkOddOrEven;
> ```
>
> `require`와 `module.exports`가 `import`와 `export default`로 바뀌었다. 상당한 부분에서 차이가 있으므로 단순히 글자만 바꿔서는 제대로 동작하지 않을 수 있다. 위 에제에서는 `require`를 `import`로, `module.exports`를 `export default`로 바꾸기만 하면 된다.  
> 노드에서도 9 버전부터 ES2015의 모듈 시스템을 사용할 수 있다. 하지만 파일의 확장자를 `.mjs`로 지정해야하는 제한이 있다. `.mjs` 확장자 대신 `.js` 확장자를 사용하면서 ES2015 모듈을 사용하려면 `package.json`에 `type: "module"` 속성을 넣으면 된다.
>
> 추가 자료: https://yceffort.kr/2020/08/commonjs-esmodules

### 📖 노드 내장 객체 알아보기

#### 🔖 global

- **global:** 브라우저의 `window`와 같은 전역 객체이다. 내부를 보기 위해서 REPL을 이용한다.
- **require:** `global.require`에서 `global`이 생략된 것이다.
- **console:** `global.console`에서 `global`이 생략된 것이다.

> **노드의 window, document 객체**  
> 노드에는 DOM, BOM이 없으므로 `window`와 `document` 객체는 노드에서 사용할 수 없다.

> **global 객체의 남용**  
> `global` 객체의 속성에 값을 대입하여 파일 간에 데이터를 공유할 수 있지만, 프로그램의 규모가 커질수록 어떤 파일에서 `global` 객체에 값을 대입했는지 찾기 힘들어져 유지 보수에 어려움을 겪기 때문에 남용하지 않는다. 다른 파일의 값을 사용하고 싶다면 모듈 형식으로 만들어서 명시적으로 값을 불러와 사용하는 것이 좋다.

#### 🔖 console

- **console.time(레이블):** 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
- **console.tiemEnd(레이블):** 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
- **console.log(내용, 내용, ..., 내용):** 평범한 로그를 콘솔에 표시한다.
- **console.error(에러 내용):** 에러를 콘솔에 표시한다.
- **console.table(배열):** 테이블 형식으로 표현된다.
- **console.dir(객체, 옵션):** 객체를 콘솔에 표시할 때 사용한다. 옵션은 colors, depth 등을 넣어 사용한다.
- **console.trace(레이블):** 에러가 어디서 발생했는지 추적할 수 있게 한다.

#### 🔖 타이머

- **setTimeout(cb, ms):** 주어진 밀리초 이후에 콜백 함수를 실행한다.
- **setInterval(cb, ms):** 주어진 밀리초마다 콜백 함수를 반복 실행한다.
- **setImmediate(cb):** 콜백 함수를 즉시 실행한다.

> 타이머 함수는 모두 id를 return한다.

- **clearTimeout(id):** setTimeout을 취소한다.
- **clearInterval(id):** setInterval을 취소한다.
- **clearImmediate(id):** setImmediate를 취소한다.

#### 🔖 filename과 dirname

- **\_\_filename:** 현재 파일명
- **\_\_dirname:** 현재 파일의 경로

```javascript
// filename.js
console.log(__filename);
console.log(__dirname);
```

```shell
$ node filename.js
/User/user/Documents/study-nodejs/filename.js
/User/user/Documents/study-nodejs
```

#### 🔖 module과 exports 그리고 require

- `module.exports`로 한번에 대입하는 대신, 각각의 변수를 `exports` 객체에 하나씩 넣을 수 있다. `module.exports`와 `exports`는 같은 객체를 참조하기 때문이다. `console.log(module.exports === exports)`는 `true`가 나온다

```javascript
// var.js
const odd = "odd";
const even = "even";
module.exports = {
  odd,
  even,
};
// 또는
exports.odd = "odd";
exports.even = "even";
```

> **노드에서 this**  
> 브라우저의 자바스크립트와 동일하지만 최상위 스코프에 존재하는 `this`는 `module.exports` 또는 `exports`를 가리킨다. 또한, 함수 선언문 내부의 `this`는 `global` 객체를 가리킨다. 화살표 함수의 this는 `exports`를 가리킨다.

- **require.cache:** 한 번 require한 파일은 require.cache에 저장된다.
- **require.main:** 노드 실행 시 첫 모듈을 가리킨다.

> 2개의 파일이 서로를 참조하는 경우 순환 참조되는 대상을 빈객체로 만든다. 순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요하다.

#### 🔖 process

- 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다. REPL을 이용하여 확인할 수 있다.
- `process.version`, `process.arch`, `process.platform`, `process.pid`, `process.uptime()`, `process.execPath`, `process.cwd()`, `process.cpuUsage()`
- 운영체제나 실행 환경별로 다른 동작을 하고 싶을 때 사용한다.
- **process.env:** 시스템의 환경 변수 이름과 값들을 반환한다. 임의로 환경 변수를 저장할 수 있다.

  ```javascript
  const secretId = process.env.SECRET_ID;
  const secretCode = process.env.SECRET_CODE;
  ```

- **process.nextTick(cb):** 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만든다.

  > `process.nextTick`과 `Promise`는 다른 콜백들보다 우선시 된다. 이를 **마이크로태스크(microtask)**라고 따로 구분지어 부른다.

  > `process.nextTick`으로 받은 콜백 함수나 `resolve`된 `Promise`는 다른 이벤트 루프에서 대기하는 콜백 함수보다도 먼저 실행된다. 그래서 비동기 처리를 할 때 `setImmediate`보다 `process.nextTick`을 더 선호하는 개발자도 있다. 하지만 이런 마이크로태스크를 재귀 호출하게 되면 이벤트 루프는 다른 콜백 함수보다 **마이크로태스크**를 우선하여 처리하므로 콜백 함수들이 실행되지 않을 수도 있다.

- **process.exit(숫자 코드):** 실행 중인 노드 프로세스를 종료한다. 서버 환경에서 사용하면 서버가 멈추므로 특수한 경우를 제외하고 사용하지 않는다. 독립적인 프로그램에서는 수동으로 노드를 멈추기 위해 사용한다. 숫자 코드로 0(생략)은 정상 종료, 1은 비정상 종료를 뜻한다.

### 📖 노드 내장 모듈 사용하기

공식 문서에 모두 나와 있는 내용이지만 중요하고 자주 사용하는 것들

#### 🔖 os

- 운영체제별로 다른 서비스를 제공하고 싶을 때 os 모듈이 유용하다.
- `os.arch()`, `os.platform()`, `os.type()`, `os.uptime()`, `os.hostname()`, `os.release()`, `os.homedir()`, `os.tmpdir()`, `os.cpus()`, `os.freemem()`, `os.totalmem()`, `os.constants`

> **코어 개수 확인하기**  
> `os.cpus().length`는 코어의 개수가 숫자로 나온다. 하지만 노드에서는 싱글 스레드 프로그래밍을 하면 코어가 몇 개이든 상관없이 대부분의 경우 코어를 하나밖에 사용하지 않는다. cluster 모듈을 사용하는 경우에는 코어 개수에 맞춰서 프로세스를 늘릴 수 있다. 이때는 `cpus()` 메서드를 사용한다.

#### 🔖 path

- path 모듈은 노드 프로그래밍에서 자주 쓰게 될 모듈 중 하나이다.
- `path.sep`, `path.delimiter`, `path.dirname(경로)`, `path.extname(경로)`, `path.basename(경로, 확장자)`, `path.parse(경로)`, `path.format(객체)`, `path.normalize(경로)`, `path.isAbsolute(경로)`, `path.relative(기준경로, 비교경로)`, `path.join(경로, ...)`, `path.resolve(경로, ...)`

#### 🔖 url

- 노드 7 버전에서 추가된 WHATWG(웹 표준을 정하는 단체의 이름) 방식의 url과 노드에서 사용하는 기존 방식의 url이 존재한다.
- `url.parse(주소)`, `url.format(객체)`
- url 모듈 안에 `URL` 생성자가 있다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재한다.
- 다음은 searchParams 객체의 속성들이다.
- `getAll(key)`, `get(key)`, `has(key)`, `keys()`, `values()`, `append(key, value)`, `set(key, value)`, `delete(key)`, `toString()`

#### 🔖 querystring

- https://nodejs.org/api/querystring.html
- The querystring API is considered Legacy. While it is still maintained, new code should use the `<URLSearchParams>` API instead.

#### 🔖 crypto

- 다양한 방식의 암호화를 도와주는 모듈이다.
- 단방향 암호화: 비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화한다. 단방향 암호화란 복호화할 수 없는 암호화 방식을 뜻한다. 복호화할 수 없으므로 암호화라고 표현하는 대신 해시 함수라고 부르기도 한다.
- `createHash(알고리즘)`, `update(문자열)`, `digest(인코딩)`
- 양방향 암호화: 암호화된 문자열을 복호화할 수 있으며, key가 사용된다.
- `crypto.createCipheriv(알고리즘, key, iv)`, `cipher.update(문자열, 인코딩, 출력 인코딩)`, `cipher.final(출력 인코딩)`, `crypto.createDecipheriv(알고리즘, key, iv)`, `decipher.update(문자열, 인코딩, 출력 인코딩)`, `decipher.final(출력 인코딩)`

#### 🔖 util

- 각종 편의기능을 모아둔 모듈이다.
- `util.deprecate`, `util.promisify`

#### 🔖 worker_threads

- 멀티 스레드 방식으로 작업할 수 있다.
- 기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부른다.
- `/3.5/worker_threads.js` 참조
- `/3.5/worker_data.js` 참조
- `/3.5/prime.js` 참조
- `/3.5/prime-worker.js` 참조

```javascript
const {
  Worker,
  isMainThread,
  parentPort,
  workderData,
} = require("worker_threads");

// 코드 생략
```

#### 🔖 child_process

- 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈이다. 이 모듈을 통해 다른 언어의 코드(예를 들어, Python)를 실행하고 결괏값을 받을 수 있다.
- 이름이 child_process인 이유는 현재 노드 프로세스 외에 새로운 프로세스를 띄워서 명령을 수행하고, 노드 프로세스에 결과를 알려주기 때문이다.

#### 🔖 기타 모듈

- assert, dns, net, string_decoder, tls, tty, dgram, v8, vm

### 📖 파일 시스템 접근하기

- fs 모듈은 파일 시스템에 접근하는 모듈이다. 파일 생성, 삭제, 읽기, 쓰기, 및 폴더에 대한 시스템 접근도 가능하다.
- 웹 브라우저에서 자바스크립트를 사용할 때는 일부를 제외하고 파일 시스템 접근이 금지되어 있다.
- `fs.readFile`의 콜백 함수로 err 또는 data를 받는다. 이때 data는 `Buffer`형식으로 제공된다.
- `const fs = require('fs').promises`는 프로미스 기반의 fs 모듈을 사용할 수 있게 된다.

#### 🔖 동기 메서드와 비동기 메서드

- 노드는 대부분의 메서드를 비동기 방식으로 처리한다. 하지만 몇몇 메서드는 동기 방식으로도 사용할 수 있다.
- `fs.readFileSync` 메서드를 이용하여 동기적으로 처리할 수 있다. 하지만 치명적인 단점을 가지고 있다. 요청이 수백 개 이상 들어올 때 성능에 문제가 발생한다. 이전 작업이 완료되어야 다음 작업을 진행하기 때문이다. 즉, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기한다.
- 동기 메서드는 뒤에 Sync가 붙어 있어 구분하기 쉽다. 프로그램을 처음 실행할 때 초기화 용도로만 사용하는 것을 권장한다.
- 비동기 방식으로 하되 순서를 유지할 경우 callback hell이 발생한다. 이때 `Promise`, `async/await`로 어느 정도 해결할 수 있다.

> **블로킹/논 블로킹**
>
> - 함수 호출에 대한 이야기
> - 기술적으로 명확히 구분된다.
>
> **블로킹**
>
> - 함수 A를 호출했을 때, 함수 A의 수행이 모두 끝날 때까지 기다린다.
> - 함수 A의 수행이 모두 끝나고 리턴되면, 함수 A를 호출한 부분의 다음 부분부터 이어서 실행한다.
>
> **논 블로킹**
>
> - 함수 A를 호출했을 때, 함수 A의 실행을 요청하고 바로 리턴된다.
>
> **동기/비동기**
>
> - 행위에 대한 이야기이다.
> - 기술적으로 구분되지 않는다. 추상적인 구분이다.
>
> **동기**
>
> - 작업 A가 먼저 모두 처리되고 나서 작업 B가 처리되기 시작하면(하나씩 순차적으로 처리되면) 동기이다.
> - 작업 A가 작업 B를 관찰하는 작업이라면, 작업 A와 작업 B가 동시에 처리되더라도 동기이다.(A, B를 바꾸어 생각해도 똑같다.)
> - '관찰'이라는 말 자체가 정확히 기술적으로 구분되는 것이 아니기 때문에 추상적이라고 표현했다.
>
> **비동기**
>
> - 작업 A와 작업 B가 동시에 처리되면 비동기이다.
> - 작업 A와 작업 B가 인과관계가 있어야 한다.
> - 작업 A와 작업 B가 인과관계가 없으면, 동시에 처리되더라도 비동기라고 볼 수 없다.
>
> **결론**
>
> - 블로킹/논 블로킹은 동시성과는 무관한 이야기이다. 단지 메소드를 호출한 후로 시간이 오래 걸리면 블로킹이다. 즉, 메소드가 얼마나 오래 걸리냐의 문제로 블로킹과 논 블로킹은 귀결된다.
> - 동기/비동기는 동시성에 관한 이야기이다. 즉 스레드 혹은 프로세스가 분리되서 진행되면 비동기이다.
>
> 출처: https://dar0m.tistory.com/239?category=976685

#### 🔖 버퍼와 스트림 이해하기

- 파일을 읽거나 쓰는 방식에는 크게 버퍼를 이용하는 방식과 스트림을 이용하는 방식이 있다.
- 노드는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두며 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 한다. 이때 메모리에 저장된 데이터가 **버퍼**이다.
- `Buffer` 객체의 메소드: `from(문자열)`, `toString(버퍼)`, `concat(배열)`, `alloc(바이트)`
- 용량이 100MB인 파일이 열 개만 해도 1GB에 달하는 메모리가 사용되는 문제가 발생한다.
- 버퍼의 크기를 작게 만든 후 여러 번으로 나누어 보내는 방식이 등장했다. 이를 편리하게 만든 것이 **스트림**이다.
- 이때 나누어진 조각을 `chunk`라고 부른다.

#### 🔖 기타 fs 메서드 알아보기

- 파일을 읽거나 쓰는 방식이 아닌 파일을 생성하거나 삭제할 수 있으며 폴더를 생성하고 삭제할 수도 있다.
- `fs.access(경로, 옵션, 콜백)`, `fs.mkdir(경로, 콜백)`, `fs.open(경로, 옵션, 콜백)`, `fs.rename(기존 경로, 새 경로, 콜백)`, `fs.readdir(경로, 콜백)`, `fs.unlink(경로, 콜백)`, `fs.rmdir(경로, 콜백)`

#### 🔖 스레드풀 알아보기

- 비동기 메서드들은 백그라운드에서 실행되고, 실행된 후에는 다시 메인 스레드의 콜백 함수나 프로미스의 then 부분이 실행된다. 이때 fs 메서드를 여러 번 실행해도 백그라운드에서 동시에 처리되는데, 바로 **스레드풀**이 있기 때문이다.
- 내부적으로 스레드풀을 사용하는 모듈로는 `crypto`, `zlib`, `dns.lookup` 등이 있다.
- 스레드풀을 직접 컨트롤할 수는 없지만 개수는 조절할 수 있다.
- `UV_THREADPOOL_SIZE=스레드풀 개수`

### 📖 이벤트 이해하기

- events 모듈을 이용하여 이벤틀르 직접 만들고, 호출하고, 삭제할 수 있다.
- events 모듈을 이용하여 `myEvent`객체를 생성한다. 그 객체는 이벤트 관리를 위한 메서드를 가지고 있다.
- `on(이벤트명, 콜백)`, `addListener(이벤트명, 콜백)`, `emit(이벤트명)`, `once(이벤트명, 콜백)`, `removeAllListeners(이벤트명)`, `removeListener(이벤트명, 리스너)`, `off(이벤트명, 콜백)`, `listenerCount(이벤트명)`

### 📖 예외 처리하기

- 노드에서의 예외 처리는 아주 중요하다. 예외란 보통 처리하지 못한 에러를 말한다. 이러한 예외들은 실행 중인 노드 프로세스를 멈추게 만든다.
- 멀티 스레드 프로그램의 경우 스레드 하나가 멈추면 그 일을 다른 스레드가 대신한다. 하지만 노드의 메인 스레드는 하나뿐이므로, 메인 스레드가 멈추면 프로세스가 멈춘다는 뜻이고, 전체 서버도 멈춘다는 뜻과 같다.
- 에러가 발생할 것 같은 부분을 `try/catch`로 감싸준다.
- 에러를 `throw`하면 노드 프로세스가 멈추게된다. 따라서 `throw`를 하는 경우에는 반드시 `try/catch`문으로 `throw`한 에러를 잡아야 한다.
- 프로미스의 에러는 `catch`하지 않아도 알아서 처리된다.
- process 객체에 `uncaughtExpection` 이벤트 리스너를 연결하면 처리하지 못한 에러가 발생했을 때 이벤트 리스너가 실행되고 프로세스가 유지된다.
- `uncaughtExpection` 이벤트는 최후의 수단으로 사용할 것을 명시하고 있다. 따라서 단순히 에러 내용을 기록하는 정도로 사용하고, 에러를 기록한 후 `process.exit()`으로 프로세스를 종료하는 것이 좋다.

#### 🔖 자주 발생하는 에러들

- **node: command not found:** 환경 변수 설정 에러이다.
- **ReferenceError: 모듈 is not defined:** 모듈을 require했는지 확인한다.
- **Error: Cannot find module 모듈 이름:** 모듈을 require했지만 설치하지 않아서 발생한 에러이다. `npm i` 명령어를 입력한다.
- **Error: Can't set headers after they are sent:** 요청에 대한 응답을 두 번 이상 보낸 에러. 요청에 대한 응답은 한 번만 보내야 한다. 응답을 보내는 메서드를 두 번 이상 사용하지 않았는지 체크한다.
- **FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - javaScript heap out of memory:** 코드를 실행할 때 메모리가 부족하여 발생하는 에러이다. `node --max-old-space-size=메모리크기 파일명` 명령어를 사용하여 원하는 용량을 설정한다.
- **UnhandledPromiseRejectionWarning: Unhandled promise rejection:** 프로미스 사용 시 catch 메서드를 붙이지 않아서 발생하는 에러이다.
- **EADDRINUSE 포트 번호:** 해당 포트 번호에 이미 다른 프로세스가 연결되어 발생하는 에러이다.
- **EACCES 또는 EPERM:** 노드가 작업을 수행하는 데 권한이 충분하지 않아서 발생하는 에러이다. 맥의 경우 `sudo` 명령어를 앞에 붙이는 방법이 있다.
- **EJSONPARSE:** package.json 등의 JSON 파일의 문법 오류로 발생하는 에러이다.
- **ECONNREFUSED:** 요청을 보냈으나 연결이 성립하지 않을 때 발생하는 에러이다. 요청을 받는 서버의 주소가 올바른지, 꺼져 있지는 않은지 확인한다.
- **ETARGET:** package.json에 기록한 패키지 버전이 존재하지 않을 때 발생하는 에러이다.
- **ETIMEOUT:** 요청을 보냈으나 응답이 일정 시간 내에 오지 않을 때 발생하는 에러이다. 요청 받는 서버의 상태를 점검해본다.
- **ENOENT: no such file or directory:** 지정한 폴더나 파일이 존재하지 않을 때 발생하는 에러이다. 맥이나 리눅스의 경우 대소문자도 구별한다는 것에 주의한다.

> **Window에서 프로세스 종료하기**
>
> ```shell
> $ netstat -ano | findstr 포트번호
> $ taskkill /pid 프로세스 아이디 /f
> ```
>
> 포트가 `3000`, `netstat -ano | findstr 3000`을 수행한 결과의 프로세스 아이디가 `12345`였을 경우, `taskkill /pid 12345 /f`를 하면 해당 프로세스가 종료된다.
>
> **Mac/Linux에서 프로세스 종료하기**
>
> ```shell
> $ lsof -i tcp:포트번호
> $ Kill -9 프로세스아이디
> ```
>
> 포트가 `3000`, `lsof -i tcp:3000`을 수행한 결과 프로세스의 아이디가 `12345`였을 경우, `kill -9 12345`를 하면 해당 프로세스가 종료된다.
