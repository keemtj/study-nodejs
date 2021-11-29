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
    - 🔖 7.6.1 모델 정의하기 [🔗](#-모델-정의하기)
    - 🔖 7.6.1 관계 정의하기 [🔗](#-관계-정의하기)
    - 🔖 7.6.1 쿼리 알아보기 [🔗](#-쿼리-알아보기)
    - 🔖 7.6.1 쿼리 수행하기 [🔗](#-쿼리-수행하기)

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
