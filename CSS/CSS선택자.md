# CSS 선택자

## 기본 선택자

### 1. 전체 선택자

```css
* {속성: 값;}
```

- 스타일을 문서의 모든 요소에 적용
- 주로 모든 하위 오소에 한꺼번에 적용하거나 웹 브라우저의 기본 스타일을 초기화할 때 자주 사용

### 2. 타입 선택자(태그 선택자,요소 선택자)

```css
태그명 {스타일 규칙}
```
- 선택된 태그를 사용하는 모든 요소에 스타일을 적용한다

### 3. 클래스 선택자, id선택자

```css
.클래스명 {스타일 규칙}
#아이디명 {스타일 규칙}
```
- 같은 태그라도 일부는 다른 스타일을 사용하고 싶을 때, 특정 부분만 선택해서 스타일을 적용할 수 있다
- 클래스 선택자는 문서에서 여러 번 적용할 수 있으나, id선택자는 문서에서 한 번만 적용할 수 있다

### 4. 그룹 선택자

```css
선택자1, 선택자2 {스타일 규칙}
```
- `,`를 이용해 여러 선택자에 같은 스타일 규칙을 적용할 수 있다

## 고급 선택자

### 1. 연결 선택자

- 둘 이상의 선택자를 연결해서 사용하는 것
- 조합 선택자, 콤비네이션 선택자라고도 한다
- 하위 선택자를 이용해 하위 요소에 스타일을 적용할 수 있다

예시
```css
section p{color: red;} 
```
▶️ 상위요소 section에 있는 하위요소 p에 빨간색 모두 적용

#### 자식 선택자

- 자식 요소에만 스타일을 적용
- `>`를 사용해 부모와 자식을 구분한다
- 자식 선택자는 바로 한 단계 아래의 요소에만 적용되며, 손자 요소까지는 적용되지 않는다

예시
```css
section > p{color: blue;}
```
▶️ 부모요소 section의 바로 아래 자식요소 p 1개에 파란색 모두 적용

#### 인접 형제 선택자

- 형제 요소 중 첫 번째 동생 요소만 선택하여 구분

예시
```css
h1 + p {color: green;} 
```

▶️ h1의 형제인 요소 p의 첫 번째 p만 초록색 적용
형제 선택자는 모든 형제 요소에 적용할 수 있다

예시
```css
h1 ~ p {color: skyblue;} 
```
▶️ h1의 형제인 모든 p요소에게 하늘색 적용

⭐ 참고 

1. 선택자a 선택자b
2. 선택자a > 선택자b

__1(하위 선택자)과 2(자식 선택자)의 차이점__

1(하위 선택자)
div p: div 태그 안의 모든 p가 적용

만약 태그 구조가 div -> span -> p 라면, 중간에 있는 span도 함께 적용받게 된다

2(자식 선택자)
div > p: div -> p만 해당되어 적용받고, 중간의 span은 해당되지 않는다
div 안 p태그가 여러 개일 경우에도, div의 바로 아래에 있는 p 1개만 적용

특별한 경우를 제외하면 보통은 '선택자a > 선택자b(자식 선택자)'가 명확하기 때문에 주로 사용될 수 있다

```html
//html
  <section>  
    <div>
      <p>div > 첫번째p </p>
      <p>div > 두번째p <span> 두번째p안의 span </span> </p>
      <p>div > 세번째p <span> 세번째p안의 span </span> </p>
      <span> span2 <span> span2안의 span </span> </span>
    </div>
    <p>P-1</p>
    <p>P-2 <span>P-2안의 span </span> </p>
    <span>SPAN</span>
  </section>
```
```css
//css
  section p{
    border: 1px dashed solid red;
  }

  section > p{
    border: 1px dotted orange;
  }

  div p {
    border: 1px solid yellowgreen;
  }

  span {
    border: 1px inset blue;
  }
```



### 2. 속성 선택자

#### 기본 속성 선택자

#### `[속성이름]`, `[속성이름="값"]`

- 태그 안에서 사용하는 속성값에 따라 요소를 선택하는 것
- 주어진 속성과 속성값이 일치하는 요소를 찾아 스타일을 지정할 수 있다
- 속성값의 조건에 따라 특정 부분만 선택하기 쉬워서 상황에 맞는 스타일을 지정하기에도 쉽다
- html의 data속성을 이용하면 CSS로 쉽게 찾고 적용할 수 있어 유용

예시
```css
a [href] {color: red;}
```
▶️ a요소에 href 속성이 있는 것만 빨간색 적용

```css
a[target ="_blank"]{padding:30px;}
```
▶️ a요소에 target속성값이 _blank인 것에 패딩 30px적용

#### 문자열 속성 선택자

#### `[속성이름~="속성값"]`

- 지정한 속성값을 포함하는 모든 요소에 스타일 적용
- 단어 기준으로 포함여부 확인

예시
```html
//html
  <p title="abc"> 가나다 </p>
  <p title="abc def"> 라마바 </p>
  <p tiitle="adc-def"> 사아자 </p>
  <p tiitle="adcdef"> 차카타 </p>

//css 
  <style>
  p[title~="abc"] {
    color: blue;
  }
  </style> 
```

#### `[속성이름|="속성값"]`

- 지정한 속성값이거나 속성값-으로 시작하는 모든 요소에 스타일 적용

예시
```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css
<style>
  p[title|="abc"] {
    color: red;
  }
</style>  
```

#### `[속성이름^="속성값"]`

- 지정한 속성값으로 시작하는 모든 요소에 스타일 적용
- 문자열 기준으로 포함여부 확인

예시
```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css 
<style>  
  p[title^="abc"] {
    color: green;
  }
</style>  
```

