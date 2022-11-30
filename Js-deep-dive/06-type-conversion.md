# 타입 변환 type conversion

- 데이터 타입을 다른 타입으로 바꾸는 것
- 자바스크립트에서는 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것 
- 개발자에 의한 의도적 변환(명시적 타입 변환, 타입 캐스팅), 자바스크립트 엔진에 의한 암묵적 변환(암묵적 타입 변환, 타입 강제 변환)이 있다

## 암묵적 타입 변환 implicit coercion / 타입 강제 변환 type coercion

- 자바스크립트 엔진이 문자열, 숫자, 불리언 같은 원시 타입 중 하나로 타입을 바꾼다
- 암묵적 타입변환은 변수에 재할당되지 않는다(엔진이 한 번 사용후 버린다)

### 문자열 타입으로 변환

```js
NaN + '';             // "NaN"
Infinity + ''         // "Infinity"

null + '';            // "null"

undefined + '';       // "undefined"

(Symbol()) + '';      // TypeError: Cannot convert a Symbol value to a string

({}) + '';            // "[object Object]"
Math + '';            // "[object Math]"
[] + '';              // ""
[10, 20] + '';        // "10,20"
(function(){}) + '';  // "function(){}"
Array + '';           // "function Array() { [native code] }"
```

### 숫자 타입으로 변환


- `''`(빈 문자열), `[]`(빈 배열), `null`, `false`는 0으로 변환
- `true`는 1로 변환
- 객체, 값이 있는 배열, `undefined`는 변환되지 않고 `NaN`이 된다

```js
+""; // 0
+"0"; // 0
+"1"; // 1
+"string" + // NaN
+true; // 1
+false; // 0

+null; // 0

+undefined; // NaN

+Symbol(); // TypeError: Cannot convert a Symbol value to a number

+{}; // NaN
+[]; // 0
+[10, 20]; // NaN
+function () {}; // NaN
```

### 불리언 타입으로 변환

- 자바스크립트 엔진은 불리언 타입이 아닌 값을 `Truthy`(참으로 평가되는 값), `Falsy`(거짓으로 평가되는 값)로 구분한다
- `Falsy`를 제외한 모든 값은 `Truthy`다

⭐ 자바스크립트 엔진이 `Falsy`로 판단하는 값

```js
false
undefined
null
0, -0
NaN
''(빈 문자열)
```

## 명시적 타입 변환 / 타입 캐스팅

- 개발자에 의한 의도적 타입 변경

⭐ 타입 변경 방법

1. 표준 빌트인 생성자 함수(`String`, `Number` 등)을 `new` 키워드 없이 호출
2. 빌트인 객체의 메소드 사용
3. 암묵적 타입변환 이용


### 문자열 타입으로 변환

1. `String` 생성자 함수를 `new` 키워드 없이 호출
2. `Object.prototype.toString` 메소드 사용
3. 문자열 연결 연산자 이용

```js
// 1. String 생성자 함수를 new 키워드 없이 호출
String(1);              // "1"
String(NaN);            // "NaN"
String(Infinity);       // "Infinity"

String(true);           // "true"
String(false);          // "false"

// 2. Object.prototype.toString 메소드 사용
(1).toString();         // "1"
(NaN).toString();       // "NaN";
(Infinity).toString();  // "Infinity"

(true).toString();      // "true"
(false).toString();     // "false"

// 3. 문자열 연결 연산자 이용
1 + '';                 // "1"
```

### 숫자 타입으로 변환

1. `Number` 생성자 함수 `new` 키워드 없이 호출
2. `parseInt`, `parseFloat` 함수 사용(문자열만 숫자 타입으로 변환 가능)
3. 산술 연산자 사용

```js
// 1. Number 생성자 함수 new 키워드 없이 호출
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53

Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수 사용
parseInt("0"); // 0
parseInt("-1"); // -1
parseInt("10.53"); // 10
parseFloat("10.53"); // 10.53

// 산술 연산자 사용
+"0"; // 0
```

### 불리언 타입으로 변환

1. `Boolean` 생성자 함수 `new` 키워드 없이 호출
2. `!`(부정 논리 연산자 두 번 사용)

```js
// 1. Boolean 생성자 함수 new 키워드 없이 호출
Boolean('x');       // true
Boolean('');        // false
Boolean('false');   // true

Boolean(0);         // false
Boolean(1);         // true
Boolean(NaN);       // false
Boolean(Infinity);  // true

Boolean(null);      // false

Boolean(undefined); // false

Boolean({});        // true
Boolean([]);        // true

// 2. !(부정 논리 연산자 두 번 사용)
!!'x';  // true 
!!null; // false
```

