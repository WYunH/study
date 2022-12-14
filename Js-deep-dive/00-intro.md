# 프로그래밍 programming

요구사항(문제)을 해결하기 위한 방안을 프로그래밍 언어를 사용해 정의하는 것
논리적, 수학적, 컴퓨터 관점에서의 사고가 요구된다

문제를 분석 후 적절한 자료구조와 함수의 집합으로 변환 후, 이 흐름을 제어하는 것

---

# 자바스크립트 발전과정
## 초기
- 웹페이지의 보조적인 기능을 수행하기 위한 용도
- 핵심 로직은 웹 서버에서 실행
- 브라우저는 서버로부터 전달받은 HTML & CSS를 단순히 렌더링하는 수준
- HTML태그로 시작해서 HTML 태그로 끝나는 완전한 HTML 코드를 서버로부터 전송받아 웹페이지를 렌더링하는 방식으로 동작
- 화면 전환 → 서버에서 새 HTML을 받음 → 웹페이지 전체 다시 렌더링

▶️ 필요 이상의 데이터 통신, 화면 전체가 교체되며 순간적으로 깜빡이는 단점이 있었다 

⭐ 렌더링 rendering  

- HTML, CSS, Javascript로 작성된 문서를 해석해 브라우저에 시각적으로 출력한 것
- 서버에서 데이터를 HTML로 변환해 브라우저에게 전달하는 SSR(Server Side Rendering)을 의미하기도 한다

## Ajax(Asynchronous Javascript and XML) 
- 서버 <-> 브라우저간 데이터 교환을 자바스크립트를 사용해 비동기(Asychronous) 방식으로 통신하는 기능(Ajax) 'XMLHttpRequest'가 등장
- 변경이 필요한 데이터만 서버로부터 전송받아 렌더링하는 방식 가능

▶️ 웹 브라우저도 빠른 성능, 부드러운 화면 전환이 가능해졌다

## JQuery
- DOM(Document Object Model)을 더 쉽게 제어하고, 크로스 브라우징 이슈도 일부 해결 가능한 자바스크립트 라이브러리

## V8 자바스크립트 엔진
- 웹 브라우저를 만드는 데 기반을 제공하는 오픈 소스 자바스크립트 엔진
- 자바스크립트 엔진의 발전으로 과거 웹 서버 로직도 브라우저로 이동하게 됨

▶️ 웹 앱 개발에서 프론트엔드 영역이 주목받는 계기로 작용했다

---

# 자바스크립트와 ECMAScript

### 자바스크립트
- 명령형, 함수형, 프로토타입 기반으로 한 객체지향 언어
- 핵심은 ECMAScript 준수
- 브라우저가 별도로 지원하는 클라이언트 사이드 Web API(즉, DOM, BOM, XMLHttpRequest, fetch, SVG, Web Storage 등)도 포함

### ECMAScript 
- 자바스크립트 표준
- 프로그래밍 언어의 값, 타입, 객체와 프로퍼티, 함수, 표준 빌트인 객체 등의 핵심 문법을 규정한 것
