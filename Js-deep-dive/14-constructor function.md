# 생성자 함수로 객체 생성하기

- 객체 리터럴은 일반적이고 간단한 객체 생성 방식이지만 1개의 객체만 만든다
- `new`연산자, 생성자 함수를 사용하면 유사 객체 여럿을 편하게 생성할 수 있다

 ⭐ 생성자 함수 constructor 
 
 - `new` 연산자와 함께 호출해 인스턴스를 생성하는 함수
 - 자바스크립트는 `Object` `String`, `Function`, `RegExp`, `Promise`등의 빌트인 생성자 함수 제공
 
 
 ⭐ 인스턴스 instance : 생성자 함수에 의해 생성되는 객체


<br />
<br />

## 객체 리터럴 `{ }`로 객체 생성 시 문제점

- `{ }` 에 의한 객체 생성 방식은 직관적이고 간편하나, 단 하나의 객체만 생성한다는 특징이 있다
- 동일 프로퍼티를 가지는 여럿의 객체를 생성해야 할 때 비효율적이다

```js
const person1 = {
  name: "Won",
  getPersonName() {
    return `Hi, My Name is ${this.name}`;
  },
};

console.log(person1.getPersonName()); // Hi, My Name is Won

const person2 = {
  name: "HEE",
  getPersonName() {
    return `Hi, My Name is ${this.name}`;
  },
};

console.log(person2.getPersonName()); // Hi, My Name is HEE
```

▶️ `{ }`로 생성 시 프로퍼티의 구조가 동일해도 매번 같은 프로퍼티와 메소드를 반복 기술해야 한다

⭐ 객체의 특징

1. 프로퍼티를 통해 고유의 상태(state)를 표현
2. 메소드를 통해 프로퍼티를 참조, 조작하는 동작(behavior)을 표현

- 상태는 객체마다 값이 다를 수 있으나, 메소드는 구조가 동일한 경우가 일반적이다


<br />

## 생성자 함수로 객체 생성 시 장점

- 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다
- 객체를(인스턴스)를 생성하기 위한 템플릿(클래스)이다


```js
// 생성자 함수 Person 선언
function Person(name) {
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}

// new 연산자로 Person 인스턴스 생성
const person1 = new Person("Won");
const person2 = new Person("HEE");

// Person1, Person2의 메소드 호출
console.log(person1.getPersonName()); // Hi, My Name is Won
console.log(person2.getPersonName()); // Hi, My Name is HEE
```

<br />

### 자바스크립트에서 생성자 함수

- 클래스 기반 객체지향언어의 생성자와 다르게 자바스크립트는 형식이 정해져 있지 않다
- 일반 함수처럼 정의 후 `new` 연산자와 함께 호출한다
- `new` 연산자 없이 생성자 함수를 호출하면 일반 함수로 동작한다
- 함수를 `new`와 함께 호출해야 생성자 함수로 동작한다(모든 함수는 `new`를 함께 사용할 때 생성자 함수로 동작)

⭐ 생성자 함수 규칙

1. 생성자 함수 이름의 첫 글자는 대문자로 시작한다
2. 반드시 `new` 연산자를 붙여 함께 실행한다

```js
// 생성자 함수 Person 선언
function Person(name) {
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}

// 생성자 함수로 생성해도 new 연산자와 함께 호출하지 않으면 일반함수로 동작한다
const person1 = Person("Won");

// 일반함수 몸체 내부에 반환값이 없으므로 undefined 반환
console.log(person1); // undefined
console.log(name); // Won
```

<br />
<br />

⭐ 생성자 함수의 역할

1. 인스턴스를 생성(필수)
2. 프로퍼티 추가, 초기값 할당 등 생성된 인스턴스 초기화(옵션)

### 생성자 함수의 인스턴스 생성 과정

<br />

#### 1. 인스턴스 생성과 this 바인딩

- 런타임 이전에 실행
- 암묵적으로 빈 객체(인스턴스) 생성
- 빈 객체(인스턴스)는 `this`에 바인딩된다(이후 `this`는 이 빈 객체를 가리키게 된다)


⭐ 바인딩 : 식별자와 값을 연결하는 과정


⭐ `this` 
 - 객체 내부에서 자신의 프로퍼티나 메소드를 참조하기 위한 변수
 - `this`값(바인딩)은 함수 호출 방식에 따라 런타임에 동적으로 결정된다


```js
// 생성자 함수 Person 선언
function Person(name) {
  // 1. 암묵적으로 빈 객체(인스턴스) 생성 후 this에 바인딩
  console.log(this); // Person {}

  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}
```

<br />

#### 2. 인스턴스 초기화

- 생성자 함수에 기술된 코드가 한 줄씩 실행되면서 `this`에 바인딩된 인스턴스 초기화(인스턴스에 프로퍼티나 메소드 추가, 생성자 함수가 인수로 받은 초기값이나 고정값 할당)

```js
// 생성자 함수 Person 선언
function Person(name) {
  // 1. 암묵적으로 빈 객체(인스턴스) 생성 후 this에 바인딩

  // 2. this에 바인딩된 인스턴스 초기화
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}
```

<br />

#### 3. 인스턴스 반환

- 완성된 인스턴스가 바인딩된 `this`(생성자 함수에 의해 생성된 인스턴스)를 암묵적으로 반환

