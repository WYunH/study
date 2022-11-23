# BEM 방법론

- CSS방법론 중 1가지
- CSS를 적용을 위한 HTML 클래스 작명법
- BEM(Block, Element, Modifier) 세 종류로 나눠 구분

## 장점

- 블록/엘리먼트 개념을 구분해둬 종속관계 파악이 쉽다
- 클래스 이름만으로 html구조 대략적으로 파악이 가능하다
- SASS와 사용하기 좋다

## 단점
- 너무 긴 class이름
- 가독성이 떨어질 수 있다
- 코드 작성시 `-`, `--`, `__`때문에 특정 단어선택이 빠르지 않다

▶️ 대체 수단으로 CSS Module, Styled Component 등이 있다

### Block

- 재사용이 가능한 독립적인 페이지 구성 요소
- 컴포넌트 개념
- header, footer, aside처럼 레이아웃의 기반이 되는 요소
- 일종의 flex-container같은 느낌

#### 적용법

- ID, 태그 이름 없이 class만 사용
- 문자, 숫자, -로만 구성
- 목적에 따라 이름을 작명할 것(에러메시지 출력용 p태그 -> .error)
- 이름 연결에 `-` 하나만 사용

### Element

- 블록을 구성하는 실질적 요소들
- 일종의 flex-items같은 느낌
- element만 따로 다른곳에서 사용하는건 어렵다
- 다른 블록/앨리먼트에 의존중인 선택자는 사용하지 않기(element선택시 element의 이름만 선택)

#### 적용법

- ID, 태그 이름 없이 class만 사용
- `블록이름__요소이름`으로 만들 것
- 작명에는 문자, 숫자, `-`, `_`으로 구성
- 목적에 따라 이름을 작명할 것(에러메시지 출력용 p태그 -> .error)
- 이름 연결에 `-` 하나만 사용

### Modifier

- 블록 / 앨리먼트의 모양, 상태나 상황을 변경할 때 사용
- Modifier만을 단독으로 사용할수는 없다

#### 적용법

- ID, 태그 이름 없이 class만 사용
- 문자, 숫자, `-`, `_`로 구성
- 수정 시 수정자를 클래스명으로 사용


참고

[BEM 방법론 1](https://tech.elysia.land/%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-bem-b291ba7bff01)

[BEM 방법론 2](https://intrepidgeeks.com/tutorial/organize-bem-method-naming-rules)

[BEM 방법론 3](https://worker-k.tistory.com/entry/CSS-BEM%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C-Class%EB%AA%85-%EB%A7%8C%EB%93%A4%EA%B8%B0-BEM-class-naming)