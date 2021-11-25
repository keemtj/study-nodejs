<details>
<summary>목차</summary>

- 📗 Chapter05. 패키지 매니저 [🔗](#-chapter05-패키지-매니저)
  - 📖 5.1 npm 알아보기 [🔗](#-npm-알아보기)
  - 📖 5.2 package.json으로 패키지 관리하기 [🔗](#-패키지-관리하기)
  - 📖 5.3 패키지 버전 이해하기 [🔗](#-패키지-버전-이해하기)
  - 📖 5.4 기타 npm 명령어 [🔗](#-기타-npm-명령어)
  - 📖 5.5 패키지 배포하기 [🔗](#-패키지-배포하기)

</details>

## 📗 Chapter05 패키지 매니저

### 📖 5.1 npm 알아보기

- npm은 노드 패키지 매니저이다.
- 대부분의 자바스크립트 프로그램은 패키지라는 이름으로 npm에 등록되어 있기 때문에 특정 기능을 하는 패키지가 필요하다면 npm에서 찾아 설치하면 된다.
- npm에 업로드된 노드 모듈을 패키지라고 부른다.

> **yarn**  
> npm의 대체자로 yarn이 있다. yarn은 페이스북이 내놓은 패키지 매니저이다. 리액트나 리액트 네이티브 같은 페이스북 진영의 프레임워크를 사용할 때 종종 볼 수 있으며, npm의 사용 방법을 안다면 yarn도 쉽게 익힐 수 있다. npm과 비교해서 몇 가지 편리한 기능이 들어 있지만, 별도로 설치해야 한다. npm 서버가 너무 느릴 경우 yarn으로 패키지를 대신 설치할 수도 있다.

### 📖 5.2 패키지 관리하기

- 서비스에 필요한 패키지를 추가하다보면 패키지 개수도 많아지고 저마다 고유한 버전이 있으므로 어딘가에 기록해두어야 한다.
- 같은 패키지라도 버전별로 기능이 다를 수 있으므로, 프로젝틀르 설치할 때 패키지도 동일한 버전을 설치하지 않으면 문제가 생길 수 있다.
- 설치한 패키지의 버전을 관리하는 파일이 `package.json`이다.
- **따라서 노드 프로젝트를 시작하기 전에는 폴더 내부에 무조건 package.json부터 만들고 시작해야 한다.**

```zsh
$ npm init
```

> - **package name:** 패키지의 이름이다. name 속성에 저장된다.
> - **version:** 패키지의 버전이다.
> - **entry point:** 자바스크립트 실행 파일 진입점이다. main 속성에 저장된다.
> - **test command:** 코드를 테스트할 때 입력할 명령어를 의미한다. scripts 속성 안의 test 속성에 저장된다.
> - **git repository:** 코드를 저장해둔 깃 저장소 주소를 의미한다.
> - **keywords:** 키워드는 npm 공식 홈페이지에서 패키지를 쉽게 찾을 수 있도록 해준다.
> - **license:** 해당 패키지의 라이선스를 넣으면 된다.

> **라이선스**  
> 오픈 소스라고 해서 모든 패키지를 아무런 제약 없이 사용할 수 있는 것은 아니다. 라이선스별로 제한 사항이 있으므로 설치 전에 반드시 라이선스를 확인해야 한다.

```json
{
  "name": "npmtest",
  "version": "0.0.1",
  "description": "hello package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "keem",
  "license": "ISC"
}
```

- scripts 속성에 명령어 여러 개를 등록해두고 사용할 수 있다. 보통 start 명령어에 `node [파일명]`을 저장해두고 npm start로 실행한다. start나 test 같은 스크립트는 run을 붙이지 않아도 실행된다.

```zsh
# Express 설치하기
$ npm install express
```

> **audited [숫자] packages**  
> 패키지를 설치할 때 `audited [숫자] packages`라는 문장이 출력된다. 패키지에 있을 수 있는 취약점을 자동으로 검사했다는 의미이다. `npm audit fix` 명령어를 입력하면 npm이 스스로 수정할 수 있는 취약점을 알아서 수정한다.

```json
{
  "name": "npmtest",
  ...
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
  }
}
```

- express의 설치가 완료되면 package.json에 `dependencies` 속성안에 express 이름과 함께 버전이 저장되어 있다.

> **--save 옵션**  
> 패키지를 설치할 때 npm install 명령어에 --save 옵션을 붙이는 책이나 블로그를 많이 볼 수 있다. dependencies에 패키지 이름을 추가하는 옵션이지만 npm@5부터는 기본값으로 설정되어 있으므로 따로 붙이지 않아도 된다.

- 추가적으로 node_modules라는 폴더도 생성된다. 그 안에 설치한 패키지들이 들어있다.
- express 하나만 설치했으나 express가 의존하는 패키지들도 함께 설치된다.
- 패키지 하나가 다른 여러 패키지에 의존하고, 그 패키지들은 또 다른 패키지들에 의존한다. 이렇게 의존 관계가 복잡하게 얽혀 있어 package.json이 필요하다.
- package-lock.json 파일도 생성된다. 내용을 직접 보면 express 외에도 node_modules에 들어 있는 패키지들의 정확한 버전과 의존 관계가 담겨 있다. npm으로 패키지를 설치, 수정, 삭제할 때마다 패키지들 간의 내부 의존 관계를 이 파일에 저장한다.

> **--save-dev 옵션**  
> 실제 배포 시에는 사용되지 않고 개발 중에만 사용되는 패키지를 설치할 때 `--save-dev` 옵션을 추가하여 설치한다. `npm install --save-dev [패키지]`로 설치한다. package.json의 `devDependencies` 속성에 개발용 패키지들만 따로 관리하게 된다.

> **--global 옵션**  
> 전역 설치라는 옵션도 있다. 전역 설치한 패키지는 콘솔의 명령어로 사용할 수 있다. 전역 설치한 패키지는 package.json에 기록되지 않는다.

> **npx**  
> 전역 설치를 기피하는 개발자들도 있다. 전역 설치한 패키지는 package.json에 기록되지 않아 다시 설치할 때 어려움이 따르기 때문이다. 이러한 경우를 위한 명령어로 npx가 있다. package.json의 devDependencies 속성에 기록한 후, 앞에 npx 명령어를 붙여 실행하면 전역 설치한 것과 같은 효과(명령어로 사용 가능)를 얻을 수 있다. 패키지가 package.json에 기록되었으므로 버전 관리도 용이하다.

> **npm에 등록되지 않은 패키지**  
> 모든 패키지가 npm에 등록되는 것은 아니다. 오픈 소스가 아니거나 개발 중이므로 깃허브, nexus 등의 저장소에 보관되어 있을 수 있다. `npm install [저장소 주소]` 명령어를 통해 설치할 수 있다.

> **명령어 줄여쓰기**
>
> - **npm install:** npm i
> - **--save-dev:** -D
> - **--global:** -g

### 📖 5.3. 패키지 버전 이해하기

- 노드 패키지들의 버전은 항상 세 자리로 이루어져 있다. Sem Ver(Semantic Versioning) 방식의 버전 넘버링을 따르기 때문이다.
- 버전의 첫 번째 자리는 major 버전이다. 0이면 초기 개발 중이라는 뜻이다. 1부터는 정식 버전을 의미한다. major 버전은 하위 호환이 안 될 정도로 패키지의 내용이 수정되었을 때 올린다.
- 두 번째 자리는 minor 버전이다. 하위 호환이 되는 기능 업데이트를 할 때 올린다.
- 세 번째 자리는 patch 버전이다. 새로운 기능이 추가되었다기보다는 기존 기능에 문제가 있어 수정한 것을 내놓았을 때 patch 버전을 올린다.
- 새 버전을 배포한 후에 그 버전의 내용을 절대 수정하면 안 된다.
- `^, ~, >, <` 같은 문자가 붙은 버전도 있다. 버전에는 포함되지 않지만 설치하거나 업데이트할 때 어떤 버전을 설치해야 하는지 알리는 방법이다.
- `express@^1.1.1`는 1.1.1 이상부터 2.0.0 미만 버전까지 설치 혹은 업데이트한다(minor).
- `express@~1.1.1`는 1.1.1 이상부터 1.2.0 미만 버전까지 설치 혹은 업데이트한다(patch).
- `npm i express@latest` 또는 `npm i express@x`는 안정된 최신 버전의 패키지를 설치한다.
- `npm i express@next`는 가장 최근 배포판을 사용할 수 있다. @latest와 다른 점은 안정되지 않은 알파나 베타 버전의 패키지를 설치한다는 것이다. 알파나 베타 버전은 1.1.1-alpha.0나 2.0.0-beta.1처럼 표시한다. 출시 직전의 패키지에는 2.0.0-rc.0처럼 rc(Release Candidate)가 붙는 경우도 있다.

### 📖 5.4 기타 npm 명령어

- **npm outdated:** 업데이트할 수 있는 패키지가 있는지 확인한다. Current와 Wanted가 다르면 업데이트가 필요한 경우이다.
- **npm update [패키지명]:** 해당 패키지를 업데이트한다.
- **npm update:** 가능한 모든 패키지가 Wanted에 적힌 버전으로 업데이트된다.
- **npm uninstall [패키지명]:** 해당 패키지를 제거한다. node_modules와 package.json에서 사라진다.
- **npm rm [패키지명]:** 패키지 제거 명령어의 축약표현이다.
- **npm search [검색어]:** 패키지를 검색한다. package.json의 keywords가 이때 사용된다.
- **npm info [패키지명]:** 패키지의 세부 정보를 파악하고자 할 때 사용한다.
- **npm adduser:** npm 로그인을 위한 명령어다. 패키지를 배포할 때 로그인이 필요하다.

```zsh
$ npm adduser
Username: [사용자 이름 입력]
Password: [비밀번호 입력]
Email: (this IS public) [이메일 입력]
Logged in as [사용자 이름] on https://registry.npmjs.org
```

- **npm whoami:** 로그인한 사용자를 확인한다. 로그인된 상태가 아니라면 에러가 발생한다.
- **npm logout:** npm adduser로 로그인한 계정을 로그아웃 한다.
- **npm version [버전]:** package.json의 버전을 올린다.

```zsh
# minor 버전
$ npm version 5.3.2
# 또는
$ npm version minor
```

- **npm deprecate [패키지명] [버전] [메시지]:** 해당 패키지를 설치할 때 경고 메시지를 띄우게 한다. 자신의 패키지에만 이 명령어를 적용할 수 있다.
- **npm publish:** 자신이 만든 패키지를 배포한다.
- **npm unpublish [패키지명] --force:** 자신이 배포한 패키지를 제거한다. 단, 24시간 이내에 배포한 패키지만 제거할 수 있다. 의존성 관계 때문이다.
- **npm ci:** package.json대신 package-lock.json에 기반하여 패키지를 설치한다. 더 엄격하게 버전을 통제하여 패키지를 설치하고 싶을 때 사용하면 된다.

### 📖 5.5 패키지 배포하기

패키지 배포를 위해 npm 계정을 생성해야 한다.

1. npm 웹 사이트에서 Sign Up을 눌러 회원가입 진행
2. 회원가입 confirm 메일 확인
3. 콘솔에서 npm adduser 명령어를 입력하여 생성한 계정으로 로그인

- package.json의 main 부분의 파일명과 일치해야 한다.

```javascript
// index.js
module.exports = () => {
  return "hello package";
};
```

- package.json의 name(패키지명)이 중복될 경우 에러가 발생한다.
- `npm info [패키지명]` 명령어를 입력하여 패키지에 대한 정보가 나온다면 누군가가 사용중이고, 에러가 발생한다면 사용해도 좋은 이름이다.

```zsh
# 배포하기
$ npm publish
# 배포 확인하기
$ npm info [나의 패키지명]
...
published 51 seconds ago by jay <jay@email.com>
```

```zsh
# 24시간 이내에 패키지 삭제하기
$ npm unpublish [나의 패키지명] --force
# 삭제 확인하기
$ npm info [나의 패키지명]
npm ERR! code E404
npm ERR! 404 Unpublished by jay on 2020-01-01T01:01.506Z
...
```

> **npm 배포 시 주의 사항**
>
> - 배포 전에 개인 정보가 코드에 들어있지 않은지 꼭 확인한다. 다른 서비스와 연동하다가 실수로 서비스의 비밀 키를 넣어두는 경우가 많다. 다른 사람들이 그 키를 사용하여 과금을 유발할 수도 있으므로 배포 전에 반드시 확인한다.
> - 패지키의 이름을 선점하는 행위는 삼가한다.
> - 기존에 있는 패키지와 비슷한 이름으로 새 패키지를 배포하거나 다른 패키지의 코드를 살짝 수정해서 새로 배포하는 경우 꼭 원작자의 허락을 받는다.
