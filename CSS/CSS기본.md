# CSS 기본

## CSS
- Cascading Style Sheets
- html 내용들을 꾸미는 역할
- 디자인만을 위해 존재하는 스타일 언어
- 한 줄이 하나의 스타일에 해당한다
- 확장자로 `.css` 사용

## 기본 규칙

```css
선택자(적용할 html태그) { 속성1 : 속성값1; 속성2 : 속성값2;}
``` 

1. 선택자: 스타일을 적용할 태그(대상 html)
2. 중괄호 `{}` 사이 적용할 스타일의 정보 넣기
3. 스타일 규칙: 속성과 값이 하나의 쌍으로 묶인 것
4. 스타일 규칙은 ; 로 구분 

예시
```css
p {
  text-align: center; 
  color: blue;
} 
```
▶️ 태그 P에 text-align은 center로, color는 blue를 사용하겠다는 의미


❗ __지정한 곳이 실제 html영역에서 존재하지 않을 경우, 스타일은 적용되지 않는다__


​⭐ 선택자는 뒤에서부터 읽자. 앞에서부터 보면 오류를 범할 수 있다

예시
```css
div div:nth-child(3){ background-color: blue; }
``` 
자식에 해당하는 div, 그 div의 부모가 div에 해당되는 모든 태그에 스타일 적용

## CSS의 순위 적용

- CSS는 적용 순위를 가지고 있다
- 순위에 따라 최종 스타일이 적용된다

1. 중요도

CSS가 어디에 선언되었는지에 따라 우선순위가 달라지는 것

2. 명시도 

대상을 명확하게 특정할수록 우선순위 점수가 높아지는 것

3. 코드 순서(선언 순서)

선언된 순서에 따라 우선순위가 적용
▶️ 나중에 선언된 스타일을 적용

## CSS의 상속, 점수 적용

- CSS는 상속(상위 요소에 적용된 속성을 하위 요소가 물려 받는 것) 개념을 가진다
- 주로 글자(문자)관련 CSS 속성의 값이 자동으로 상속된다
- inherit 속성을 이용하면 부모 태그의 해당 속성 값을 그대로 상속 받게 지정(명시)할 수 있다(사이즈, 위치, 색상 등 여러 속성에 적용가능)
- 실제 중요하게 생각해야하는 것은 태그, 선택자 간에 대한 우선순위이다

⭐ CSS는 우선순위 더 높은 것이 덮어씌워져 적용된다는 것을 기억할 것


### 상세 우선순위

1. !important : 우선순위 최상위. 무한대 점수. 속성값 바로 뒤에 넣는다

예시
```css
p { color: red !important; }
```

2. inline style : html내 태그에서 style을 정의한 것. 1000점

예시
```css
<p style="color": red">
``` 

3. id선택자 : html 태그 내 정의된 id를 css에서 #로 선택할 때. 100점

예시
```html
//html
<p id="idName">내용</p> 
```
```css
//css 
#idName { color: red; }
```

4. class선택자: html 태그 내 정의된 class를 css에서 .으로 선택할 때. 10점

예시
```html 
//html
<p class="className">내용</p>
```

```css
//css 
.className { color: red; }
```

5. 태그선택자: 태그 요소를 선택자로 사용할 때. 1점

예시
```css
p { color: red; }
```

6. `*`(전체선택자): 요소 전체를 선택할 때. 0점

예시 
```css
 * { color: red; }
```

❗ __주의사항__

상속받은 것은 우선순위 점수를 받지 않는다

만약 CSS선택자 타입이 같다면, 구체적인 것일수록 우선권을 가진다

예) `.className`보다 `p.className`이 더 구체적이므로 우선권을 가진다

같은 CSS선택자라면 순서상 나중에 선언된 것이 우선이다

같은 요소 선택자라면 순서상 나중에 선언된 것이 우선이다


## css를 html과 연결하는 4가지 방법

HTML에서 태그 `<style>`을 추가해 적용할 수 있지만, 관리 차원에서 css전용 파일을 생성 후 작업하는 것이 더 좋다

### 1. html의 head에서 link태그를 사용해 css파일 연결(병렬방식)

```html
<link rel="stylesheet" href="외부 스타일 시트(.css) 파일">
```

- 병렬처리 방식을 지원해 링크로 불러오는 것들이 많아도 빠르게 불러올 수 있음
- 페이지 로딩 속도가 뛰어나다
- CSS파일 여럿을 Link 방식으로 다운로드해도 익스플로러에서 순서가 동일하게 작동
- 가장 권장하는 방법
​
### 2. style태그로 현재 html문서에서 직접적용(내장방식)

### 3. 태그에 style속성을 넣어서 선택된 태그만 적용(인라인방식)

- 우선순위 문제가 있으니 사용을 지양하자

### ​4. 다른 css파일 안에서 @import url("링크") 적용해 연결

- 직렬방식이라 느리다
- 만약 link태그로 파일을 가져오는 것이 있고, 양이 많아 병렬방식이 함께 진행되면 import로 파일을 불러오는 과정에서 꼬이는 문제가 생길 수 있다
- 엣지 브라우저에서는 @import된 css파일을 적용하지 못한다

참고

[CSS 1](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)

[CSS 2](https://blogpack.tistory.com/1021)