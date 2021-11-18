<details>
<summary>목차</summary>

- 📗 Chapter02. 알아두어야 할 자바스크립트 [🔗](#-chapter02-알아두어야-할-자바스크립트)
  - 📖 2.1 ES2015+ [🔗](#-ES2015)
    - 🔖 2.1.1 const, let [🔗](#-const와-let)
    - 🔖 2.1.2 템플릿 문자열 [🔗](#-템플릿-문자열)
    - 🔖 2.1.3 객체 리터럴 [🔗](#-객체-리터럴)
    - 🔖 2.1.4 화살표 함수 [🔗](#-화살표-함수)
    - 🔖 2.1.5 구조분해 할당 [🔗](#-구조분해-할당)
    - 🔖 2.1.6 클래스 [🔗](#-클래스)
    - 🔖 2.1.7 프로미스 [🔗](#-프로미스)
    - 🔖 2.1.8 async/await [🔗](#-async와-await)
  - 📖 2.2 프런트엔드 자바스크립트[🔗](#-프런트엔드-자바스크립트)
    - 🔖 2.2.1 AJAX [🔗](#-AJAX)
    - 🔖 2.2.2 FormData [🔗](#-FormData)
    - 🔖 2.2.3 encodeURIComponent와 decodeURIComponent [🔗](#-encodeURIComponent와-decodeURIComponent)
    - 🔖 2.2.4 데이터 속성과 dataset [🔗](#-데이터-속성과-dataset)

</details>

## 📗 Chpater02 알아두어야 할 자바스크립트

- 모던 자바스크립트 튜토리얼: https://ko.javascript.info/

### 📖 ES2015

- ES2015+ 문법

#### 🔖 const와 let

#### 🔖 템플릿 문자열

#### 🔖 객체 리터럴

#### 🔖 화살표 함수

#### 🔖 구조분해 할당

#### 🔖 클래스

#### 🔖 프로미스

#### 🔖 async와 await

### 📖 프런트엔드 자바스크립트

#### 🔖 AJAX

- AJAX(Asynchronous Javascript And XML)는 비동기적 웹 서비스를 개발할 때 사용하는 기법이다.
- 이름에 XML이 들어있지만 요즘에는 JSON을 많이 사용한다.
- 페이지 이동 없이 서버에 요청을 보내고 응답을 받는 기술이다.
- 페이지 전환 없이 새로운 데이터를 불러오는 사이트는 대부분 AJAX 기술을 사용하고 있다고 보면 된다.
- 보통 AJAX 요청은 jQuery나 axios 같은 라이브러리를 이용해서 보낸다.
- 브라우저에서 기본적으로 XMLHttpRequest 객체를 제공하지만, 사용 방법이 복잡하고 서버에서는 사용할 수 없기때문에 전반적으로 axios를 사용한다.

#### 🔖 FormData

- HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능이다.
- 주로 AJAX와 함께 사용된다.
- Methods: `append`, `delete`, `entries`, `get`, `getAll`, `has`, `keys`, `set`, `values`
- https://developer.mozilla.org/ko/docs/Web/API/FormData/FormData

```javascript
const formData = new FormData();
formData.append("name", "keem");
formData.append("item", "orange");
formData.append("item", "melon");
formData.has("item"); // true
formData.has("money"); // false
formData.get("item"); // orange
formData.getAll("item"); // ['orange', 'melon']
formData.append("test", ["hi", "jay"]);
formData.get("test"); // hi, jay
formData.delete("test");
formData.get("test"); // null
formData.set("item", "apple");
formData.getAll("item"); // ['apple']
```

#### 🔖 encodeURIComponent와 decodeURIComponent

- AJAX 요청을 보낼 때 `http://localhost:4000/search/한글`처럼 주소에 한글이 들어가는 경우 서버 종류에 따라 다르지만 서버가 한글 주소를 이해하지 못하는 경우가 있는데, 이럴 때는 window 객체의 메서드인 `encodeURIComponent` 메서드를 사용한다.

```javascript
axios.get(`https://www.site.com/api/search/${encodeURLCOmponent("한글")}`);
```

- 받는 쪽에서는 `decodeURIComponent`를 사용하면 된다.

```javascript
decodeURIComponent("%ED%95%9C%EA%B8%80"); // 한글
```

#### 🔖 데이터 속성과 dataset

- 프런트엔드에 데이터를 내려보낼 때 첫 번째로 고려해야할 점은 **보안**이다.
- 자바스크립트 변수에 저장해도 되지만 HTML5에도 HTML과 관련된 데이터를 저장하는 공식적인 방법이 데이터 속성(data attribute)이다.

```html
<ul>
  <li data-id="1" data-user-job="programmer">Joey</li>
  <li data-id="2" data-user-job="designer">Rachel</li>
  <li data-id="3" data-user-job="programmer">Ross</li>
  <li data-id="4" data-user-job="ceo">Monica</li>
</ul>
<script>
  console.log(document.querySelector("li").dataset);
  // { id: '1', userJob: 'programmer' }
</script>
```
