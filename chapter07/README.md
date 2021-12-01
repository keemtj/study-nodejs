<details>
<summary>목차</summary>

- 📗 Chapter07. MySQL [🔗](#-chapter07-MySQL)

  - 📖 7.1 데이터베이스란 [🔗](#-데이터베이스란)
  - 📖 7.2 MySQL 설치하기 [🔗](#-MySQL-설치하기)
    - 🔖 7.2.1 Mac [🔗](#-Mac)
  - 📖 7.3 워크벤치 설치하기 [🔗](#-워크벤치-설치하기)
    - 🔖 7.3.1 Mac [🔗](#-Mac)
    - 🔖 7.3.2 커넥션 생성하기 [🔗](#-커넥션-생성하기)
  - 📖 7.4 데이터베이스 및 테이블 생성하기 [🔗](#-데이터베이스-및-테이블-생성하기)
    - 🔖 7.4.1 데이터베이스 생성하기 [🔗](#-데이터베이스-생성하기)
    - 🔖 7.4.2 테이블 생성하기 [🔗](#-테이블-생성하기)
  - 📖 7.5 CRUD 작업하기 [🔗](#-CRUD-작업하기)
    - 🔖 7.5.1 Create [🔗](#-Create)
    - 🔖 7.5.2 Read [🔗](#-Read)
    - 🔖 7.5.3 Update [🔗](#-Update)
    - 🔖 7.5.4 Delete [🔗](#-Delete)
  - 📖 7.6 시퀄라이즈 사용하기 [🔗](#-시퀄라이즈-사용하기)
    - 🔖 7.6.1 MySQL 연결하기 [🔗](#-MySQL-연결하기)
    - 🔖 7.6.2 모델 정의하기 [🔗](#-모델-정의하기)
    - 🔖 7.6.3 관계 정의하기 [🔗](#-관계-정의하기)
    - 🔖 7.6.4 쿼리 알아보기 [🔗](#-쿼리-알아보기)

  </details>

## 📗 Chapter07. MySQL

지금까지는 모든 데이터를 변수에 저장했었다. 변수에 저장했다는 것은 컴퓨터 메모리에 저장했다는 뜻이다. 서버가 종료되면 메모리가 정리되면서 저장했던 데이터도 사라져버린다. 이를 방지하기 위해서 데이터베이스를 사용한다.

### 📖 7.1 데이터베이스란

- **데이터베이스:** 데이터베이스는 관련성을 가지며 중복이 없는 데이터들의 집합이다.
- **DBMS(Database Management System):** 데이터베이스를 관리하는 시스템을 말한다.
- 보통 서버의 하드 디스크나 SSD 등의 저장 매체에 데이터를 저장하기 때문에 저장 매체가 고장나거나 사용자가 직접 데이터를 지우지 않는 이상 계속 데이터가 보존되므로 서버 종료 여부와 상관없이 데이터를 지속적으로 사용할 수 있다.
- 서버에 데이터베이스를 올리면 여러 사람이 동시에 각각의 권한을 갖고 사용할 수 있다.
- **RDBMS(Relational DBMS)**라고 부르는 관계형 DBMS가 많이 사용된다.

### 📖 7.2 MySQL 설치하기

#### 🔖 7.2.1 Mac

- Homebrew를 통해 MySQL을 설치한다.

```shell
# Homebrew 설치
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
# MySQL 설치
$ brew install mysql
# MySQL 시작
$ brew services start mysql
# root 비밀번호 설정
$ mysql_secure_installation
# MySQL 접속
$ mysql -h localhost -u root -p
Enter password: [비밀번호 입력]
# MySQL 프롬프트 접속 성공
mysql>
```

> **권한 에러 발생 시**
>
> ```shell
> $ sudo chown -R $(whoami) /usr/local/share/info
> $ chmod u+w /usr/local/share/info
> ```

### 📖 7.3 워크벤치 설치하기

- 콘솔로는 데이터를 한눈에 보기에 무리가 있는데, 워크벤치(MySQL Workbench)라는 프로그램을 사용하면 데이터베이스 내부에 저장된 데이터를 시각적으로 관리할 수 있다.
- 콘솔로도 동일한 작업을 수행할 수 있다.

#### 🔖 7.3.1 Mac

- Homebrew를 통해 워크벤치를 설치한다.

```shell
# 워크벤치 설치
$ brew install --cask mysqlworkbench
```

#### 🔖 7.3.2 커넥션 생성하기

1. 워크벤치를 실행한 뒤, `MySQL Connections` 옆의 `+` 버튼을 누른다.
2. 커넥션 생성 화면에서 `Connection Name`에 `localhost`라고 적고 `Password`에서 `Store in Vault...`버튼을 누른다.
3. MySQL 설치 시 설정했던 비밀번호를 입력하고 `OK`를 누른다. Setup New Connection 화면에서도 `OK`를 눌러 커넥션을 생성한다.
4. MySQL Connectoins에 새로 생성된 `localhost`를 눌러 접속한다.

> **ERROR 2002**
>
> ```shell
> $ mysql -h localhost -u root -p
> Enter Password: [비밀번호 입력]
> ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
> ```
>
> DB를 설치했지만 실행하지 않아서 위와 같은 에러가 발생하게 된다. 해결 방법은 아래와 같다.
>
> ```shell
> # start server
> $ mysql.server start
> Starting MySQL
> . SUCCESS!
> # stop server
> $ mysql.server stop
> Shutting down MySQL
> . SUCCESS!
> ```
>
> mysql.server 명령어를 실행 시켜주면 `/usr/local/bin/mysql.server`가 실생된다.
> 출처: http://meonggae.blogspot.com/2017/03/db-mac-mysql-1-error-2002-hy000-cant.html

### 📖 7.4 데이터베이스 및 테이블 생성하기

#### 🔖 7.4.1 데이터베이스 생성하기

- 7.2절의 방법으로 MySQL 프롬프트로 접속한다.

```shell
$ mysql -h localhost -u root -p
Enter password: [비밀번호 입력]
mysql>
```

- MySQL에서 데이터베이스와 스키마는 같은 개념이다.
- 예약어는 소문자로 써도 되지만, 사용자가 직접 만든 이름과 구분하기 위해 대문자로 쓰는 것이 좋다.
- `세미콜론(;)`을 붙여 SQL 구문이 끝났음을 명시해야 한다. 세미콜론을 붙이지 않으면 줄바꿈이 되어 다음 줄에서 이어서 구문을 쓸 수 있게 된다.

```shell
# 데이터베이스 생성
mysql> CREATE SCHEMA `dbtest` DEFAULT CHARACTER SET utf8;
Query OK, 1 row affected (0.01sec)
# 데이터베이스 사용
mysql> use dbtest;
Database changed
```

#### 🔖 7.4.2 테이블 생성하기

- 한 글자라도 잘못 입력하면 에러가 발생한다.
- `use dbtest;` 명령어로 `dbtest` 데이터베이스를 사용하기로 했기 때문에 데이터베이스 이름을 생략하여 구문을 작성해도 된다.
- `콤마(,)`로 구분해 컬럼을 생성한다. 컬럼을 정의해두면 앞으로 데이터를 넣을 때 컬럼 규칙에 맞는 정보들만 넣을 수 있다.

```shell
# ([컬럼 명] [자료형] [옵션1] [옵션N], ...)
# [테이블 자체 설정1]
# [테이블 자체 설정N];
mysql> CREATE TABLE dbtest.users (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(20) NOT NULL,
    -> age INT UNSIGNED NOT NULL,
    -> married TINYINT NOT NULL,
    -> comment TEXT NULL,
    -> created_at DATETIME NOT NULL DEFAULT now(),
    -> PRIMARY KEY(id),
    -> UNIQUE INDEX name_UNIQUE (name ASC))
    -> COMMENT = '사용자 정보'
    -> DEFAULT CHARACTER SET = utf8
    -> ENGINE = InnoDB;
Query OK, 0 row affected (0.09sec)
```

**자료형**

- `INT:` 정수를 의미한다.
- `CHAR(자릿수):` 고정 길이, CHAR(10)이면 반드시 길이가 10인 문자열만 넣어야 한다.
- `VARCHAR(자릿수):` 가변 길이, VARCHAR(10)이면 길이가 0 ~ 10인 문자열을 넣을 수 있다.
- `TEXT:` 긴 글을 저장할 때 사용한다.
- `TINYINT:` -128 ~ 127까지의 정수를 저정할 때 사용한다. 1 또는 0만 저장한다면 `Boolean`과 같은 역할을 한다.
- `DATETIME:` 날짜와 시간에 대한 정보를 담고 있다.
- `DATE:` 날짜 정보만 담고 있다.
- `TIME:` 시간 정보만 담고 있다.

**옵션**

- `NULL:` 빈칸을 허용할지 여부를 묻는 옵션이다. 데이터를 빈칸, 즉 입력하지 않아도 된다.
- `NOT NULL:` 빈칸을 허용할지 여부를 묻는 옵션이다. 반드시 데이터를 입력해야 한다.
- `AUTO_INCREMENT:` 데이터를 추가할 때 마다 MySQL이 id를 자동으로 하나씩 더해가면서 부여한다.
- `UNSIGNED:` 숫자 자료형에 적용되는 옵션이다. `INT`는 -2147483648 ~ 2147483647까지의 숫자를 저장할 수 있다. 만약 `UNSIGNED`가 적용되어 있다면 음수는 무시되고 0 ~ 4294967295까지 저장할 수 있다. `FLOAT`과 `DOUBLE`에는 `UN` 적용이 불가능하다. 나이처럼 음수가 나올 수 없는 컬럼은 체크해두는 것이 좋다.
- `ZEROFILL:` 숫자의 자릿수가 고정되어 있을 때 사용한다. 가끔 `INT` 자료형 대신 `INT(자릿수)`처럼 표현하는 경우가 있다. 이때 `ZEROFILL`을 설정해둔다면 비어 있는 자리에 모두 0을 넣는다. `INT(4)`인데 숫자 1을 넣었다면 0001이 되는 방식이다.
- `DEFAULT now():`s 데이터베이스 저장 시 해당 컬럼에 값이 없다면 MySQL이 기본값을 대신 넣는다. `now()`는 현재 시각을 넣으라는 의미이다. `now()` 대신 `CURRENT_TIMESTAMP`를 적어도 된다.
- `PRIMARY KEY(id):` 해당 컬럼이 기본 키인 경우 설정한다. 기본 키란 로우를 대표하는 고유한 값을 의미한다. 데이터베이스에는 로우 단위로 데이터를 넣는다. 이때 로우들을 구별할 고유한 식별자가 필요하다. id가 고유한 식별자가 된다. 주민등록번호나 학번과 비슷한 개념이다.
- `UNIQUE INDEX:` 해당 값이 고유해야 하는지에 대한 옵션이며, `name_UNIQUE`는 name 컬럼을 오름차순(ASC)으로 기억하겠다는 것이다. `PRIMARY KEY`나 `UNIQUE INDEX`는 데이터베이스가 별도로 컬럼을 관리하기때문에 조회 시 속도가 빨라진다. 기본 키인 id도 고유해야 하지만 `PRIMARY KEY`는 자동으로 `UNIQUE INDEX`를 포함하므로 따로 적지 않아도 된다.

**테이블 자체에 대한 설정**

- `COMMENT:` 테이블에 대한 보충 설명을 의미한다.
- `DEFAULT CHARACTER SET:` 한글을 사용하려면 `utf8`로 반드시 설정해야 한다. 이모티콘을 사용할 경우 `utf8mb4`로 설정한다.
- `ENGINE:` `MyISAM`과 `InnoDB`가 제일 많이 사용된다.

```shell
# 테이블 확인하기
mysql> DESC users;
# 테이블 제거하기
mysql> DROP TABLE users;
```

```shell
# 사용자의 댓글을 저장하는 테이블 생성하기
mysql> CREATE TABLE comments (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> commenter INT NOT NULL,
    -> comment VARCHAR(100) NOT NULL,
    -> created_at DATETIME NOT NULL DEFAULT now(),
    -> PRIMARY KEY(id),
    -> INDEX commenter_idx (commenter ASC),
    -> CONSTRAINT commenter # 제약조건명: commenter
    -> FOREIGN KEY (commenter) # commenter에 외래 키 설정
    -> REFERENCES dbtest.users (id) #dbtest.users 테이블의 id를 참고
    -> ON DELETE CASCADE
    -> ON UPDATE CASCADE)
    -> COMMENT = '댓글'
    -> DEFAULT CHARSET=utf8mb4
    -> ENGINE=InnoDB;
Query OK, 0 row affected (0.09sec)
```

- `외래 키(foreign key):` 다른 테이블의 기본 키를 저장하는 컬럼이다.
- `CONSTRAINT [제약조건명] FOREIGN KEY [컬럼명] REFERENCES [참고하는 컬럼명]:` 외래 키를 지정한다.
- `ON UPDATE CASCADE:` 사용자 정보가 수정되면 댓글 정보도 같이 수정된다. 데이터의 불일치를 방지한다.
- `ON DELETE CASCADE:` 사용자 정보가 삭제되면 댓글 정보도 같이 삭제된다. 데이터의 불일치를 방지한다.

```shell
# 생성된 모든 테이블을 확인하는 명령어
# users, comments 테이블
mysql> SHOW TABLES;
```

### 📖 7.5 CRUD 작업하기

- `CRUD:` Create(생성), Read(조회), Update(수정), Delete(삭제)를 의미하며 데이터베이스에서 많이 수행하는 네 가지 작업을 일컫는다.

#### 🔖 7.5.1 Create

- Create는 데이터를 생성해서 데이터베이스에 넣는 작업이다.

`INSERT INTO [테이블명] ([컬럼1], [컬럼2], ...) VALUES ([값1], [값2], ...)`

```shell
# id는 AUTO_INCREMENT에 의해 자동으로 추가된다.
# created_at은 DEFAULT 값에 의해 자동으로 추가된다.
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('keem', 24, 0, '자기소개1');
Query OK, 1 row affected (0.01sec)
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('jay', 32, 1, '자기소개2');
Query OK, 1 row affected (0.01sec)
```

```shell
# id는 AUTO_INCREMENT에 의해 자동으로 추가된다.
# created_at은 DEFAULT 값에 의해 자동으로 추가된다.
mysql> INSERT INTO dbtest.comments (commenter, comment) VALUES (1, '안녕하세요. keem의 댓글입니다');
Query OK, 1  row affected (0.02 sec)
```

#### 🔖 7.5.2 Read

- Read는 데이터베이스에 있는 데이터를 조회하는 작업이다.

`SELECT * FROM [테이블명]`

- users 테이블의 모든 데이터를 조회

```shell
mysql> SELECT * FROM dbtest.users;
```

- comments 테이블의 모든 데이터를 조회

```shell
mysql> SELECT * FROM dbtest.comments;
```

- users 테이블의 특정 컬럼(name, married)의 데이터를 조회

```shell
mysql> SELECT name, married FROM dbtest.users;
```

`SELECT [컬럼1], [컬럼2],... FROM [테이블명] WHERE 조건1 AND 조건2`

- WHERE 절에서 특정 조건을 모두 만족(AND)하는 데이터를 찾은 후
- 특정 컬럼(name, married)의 데이터를 조회
- married가 1 이고 age가 30 보다 큰 데이터를 찾은 후 name, age 컬럼을 선택하여 조회

```shell
mysql> SELECT name, age FROM dbtest.users WHERE married = 1 AND age > 30;
```

`SELECT [컬럼1], [컬럼2],... FROM [테이블명] WHERE 조건1 OR 조건2`

- WHERE 절에서 특정 조건들 중 어느 하나라도 만족(OR)하는 데이터를 찾은 후
- 특정 컬럼(id, name)의 데이터를 조회
- married가 0 이거나 age가 30 보다 큰 데이터를 찾은 후 id, name 컬럼을 선택하여 조회

```shell
mysql> SELECT id, name FROM dbtest.users WHERE married = 0 OR age > 30;
```

`SELECT [컬럼1], [컬럼2],... FROM [테이블명] ORDER BY [컬럼] DESC`

- DESC: 내림차순
- ASC: 오름차순
- age를 내림차순으로 정렬한 후 특정 컬럼(id, name)의 데이터를 조회

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age DESC;
```

`LIMIT [숫자]`

- 로우의 개수를 설정한다.
- age를 오름차순으로 정렬한 후 특정 컬럼(id, name)의 데이터를 1개로 제한(1개의 로우)하여 조회

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age ASC LIMIT 1;
```

`OFFSET [건너뛸 숫자]`

- Pagination 기능을 구현할 때 유용하다.
- 예를 들어 첫 번째 조회에서 1 ~ 20번 게시물을 조회했다면, 두 번째 페이지에서는 21 ~ 40번 게시물을 조회해야 한다. 이때 처음 20개를 건너뛰고 다음 20개의 게시물을 조회하라는 식의 명령이 가능하다.
- age를 오름차순으로 정렬한 후 특정 컬럼(id, name)의 데이터를 1개 건너뛰고 1개로 제한(1개의 로우)하여 조회

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age ASC LIMIT 1 OFFSET 1;
```

#### 🔖 7.5.3 Update

- Update는 데이터베이스에 있는 데이터를 수정하는 작업이다.

`UPDATE [테이블명] SET [컬럼명=바꿀 값] WHERE [조건]`

- 조건의 경우 AND, OR로 여러 개를 동시에 수정할 수 있다.
- users 테이블에서 id가 2인 로우를 조회한 후 comment 컬렴을 '바꿀 내용'이라는 값으로 수정

```shell
mysql> UPDATE dbtest.users SET comment = '바꿀 내용' WHERE id = 2;
Query OK, 1 row affected (0.0.1sec)
Rows matched: 1 Changed: 1 Warning: 0
```

#### 🔖 7.5.4 Delete

- Delete는 데이터베이스에 있는 데이터를 삭제하는 작업이다.

`DELETE FROM [테이블명] WHERE [조건]`

- AND, OR로 여러 개를 동시에 삭제할 수 있다.
- users 테이블에서 id가 2인 로우를 삭제

```shell
mysql> DELETE FROM dbtest.users WEHRE id = 2;
```

### 📖 7.6 시퀄라이즈 사용하기

- **시퀄라이즈**는 MySQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리이다.
- **ORM(Object-relational Mapping):** 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해주는 도구이다. 시퀄라이즈는 ORM으로 분류된다.
- MariaDB, PostgreSQL, SQLite, MSSQL 등 다른 데이터베이스도 같이 쓸 수 있다.
- 시퀄라이즈를 쓰는 이유는 자바스크립트 구문을 알아서 SQL로 바꿔주기 때문이다. 즉, SQL 언어를 직접 사용하지 않아도 자바스크립트만으로 MySQL을 조작할 수 있다.

```shell
# 새 프로젝트를 위해 package.json 생성
$ npm init
```

```shell
# sequelize-cli: 시퀄라이즈 명령어를 위한 패키지
# mysql2: MySQL과 시퀄라이즈를 이어주는 드라이버
$ npm i express sequelize sequelize-cli mysql2
$ npm i -D nodemon
```

```shell
# 전역 설치 없이 명령어로 실행하기 위해 npx 사용
$ npx sequelize init
```

- `sequelize init` 명령어를 실행하면 config, models, migrations, seeders 폴더가 생성된다. models 폴더 안에 index.js가 생성되었는지 확인한다.

#### 🔖 7.6.1 MySQL 연결하기

- app.js에서 시퀄라이즈를 통해 익스프레스와 MySQL을 연결하는 코드를 작성한다.

```javascript
// app.js
...
const { sequelize } = require('./models');

const app = express();
...
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  })
...
```

- MySQL과 연동할 때는 config/config.json 정보가 사용된다.
- password, database를 MySQL Connection과 일치하도록 수정한다.

```json
{
  "development": {
    "username": "root",
    "password": "[root 비밀번호]",
    "database": "dbtest",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- 설정이 완료되면 서버를 실행한다.

```shell
$ npm start
...
Executing (default): SELECT 1+1 AS result
데이터베이스 연결 성공
```

#### 🔖 7.6.2 모델 정의하기

- MySQL에서 정의한 테이블을 시퀄라이즈에서도 정의해야 한다. MySQL의 **테이블**은 시퀄라이즈의 **모델**과 대응된다.
- 시퀄라이즈는 모델과 테이블을 연결해주는 역할을 한다.
- 시퀄라이즈는 기본적으로 모델 이름은 **단수형**, 테이블 이름은 **복수형**으로 사용한다.
- 모델은 클래스로 선언한다. `static init` 메서드, `static associate` 메서드 패턴을 숙지한다.
- MySQL 테이블과 컬럼 내용이 일치해야 정확하게 대응된다.

```javascript
class User extends Sequelize.Model {
  // 테이블에 대한 설정
  static init(sequelize) {
    return super.init({
      {
        // 테이블 컬럼에 대한 설정
      },
      {
        // 테이블 자체에 대한 설정
      }
    });
  }
  // 다른 모델과의 관계 설정
  static associate(db) {
  }
}
```

- 시퀄라이즈의 자료형은 MySQL의 자료형과 조금 다르다.

| MySQL           | 시퀄라이즈                    |
| --------------- | ----------------------------- |
| `VARCHAR(100)`  | `STRING(100)`                 |
| `INT`           | `INTEGER`                     |
| `TINYINT`       | `BOOLEAN`                     |
| `DATETIME`      | `DATE`                        |
| `INT UNSIGNED`  | `INTEGER.UNSIGNED`            |
| `ZEROFILL`      | `INTEGER.UNSIGNED.ZEROFILL`   |
| `NOT NULL`      | `allowNull: false`            |
| `UNIQUE`        | `unique: true`                |
| `DEFAULT now()` | `defaultValue: Sequelize.NOW` |

|                    | super.init의 테이블 옵션                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sequelize`        | `static init` 메서드의 매개변수와 연결되는 옵션으로 `db.sequelize` 객체를 넣어야 한다. `model/index.js`에서 연결한다.                                                                                                                                        |
| `timestamps`       | `true`면 시퀄라이즈는 `createdAt`, `updatedAt` 컬럼을 자동으로 추가한다.                                                                                                                                                                                     |
| `underscored`      | 시퀄라이즈는 기본적으로 테이블명과 컬럼명을 `카멜 케이스`로 만든다. 이를 `스네이크 케이스`로 바꾸는 옵션이다.                                                                                                                                                |
| `modelName`        | 모델 이름을 설정한다. 노드 프로젝트에서 사용한다.                                                                                                                                                                                                            |
| `tablename`        | 실제 데이터베이스의 테이블 이름이 된다. 모델 이름이 `User`라면 테이블 이름은 `users`가 된다.                                                                                                                                                                 |
| `paranoid`         | `true`면 `deletedAt` 컬럼이 생긴다. 로우를 삭제할 때 완전히 지워지지 않고 `deletedAt`에 지운 시각이 기록된다. 로우를 조회하는 명령을 내렸을 때는 `deletedAt의 값이 null인 로우`(삭제되지 않았다는 뜻)를 조회한다. 나중에 로우를 복원할 상황을 위한 설정이다. |
| `charset, collate` | 각각 `utf8`, `utf8_general_ci`로 설정해야 한글이 입력된다. `이모티콘`까지 입력하려면 `utf8을 utfmb4로 치환`한다.                                                                                                                                             |

- Comment 모델도 User 모델과 같이 생성한다.
- 모델을 생성했다면 Models/index.js와 연결한다.
- db 객체에 User, Comment 모델을 담아둔다. db 객체를 require하여 User, Comment 모델에 접근할 수 있다.
- User.init, Comment.init은 각각의 모델의 static.init 메서드를 호출한다. init이 실행되어야 테이블이 모델로 연결된다.

#### 🔖 7.6.3 관계 정의하기

- 모델의 `static associate`에서 테이블과 테이블 간의 관계를 정의한다.
- 1:1, 1:N, N:M의 관계가 있다.

`1:N 관계`

- 시퀄라이즈에서 1:N 관계를 `hasMany` 메서드로 표현한다.
- `belongsTo` 메서드도 있다.
- 다른 모델의 정보가 들어가는 테이블에 `belongsTo`를 사용한다.
- 시퀄라이즈는 위에서 정의한 대로 모델 간 관계를 파악해서 Comment 모델에 `foreignKey`인 commenter 컬럼을 추가한다.
- `hasMany`는 `sourceKey`, `belongsTo`는 `targetKey`를 쓴다.
- `foreignKey`를 따로 지정하지 않으면 `모델+기본 키인 컬럼`이 모델에 생성된다.

```javascript
db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
db.Comment.belongsTo(db.User, { foreignKey: "commenter", sourceKey: "id" });
```

`1:1 관계`

- 1:1 관계에서는 `hasMany` 메서드 대신 `hasOne` 메서드를 사용한다.
- 1:1 관계라고 해도 `belongsTo`와 `hasOne`이 반대면 안 된다.

```javascript
db.User.hasOne(db.Info, { foreignKey: "UserId", sourceKey: "id" });
db.Info.belognsTo(db.User, { foreignKey: "UserId", targetKey: "id" });
```

`N:M 관계`

- 시퀄라이즈에는 N:M 관계를 표현하기 위한 `belongsToMany` 메서드가 있다.
- N:M 관계의 특성상 새로운 모델이 생성된다. `through` 속성에 그 이름을 적으면 된다. 새로 생성된 PostHashtag 모델에는 게시글(Post)의 아이디와 해시태그(Hashtag)의 아이디가 저장된다.

```javascript
db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
```

- 자동으로 만들어진 모델들도 다음과 같이 접근할 수 있다.

```javascript
db.sequelize.models.PostHashtag;
```

#### 🔖 7.6.4 쿼리 알아보기

- 시퀄라이즈로 CRUD 작업을 하려면 시퀄라이즈 쿼리를 알아야 한다.
- 쿼리는 프로미스를 반환하므로 then을 붙여 결괏값을 받을 수 있다.
- async/await 문법과 같이 사용할 수도 있다.
- 주의할 점은 데이터를 넣을 때 MySQL의 자료형이 아니라 시퀄라이즈 모델에 정의한 자료형대로 넣어야 한다.

**Create**

`create` 메서드 사용

```shell
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('keem', 24, 0, '자기소개1');
```

```javascript
const { User } = require("../models");
User.create({
  name: "keem",
  age: 24,
  married: false,
  comment: "자기소개1",
});
```

**Read**

`findAll`, `findOne` 메서드 사용

```shell
mysql> SELECT * FROM dbtest.users;
```

```javascript
User.findAll({});
```

```shell
mysql> SELECT * FROM dbtest.users LIMIT 1;
```

```javascript
User.findOne({});
```

```shell
mysql> SELECT name, married FROM dbtest.users;
```

```javascript
User.findAll({
  attributes: ["name", "married"],
});
```

- MySQL에서는 undefined 자료형을 지원하지 않으므로 where 옵션에는 undefined가 들어가면 안된다. 빈 값을 넣고자 할 때는 `null`을 대신 사용한다.

```shell
mysql> SELECT name, age FROM dbtest.users WHERE married = 1 AND age > 30;
```

```javascript
const { Op } = require("sequelize");
const { User } = require("../models");
User.findAll({
  attributes: ["name", "age"],
  where: {
    married: true,
    age: { [Op.gt]: 30 },
  },
});
```

```shell
mysql> SELECT id, name FROM dbtest.users WHERE married = 0 OR age > 30;
```

```javascript
const { Op } = require("sequelize");
const { User } = require("../models");
User.findAll({
  attributes: ["id", "name"],
  where: {
    [Op.or]: [
      { married: false },
      {
        age: {
          [Op.gt]: 30,
        },
      },
    ],
  },
});
```

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age DESC;
```

```javascript
User.findAll({
  attributes: ["id", "name"],
  order: [["age", "DESC"]],
});
```

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age DESC LIMIT 1 OFFSET 1;
```

```javascript
User.findAll({
  attributes: ["id", "name"],
  order: [["age", "DESC"]],
  limit: 1,
  offset: 1,
});
```

**Update**

`update` 메서드 사용

```shell
mysql> UPDATE dbtest.users SET comment = '바꿀 내용' WHERE id = 2;
```

```javascript
User.update(
  {
    comment: "바꿀 내용",
  },
  {
    where: { id: 2 },
  }
);
```

**Delete**

`destroy` 메서드 사용

```shell
DELETE FROM dbtest.users WHERE id = 2;
```

```javascript
User.destroy({
  where: { id: 2 },
});
```

**관계 쿼리에서 READ**

- 관계 쿼리는 MySQL에서 JOIN 기능이다.
- User 모델은 Comment 모델과 hasMany-belongsTo 관계가 맺어져 있다. 만약 특정 사용자를 가져오면서 그 사람의 댓글까지 모두 가져오고 싶다면 `include` 속성을 사용한다.
- 어떤 모델과 관계가 있는지를 include 배열에 넣어주면 된다.

```javascript
const user = await User.findOne({
  include: [
    {
      model: Comment,
    },
  ],
});
console.log(user.Comments); // 사용자 댓글
```

- 관계를 설정했다면 `getComments`, `setComments`, `addComment`, `addComments`, `removeComments` 메서드를 지원한다.
- 동사 뒤에 모델의 이름이 붙는 형식이다.

```javascript
const user = await User.findOne({});
const comments = await user.getComments();
console.log(comments); // 사용자 댓글
```

- 동사 뒤의 모델 이름을 바꾸고 싶다면 관계 설정 시 `as` 옵션을 사용할 수 있다.

```javascript
// 관계 설정
db.User.hasMany(db.Comment, {
  foreignKey: "commenter",
  sourceKey: "id",
  as: "Answers",
});
// 쿼리
const user = await User.findOne({});
const comments = await user.getAnswers();
console.log(comments); // 사용자 댓글
```

- `as`를 설정하면 `include` 시 추가되는 댓글 객체도 user.Answers로 바뀐다.
- `include`나 관계 쿼리 메서드에도 `where`, `attributes` 같은 옵션을 사용할 수 있다.

```javascript
const user = await User.findOne({
  include: [
    {
      model: Comment,
      where: {
        id: 1,
      },
      attributes: ["id"],
    },
  ],
});
// 또는
const comments = await user.getComments({
  where: {
    id: 1,
  },
  attributes: ["id"],
});
```

**관계 쿼리에서 UPDATE, CREATE, DELETE**

```javascript
const user = await User.findOne({});
const comment = await Comment.create();
await user.addComment(comment);
// 또는
await user.addComment(comment.id);
```

- 여러 개를 추가할 때는 배열로 추가할 수 있다.
- 수정, 삭제도 마찬가지로 작업할 수 있다.

```javascript
const user = await User.findOne({});
const comment1 = await Comment.create();
const comment2 = await Comment.create();
await user.addComment([[comment1, comment2]]);
```

**SQL 쿼리하기**

- 직접 SQL문을 통해 쿼리할 수도 있다.
- 시퀄라이즈 쿼리로 할 수 없는 경우에는 직접 SQL문을 통해 쿼리하면 된다.

```javascript
const [result, metadata] = await sequelize.query(
  "SELECT * FROM dbtest.comments"
);
```
