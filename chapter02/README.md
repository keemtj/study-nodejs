<details>
<summary>λͺ©μ°¨</summary>

- π Chapter02. μμλμ΄μΌ ν  μλ°μ€ν¬λ¦½νΈ [π](#-chapter02-μμλμ΄μΌ-ν -μλ°μ€ν¬λ¦½νΈ)
  - π 2.1 ES2015+ [π](#-ES2015)
    - π 2.1.1 const, let [π](#-constμ-let)
    - π 2.1.2 ννλ¦Ώ λ¬Έμμ΄ [π](#-ννλ¦Ώ-λ¬Έμμ΄)
    - π 2.1.3 κ°μ²΄ λ¦¬ν°λ΄ [π](#-κ°μ²΄-λ¦¬ν°λ΄)
    - π 2.1.4 νμ΄ν ν¨μ [π](#-νμ΄ν-ν¨μ)
    - π 2.1.5 κ΅¬μ‘°λΆν΄ ν λΉ [π](#-κ΅¬μ‘°λΆν΄-ν λΉ)
    - π 2.1.6 ν΄λμ€ [π](#-ν΄λμ€)
    - π 2.1.7 νλ‘λ―Έμ€ [π](#-νλ‘λ―Έμ€)
    - π 2.1.8 async/await [π](#-asyncμ-await)
  - π 2.2 νλ°νΈμλ μλ°μ€ν¬λ¦½νΈ[π](#-νλ°νΈμλ-μλ°μ€ν¬λ¦½νΈ)
    - π 2.2.1 AJAX [π](#-AJAX)
    - π 2.2.2 FormData [π](#-FormData)
    - π 2.2.3 encodeURIComponentμ decodeURIComponent [π](#-encodeURIComponentμ-decodeURIComponent)
    - π 2.2.4 λ°μ΄ν° μμ±κ³Ό dataset [π](#-λ°μ΄ν°-μμ±κ³Ό-dataset)

</details>

## π Chpater02 μμλμ΄μΌ ν  μλ°μ€ν¬λ¦½νΈ

- λͺ¨λ μλ°μ€ν¬λ¦½νΈ νν λ¦¬μΌ: https://ko.javascript.info/

### π ES2015

- ES2015+ λ¬Έλ²

#### π constμ let

#### π ννλ¦Ώ λ¬Έμμ΄

#### π κ°μ²΄ λ¦¬ν°λ΄

#### π νμ΄ν ν¨μ

#### π κ΅¬μ‘°λΆν΄ ν λΉ

#### π ν΄λμ€

#### π νλ‘λ―Έμ€

#### π asyncμ await

### π νλ°νΈμλ μλ°μ€ν¬λ¦½νΈ

#### π AJAX

- AJAX(Asynchronous Javascript And XML)λ λΉλκΈ°μ  μΉ μλΉμ€λ₯Ό κ°λ°ν  λ μ¬μ©νλ κΈ°λ²μ΄λ€.
- μ΄λ¦μ XMLμ΄ λ€μ΄μμ§λ§ μμ¦μλ JSONμ λ§μ΄ μ¬μ©νλ€.
- νμ΄μ§ μ΄λ μμ΄ μλ²μ μμ²­μ λ³΄λ΄κ³  μλ΅μ λ°λ κΈ°μ μ΄λ€.
- νμ΄μ§ μ ν μμ΄ μλ‘μ΄ λ°μ΄ν°λ₯Ό λΆλ¬μ€λ μ¬μ΄νΈλ λλΆλΆ AJAX κΈ°μ μ μ¬μ©νκ³  μλ€κ³  λ³΄λ©΄ λλ€.
- λ³΄ν΅ AJAX μμ²­μ jQueryλ axios κ°μ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ΄μ©ν΄μ λ³΄λΈλ€.
- λΈλΌμ°μ μμ κΈ°λ³Έμ μΌλ‘ XMLHttpRequest κ°μ²΄λ₯Ό μ κ³΅νμ§λ§, μ¬μ© λ°©λ²μ΄ λ³΅μ‘νκ³  μλ²μμλ μ¬μ©ν  μ μκΈ°λλ¬Έμ μ λ°μ μΌλ‘ axiosλ₯Ό μ¬μ©νλ€.

#### π FormData

- HTML form νκ·Έμ λ°μ΄ν°λ₯Ό λμ μΌλ‘ μ μ΄ν  μ μλ κΈ°λ₯μ΄λ€.
- μ£Όλ‘ AJAXμ ν¨κ» μ¬μ©λλ€.
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

#### π encodeURIComponentμ decodeURIComponent

- AJAX μμ²­μ λ³΄λΌ λ `http://localhost:4000/search/νκΈ`μ²λΌ μ£Όμμ νκΈμ΄ λ€μ΄κ°λ κ²½μ° μλ² μ’λ₯μ λ°λΌ λ€λ₯΄μ§λ§ μλ²κ° νκΈ μ£Όμλ₯Ό μ΄ν΄νμ§ λͺ»νλ κ²½μ°κ° μλλ°, μ΄λ΄ λλ window κ°μ²΄μ λ©μλμΈ `encodeURIComponent` λ©μλλ₯Ό μ¬μ©νλ€.

```javascript
axios.get(`https://www.site.com/api/search/${encodeURLCOmponent("νκΈ")}`);
```

- λ°λ μͺ½μμλ `decodeURIComponent`λ₯Ό μ¬μ©νλ©΄ λλ€.

```javascript
decodeURIComponent("%ED%95%9C%EA%B8%80"); // νκΈ
```

#### π λ°μ΄ν° μμ±κ³Ό dataset

- νλ°νΈμλμ λ°μ΄ν°λ₯Ό λ΄λ €λ³΄λΌ λ μ²« λ²μ§Έλ‘ κ³ λ €ν΄μΌν  μ μ **λ³΄μ**μ΄λ€.
- μλ°μ€ν¬λ¦½νΈ λ³μμ μ μ₯ν΄λ λμ§λ§ HTML5μλ HTMLκ³Ό κ΄λ ¨λ λ°μ΄ν°λ₯Ό μ μ₯νλ κ³΅μμ μΈ λ°©λ²μ΄ λ°μ΄ν° μμ±(data attribute)μ΄λ€.

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
