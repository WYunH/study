# 객체 리터럴 object literal

자바스크립트는 객체 기반의 프로그래밍 언어 
- 원시값을 제외한 나머지 값(함수, 배열, 정규 표현식등)은 모두 객체
- 다양한 타입의 값(원시 값이나 다른 객체)을 하나의 단위로 구성한 자료구조
- 객체는 변경 가능한 값
- 객체는 0개 이상의 프로퍼티로 구성된 집합
- 프로퍼티는 `key : value`로 구성
- 사용할 수 있는 모든 값은 객체의 `value`가 될 수 있다

⭐ 프로퍼티와 메소드 property, method

- 프로퍼티 : 객체의 상태를 나타내는 데이터 값
- 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작. 객체 프로퍼티의 값이 함수인 것

```js
const obj = {
	num: 0,  // 프로퍼티
  increase: function () { ... }  // 메소드
}
```

## 객체 생성 방법

1. 객체 리터럴
2. object 생성자 함수
3. 생성자 함수
4. Object.create 메소드
5. 클래스(ES6)

<br>

### 객체 리터럴을 사용한 객체 생성

- `{}` 내에 0개 이상의 프로퍼티 정의
- 변수에 할당되는 시점에 자바스크립트 엔진이 객체 리터럴 해석해 객체 생성
- 객체 리터럴은 값으로 평가되는 표현식이다

```js
const person = {
  name: "won",
  sayHello: function () {
    console.log(`Hello. My name is ${this.name}`);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'won', sayHello: [Function: sayHello] }
```

<br>
<br>

### 프로퍼티

- 키와 값으로 구성
- 프로퍼티 키(key) : `''`(빈 문자열)을 포함하는 모든 문자열 또는 심볼 값
- 프로퍼티 값(value) : 자바스크립트에서 사용할 수 있는 모든 값
- key는 value에 접근할 수 있는 식별자 역할을 한다
- 프로퍼티에 문자열이나 심벌 값 외의 값을 사용 시 암묵적 타입 변환을 통해 문자열이 된다

```js
const num = {
  0: 1,
  '1': 2,
  2: '3',
};

//키 값은 문자열로 암묵적 타입 변환
console.log(num); // { '0': 1, '1': 2, '2': '3' } 
```

<br>

- 이미 존재하는 프로퍼티 키 중복 선언 시 나중에 선언한 프로퍼티가 값을 덮어쓴다

```js
const obj = {
  name: "W",
  name: "won",
};

console.log(obj); // { name: 'won' }
```

<br>
<br>

### 메소드

- 프로퍼티 값이 함수인 것
- 일반 함수와의 구분을 위해 메소드라 한다

```js
var person = {
  // 프로퍼티
  name: "won",

  // 메소드
  sayHello: function () {
    console.log(`Hello. My name is ${this.name}`);
  },
};

person.sayHello(); // Hello My name is won
```

<br>
<br>

### 프로퍼티 접근 방법

1. `.` : 마침표 표기법
2. `[]` : 대괄호 표기법

```js
const person = {
  name: "won",
};

// 마침표 표기법
console.log(person.name); // "won" 
// 대괄호 표기법
console.log(person["name"]); // "won" 

// []내 ''(문자열)로 감싸지 않은 이름을 프로퍼티 키로 사용하면 자바스크립트 엔진이 식별자로 해석
console.log(person[name]); // ReferenceError: name is not defined

// 객체에 존재하지 않는 프로퍼티에 접근 시 undefined
console.log(person.age); // undefined
```

<br>
<br>

### 프로퍼티 동적 생성, 삭제

```js
const person = {
  name: "won",
};

// 프로퍼티 동적 생성
person.age = 1; 
console.log(person); // { name: 'won', age: 1 }

// age 프로퍼티 삭제
delete person.age; 

// 객체 내 존재하지 않는 address 프로퍼티 키 삭제
delete person.address;  // 에러 발생하지 않는다

console.log(person); // { name: 'won' }
```

<br>
<br>

## ES6에서 추가된 객체 리터럴 확장 기능

### 프로퍼티 축약 표현

- 프로퍼티 값은 변수에 할당된 값(식별자 표현식)일 수 있다
- 변수 이름과 프로퍼티 키가 같으면 생략할 수 있다

```js
const a = 1, b = 2;

//프로퍼티 축약
const obj = { a, b }; 

console.log(obj); // {a: 1, b: 2}
```

### 계산된 프로퍼티 이름

- `[]`안에 문자열이나 문자열로 타입 변환 가능한 표현식을 넣어 프로퍼티 키를 동적 생성할 수 있다

```js
const prefix = "prop";
let i = 0;

const obj = {};

// []안 표현식을 넣어 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }


// 객체 리터럴 내부에서 []안 표현식으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }
```

<br>

### 메소드 축약 표현

- 메소드 정의시 프로퍼티 값으로 함수를 할당한다
- `function` 키워드 생략한 축약 표현이 가능하다(축약 표현으로 정의 시 동작 방식이 다르니 이후 메소드 장 참고)


```js
const obj = {
  name: "won",

  // 프로퍼티 값으로 함수 할당
  sayHi: function () {
    console.log(`Hi! ${this.name}`);
  },
    sayHello() {
    console.log(`Hello! ${this.name}`);
  },
};

obj.sayHi(); // Hi! won
obj.sayHello(); // Hello! won
```