#### `[속성이름$="속성값"]`

- 지정한 속성값으로 끝나는 모든 요소에 스타일 적용
- 문자열 기준으로 포함여부 확인

예시
```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css 
<style>
  p[title$="abc"] {
    color: green;
  }
</style> 
```

#### `[속성이름*="속성값"]`

- 지정한 속성값을 포함한 모든 요소에 스타일 적용
- 문자열 기준으로 포함여부 확인

예시
```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css
<style>
  p[title*="abc"] {
    color: green;
  }
</style> 
```

### 3. 가상클래스와 가상요소

- html 문서의 수정 없이 CSS만으로 디자인적 요소를 추가하는 것
- CSS를 적용하기 위한 클래스를 html에서 추가로 넣을 필요가 없어 좋다

#### 가상클래스 선택자

```css
선택자:가상클래스 { 속성: 값; }
```

- 사용자가 웹 요소를 클릭하거나 마우스 포인터를 올리는 등의 특정 동작을 할 때 동적으로 스타일을 줄 수 있다
- 실제 존재하는 html요소에 특정 이벤트/환경에 따라 클래스를 주고 css 적용
- 실제 html에 클래스 추가 없이 디자인을 입히기 위한 것
- `:` 를 사용해 적용

⭐ 가상클래스 선택자 종류

`:link` - 방문하지 않은 링크에 스타일 적용

`:visited` - 방문한 링크에 스타일 적용

`:hover` - 특정 요소에 마우스 포인터를 올려놓을 때 스타일 적용

`:active` - 웹 요소를 활성화할 때 스타일 적용(클릭 시)

`:focus` - 웹 요소에 초점이 맞춰졌을 때 스타일 적용. input, select, textarea등 실제 초점이 맞춰지는 태그에 적용되며 다른태그에 적용하려면 html의 tabindex속성(tabindex="-1") 활용해야 한다

`:read-only` - input태그에 readonly속성을 지정한 요소에 스타일 적용

`:required` - input태그에 required속성을 지정한 요소에 스타일 적용

예시
```html
//html
  <a href="#">a태그</a> 

//css
<style>
  a{color: blue;}
  a:hover{color: red;}
</style> 
```

- 순서에 따른 가상 클래스를 이용하면 class나 id값을 직접 사용하지 않고도 스타일을 지정할 수 있다.

`:nth-child(n)` 
- 부모안 모든 요소 중 n번째 자식 요소 선택
- 부모의 모든 자식요소 중 n번째를 찾고, 선택자도 맞으면 스타일 적용
- 태그 유형에 관계없이 형제들 순서로 선택
- 중간에 다른 유형의 요소들이 있어도 모두 자식으로 보고 순서만 구분

`A:nth-of-type(n)` 
- 부모 안 A요소 중 n번째 요소 선택
- 해당되는 태그 유형으로 형제 순서를 나눈 후 선택
- 중간에 다른 유형의 요소들이 있어도 모두 자식으로 선택되지 않고, 해당 요소만 선택되어 n번째 찾기

예시
```html
//html
<section>
  <h1>nth-child와 nth-of-type 차이</h1>
  <p>p1</p>
  <p>p2</p>    
</section>

//css
<style>
  p:nth-child(2)  {  color: red;  } /* 내용p1인 p태그 선택 */
  p:nth-of-type(2)  {  color: blue;  }  /* 내용p2인 p태그 선택 */
</style>
```
▶️ p:nth-child(2)의 경우

부모의 자식들 중 2번째에 해당하는 것을 찾음
내용 p1이 있는 태그는 p태그에 해당되므로 선택되어 스타일 적용
만약 해당되는 태그가 조건에 걸었던 p태그가 아니라면 선택되지 않음

▶️ p:nth-of-type(2)의 경우

부모의 자식들 중 p태그를 가진 요소들에서 2번째를 선택



#### 가상요소 선택자

- 문서 안 특정 부분에 스타일을 지정하기 위해 추가하는 요소
- 애초에 꾸미기(CSS)를 위한 존재
- 불필요한 html태그 없이 화면에 텍스트나 이미지를 넣을 수 있어 유용하다
- 실제 html에 존재하지 않는 가상의 요소를 만든 후 CSS를 적용하는 것
- 실제 존재하지 않는 요소를 만든다는 것이 가상클래스와의 차이점
- 가상클래스(:)와 다르게 구분된다(::)

⭐ 가상요소 종류

1. `::before`, `::after`
before - 지정된 요소의 실제 내용 앞에 가상요소 생성
after - 지정된 요소의 실제 내용 뒤에 가상요소 생성

이 요소들은 생성된 컨텐츠의 내부에 실제로 추가된다
생성된 요소들은 인라인 속성을 가지고 있다
보통 이미지나 글, 그라데이션 등을 추가하기에 좋다
html에 없는 요소를 생성하기 위해 content 라는 가짜속성을 추가해야만 한다
normal, string, image, counter, none, attr, " " 사용 가능

2. `::first-letter`, `::first-line`

first-letter - 각 요소의 첫 글자 선택
first-line - 각 요소의 첫 번째 줄 선택

블록 타입의 요소에만 사용 가능
사용 가능한 속성이 한정적인 편이다

사용가능 속성
```
ont, color, background, margin, padding, border, text-decoration, text-transform, line-height, clear, vertical-align 등
```

3. `::selection`

해당되는 요소들 중에 사용자가 선택한 요소(더블클릭, 드래그)를 선택

4. `::placeholder`

input태그가 가진 placeholder속성에 스타일을 적용



참고

[CSS선택자 1](https://www.codingfactory.net/12644)

[CSS선택자 2](https://abcdqbbq.tistory.com/15)