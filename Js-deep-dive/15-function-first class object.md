# 일급 객체

- 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체
- 함수에 인자로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원할 때 일급 객체라고 한다 

자바스크립트에서는 아래 조건을 만족하는 객체를 일급 객체라 한다

1. 무명의 리터럴로 생성 가능한 객체(런타임에 생성 가능한 객체)
2. 변수나 자료구조(객체, 배열 등)에 저장 가능한 객체
3. 함수의 매개변수에 전달 가능한 객체
4. 함수의 반환값으로 사용할 수 있는 객체

▶️ 함수는 모든 조건을 만족하므로 일급 객체다


⭐ 함수가 일급 객체로서 가지는 장점

- 일반 객체처럼 함수를 값으로 다른 함수의 매개변수에 전달할 수 있다
- 함수의 반환값으로 함수를 사용할 수 있다

<br />
<br />

## 함수 객체의 프로퍼티

- 함수도 객체이므로 프로퍼티를 가진다

<br />

### arguments 프로퍼티

- 함수 호출 시 전달된 인수(argument)들의 정보를 담은 유사 배열 객체(순회 가능)
- 함수 내부에서 지역 변수처럼 사용할 수 있는 `arguments` 객체 참조


⭐ 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다

▶️ 매개변수가 함수 호출 시 함수 몸체 내에서 암묵적으로 선언 후 `undefined`로 초기화 되고 인수가 할당되기 때문

- 매개변수보다 인수가 많이 전달되면 `arguments` 객체의 프로퍼티에 보관하게 되며 인수의 개수를 확인할 수 있는 `length` 프로퍼티를 지원한다
- `arguments` 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수 구현에서 유용하다

```js
function multiply(x, y) {
  console.log(arguments);
  console.log(`length : ${arguments.length}`);
  return x + y;
}

console.log(multiply());
/*
[Arguments] {}
length : 0
NaN
*/

console.log(multiply(1));
/*
[Arguments] { '0': 1 }
length : 1
NaN
*/

console.log(multiply(1, 2));
/*
[Arguments] { '0': 1, '1': 2 }
length : 2
3
*/

console.log(multiply(1, 2, 3, 4, 5));
/*
[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
length : 5
3 
*/
```

- `arguments` 객체는 유사 배열 객체이다(배열은 아니다)
- 배열 메소드 사용 시 에러가 발생하므로 ES6부터 도입된 Rest 파라미터를 통해 배열 메소드를 적용한다


```js
// ES6 Rest Parameter
// argument객체를 실제 배열처럼 사용 가능
function sum(...args) {
  console.log(args, Array.isArray(args));
  return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum());
/*
[] true
0
*/

console.log(sum(1, 2));
/*
[ 1, 2 ] true
3
*/

console.log(sum(1, 2, 3, 4, 5));
/*
[ 1, 2, 3, 4, 5 ] true
15
*/
```

<br />

### length 프로퍼티

- 함수를 정의할 때 선언한 매개변수의 개수
- `argument` 객체의 `length`는 인수의 개수, 함수 객체의 `length`는 매개변수의 개수이다(`arguments`의 `length`프로퍼티는 함수 객체의 `length` 프로퍼티와 다르다)


```js
function add(x, y) {
  console.log(`add 함수 객체의 length : ${add.length}, arguments 객체의 length : ${arguments.length}`);
  return x + y;
}

console.log(add());
/*
add 함수 객체의 length : 2, arguments 객체의 length : 0
NaN
*/
console.log(add(1, 2));
/*
add 함수 객체의 length : 2, arguments 객체의 length : 2
3
*/
console.log(add(1, 2, 3, 4, 5));
/*
add 함수 객체의 length : 2, arguments 객체의 length : 5
3
*/
```

<br />

### name 프로퍼티

- 함수 이름을 나타낸다
- 익명 함수의 경우 ES5에서는 `''`, ES6에서는 함수 객체를 가리키는 식별자를 나타내게 된다

```js
// 함수 객체 name 프로퍼티 - 기명 함수 표현식
const namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 함수 객체 name 프로퍼티 - 무명 함수 표현식
// ES5 : 빈 문자열('')
// ES6 : 함수 객체를 가리키는 식별자
const anonymousFunc = function () {};
console.log(anonymousFunc.name); // anonymousFunc

function bar() {}
console.log(bar.name); // bar
```

<br />

### `__proto__` 접근자 프로퍼티

- 모든 객체는 내부 슬롯 `[[Prototype]]`을 가진다
- `[[Prototype]]` 내부 슬롯은 `Prototype` 객체를 가리킨다
- `__proto__` 프로퍼티는 `[[Prototype]]` 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다(프로퍼티에 직접 접근할 수는 없고, 간접적인 방법으로 프로토타입에 접근 가능)

```js
const obj = { a: 1 };

// 리터럴 형태로 생성한 객체의 프로토타입 객체는 Object.prototype
console.log(obj.__proto__ === Object.prototype); // true  

// obj 객체에 있는 a 프로퍼티 확인
console.log(obj.hasOwnProperty("a")); // true  

// __proto__ 접근자 프로퍼티는 직접 접근이 불가능하다
console.log(obj.hasOwnProperty("__proto__")); // false 
```

<br />

### prototype 프로퍼티

- 생성자 함수로 호출할 수 있는 함수 객체
- `constructor`만 소유하는 프로퍼티
- 일반 객체나 `non-constructor`에는 `prototype` 프로퍼티가 없다

```js
// 함수 객체는 prototype 프로퍼티를 가진다
console.log(function () {}.hasOwnProperty("prototype")); // true  

// 일반 객체는 prototype 프로퍼티가 없다
console.log({}.hasOwnProperty("prototype")); // false 
```