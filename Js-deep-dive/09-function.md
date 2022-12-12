# 함수 function

- 일련의 과정을 문으로 구현하고 코드 블록으로 감싸 하나의 실행 단위로 정의한 것
- 객체 타입의 값이다
- 함수는 일급 객체이며, 함수 객체를 가리키는 식별자로 호출할 수 있다

  ▶️ 변수에 할당하거나, 프로퍼티 값과 배열의 요소로 사용할 수 있다

⭐ 일급 객체 : 값의 성질을 갖는 객체

⭐ 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다. 함수 몸체 외부에서는 함수 이름으로 함수를 호출할 수 없다

## 함수 사용의 이유

1. 코드의 재사용: 동일한 작업을 반복 수행하는 코드는 함수로 만들어 사용 시 효율적
2. 유지보수 편의성과 코드의 신뢰성: 코드의 중복 수정에 걸리는 시간, 사람의 실수 등을 억제해 재사용성을 높인다
3. 코드의 가독성: 적절한 함수 이름은 내부 코드를 이해하지 않고도 역할을 파악할 수 있게 돕고 코드의 가독성을 향상시킨다

<br />

```js
// 변수에 함수 리터럴 할당
const f = function add(x, y) {
  return x + y;
};
```

⭐ 리터럴 literal : 문자나 약속된 기호를 사용해 값을 생성하는 표기 방식

<br />

## 함수 정의

- 함수 호출 전 인수를 전달받을 매개변수와 실행문, 반환 값을 지정하는 것
- 정의된 함수는 자바스크립트 엔진에 의해 평가되어 함수 객체가 된다
- 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수명과 동일한 이름의 식별자를 암묵적으로 생성 후 함수 객체를 할당한다

1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수

### 1. 함수 선언문

```js
function add(x, y) {
  return x + y;
}
```

- 함수명은 생략할 수 없다
- 표현식이 아닌 문으로, 변수에 할당할 수 없다
- 자바스크립트 엔진은 함수 선언문을 함수 표현식으로 변환해 함수 객체를 생성한다
- 함수 선언문으로 정의 시 런타임 이전에 함수 객체가 먼저 생성된다
  ▶️ 함수 호이스팅 현상 발생


⭐ 함수 호이스팅

함수 선언문으로 정의한 함수를 선언문 이전에 호출이 가능한 것



의사 코드
```js
const add = function add(x, y) {
  return x + y;
}
```



### 2. 함수 표현식

```js
const add = function (x, y) {
  return x + y;
};
```

- 함수 리터럴로 생성한 함수객체를 변수에 할당하는 정의 방식
- 함수 리터럴에서는 함수명을 생략하는 것이 일반적이다(익명 함수)
- 표현식인 문으로, 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다
- 함수 표현식의 함수 리터럴은 할당문이 실행되는 시점에 평가되어 함수 객체가 된다(함수 표현식으로 정의한 함수는 변수 호이스팅 발생)



⭐ 함수 선언문과 함수 리터럴 표현식은 함수의 호출에서 차이가 있다

```js
// 함수 선언문
function foo() {
  console.log("foo"); // foo
}
foo();

// 함수 리터럴 표현식
(function bar() {
  console.log("bar"); // ReferenceError: bar is not defined
});
bar();
```

### 3. Function 생성자 함수

```js
const add = new Function("x", "y", "return x + y");
```

- 빌트인 함수 `Function`생성자 함수에 매개변수 목록, 함수 몸체를 문자열로 전달하면서 `new`연산자와 호출


⭐ 생성자 함수 : 객체를 생성하는 함수


### 4. 화살표 함수(ES6)

```js
const add = (x, y) => x + y;
```

- `=>`를 사용해 간략하게 선언(익명 함수)
- 선언할 때 `this`에 바인딩할 객체가 정적으로 결정(일반 함수는 동적 결정)되며, 언제나 상위 스코프의 `this`를 가리킨다
 
⭐ 화살표 함수 사용 주의

1. 메소드 정의
2. 생성자 함수로 생성(생성 불가)
3. `addEventListener()`의 콜백 함수로 사용


<br />

## 코드 문맥에 따른 자바스크립트 엔진의 함수 해석

- 자바스크립트 엔진은 코드의 문맥에 따라 동일한 함수 리터럴을 함수 표현식이나 함수 선언문으로 해석하는 경우가 있다
- 함수 리터럴이 단독 사용 시 함수 선언문으로 해석한다
- 함수 리터럴이 값으로 평가되어야 하는(변수에 할당, 피연산자로 사용 등) 경우, 함수 리터럴 표현식으로 해석한다



## 함수 호출 

### 매개변수와 인수 parameter, argument

1. 매개변수

- 함수 안에 전달되는 데이터 이름(변수) 
- 함수 선언 시 사용(함수 안에서 사용할 변수를 정하는 것)
- 함수 내에서 변수와 동일하게 메모리 공간을 확보한다

2. 인수

- 함수를 호출할 때 매개변수에 전달되는 값(함수로 전달하는 외부 데이터 값)
- 함수 호출 시 사용 
- 함수에 전달한 인수는 매개변수에 할당된다


```js
function add(x, y) {
  console.log(x, y); // 1 2
  return x + y;
}

add(1, 2);
console.log(x, y); // ReferenceError: x is not defined
```

▶️ 매개변수는 함수 몸체 내부에서만 참조할 수 있다(매개변수의 유효 범위는 함수 내부다)


