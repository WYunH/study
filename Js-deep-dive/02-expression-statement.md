# 값 value

표현식이 평가되어 생성된 결과

⭐ 평가 evaluate

식을 해석해 값을 생성하거나 참조하는 것

# 리터럴 literal

사람이 이해할 수 있는 문자나 약속된 기호를 사용해 값을 생성하는 표기법

```js
3;
```
1. 숫자 리터럴 `3` 코드에 기술
2. 자바스크립트 엔진이 평가해 숫자 값 3 생성

▶️ 자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성한다

# 문과 표현식
## 문 statement

- 프로그램을 구성하는 기본 단위이자 최소 실행 단위
- 컴퓨터에게 내리는 명령
- '명령문'이라고도 한다
- 문 안에 표현식이 들어간다
- 문은 여러 토큰으로 구성

⭐ 토큰 token

- 문법적인 의미
- 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소
- 키워드, 식별자, 리터럴, `;`, `.`등

## 표현식 expression 

- 값으로 평가될 수 있는 문
- 값이 담긴 것
- 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다
- JS에서 표현식은 메모리 주소(값을 참조하는 것)를 의미한다

⭐ 함수의 선언은 문이고 함수의 호출은 표현식이다

```js
var score = 100;
```
- 100은 숫자 리터럴이다
- 자바스크립트 엔진에 의해 런타임 시 평가돼 숫자 100을 생성한다

▶️ 리터럴은 표현식이다 

```js
var score = 50 + 50;
```

- 숫자 리터럴 50과 연산자 `+`로 이뤄져있다
- 런타임 시 평가돼 숫자 값 100을 생성하므로 표현식이다

```js
score;
```

- 식별자 참조는 값을 생성하지는 않지만 값으로 평가된다
- 따라서 변수 식별자를 참조하는 것은 표현식이다

⭐ 문과 표현식을 구별하고 해석하면 코드의 실행 결과를 예측하기 쉬워진다

프로그램 : 명령문의 집합
프로그래밍 : 순차에 맞게 명령문을 작성하고 실행, 제어하는 것 


## 표현식인 문, 표현식이 아닌 문

- 표현식인 문: 값으로 평가될 수 있는 문
- 표현식이 아닌 문: 값으로 평가될 수 없는 문

⭐ 문을 변수에 할당해보면 표현식인지 확인할 수 있다

```js
var x; 
```

- 변수 선언문은 값으로 평가될 수 없다
- 변수 선언문은 표현식이 아닌 문이다

```js
var foo = var x;  
```

▶️ 변수 선언문은 값처럼 사용할 수 없다(표현식이 아닌 문을 변수에 할당 시 에러 발생)

```js
x = 1 + 2; 
```
- 엔진에 의해 런타임 시점에서 숫자 값 3이 생성된다
- 할당문은 표현식인 문이다

```js
var foo = x = 100; 
```

▶️ 할당문은 값처럼 사용할 수 있다(표현식인 문은 변수에 할당 가능)

⭐ 완료 값 completion value

- 크롬 개발자 도구에서 표현식이 아닌 문을 실행 시 출력하는 값(undefined)을 의미한다
- 완료 값은 표현식의 평가 결과가 아니다
- 완료 값은 변수에 할당할 수 없으며 참조도 불가능하다