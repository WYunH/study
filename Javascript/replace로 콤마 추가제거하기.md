# String의 replace()를 이용해 콤마(,) 추가/제거하기

- 데이터 타입이 문자인 경우 String객체의 `replace` 메소드를 이용하면 원하는 글자를 추가,수정,제거 할 수 있다

```js
변수명.replace("변경 대상", "변경하려는 문자")
```

⭐ `replace`로 `,` 추가, 제거하기

```js 
  const test = "12,345,678"

  // 앞의 1개만 변경
  const removeComma = test.replace(",","");
  console.log(removeComma) // 12345,678

  // 원하는 문자의 전부 변경
  const removeCommaAll = test.replace(/,/g,"");
  console.log(removeCommaAll) // 12345678
```
▶️ 문자 데이터로 되어있는 숫자값에 `,`를 추가, 제거할 수 있어 단위 표시에 유용하다

