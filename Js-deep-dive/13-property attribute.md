
# 프로퍼티 어트리뷰트 Property atrribute 

- 자바스크립트 엔진이 프로퍼티 생성 시 자동으로 정의하는 프로퍼티 상태값(값, 값 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부)
- `getOwnPropertyDescriptor`로 반환된 디스크립터 객체를 통해 간접 확인 가능

  ```js
  // 매개변수 1 : 객체의 참조 전달
  // 매개변수 2 : 문자열이나 심볼 전달
  Object.getOwnPropertyDescriptor(매개변수1, 매개변수2)
  ```

## 내부 슬롯, 내부 메소드

- 자바스크립트 엔진의 내부 로직
- 구현 알고리즘을 설명하기 위해 ES사양에서 사용하는 의사 프로퍼티와 의사 메소드
- 공개된 객체의 프로퍼티는 아니므로 일부만 간접 접근 가능(개발자가 직접 접근, 호출 불가)

<br />
<br />

## 프로퍼티 디스크립터 객체 property descriptor object

- 프로퍼티 어트리뷰트의 정보를 제공하는 객체
- 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 `undefined` 반환

<br />
<br />

## 프로퍼티

- 데이터 프로퍼티, 접근자 프로퍼티로 구분된다

### 데이터 프로퍼티

- 키, 값으로 구성된 일반적인 프로퍼티
- 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                     |
| ------------------- | ----------------------------------- | -------------------------------------------------------- |
| [[Value]]           | value                               | 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환 되는 값 |
| [[Writable]]        | writable                            | 프로퍼티 값 변경 가능 여부(boolean)                   |
| [[Enumerable]]      | enumerable                          | 프로퍼티의 열거 가능 여부(boolean)                    |
| [[Configurable]]    | configurable                        | 프로퍼티의 재정의 가능 여부(boolean)                  |

- 프로퍼티 생성 시(동적 생성 포함)
  - `[[Value]]`의 값은 프로퍼티 값으로 초기화
  - `[[ Writable]]`, `[[Enumerable]]`, `[[Configurable]]` 모두 `true`로 초기화

```js
const person = {
  name: "won",
};

// age 동적 생성
person.age = 1;

console.log(Object.getOwnPropertyDescriptors(person));
/*
  {
    name: { value: 'won', writable: true, enumerable: true, configurable: true },
    age: { value: 1, writable: true, enumerable: true, configurable: true }
  }
*/
```

<br />

### 접근자 프로퍼티

- 자체적인 값이 없는 프로퍼티
- 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(getter, setter 함수)로 구성

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                                     |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| [[Get]]             | get                                 | 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수(getter)   |
| [[Set]]             | set                                 | 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수(setter) |
| [[Enumerable]]      | enumerable                          | 데이터 프로퍼티의 [[Enumerable]]과 같다                                 |
| [[Configurable]]    | configurable                        | 데이터 프로퍼티의 [[Configurable]]과 같다                               |

```js
const person = {
  firstName: "hee",
  lastName: "won",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티로 프로퍼티 값 참조
console.log(person.firstName + " " + person.lastName); // hee won

// 접근자 프로퍼티로 프로퍼티 값 저장(setter 함수 호출)
person.fullName = "WON HEE";
console.log(person); // { firstName: 'WON', lastName: 'HEE', fullName: [Getter/Setter] }

// 접근자 프로퍼티로 프로퍼티 값 참조(getter 함수 호출)
console.log(person.fullName); // WON HEE

// 데이터 프로퍼티
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
/*
{
  value: 'WON',
  writable: true,
  enumerable: true,
  configurable: true
} 
*/

// 접근자 프로퍼티
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
/*
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
*/
```

<br />
<br />

## 프로퍼티 정의

- 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적 정의하거나, 기존 프로퍼티 어트리뷰트를 재정의하는 것

```js
// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Hee',
  writable: true,
  enumerable: true,
  configurable: true
})
```

| 프로퍼티 디스크립터 객체의 프로퍼티 | 대응 프로퍼티 어트리뷰트 | 생략시 적용되는 기본 값 |
| ----------------------------------- | ---------------------------- | --------------------------- |
| value                               | [[Value]]                    | undefined                   |
| get                                 | [[Value]]                    | undefined                   |
| set                                 | [[Value]]                    | undefined                   |
| writable                            | [[Value]]                    | false                       |
| enumerable                          | [[Value]]                    | false                       |
| configurable                        | [[Value]]                    | false                       |

<br />
<br />

## 객체 변경 방지

- 객체는 재할당 없이 직접 변경할 수 있으므로 프로퍼티의 추가, 삭제, 수정 모두 가능하다
- 객체의 변경을 방지하는 메소드가 지원된다
- 메소드마다 제한하는 강도가 다르나, 모두 얕은 변경 방지로 적용된다(중접 객체까지는 영향을 줄 수 없다)

| 구분           | 메서드                   | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| -------------- | ------------------------ | ------------- | ------------- | ---------------- | ---------------- | -------------------------- |
| 객체 확장 금지 | Object.preventExtensions | X             | O             | O                | O                | O                          |
| 객체 밀봉      | Object.seal          | X             | X             | O                | O                | X                          |
| 객체 동결      | Object.freeze            | X             | X             | O                | X                | X                          |

<br />

### 객체 확장 금지

- 확장 금지된 객체는 프로퍼티 추가가 금지된다

```js
Object.preventExtensions(객체);

// 객체의 확장 가능여부 확인(boolean)
Object.isExtensible(객체);
```

<br />

### 객체 밀봉

- 밀봉된 객체는 읽기, 쓰기만 가능하다

```js
Object.seal(객체);

// 밀봉된 객체 확인(boolean)
Object.isSealed(객체);
```

<br />

### 객체 동결

- 동결된 객체는 읽기만 가능하다

```js
Object.freeze(객체);

// 동결된 객체 확인(boolean)
Object.isFrozen(객체);
```

<br />
<br />

### 불변 객체

- 재귀적으로 `Object.freeze`를 적용하면 중첩 객체까지 동결할 수 있다

```js
// 얕은 객체 변경 방지
const person = {
  name: "won",
  age: 100,
  address: {
    city: "Incheon",
  },
};

Object.freeze(person);
console.log(Object.isFrozen(person)); // true
// 중첩 프로퍼티 address는 동결되지 않는다
console.log(Object.isFrozen(person.address)); // false 

person.address.city = "Seoul";

// 프로퍼티 값 갱신
console.log(person); // { name: 'won', age: 100, address: { city: 'Seoul' } } 



// 깊은 객체 변경 방지
function deepFreeze(target) {
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    // 현재 들어온 객체 동결
    Object.freeze(target);

    // deepFreeze 재귀실행
    // Object.keys 메소드로 객체 자신의 키들에 대해 열거가능한 형태의 배열 반환
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
}

const person = {
  name: "won",
  age: 100,
  address: {
    city: "Incheon",
  },
};

deepFreeze(person);

console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // true 

person.address.city = "Seoul";
console.log(person); // { name: 'won', age: 100, address: { city: 'Incheon' } } 
```