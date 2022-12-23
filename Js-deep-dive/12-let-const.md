# `let`, `const`와 블록 레벨 스코프

## `var`의 문제점

### 1. 변수 중복 선언 허용

- `var`로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다
- `var`로 선언한 변수를 중복 선언 시 초기화문 유무에 따라 다르게 동작한다
  1. 초기화문 있는 변수 선언문 ▶️ `var`가 없는 것처럼 동작
  2. 초기화문 없는 변수 선언문 ▶️ 암묵적 무시

```js
// 변수 선언과 초기화
var x = 1; 
var y = 1; 

// 초기화문 있는 변수 선언문 = var로 먼저 선언된 x가 없던 것처럼 동작
var x = 100;
// 초기화문 없는 변수 선언문 = 암묵적 무시  
var y; 

console.log(x); // 100
console.log(y); // 1
```

### 2. 함수 레벨 스코프

- `var`로 선언한 변수는 함수 레벨 스코프만 지역 스코프로 인정한다(코드 블록 내에서 선언 시 전역 변수가 된다)
- 전역 변수가 많아지면 의도치 않은 중복 선언 문제가 발생한다


```js
var x = 1;

// 코드블록 
{
  // 변수 x는 전역 변수로 적용(중복선언, 재할당)
  var x = 10;
}

console.log(x); // 10
```

### 3. 변수 호이스팅

- 변수 호이스팅은 가독성을 떨어뜨리고 오류 발생의 여지를 준다

<br />
<br />

## `let`

### 1. 변수 중복 선언 금지

- `let`으로 같은 이름의 변수를 중복 선언 시 문법 에러 발생
- 선언 단계, 초기화 단계가 분리되어 진행(`var`는 선언, 초기화 시점 모두 런타임 이전 실행)
  - 선언 단계 : 런타임 이전에 실행
  - 초기화 단계 : 변수 선언문에 도달했을 때 실행

```js
// var는 중복 선언 허용
var foo = 123;
var foo = 456;
console.log(foo);

// let은 중복 선언 불가
let bar = 123;
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
console.log(bar);
```


### 2. 블록 레벨 스코프

- `let`은 블록 레벨 스코프를 따른다
- `let`으로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다(window 객체에 접근 불가)
  
  ▶️ `let` 변수는 전역 렉시컬 환경의 선언적 환경 레코드에 존재하기 때문(실행 컨텍스트)

```js
let foo = 1;

// 코드 블록
{
  let foo = 2;
  let bar = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
```

⭐ 전역 객체 

- `var`로 선언한 전역 변수와 지역 변수, 암묵적 전역 변수들이 window(전역 객체)의 프로퍼티가 되는 것
- 전역 객체의 프로퍼티인 `window`는 생략 가능
- 전역 객체는 브라우저 환경 내에서 참조 가능

```js
// 브라우저 환경 가정
let x = 1;

// let, const으로 선언한 전역 변수는 window의 프로퍼티가 될 수 없다
console.log(window.x); // undefined
console.log(x); // 1
```

### 3. 변수 호이스팅

- `let`으로 선언한 변수를 선언문 이전에 참조하면 참조 에러 발생

```js
// var
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1

// let 
// 일시적 사각지대(TDZ)
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization 

let foo; // 변수 선언문에서 초기화 단계 실행
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계 실행
console.log(foo); // 1
```

⭐ 일시적 사각지대(TDZ) Temporal Dead Zone : 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간

<br />
<br />

## `const`

- 보통 상수를 선언하기 위해 사용
- `let`과 비슷한 점이 많다

<br />

### 1. 선언과 동시에 초기화

- `const`로 변수 선언 시 반드시 초기화가 필요하다

```js
const foo;  // SyntaxError: Missing initializer in const declaration
```

### 2. 재할당 금지

- 재할당이 금지된다

```js
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```

### 3. 상수

- 상수도 변수 개념이므로 메모리 공간과 값을 가지지만, 재할당이 금지된다
- `const`로 선언한 변수에 할당된 원시 값은 변경할 수 없다(원시 값은 변경 불가능한 값이므로 재할당 없이 변경할 수 없다)
- 상태 유지와 가독성, 유지보수의 편의를 위해 사용이 권장된다
- 일반적으로 이름을 대문자로 선언하며, 여러 단어로 이뤄진 경우 `_`로 구분하면서 스네이크 케이스로 표현한다

```js
// 변수 이름으로 인해 코드의 가독성 증가
const TAX_RATE = 0.1;

let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice); // 110
```

### 4. `const`와 객체

- 객체 타입의 값을 `const`로 선언해도 값을 변경할 수 있다(객체 타입은 참조타입으로 재할당 없이도 직접 값 변경 가능)
- 새로운 값의 재할당은 금지되나 프로퍼티 동적 생성, 삭제, 프로퍼티 값 변경을 통한 객체의 변경은 가능하다(객체가 변경되어도 변수에 할당된 참조 값은 변경되지 않는다)
  - `const`는 재할당을 금지할 뿐 불변을 의미하지는 않는다

```js
const person = {
  name: "won",
};

// 객체는 재할당 없이 변경 가능
person.name = "WON";
console.log(person.name); // { name: "WON" };
```