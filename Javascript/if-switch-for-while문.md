# Javascript if문, switch문, for문, while문

## if문

```js
// 1
if()

// 2
if() else

// 3
else if()
```

- `if`조건의 구분은 `truthy`의 유무다(참, 참 같은 값만 허용)
- `if`문을 `switch`문으로 반드시 변경할 수 있는 것은 아니다

## swtich문

```js
switch(){
  case 값: 명령
  break;
  default: 
}
```
- 주로 조건이 어떤 값으로 정확히 떨어질 때 사용
- `switch`문은 `if`조건문으로 변경 가능
- 1:1대응으로 좋은 문

```js
const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event=>{
    console.log(event) //event객체로 KeyboardEvent 확인 
    //event.key: 사용자가 누른 키
    if(event.key==='Enter')
    {
      console.log('wow!!!')
    }
    if(
      event.key ==='Enter'||
      event.key === 'Escape'
    ){
      console.log('Yap!!!')
    }
    switch (event.key){
      case 'Enter':
      case 'Escape':
        console.log('Yeah!')
        // break가 없으면 다음 case로 넘어가 비교하게 된다
        break; 
      case 'Shift':
        console.log('hello?')
        break;
      default: //마지막으로 비교 끝내고 종료
    }
  })
```

## for문

```js
for(시작기준; 종료기준; 변화방식) {
  명령
}
```

- 반복문
- 반복이 비교적 명시적일 때 사용
- 시작기준(시작조건, 초기화) / 종료기준(종료조건) / 변화방식(변화방식)을 순서대로 넣는다

```js
for(let i = 0; i < 10; i += 1){ 
  console.log(i)
}
```

▶️ 변수 `i`의 변화를 비교하면서 구문 반복, 종료조건이 `false`가 될 때 반복 종료


```js
const ulEl = document.querySelector('ul')

// 조건 true면 반복 실행
for (let i = 0; i < 10; i += 1){
  // createElement로 메모리상 요소 생성
  const liEl = document.createElement('li'); 
  liEl.textContent = i
  ulEl.appendChild(liEl)
}
```
### for of

- 보통 배열의 반복을 이용할 때 사용(배열 안 요소들은 보통 키/값 구조가 동일하므로)
- 블록 내부의 변수가 변경되지 않으므로 조건 변수로 `const` 사용 가능

```js
const users = [
  { name: 'sun', age: 20 },
  { name: 'cloud', age: 80 },
  { name: 'star', age: 5 },  
]

for (const user of users){
  console.log(user) 
}
/* 결과
  {name: 'sun', age: 20}
  {name: 'cloud', age: 80}
  {name: 'star', age: 5}
/*
```

__for(기본형)로 작성한 경우__

```js
for (let i = 0; i < users.length; i += 1){
  console.log(users[i])
}
```

### for in

- 객체의 반복을 이용할 때 사용하면 좋다
- 값을 찾을 수 있다

```js
const person = {
  name: 'joe',
  age: 52,
  isValid: true
}

for (const key in person){
  console.log(person[key])
}
/* 결과
  joe
  52
  true
*/
```

## while문, do while문

- 주로 무한루프에서 멈출 상황이 필요한 경우 사용한다

⭐ `while`: 조건이 `falsy`면 시작하지 않는다

```js
//시작조건
let i = 0

//종료조건
while (i < 3){
  //명령 실행
  console.log(i)

  //변화
  i += 1
}
```

⭐ `do while`: 조건이 `falsy`여도 최초 1번은 실행한다

```js
let j = 0
do {
  j += 1
} while (j < 3)
```