```js
// 생성자 함수 Person 선언
function Person(name) {
  // 1. 암묵적으로 빈 객체(인스턴스) 생성 후 this에 바인딩

  // 2. this 에 바인딩되어 있는 인스턴스 초기화
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };

  // 3. 완성된 인스턴스가 바인딩된 this 암묵적으로 반환
}

// 인스턴스 생성
// 생성자 함수 Person은 암묵적으로 this(Person 인스턴스) 반환
const person = new Person("Won");
console.log(person); // Person {name: 'Won', getPersonName: ƒ}
```


- `this`가 아닌 객체를 명시적으로 반환시 `return`문에 명시한 객체를 반환(`this`가 반환되지 못한다)
- 명시적인 반환이 원시 값이면 반환을 무시하고 암묵적으로 `this` 반환

▶️ 생성자 함수 내부에서 `return`을 생략해 생성자 함수의 기본 동작을 유지하는 것이 좋다


```js
// 생성자 함수 내부에서 명시적인 객체 반환시
function Person(name) {
  // 1. 암묵적으로 빈 객체(인스턴스) 생성 후 this에 바인딩

  // 2. this에 바인딩되어 있는 인스턴스 초기화
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };

  return {};
}

const person = new Person("Won");
console.log(person); // {}



// 생성자 함수 내부에서 명시적인 원시값 반환시
function Person(name) {
  // 1. 암묵적으로 빈 객체(인스턴스) 생성 후 this에 바인딩

  // 2. this에 바인딩되어 있는 인스턴스 초기화
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };

  return 123;
}

const person = new Person("Won");
console.log(person); // Person {name: 'Won', getPersonName: ƒ}
```

<br />
<br />

#### 내부 메소드 `[[Call]]`, `[[Construct]]`

- 함수 선언문이나 표현식으로 정의한 일반 함수도 `new`연산자와 사용 시 생성자 함수로 호출할 수 있다
- 자바스크립트에서 함수는 객체이지만 일반 객체와는 다르게 호출할 수 있다(일반 객체는 호출 불가)
- 함수 객체는 일반 객체의 내부 슬롯, 내부 메소드를 포함해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 `[[Call]]`, `[[Construct]]` 같은 내부 메소드도 추가로 가진다

<br />

⭐ `[[Call]]`과 `[[Construct]]`

- 함수 객체 내부 메소드
- 함수가 일반 함수로 호출 시 `[[Call]]`을 호출(callable), 생성자 함수로 호출 시 `[[Construct]]`를 호출(constructor) 
- 함수 객체는 반드시 내부 메소드 `[[Call]]`을 가지지만, 모두 `[[Construct]]`를 가지는 것은 아니다(모든 함수 객체는 호출 가능하나, 모두 생성자 함수로 호출할 수 있는 것은 아니다)
- 함수 객체는 callable이면서 constructor거나, callable이면서 non-constructor다

<br />

#### constructor와 non-constructor의 구분

- 자바스크립트 엔진은 함수 정의 방식에 따라 constructor, non-constructor로 구분한다
- constructor : 생성자 함수로 호출할 수 있는 형태. 함수 선언문, 함수 표현식, 클래스
- non-constructor : 생성자 함수로 호출할 수 없는 형태. 화살표 함수, ES6 메소드 축약 표현으로 정의한 함수


<br />
<br />

### `new` 연산자

- `new` 연산자와 함께 호출한 함수는 `[[Construct]]`(함수 객체의 내부 메소드)가 호출된다
- 함께 호출하는 함수는 `non-constructor`가 아니어야 한다

```js
// 일반 함수 add 선언
function add(x, y) {
  return x + y;
}

// 일반 함수를 new 연산자와 함께 사용
const number = new add(1, 2);
// 함수 add의 반환값은 원시값이므로 반환문이 무시되고 빈 객체 반환
console.log(number); // add {}



// 객체 반환하는 일반 함수 선언
function createUser(name, role) {
  return { name, role};
}

// 일반 함수를 new 연산자와 함께 사용
const user = new createUser('Won', 'admin');
// 함수 createUser의 명시된 반환값이 객체이므로 생성한 객체 반환
console.log(user) // {name: 'Won', role: 'admin'}
```

- `new` 연산자 없이 생성자 함수를 호출하면 일반 함수로 동작한다(함수 객체 내부 메소드 `[[Call]]` 호출)

```js
// 생성자 함수 Person 선언
function Person(name) {
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}

// new 연산자를 함께 쓰지 않으면 생성자 함수도 일반 함수로 동작
const person = Person("Won");
console.log(person); // undefined
```

<br />
<br />

### `new.target`

- `new`연산자와 함께 생성자 함수로서 호출되었는지 확인하는 방법
- ES6에 도입된 문법
- `new` 연산자와 함께 생성자 함수로 호출된 경우, 함수 내부의 `new.target`은 함수 자신을 가리킨다(일반 함수로 호출된 경우 `new.target`은 `undefined`)

```js
// 생성자 함수 Person 선언
function Person(name) {
  // new 연산자와 함께 생성자 함수로 호출된 것인지 확인
  if (!new.target) { // new 키워드와 함께 호출된 것이 아닌 경우
    //함수 내부에서 new 연산자와 함께 생성자 함수로 호출
    return new Person(name);
  }

  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}

// new 연산자 없이 생성자 함수 호출
const person = Person("Won"); // 함수 내부 로직으로 인해 new 연산자가 함께 호출

// 인스턴스가 정상적으로 생성되어 내부 메소드 호출
console.log(person.getPersonName()); // Hi, My Name is Won
```