## 단축 평가

- 논리 연산의 결과를 결정하는 피연산자를 타입 변환없이 그대로 반환하는 것
- 표현식 평가 과정에서 결과가 확정된 경우 뒤의 나머지 평과 과정을 생략하는 것

### 논리 연산자를 사용한 단축 평가

|단축 평가 표현식|	평가 결과|
|------|-----|
|true ll anything |	true|
|false ll anything	| anything|
|true && anything	 | anything|
|false && anything |	false|


1. 논리곱 `&&`
- 두 개의 피연산자 모두 `true`로 평가될 때 `true` 반환
- 두 번째 피연산자가 결과를 결정 후 값으로 반환


2. 논리합 `||`
- 두 개의 피연산 중 하나만 `true`여도 `true` 반환
- 첫 번째 피연산자가 결과를 결정 후 `true`인 값 그대로 반환 


```js
"Cat" && "Dog"; // Dog
"Cat" || "Dog"; // Cat
```

⭐ 논리 연산자로 단축평가 시 `if`문을 대체할 수 있다 

```js
let done = true;
let message = "";

// if문으로 값 할당
if (done) message = "완료";

// && 사용 
meessage = done && "완료";


// if문으로 값 할당 
if (!done) message = "미완료";

// || 사용 
meessage = done || "미완료";


// if else문으로 값 할당
if (done) message = "완료";
else message = "미완료";

// 삼항 연산자 사용
message = done ? "완료" : "미완료";
```

#### 사용 패턴 

1. 객체를 기대하는 변수 `null`, `undefined` 확인 후 프로퍼티 참조

▶️ 객체 참조시 값이 `null`이나 `undefined`면 TypeError 발생, 단축평가 사용으로 에러 방지

```js
let elem = null;

// elem이 null, undefined같은 Falsy값이면 elem으로 평가
// elem이 Truthy값이면 elem.value로 평가
let elem = elem && elem.value; // null
```

2. 함수 매개변수에 기본값 설정 시

▶️ 함수 호출 시 인수 전달이 없으면 매개변수에 `undefined`가 할당되므로, 단축평가 사용으로 에러 방지

```js
function getStringLength(str) {
  str = str || "";
  return str.length;
}
getStringLength(); // 0
getStringLength('ab'); // 2
```

### 옵셔널 체이닝 연산자 `?.`

- 좌항 피연산자가 `null`이나 `undefined`면 `undefined` 반환, 아니라면 우항 프로퍼티 참조
- 객체를 기대하는 변수가 `null`이나 `undefined`인지 확인 후 프로퍼티 참조할 때 유용
- `?.` 도입 이전에는 논리곱 `&&`을 사용한 단축 평가로 변수의 `null`이나 `undefined`여부를 확인했다


```js
let elem = null;
const value = elem?.value; // undefined
```


⭐ 논리곱 `&&` vs 옵셔널 체이닝 `?.`

- `&&`는 좌항 피연산자가 `Falsy`면 좌항 피연산자 반환 (단, 0, `''`은 객체로 평가될 때도 있다)
- `?.`는 좌항 피연산자가 `Falsy`여도 `null`이나 `undefined`만 아니면 우항의 프로퍼티 참조

```js
let str = ""; //
const leng = str && str.length; // ''
const length = str?.length; // 0
```

### null 병합 연산자 `??`

- 좌항의 피연산자가 `null`나 `undefined`면 우항의 피연산자 반환, 아니라면 좌항의 프로퍼티 참조
- 변수에 기본값을 설정할 때 유용하다
- `??`도입 이전에는 `||`을 사용해 변수에 기본값을 설정했다

```js
const foo = null ?? "default string"; // "default string"
```

⭐ 논리합 `||` vs `null` 병합 `??`

- `||`는 좌항의 피연산자가 `Falsy`면 우항의 피연산자 반환 (단, 0 이나 ''은 기본값으로서 유효하다면 의도치 않은 동작이 발생할 수 있다)
- `??`는 좌항의 피연산자가 `Falsy`라도 `null`이나 `undefined`가 아니면 좌항의 피연산자를 그대로 반환

```js
let a = "" || "default string"; // "default string"

let b = "" ?? "default string"; // ''
```