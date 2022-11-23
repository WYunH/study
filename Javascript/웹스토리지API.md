# 웹 스토리지 API(Web Storage API)

- 브라우저에서 제공하는 데이터 저장 기능
- '키'-'값'의 형태를 가진다
- 저장된 데이터들은 서버로 전송하지 않기 때문에 원하는 정보만 서버로 보내서 저장할 수 있다
- sessionStorage와 localStorage 두 가지로 분류된다

## 세션스토리지 sessionStorage 

- 페이지 세션이 유지되는 동안 브라우저가 저장공간 제공
- 브라우저 탭이 닫히거나 꺼지면 데이터 사라짐
- 저장 공간이 최대 5MB, 쿠키보다 큼

## 로컬스토리지 localStorage

- 저장 공간이 쿠키, 세션스토리지보다 큼
- 유효기간 없이 데이터를 저장
- 세션스토리지와 다르게 브라우저를 닫고 열어도 데이터 남아있음
- 자바스크립트를 사용하거나 브라우저 캐시, 로컬 저장 데이터를 지워야만 데이터가 사라짐
- 사용자의 정보를 로컬에 영구적으로 저장하는 것
- 주로 자동 로그인 저장기능 같은 것을 만들 때 사용
​

❗ __주의사항__

- 웹 스토리지는 오직 문자형 데이터 타입만 지원하기 때문에 JSON 형태로 데이터를 읽고 쓰는것이 좋다
- HTML5를 지원하지 않는 브라우저의 경우 사용 불가
- 브라우저에서 쉽게 확인가능하다(비밀번호같은 중요한 정보는 저장하지 말자)

예시
```js
// sdtItem으로 로컬스토리지에 데이터 추가
localStorage.setItem("key", value);

// getItem으로 로컬스토리지에 저장했던 데이터 가져오기
localStorage.getItem("key");

// removeItem으로 로컬스토리지에서 원하는 데이터 삭제
localStorage.removeItem("key");

// 모든 로컬스토리지 데이터 삭제
localStorage.clear();

// 로컬스토리지에 저장된 키/값 쌍의 개수 확인
localStorage.length;

// 반복문과 로컬스토리지의 key를 이용해 데이터 가져오기
for(let i =0; i < localStorage.length; i++){
   console.log(localStorage.getItem(localStorage.key(i)));
}

//json으로 로컬스토리지에 저장
localStorage.setItem('json', JSON.stringify({a: 0, b: 1, c: 2}))

//로컬스토리지의 데이터 json으로 불러오기
JSON.parse(localStorage.getItem('json')) // {a: 0, b: 1, c: 2} 출력
```

참고

[Web Storage API 1](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)  
[Web Storage API 2](https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048)