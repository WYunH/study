# 엄격 모드 stric mode

- 자바스크립트 문법을 엄격히 적용해 오류를 발생을 줄이기 위한 것
- ESLint와 같은 린트 도구를 사용하는 것이 더 좋다 

### 암묵적 전역

- 개발자의 의도와 상관없이 자바스크립트 엔진이 생성한 암묵적 전역 변수
- 전역 객체에 프로퍼티로 할당된다
- `const`, `let` 키워드로 변수 선언 후 사용하는 것이 좋다

```js
function foo() {
// x 값 할당
  x = 10;
}

// 함수 실행
// 함수 내 x의 선언이 없으므로, 스코프 체인을 통해 x 검색
// 전역 스코프에도 x가 없어 자바스크립트 엔진이 전역 객체에 x 프로퍼티 동적 생성 후 값 10 할당
foo();


console.log(x); // 10
```

<br />
<br />

### strict mode 적용

- `use strict`을 전역의 선두나 함수 몸체 선두에 추가한다(선두에 없으면 정상동작하지 않는다)
- 전역에 추가시 스크립트 단위로 적용되므로 다른 라이브러리와 충돌이 생길 수 있다

▶️ 즉시 실행 함수로 스크립트 전체를 감싸 스코프를 구분시키고 선두에 `use strict`을 추가하는 것이 좋다

```js
// 즉시 실행함수 내부에서 선두에 use strict 추가
(function () {
  "use strict";

  // ...
})();
```