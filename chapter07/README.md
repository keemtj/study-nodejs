<details>
<summary>λͺ©μ°¨</summary>

- π Chapter07. MySQL [π](#-chapter07-MySQL)

  - π 7.1 λ°μ΄ν°λ² μ΄μ€λ [π](#-λ°μ΄ν°λ² μ΄μ€λ)
  - π 7.2 MySQL μ€μΉνκΈ° [π](#-MySQL-μ€μΉνκΈ°)
    - π 7.2.1 Mac [π](#-Mac)
  - π 7.3 μν¬λ²€μΉ μ€μΉνκΈ° [π](#-μν¬λ²€μΉ-μ€μΉνκΈ°)
    - π 7.3.1 Mac [π](#-Mac)
    - π 7.3.2 μ»€λ₯μ μμ±νκΈ° [π](#-μ»€λ₯μ-μμ±νκΈ°)
  - π 7.4 λ°μ΄ν°λ² μ΄μ€ λ° νμ΄λΈ μμ±νκΈ° [π](#-λ°μ΄ν°λ² μ΄μ€-λ°-νμ΄λΈ-μμ±νκΈ°)
    - π 7.4.1 λ°μ΄ν°λ² μ΄μ€ μμ±νκΈ° [π](#-λ°μ΄ν°λ² μ΄μ€-μμ±νκΈ°)
    - π 7.4.2 νμ΄λΈ μμ±νκΈ° [π](#-νμ΄λΈ-μμ±νκΈ°)
  - π 7.5 CRUD μμνκΈ° [π](#-CRUD-μμνκΈ°)
    - π 7.5.1 Create [π](#-Create)
    - π 7.5.2 Read [π](#-Read)
    - π 7.5.3 Update [π](#-Update)
    - π 7.5.4 Delete [π](#-Delete)
  - π 7.6 μνλΌμ΄μ¦ μ¬μ©νκΈ° [π](#-μνλΌμ΄μ¦-μ¬μ©νκΈ°)
    - π 7.6.1 MySQL μ°κ²°νκΈ° [π](#-MySQL-μ°κ²°νκΈ°)
    - π 7.6.2 λͺ¨λΈ μ μνκΈ° [π](#-λͺ¨λΈ-μ μνκΈ°)
    - π 7.6.3 κ΄κ³ μ μνκΈ° [π](#-κ΄κ³-μ μνκΈ°)
    - π 7.6.4 μΏΌλ¦¬ μμλ³΄κΈ° [π](#-μΏΌλ¦¬-μμλ³΄κΈ°)

  </details>

## π Chapter07. MySQL

μ§κΈκΉμ§λ λͺ¨λ  λ°μ΄ν°λ₯Ό λ³μμ μ μ₯νμλ€. λ³μμ μ μ₯νλ€λ κ²μ μ»΄ν¨ν° λ©λͺ¨λ¦¬μ μ μ₯νλ€λ λ»μ΄λ€. μλ²κ° μ’λ£λλ©΄ λ©λͺ¨λ¦¬κ° μ λ¦¬λλ©΄μ μ μ₯νλ λ°μ΄ν°λ μ¬λΌμ Έλ²λ¦°λ€. μ΄λ₯Ό λ°©μ§νκΈ° μν΄μ λ°μ΄ν°λ² μ΄μ€λ₯Ό μ¬μ©νλ€.

### π 7.1 λ°μ΄ν°λ² μ΄μ€λ

- **λ°μ΄ν°λ² μ΄μ€:** λ°μ΄ν°λ² μ΄μ€λ κ΄λ ¨μ±μ κ°μ§λ©° μ€λ³΅μ΄ μλ λ°μ΄ν°λ€μ μ§ν©μ΄λ€.
- **DBMS(Database Management System):** λ°μ΄ν°λ² μ΄μ€λ₯Ό κ΄λ¦¬νλ μμ€νμ λ§νλ€.
- λ³΄ν΅ μλ²μ νλ λμ€ν¬λ SSD λ±μ μ μ₯ λ§€μ²΄μ λ°μ΄ν°λ₯Ό μ μ₯νκΈ° λλ¬Έμ μ μ₯ λ§€μ²΄κ° κ³ μ₯λκ±°λ μ¬μ©μκ° μ§μ  λ°μ΄ν°λ₯Ό μ§μ°μ§ μλ μ΄μ κ³μ λ°μ΄ν°κ° λ³΄μ‘΄λλ―λ‘ μλ² μ’λ£ μ¬λΆμ μκ΄μμ΄ λ°μ΄ν°λ₯Ό μ§μμ μΌλ‘ μ¬μ©ν  μ μλ€.
- μλ²μ λ°μ΄ν°λ² μ΄μ€λ₯Ό μ¬λ¦¬λ©΄ μ¬λ¬ μ¬λμ΄ λμμ κ°κ°μ κΆνμ κ°κ³  μ¬μ©ν  μ μλ€.
- **RDBMS(Relational DBMS)**λΌκ³  λΆλ₯΄λ κ΄κ³ν DBMSκ° λ§μ΄ μ¬μ©λλ€.

### π 7.2 MySQL μ€μΉνκΈ°

#### π 7.2.1 Mac

- Homebrewλ₯Ό ν΅ν΄ MySQLμ μ€μΉνλ€.

```shell
# Homebrew μ€μΉ
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
# MySQL μ€μΉ
$ brew install mysql
# MySQL μμ
$ brew services start mysql
# root λΉλ°λ²νΈ μ€μ 
$ mysql_secure_installation
# MySQL μ μ
$ mysql -h localhost -u root -p
Enter password: [λΉλ°λ²νΈ μλ ₯]
# MySQL νλ‘¬ννΈ μ μ μ±κ³΅
mysql>
```

> **κΆν μλ¬ λ°μ μ**
>
> ```shell
> $ sudo chown -R $(whoami) /usr/local/share/info
> $ chmod u+w /usr/local/share/info
> ```

### π 7.3 μν¬λ²€μΉ μ€μΉνκΈ°

- μ½μλ‘λ λ°μ΄ν°λ₯Ό νλμ λ³΄κΈ°μ λ¬΄λ¦¬κ° μλλ°, μν¬λ²€μΉ(MySQL Workbench)λΌλ νλ‘κ·Έλ¨μ μ¬μ©νλ©΄ λ°μ΄ν°λ² μ΄μ€ λ΄λΆμ μ μ₯λ λ°μ΄ν°λ₯Ό μκ°μ μΌλ‘ κ΄λ¦¬ν  μ μλ€.
- μ½μλ‘λ λμΌν μμμ μνν  μ μλ€.

#### π 7.3.1 Mac

- Homebrewλ₯Ό ν΅ν΄ μν¬λ²€μΉλ₯Ό μ€μΉνλ€.

```shell
# μν¬λ²€μΉ μ€μΉ
$ brew install --cask mysqlworkbench
```

#### π 7.3.2 μ»€λ₯μ μμ±νκΈ°

1. μν¬λ²€μΉλ₯Ό μ€νν λ€, `MySQL Connections` μμ `+` λ²νΌμ λλ₯Έλ€.
2. μ»€λ₯μ μμ± νλ©΄μμ `Connection Name`μ `localhost`λΌκ³  μ κ³  `Password`μμ `Store in Vault...`λ²νΌμ λλ₯Έλ€.
3. MySQL μ€μΉ μ μ€μ νλ λΉλ°λ²νΈλ₯Ό μλ ₯νκ³  `OK`λ₯Ό λλ₯Έλ€. Setup New Connection νλ©΄μμλ `OK`λ₯Ό λλ¬ μ»€λ₯μμ μμ±νλ€.
4. MySQL Connectoinsμ μλ‘ μμ±λ `localhost`λ₯Ό λλ¬ μ μνλ€.

> **ERROR 2002**
>
> ```shell
> $ mysql -h localhost -u root -p
> Enter Password: [λΉλ°λ²νΈ μλ ₯]
> ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
> ```
>
> DBλ₯Ό μ€μΉνμ§λ§ μ€ννμ§ μμμ μμ κ°μ μλ¬κ° λ°μνκ² λλ€. ν΄κ²° λ°©λ²μ μλμ κ°λ€.
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
> mysql.server λͺλ Ήμ΄λ₯Ό μ€ν μμΌμ£Όλ©΄ `/usr/local/bin/mysql.server`κ° μ€μλλ€.
> μΆμ²: http://meonggae.blogspot.com/2017/03/db-mac-mysql-1-error-2002-hy000-cant.html

### π 7.4 λ°μ΄ν°λ² μ΄μ€ λ° νμ΄λΈ μμ±νκΈ°

#### π 7.4.1 λ°μ΄ν°λ² μ΄μ€ μμ±νκΈ°

- 7.2μ μ λ°©λ²μΌλ‘ MySQL νλ‘¬ννΈλ‘ μ μνλ€.

```shell
$ mysql -h localhost -u root -p
Enter password: [λΉλ°λ²νΈ μλ ₯]
mysql>
```

- MySQLμμ λ°μ΄ν°λ² μ΄μ€μ μ€ν€λ§λ κ°μ κ°λμ΄λ€.
- μμ½μ΄λ μλ¬Έμλ‘ μ¨λ λμ§λ§, μ¬μ©μκ° μ§μ  λ§λ  μ΄λ¦κ³Ό κ΅¬λΆνκΈ° μν΄ λλ¬Έμλ‘ μ°λ κ²μ΄ μ’λ€.
- `μΈλ―Έμ½λ‘ (;)`μ λΆμ¬ SQL κ΅¬λ¬Έμ΄ λλ¬μμ λͺμν΄μΌ νλ€. μΈλ―Έμ½λ‘ μ λΆμ΄μ§ μμΌλ©΄ μ€λ°κΏμ΄ λμ΄ λ€μ μ€μμ μ΄μ΄μ κ΅¬λ¬Έμ μΈ μ μκ² λλ€.

```shell
# λ°μ΄ν°λ² μ΄μ€ μμ±
mysql> CREATE SCHEMA `dbtest` DEFAULT CHARACTER SET utf8;
Query OK, 1 row affected (0.01sec)
# λ°μ΄ν°λ² μ΄μ€ μ¬μ©
mysql> use dbtest;
Database changed
```

#### π 7.4.2 νμ΄λΈ μμ±νκΈ°

- ν κΈμλΌλ μλͺ» μλ ₯νλ©΄ μλ¬κ° λ°μνλ€.
- `use dbtest;` λͺλ Ήμ΄λ‘ `dbtest` λ°μ΄ν°λ² μ΄μ€λ₯Ό μ¬μ©νκΈ°λ‘ νκΈ° λλ¬Έμ λ°μ΄ν°λ² μ΄μ€ μ΄λ¦μ μλ΅νμ¬ κ΅¬λ¬Έμ μμ±ν΄λ λλ€.
- `μ½€λ§(,)`λ‘ κ΅¬λΆν΄ μ»¬λΌμ μμ±νλ€. μ»¬λΌμ μ μν΄λλ©΄ μμΌλ‘ λ°μ΄ν°λ₯Ό λ£μ λ μ»¬λΌ κ·μΉμ λ§λ μ λ³΄λ€λ§ λ£μ μ μλ€.

```shell
# ([μ»¬λΌ λͺ] [μλ£ν] [μ΅μ1] [μ΅μN], ...)
# [νμ΄λΈ μμ²΄ μ€μ 1]
# [νμ΄λΈ μμ²΄ μ€μ N];
mysql> CREATE TABLE dbtest.users (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(20) NOT NULL,
    -> age INT UNSIGNED NOT NULL,
    -> married TINYINT NOT NULL,
    -> comment TEXT NULL,
    -> created_at DATETIME NOT NULL DEFAULT now(),
    -> PRIMARY KEY(id),
    -> UNIQUE INDEX name_UNIQUE (name ASC))
    -> COMMENT = 'μ¬μ©μ μ λ³΄'
    -> DEFAULT CHARACTER SET = utf8
    -> ENGINE = InnoDB;
Query OK, 0 row affected (0.09sec)
```

**μλ£ν**

- `INT:` μ μλ₯Ό μλ―Ένλ€.
- `CHAR(μλ¦Ώμ):` κ³ μ  κΈΈμ΄, CHAR(10)μ΄λ©΄ λ°λμ κΈΈμ΄κ° 10μΈ λ¬Έμμ΄λ§ λ£μ΄μΌ νλ€.
- `VARCHAR(μλ¦Ώμ):` κ°λ³ κΈΈμ΄, VARCHAR(10)μ΄λ©΄ κΈΈμ΄κ° 0 ~ 10μΈ λ¬Έμμ΄μ λ£μ μ μλ€.
- `TEXT:` κΈ΄ κΈμ μ μ₯ν  λ μ¬μ©νλ€.
- `TINYINT:` -128 ~ 127κΉμ§μ μ μλ₯Ό μ μ ν  λ μ¬μ©νλ€. 1 λλ 0λ§ μ μ₯νλ€λ©΄ `Boolean`κ³Ό κ°μ μ­ν μ νλ€.
- `DATETIME:` λ μ§μ μκ°μ λν μ λ³΄λ₯Ό λ΄κ³  μλ€.
- `DATE:` λ μ§ μ λ³΄λ§ λ΄κ³  μλ€.
- `TIME:` μκ° μ λ³΄λ§ λ΄κ³  μλ€.

**μ΅μ**

- `NULL:` λΉμΉΈμ νμ©ν μ§ μ¬λΆλ₯Ό λ¬»λ μ΅μμ΄λ€. λ°μ΄ν°λ₯Ό λΉμΉΈ, μ¦ μλ ₯νμ§ μμλ λλ€.
- `NOT NULL:` λΉμΉΈμ νμ©ν μ§ μ¬λΆλ₯Ό λ¬»λ μ΅μμ΄λ€. λ°λμ λ°μ΄ν°λ₯Ό μλ ₯ν΄μΌ νλ€.
- `AUTO_INCREMENT:` λ°μ΄ν°λ₯Ό μΆκ°ν  λ λ§λ€ MySQLμ΄ idλ₯Ό μλμΌλ‘ νλμ© λν΄κ°λ©΄μ λΆμ¬νλ€.
- `UNSIGNED:` μ«μ μλ£νμ μ μ©λλ μ΅μμ΄λ€. `INT`λ -2147483648 ~ 2147483647κΉμ§μ μ«μλ₯Ό μ μ₯ν  μ μλ€. λ§μ½ `UNSIGNED`κ° μ μ©λμ΄ μλ€λ©΄ μμλ λ¬΄μλκ³  0 ~ 4294967295κΉμ§ μ μ₯ν  μ μλ€. `FLOAT`κ³Ό `DOUBLE`μλ `UN` μ μ©μ΄ λΆκ°λ₯νλ€. λμ΄μ²λΌ μμκ° λμ¬ μ μλ μ»¬λΌμ μ²΄ν¬ν΄λλ κ²μ΄ μ’λ€.
- `ZEROFILL:` μ«μμ μλ¦Ώμκ° κ³ μ λμ΄ μμ λ μ¬μ©νλ€. κ°λ `INT` μλ£ν λμ  `INT(μλ¦Ώμ)`μ²λΌ νννλ κ²½μ°κ° μλ€. μ΄λ `ZEROFILL`μ μ€μ ν΄λλ€λ©΄ λΉμ΄ μλ μλ¦¬μ λͺ¨λ 0μ λ£λλ€. `INT(4)`μΈλ° μ«μ 1μ λ£μλ€λ©΄ 0001μ΄ λλ λ°©μμ΄λ€.
- `DEFAULT now():`s λ°μ΄ν°λ² μ΄μ€ μ μ₯ μ ν΄λΉ μ»¬λΌμ κ°μ΄ μλ€λ©΄ MySQLμ΄ κΈ°λ³Έκ°μ λμ  λ£λλ€. `now()`λ νμ¬ μκ°μ λ£μΌλΌλ μλ―Έμ΄λ€. `now()` λμ  `CURRENT_TIMESTAMP`λ₯Ό μ μ΄λ λλ€.
- `PRIMARY KEY(id):` ν΄λΉ μ»¬λΌμ΄ κΈ°λ³Έ ν€μΈ κ²½μ° μ€μ νλ€. κΈ°λ³Έ ν€λ λ‘μ°λ₯Ό λννλ κ³ μ ν κ°μ μλ―Ένλ€. λ°μ΄ν°λ² μ΄μ€μλ λ‘μ° λ¨μλ‘ λ°μ΄ν°λ₯Ό λ£λλ€. μ΄λ λ‘μ°λ€μ κ΅¬λ³ν  κ³ μ ν μλ³μκ° νμνλ€. idκ° κ³ μ ν μλ³μκ° λλ€. μ£Όλ―Όλ±λ‘λ²νΈλ νλ²κ³Ό λΉμ·ν κ°λμ΄λ€.
- `UNIQUE INDEX:` ν΄λΉ κ°μ΄ κ³ μ ν΄μΌ νλμ§μ λν μ΅μμ΄λ©°, `name_UNIQUE`λ name μ»¬λΌμ μ€λ¦μ°¨μ(ASC)μΌλ‘ κΈ°μ΅νκ² λ€λ κ²μ΄λ€. `PRIMARY KEY`λ `UNIQUE INDEX`λ λ°μ΄ν°λ² μ΄μ€κ° λ³λλ‘ μ»¬λΌμ κ΄λ¦¬νκΈ°λλ¬Έμ μ‘°ν μ μλκ° λΉ¨λΌμ§λ€. κΈ°λ³Έ ν€μΈ idλ κ³ μ ν΄μΌ νμ§λ§ `PRIMARY KEY`λ μλμΌλ‘ `UNIQUE INDEX`λ₯Ό ν¬ν¨νλ―λ‘ λ°λ‘ μ μ§ μμλ λλ€.

**νμ΄λΈ μμ²΄μ λν μ€μ **

- `COMMENT:` νμ΄λΈμ λν λ³΄μΆ© μ€λͺμ μλ―Ένλ€.
- `DEFAULT CHARACTER SET:` νκΈμ μ¬μ©νλ €λ©΄ `utf8`λ‘ λ°λμ μ€μ ν΄μΌ νλ€. μ΄λͺ¨ν°μ½μ μ¬μ©ν  κ²½μ° `utf8mb4`λ‘ μ€μ νλ€.
- `ENGINE:` `MyISAM`κ³Ό `InnoDB`κ° μ μΌ λ§μ΄ μ¬μ©λλ€.

```shell
# νμ΄λΈ νμΈνκΈ°
mysql> DESC users;
# νμ΄λΈ μ κ±°νκΈ°
mysql> DROP TABLE users;
```

```shell
# μ¬μ©μμ λκΈμ μ μ₯νλ νμ΄λΈ μμ±νκΈ°
mysql> CREATE TABLE comments (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> commenter INT NOT NULL,
    -> comment VARCHAR(100) NOT NULL,
    -> created_at DATETIME NOT NULL DEFAULT now(),
    -> PRIMARY KEY(id),
    -> INDEX commenter_idx (commenter ASC),
    -> CONSTRAINT commenter # μ μ½μ‘°κ±΄λͺ: commenter
    -> FOREIGN KEY (commenter) # commenterμ μΈλ ν€ μ€μ 
    -> REFERENCES dbtest.users (id) #dbtest.users νμ΄λΈμ idλ₯Ό μ°Έκ³ 
    -> ON DELETE CASCADE
    -> ON UPDATE CASCADE)
    -> COMMENT = 'λκΈ'
    -> DEFAULT CHARSET=utf8mb4
    -> ENGINE=InnoDB;
Query OK, 0 row affected (0.09sec)
```

- `μΈλ ν€(foreign key):` λ€λ₯Έ νμ΄λΈμ κΈ°λ³Έ ν€λ₯Ό μ μ₯νλ μ»¬λΌμ΄λ€.
- `CONSTRAINT [μ μ½μ‘°κ±΄λͺ] FOREIGN KEY [μ»¬λΌλͺ] REFERENCES [μ°Έκ³ νλ μ»¬λΌλͺ]:` μΈλ ν€λ₯Ό μ§μ νλ€.
- `ON UPDATE CASCADE:` μ¬μ©μ μ λ³΄κ° μμ λλ©΄ λκΈ μ λ³΄λ κ°μ΄ μμ λλ€. λ°μ΄ν°μ λΆμΌμΉλ₯Ό λ°©μ§νλ€.
- `ON DELETE CASCADE:` μ¬μ©μ μ λ³΄κ° μ­μ λλ©΄ λκΈ μ λ³΄λ κ°μ΄ μ­μ λλ€. λ°μ΄ν°μ λΆμΌμΉλ₯Ό λ°©μ§νλ€.

```shell
# μμ±λ λͺ¨λ  νμ΄λΈμ νμΈνλ λͺλ Ήμ΄
# users, comments νμ΄λΈ
mysql> SHOW TABLES;
```

### π 7.5 CRUD μμνκΈ°

- `CRUD:` Create(μμ±), Read(μ‘°ν), Update(μμ ), Delete(μ­μ )λ₯Ό μλ―Ένλ©° λ°μ΄ν°λ² μ΄μ€μμ λ§μ΄ μννλ λ€ κ°μ§ μμμ μΌμ»«λλ€.

#### π 7.5.1 Create

- Createλ λ°μ΄ν°λ₯Ό μμ±ν΄μ λ°μ΄ν°λ² μ΄μ€μ λ£λ μμμ΄λ€.

`INSERT INTO [νμ΄λΈλͺ] ([μ»¬λΌ1], [μ»¬λΌ2], ...) VALUES ([κ°1], [κ°2], ...)`

```shell
# idλ AUTO_INCREMENTμ μν΄ μλμΌλ‘ μΆκ°λλ€.
# created_atμ DEFAULT κ°μ μν΄ μλμΌλ‘ μΆκ°λλ€.
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('keem', 24, 0, 'μκΈ°μκ°1');
Query OK, 1 row affected (0.01sec)
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('jay', 32, 1, 'μκΈ°μκ°2');
Query OK, 1 row affected (0.01sec)
```

```shell
# idλ AUTO_INCREMENTμ μν΄ μλμΌλ‘ μΆκ°λλ€.
# created_atμ DEFAULT κ°μ μν΄ μλμΌλ‘ μΆκ°λλ€.
mysql> INSERT INTO dbtest.comments (commenter, comment) VALUES (1, 'μλνμΈμ. keemμ λκΈμλλ€');
Query OK, 1  row affected (0.02 sec)
```

#### π 7.5.2 Read

- Readλ λ°μ΄ν°λ² μ΄μ€μ μλ λ°μ΄ν°λ₯Ό μ‘°ννλ μμμ΄λ€.

`SELECT * FROM [νμ΄λΈλͺ]`

- users νμ΄λΈμ λͺ¨λ  λ°μ΄ν°λ₯Ό μ‘°ν

```shell
mysql> SELECT * FROM dbtest.users;
```

- comments νμ΄λΈμ λͺ¨λ  λ°μ΄ν°λ₯Ό μ‘°ν

```shell
mysql> SELECT * FROM dbtest.comments;
```

- users νμ΄λΈμ νΉμ  μ»¬λΌ(name, married)μ λ°μ΄ν°λ₯Ό μ‘°ν

```shell
mysql> SELECT name, married FROM dbtest.users;
```

`SELECT [μ»¬λΌ1], [μ»¬λΌ2],... FROM [νμ΄λΈλͺ] WHERE μ‘°κ±΄1 AND μ‘°κ±΄2`

- WHERE μ μμ νΉμ  μ‘°κ±΄μ λͺ¨λ λ§μ‘±(AND)νλ λ°μ΄ν°λ₯Ό μ°Ύμ ν
- νΉμ  μ»¬λΌ(name, married)μ λ°μ΄ν°λ₯Ό μ‘°ν
- marriedκ° 1 μ΄κ³  ageκ° 30 λ³΄λ€ ν° λ°μ΄ν°λ₯Ό μ°Ύμ ν name, age μ»¬λΌμ μ ννμ¬ μ‘°ν

```shell
mysql> SELECT name, age FROM dbtest.users WHERE married = 1 AND age > 30;
```

`SELECT [μ»¬λΌ1], [μ»¬λΌ2],... FROM [νμ΄λΈλͺ] WHERE μ‘°κ±΄1 OR μ‘°κ±΄2`

- WHERE μ μμ νΉμ  μ‘°κ±΄λ€ μ€ μ΄λ νλλΌλ λ§μ‘±(OR)νλ λ°μ΄ν°λ₯Ό μ°Ύμ ν
- νΉμ  μ»¬λΌ(id, name)μ λ°μ΄ν°λ₯Ό μ‘°ν
- marriedκ° 0 μ΄κ±°λ ageκ° 30 λ³΄λ€ ν° λ°μ΄ν°λ₯Ό μ°Ύμ ν id, name μ»¬λΌμ μ ννμ¬ μ‘°ν

```shell
mysql> SELECT id, name FROM dbtest.users WHERE married = 0 OR age > 30;
```

`SELECT [μ»¬λΌ1], [μ»¬λΌ2],... FROM [νμ΄λΈλͺ] ORDER BY [μ»¬λΌ] DESC`

- DESC: λ΄λ¦Όμ°¨μ
- ASC: μ€λ¦μ°¨μ
- ageλ₯Ό λ΄λ¦Όμ°¨μμΌλ‘ μ λ ¬ν ν νΉμ  μ»¬λΌ(id, name)μ λ°μ΄ν°λ₯Ό μ‘°ν

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age DESC;
```

`LIMIT [μ«μ]`

- λ‘μ°μ κ°μλ₯Ό μ€μ νλ€.
- ageλ₯Ό μ€λ¦μ°¨μμΌλ‘ μ λ ¬ν ν νΉμ  μ»¬λΌ(id, name)μ λ°μ΄ν°λ₯Ό 1κ°λ‘ μ ν(1κ°μ λ‘μ°)νμ¬ μ‘°ν

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age ASC LIMIT 1;
```

`OFFSET [κ±΄λλΈ μ«μ]`

- Pagination κΈ°λ₯μ κ΅¬νν  λ μ μ©νλ€.
- μλ₯Ό λ€μ΄ μ²« λ²μ§Έ μ‘°νμμ 1 ~ 20λ² κ²μλ¬Όμ μ‘°ννλ€λ©΄, λ λ²μ§Έ νμ΄μ§μμλ 21 ~ 40λ² κ²μλ¬Όμ μ‘°νν΄μΌ νλ€. μ΄λ μ²μ 20κ°λ₯Ό κ±΄λλ°κ³  λ€μ 20κ°μ κ²μλ¬Όμ μ‘°ννλΌλ μμ λͺλ Ήμ΄ κ°λ₯νλ€.
- ageλ₯Ό μ€λ¦μ°¨μμΌλ‘ μ λ ¬ν ν νΉμ  μ»¬λΌ(id, name)μ λ°μ΄ν°λ₯Ό 1κ° κ±΄λλ°κ³  1κ°λ‘ μ ν(1κ°μ λ‘μ°)νμ¬ μ‘°ν

```shell
mysql> SELECT id, name FROM dbtest.users ORDER BY age ASC LIMIT 1 OFFSET 1;
```

#### π 7.5.3 Update

- Updateλ λ°μ΄ν°λ² μ΄μ€μ μλ λ°μ΄ν°λ₯Ό μμ νλ μμμ΄λ€.

`UPDATE [νμ΄λΈλͺ] SET [μ»¬λΌλͺ=λ°κΏ κ°] WHERE [μ‘°κ±΄]`

- μ‘°κ±΄μ κ²½μ° AND, ORλ‘ μ¬λ¬ κ°λ₯Ό λμμ μμ ν  μ μλ€.
- users νμ΄λΈμμ idκ° 2μΈ λ‘μ°λ₯Ό μ‘°νν ν comment μ»¬λ ΄μ 'λ°κΏ λ΄μ©'μ΄λΌλ κ°μΌλ‘ μμ 

```shell
mysql> UPDATE dbtest.users SET comment = 'λ°κΏ λ΄μ©' WHERE id = 2;
Query OK, 1 row affected (0.0.1sec)
Rows matched: 1 Changed: 1 Warning: 0
```

#### π 7.5.4 Delete

- Deleteλ λ°μ΄ν°λ² μ΄μ€μ μλ λ°μ΄ν°λ₯Ό μ­μ νλ μμμ΄λ€.

`DELETE FROM [νμ΄λΈλͺ] WHERE [μ‘°κ±΄]`

- AND, ORλ‘ μ¬λ¬ κ°λ₯Ό λμμ μ­μ ν  μ μλ€.
- users νμ΄λΈμμ idκ° 2μΈ λ‘μ°λ₯Ό μ­μ 

```shell
mysql> DELETE FROM dbtest.users WEHRE id = 2;
```

### π 7.6 μνλΌμ΄μ¦ μ¬μ©νκΈ°

- **μνλΌμ΄μ¦**λ MySQL μμμ μ½κ² ν  μ μλλ‘ λμμ£Όλ λΌμ΄λΈλ¬λ¦¬μ΄λ€.
- **ORM(Object-relational Mapping):** μλ°μ€ν¬λ¦½νΈ κ°μ²΄μ λ°μ΄ν°λ² μ΄μ€μ λ¦΄λ μ΄μμ λ§€νν΄μ£Όλ λκ΅¬μ΄λ€. μνλΌμ΄μ¦λ ORMμΌλ‘ λΆλ₯λλ€.
- MariaDB, PostgreSQL, SQLite, MSSQL λ± λ€λ₯Έ λ°μ΄ν°λ² μ΄μ€λ κ°μ΄ μΈ μ μλ€.
- μνλΌμ΄μ¦λ₯Ό μ°λ μ΄μ λ μλ°μ€ν¬λ¦½νΈ κ΅¬λ¬Έμ μμμ SQLλ‘ λ°κΏμ£ΌκΈ° λλ¬Έμ΄λ€. μ¦, SQL μΈμ΄λ₯Ό μ§μ  μ¬μ©νμ§ μμλ μλ°μ€ν¬λ¦½νΈλ§μΌλ‘ MySQLμ μ‘°μν  μ μλ€.

```shell
# μ νλ‘μ νΈλ₯Ό μν΄ package.json μμ±
$ npm init
```

```shell
# sequelize-cli: μνλΌμ΄μ¦ λͺλ Ήμ΄λ₯Ό μν ν¨ν€μ§
# mysql2: MySQLκ³Ό μνλΌμ΄μ¦λ₯Ό μ΄μ΄μ£Όλ λλΌμ΄λ²
$ npm i express sequelize sequelize-cli mysql2
$ npm i -D nodemon
```

```shell
# μ μ­ μ€μΉ μμ΄ λͺλ Ήμ΄λ‘ μ€ννκΈ° μν΄ npx μ¬μ©
$ npx sequelize init
```

- `sequelize init` λͺλ Ήμ΄λ₯Ό μ€ννλ©΄ config, models, migrations, seeders ν΄λκ° μμ±λλ€. models ν΄λ μμ index.jsκ° μμ±λμλμ§ νμΈνλ€.

#### π 7.6.1 MySQL μ°κ²°νκΈ°

- app.jsμμ μνλΌμ΄μ¦λ₯Ό ν΅ν΄ μ΅μ€νλ μ€μ MySQLμ μ°κ²°νλ μ½λλ₯Ό μμ±νλ€.

```javascript
// app.js
...
const { sequelize } = require('./models');

const app = express();
...
sequelize.sync({ force: false })
  .then(() => {
    console.log('λ°μ΄ν°λ² μ΄μ€ μ°κ²° μ±κ³΅');
  })
  .catch((err) => {
    console.error(err);
  })
...
```

- MySQLκ³Ό μ°λν  λλ config/config.json μ λ³΄κ° μ¬μ©λλ€.
- password, databaseλ₯Ό MySQL Connectionκ³Ό μΌμΉνλλ‘ μμ νλ€.

```json
{
  "development": {
    "username": "root",
    "password": "[root λΉλ°λ²νΈ]",
    "database": "dbtest",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- μ€μ μ΄ μλ£λλ©΄ μλ²λ₯Ό μ€ννλ€.

```shell
$ npm start
...
Executing (default): SELECT 1+1 AS result
λ°μ΄ν°λ² μ΄μ€ μ°κ²° μ±κ³΅
```

#### π 7.6.2 λͺ¨λΈ μ μνκΈ°

- MySQLμμ μ μν νμ΄λΈμ μνλΌμ΄μ¦μμλ μ μν΄μΌ νλ€. MySQLμ **νμ΄λΈ**μ μνλΌμ΄μ¦μ **λͺ¨λΈ**κ³Ό λμλλ€.
- μνλΌμ΄μ¦λ λͺ¨λΈκ³Ό νμ΄λΈμ μ°κ²°ν΄μ£Όλ μ­ν μ νλ€.
- μνλΌμ΄μ¦λ κΈ°λ³Έμ μΌλ‘ λͺ¨λΈ μ΄λ¦μ **λ¨μν**, νμ΄λΈ μ΄λ¦μ **λ³΅μν**μΌλ‘ μ¬μ©νλ€.
- λͺ¨λΈμ ν΄λμ€λ‘ μ μΈνλ€. `static init` λ©μλ, `static associate` λ©μλ ν¨ν΄μ μμ§νλ€.
- MySQL νμ΄λΈκ³Ό μ»¬λΌ λ΄μ©μ΄ μΌμΉν΄μΌ μ ννκ² λμλλ€.

```javascript
class User extends Sequelize.Model {
  // νμ΄λΈμ λν μ€μ 
  static init(sequelize) {
    return super.init({
      {
        // νμ΄λΈ μ»¬λΌμ λν μ€μ 
      },
      {
        // νμ΄λΈ μμ²΄μ λν μ€μ 
      }
    });
  }
  // λ€λ₯Έ λͺ¨λΈκ³Όμ κ΄κ³ μ€μ 
  static associate(db) {
  }
}
```

- μνλΌμ΄μ¦μ μλ£νμ MySQLμ μλ£νκ³Ό μ‘°κΈ λ€λ₯΄λ€.

| MySQL           | μνλΌμ΄μ¦                    |
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

|                    | super.initμ νμ΄λΈ μ΅μ                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sequelize`        | `static init` λ©μλμ λ§€κ°λ³μμ μ°κ²°λλ μ΅μμΌλ‘ `db.sequelize` κ°μ²΄λ₯Ό λ£μ΄μΌ νλ€. `model/index.js`μμ μ°κ²°νλ€.                                                                                                                                        |
| `timestamps`       | `true`λ©΄ μνλΌμ΄μ¦λ `createdAt`, `updatedAt` μ»¬λΌμ μλμΌλ‘ μΆκ°νλ€.                                                                                                                                                                                     |
| `underscored`      | μνλΌμ΄μ¦λ κΈ°λ³Έμ μΌλ‘ νμ΄λΈλͺκ³Ό μ»¬λΌλͺμ `μΉ΄λ© μΌμ΄μ€`λ‘ λ§λ λ€. μ΄λ₯Ό `μ€λ€μ΄ν¬ μΌμ΄μ€`λ‘ λ°κΎΈλ μ΅μμ΄λ€.                                                                                                                                                |
| `modelName`        | λͺ¨λΈ μ΄λ¦μ μ€μ νλ€. λΈλ νλ‘μ νΈμμ μ¬μ©νλ€.                                                                                                                                                                                                            |
| `tablename`        | μ€μ  λ°μ΄ν°λ² μ΄μ€μ νμ΄λΈ μ΄λ¦μ΄ λλ€. λͺ¨λΈ μ΄λ¦μ΄ `User`λΌλ©΄ νμ΄λΈ μ΄λ¦μ `users`κ° λλ€.                                                                                                                                                                 |
| `paranoid`         | `true`λ©΄ `deletedAt` μ»¬λΌμ΄ μκΈ΄λ€. λ‘μ°λ₯Ό μ­μ ν  λ μμ ν μ§μμ§μ§ μκ³  `deletedAt`μ μ§μ΄ μκ°μ΄ κΈ°λ‘λλ€. λ‘μ°λ₯Ό μ‘°ννλ λͺλ Ήμ λ΄λ Έμ λλ `deletedAtμ κ°μ΄ nullμΈ λ‘μ°`(μ­μ λμ§ μμλ€λ λ»)λ₯Ό μ‘°ννλ€. λμ€μ λ‘μ°λ₯Ό λ³΅μν  μν©μ μν μ€μ μ΄λ€. |
| `charset, collate` | κ°κ° `utf8`, `utf8_general_ci`λ‘ μ€μ ν΄μΌ νκΈμ΄ μλ ₯λλ€. `μ΄λͺ¨ν°μ½`κΉμ§ μλ ₯νλ €λ©΄ `utf8μ utfmb4λ‘ μΉν`νλ€.                                                                                                                                             |

- Comment λͺ¨λΈλ User λͺ¨λΈκ³Ό κ°μ΄ μμ±νλ€.
- λͺ¨λΈμ μμ±νλ€λ©΄ Models/index.jsμ μ°κ²°νλ€.
- db κ°μ²΄μ User, Comment λͺ¨λΈμ λ΄μλλ€. db κ°μ²΄λ₯Ό requireνμ¬ User, Comment λͺ¨λΈμ μ κ·Όν  μ μλ€.
- User.init, Comment.initμ κ°κ°μ λͺ¨λΈμ static.init λ©μλλ₯Ό νΈμΆνλ€. initμ΄ μ€νλμ΄μΌ νμ΄λΈμ΄ λͺ¨λΈλ‘ μ°κ²°λλ€.

#### π 7.6.3 κ΄κ³ μ μνκΈ°

- λͺ¨λΈμ `static associate`μμ νμ΄λΈκ³Ό νμ΄λΈ κ°μ κ΄κ³λ₯Ό μ μνλ€.
- 1:1, 1:N, N:Mμ κ΄κ³κ° μλ€.

`1:N κ΄κ³`

- μνλΌμ΄μ¦μμ 1:N κ΄κ³λ₯Ό `hasMany` λ©μλλ‘ νννλ€.
- `belongsTo` λ©μλλ μλ€.
- λ€λ₯Έ λͺ¨λΈμ μ λ³΄κ° λ€μ΄κ°λ νμ΄λΈμ `belongsTo`λ₯Ό μ¬μ©νλ€.
- μνλΌμ΄μ¦λ μμμ μ μν λλ‘ λͺ¨λΈ κ° κ΄κ³λ₯Ό νμν΄μ Comment λͺ¨λΈμ `foreignKey`μΈ commenter μ»¬λΌμ μΆκ°νλ€.
- `hasMany`λ `sourceKey`, `belongsTo`λ `targetKey`λ₯Ό μ΄λ€.
- `foreignKey`λ₯Ό λ°λ‘ μ§μ νμ§ μμΌλ©΄ `λͺ¨λΈ+κΈ°λ³Έ ν€μΈ μ»¬λΌ`μ΄ λͺ¨λΈμ μμ±λλ€.

```javascript
db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
db.Comment.belongsTo(db.User, { foreignKey: "commenter", sourceKey: "id" });
```

`1:1 κ΄κ³`

- 1:1 κ΄κ³μμλ `hasMany` λ©μλ λμ  `hasOne` λ©μλλ₯Ό μ¬μ©νλ€.
- 1:1 κ΄κ³λΌκ³  ν΄λ `belongsTo`μ `hasOne`μ΄ λ°λλ©΄ μ λλ€.

```javascript
db.User.hasOne(db.Info, { foreignKey: "UserId", sourceKey: "id" });
db.Info.belognsTo(db.User, { foreignKey: "UserId", targetKey: "id" });
```

`N:M κ΄κ³`

- μνλΌμ΄μ¦μλ N:M κ΄κ³λ₯Ό νννκΈ° μν `belongsToMany` λ©μλκ° μλ€.
- N:M κ΄κ³μ νΉμ±μ μλ‘μ΄ λͺ¨λΈμ΄ μμ±λλ€. `through` μμ±μ κ·Έ μ΄λ¦μ μ μΌλ©΄ λλ€. μλ‘ μμ±λ PostHashtag λͺ¨λΈμλ κ²μκΈ(Post)μ μμ΄λμ ν΄μνκ·Έ(Hashtag)μ μμ΄λκ° μ μ₯λλ€.

```javascript
db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
```

- μλμΌλ‘ λ§λ€μ΄μ§ λͺ¨λΈλ€λ λ€μκ³Ό κ°μ΄ μ κ·Όν  μ μλ€.

```javascript
db.sequelize.models.PostHashtag;
```

#### π 7.6.4 μΏΌλ¦¬ μμλ³΄κΈ°

- μνλΌμ΄μ¦λ‘ CRUD μμμ νλ €λ©΄ μνλΌμ΄μ¦ μΏΌλ¦¬λ₯Ό μμμΌ νλ€.
- μΏΌλ¦¬λ νλ‘λ―Έμ€λ₯Ό λ°ννλ―λ‘ thenμ λΆμ¬ κ²°κ΄κ°μ λ°μ μ μλ€.
- async/await λ¬Έλ²κ³Ό κ°μ΄ μ¬μ©ν  μλ μλ€.
- μ£Όμν  μ μ λ°μ΄ν°λ₯Ό λ£μ λ MySQLμ μλ£νμ΄ μλλΌ μνλΌμ΄μ¦ λͺ¨λΈμ μ μν μλ£νλλ‘ λ£μ΄μΌ νλ€.

**Create**

`create` λ©μλ μ¬μ©

```shell
mysql> INSERT INTO dbtest.users (name, age, married, comment) VALUES ('keem', 24, 0, 'μκΈ°μκ°1');
```

```javascript
const { User } = require("../models");
User.create({
  name: "keem",
  age: 24,
  married: false,
  comment: "μκΈ°μκ°1",
});
```

**Read**

`findAll`, `findOne` λ©μλ μ¬μ©

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

- MySQLμμλ undefined μλ£νμ μ§μνμ§ μμΌλ―λ‘ where μ΅μμλ undefinedκ° λ€μ΄κ°λ©΄ μλλ€. λΉ κ°μ λ£κ³ μ ν  λλ `null`μ λμ  μ¬μ©νλ€.

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

`update` λ©μλ μ¬μ©

```shell
mysql> UPDATE dbtest.users SET comment = 'λ°κΏ λ΄μ©' WHERE id = 2;
```

```javascript
User.update(
  {
    comment: "λ°κΏ λ΄μ©",
  },
  {
    where: { id: 2 },
  }
);
```

**Delete**

`destroy` λ©μλ μ¬μ©

```shell
DELETE FROM dbtest.users WHERE id = 2;
```

```javascript
User.destroy({
  where: { id: 2 },
});
```

**κ΄κ³ μΏΌλ¦¬μμ READ**

- κ΄κ³ μΏΌλ¦¬λ MySQLμμ JOIN κΈ°λ₯μ΄λ€.
- User λͺ¨λΈμ Comment λͺ¨λΈκ³Ό hasMany-belongsTo κ΄κ³κ° λ§Ίμ΄μ Έ μλ€. λ§μ½ νΉμ  μ¬μ©μλ₯Ό κ°μ Έμ€λ©΄μ κ·Έ μ¬λμ λκΈκΉμ§ λͺ¨λ κ°μ Έμ€κ³  μΆλ€λ©΄ `include` μμ±μ μ¬μ©νλ€.
- μ΄λ€ λͺ¨λΈκ³Ό κ΄κ³κ° μλμ§λ₯Ό include λ°°μ΄μ λ£μ΄μ£Όλ©΄ λλ€.

```javascript
const user = await User.findOne({
  include: [
    {
      model: Comment,
    },
  ],
});
console.log(user.Comments); // μ¬μ©μ λκΈ
```

- κ΄κ³λ₯Ό μ€μ νλ€λ©΄ `getComments`, `setComments`, `addComment`, `addComments`, `removeComments` λ©μλλ₯Ό μ§μνλ€.
- λμ¬ λ€μ λͺ¨λΈμ μ΄λ¦μ΄ λΆλ νμμ΄λ€.

```javascript
const user = await User.findOne({});
const comments = await user.getComments();
console.log(comments); // μ¬μ©μ λκΈ
```

- λμ¬ λ€μ λͺ¨λΈ μ΄λ¦μ λ°κΎΈκ³  μΆλ€λ©΄ κ΄κ³ μ€μ  μ `as` μ΅μμ μ¬μ©ν  μ μλ€.

```javascript
// κ΄κ³ μ€μ 
db.User.hasMany(db.Comment, {
  foreignKey: "commenter",
  sourceKey: "id",
  as: "Answers",
});
// μΏΌλ¦¬
const user = await User.findOne({});
const comments = await user.getAnswers();
console.log(comments); // μ¬μ©μ λκΈ
```

- `as`λ₯Ό μ€μ νλ©΄ `include` μ μΆκ°λλ λκΈ κ°μ²΄λ user.Answersλ‘ λ°λλ€.
- `include`λ κ΄κ³ μΏΌλ¦¬ λ©μλμλ `where`, `attributes` κ°μ μ΅μμ μ¬μ©ν  μ μλ€.

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
// λλ
const comments = await user.getComments({
  where: {
    id: 1,
  },
  attributes: ["id"],
});
```

**κ΄κ³ μΏΌλ¦¬μμ UPDATE, CREATE, DELETE**

```javascript
const user = await User.findOne({});
const comment = await Comment.create();
await user.addComment(comment);
// λλ
await user.addComment(comment.id);
```

- μ¬λ¬ κ°λ₯Ό μΆκ°ν  λλ λ°°μ΄λ‘ μΆκ°ν  μ μλ€.
- μμ , μ­μ λ λ§μ°¬κ°μ§λ‘ μμν  μ μλ€.

```javascript
const user = await User.findOne({});
const comment1 = await Comment.create();
const comment2 = await Comment.create();
await user.addComment([[comment1, comment2]]);
```

**SQL μΏΌλ¦¬νκΈ°**

- μ§μ  SQLλ¬Έμ ν΅ν΄ μΏΌλ¦¬ν  μλ μλ€.
- μνλΌμ΄μ¦ μΏΌλ¦¬λ‘ ν  μ μλ κ²½μ°μλ μ§μ  SQLλ¬Έμ ν΅ν΄ μΏΌλ¦¬νλ©΄ λλ€.

```javascript
const [result, metadata] = await sequelize.query(
  "SELECT * FROM dbtest.comments"
);
```