```js
// 인수가 매개변수 개수보다 적은 경우
function rest(x, y) {
  // 남은 매개변수들은 undefined로 초기화
  console.log(x, y); // 1 undefined
}
rest(1);

// 인수가 매개변수 개수보다 많은 경우
function arg(x, y) {
  // 남은 인수들은 arguments 객체에 보관
  console.log(arguments); // [Arguments] { '0': 3, '1': 2, '2': 1 }
  return x - y;
}
arg(3, 2, 1); // 1
```

- 함수 호출 시 매개변수에 인수를 전달하지 않으면 매개변수의 값은 `undefined`가 된다
- 매개변수와 인수의 개수는 일치하지 않아도 된다

▶️ 인수가 매개변수보다 부족한 경우, 나머지 매개변수는 암묵적으로 `undefined` 

▶️ 인수가 매개변수보다 많은 경우 모든 인수는 암묵적으로 `arguments` 객체에 프로퍼티로 보관


⭐ 함수 사용 시 나올 수 있는 에러들 예방하기

  1. `typeof`로 인수 개수, 타입 확인 
  2. 단축 평가
  3. 매개변수에 기본값 할당
  4. Typescript 사용

```js
// 1. typeof로 인수 개수, 타입 확인
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자여야 합니다");
  }

  return x + y;
}
console.log(add(1, 2)); // 3
console.log(add(2)); // TypeError: 인수는 모두 숫자여야 합니다
console.log(add("a", "b")); // TypeError: 인수는 모두 숫자여야 합니다

// 2. 단축 평가로 매개변수에 기본값 설정
function mul(a, b) {
  a = a || 1;
  b = b || 1;

  return a * b;
}
console.log(mul(2, 3)); // 6
console.log(mul(1, 2)); // 2
console.log(mul(1)); // 1
console.log(mul()); // 1

// 3. 매개변수 기본값 할당
function sub(a = 0, b = 0) {
  return a - b;
}
console.log(sub(10, 9)); // 1
console.log(sub(10)); // 10
console.log(sub()); // 0
```


### 반환문

- `return`과 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다
- 함수 몸체 내부에서만 사용할 수 있다
- 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다(반환문 이후의 문은 무시)
- `return` 뒤에 오는 표현식을 평가해 반환한다
- 반환문 생략 시 암묵적으로 `undefined`가 반환된다


## 값에 의한 호출 / 참조에 의한 호출

### 값에 의한 호출

- 함수 호출시 매개변수에 원시 값 전달
- 원시 값은 변경 불가능한 값이므로, 값이 복사되어 매개변수에 전달된다
- 재할당으로 값을 변경해도 원본은 훼손되지 않는다

<br />

### 참조에 의한 호출

- 함수 호출시 매개변수에 객체 전달
- 객체는 변경 가능한 값이므로, 객체의 참조 값이 매개변수로 저장되어 전달된다
- 참조 값으로 전달한 객체를 변경 시 원본이 훼손된다


```js
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "won";
}

// 원시 값
const num = 100;
// 객체 값
const person = { name: "WON" }; 

console.log(num); // 100
console.log(person); // { name: 'WON' }

changeVal(num, person);

console.log(num); // 100
console.log(person); // { name: 'won' } 
```

<img src="https://poiemaweb.com/img/call-by-val&ref.png" width="400" />

[참조에 의한 호출](https://poiemaweb.com/js-function)

▶️ 깊은 복사나 순수함수를 사용해 안정성을 높일 수 있다

<br />
<br />

## 즉시 실행 함수 IIFE, Immediately Invoked Function Expression

- 함수 정의와 동시에 즉시 호출되는 함수
- 반드시 `()`로 감싸야 한다
- 익명 함수를 사용하는 것이 일반적
- 최초 한번만 호출되며 다시 호출할 수 없다

  ```js
  (function () {
    // 명령
  })();
  ```

## 재귀 함수 recursive function

- 자기 자신을 호출하는 함수
- 반복 처리를 위해 사용
- 대부분 `for`나 `while`문으로 구현 가능하다
- 호출을 멈출 수 있는 탈출 조건이 필요하다


```js
// 피보나치 수열(0과 1로 시작, 다음 수가 바로 앞 두 수의 합이 되는 것)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ...
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
```

## 중첩 함수 nested function

- 내부 함수(inner function)
- 함수 내부에 정의된 함수
- 외부 함수 내부에서만 호출할 수 있다
- 자신을 포함하는 외부 함수를 돕는 헬퍼 함수 역할

```js
function outer() {
  const x = 1;

  // 중첩 함수(내부 함수)
  function inner() {
    const y = 2;

    // 외부 함수 변수 x, 내부 함수 변수 y 참조
    console.log(x + y); // 3
  }

  inner();
}

outer();
```

## 콜백 함수 callback function

- 특정 이벤트 발생 시 시스템에 의해 호출되는 함수
- 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
- 고차 함수에 의해 호출된다
- 주로 비동기식 처리 모델에 사용

⭐ 고차 함수 HOF, Higher-Order Function

매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수. 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수 

고차 함수는 콜백 함수를 자신의 일부분으로 합성하며, 필요에 따라 콜백 함수에 인수를 전달하므로 고차함수에 콜백함수 전달 시 함수 자체를 전달하게 된다


⭐ 비동기식 처리 모델 Asynchronous processing model

호출될 함수(콜백함수)를 미리 매개변수에 전달 후 처리가 종료될 때 함수를 호출하는 것(콜백 함수는 콜백 큐에 들어가 있다가 해당 이벤트가 발생하면 호출된다)


```js
function doSomething() {
  const name = 'Won';

  setTimeout(function () {
    console.log('My name is ' + name);
  }, 100);
}

doSomething(); // My name is Won
```