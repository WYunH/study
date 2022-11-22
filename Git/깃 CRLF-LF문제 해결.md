# Git CRLF / LF 문제 해결하기(Delete ␍ prettier/prettier)

깃에서 협업 프로젝트를 진행할 때 접하게 되는 문제

원격 저장소에서 받은 프로젝트에 prittier, eslint 적용 시 나타나는 경우가 있다

이는 Windows와 Unix나 Mac OS에서 문장을 끝낼 때 줄바꿈으로 사용하는 문자(개행 문자)가 다르기 때문에 발생한다

## CR(Carriage-Return)

`\r`

커서를 줄 올림 없이 가장 앞으로 옮기는 것

## LF(Line Feed)

`\n`

커서는 그 자리에 있는 상황에서 종이만 한 줄 올려 줄을 바꾸는 것

### 차이점

- Windows는 CR과 LF 사용
- Unix, Mac OS는 LF 만 사용

상황 
1. 윈도우 사용자가 커밋한 코드 -> 맥 사용자가 받아서 사용
2. 맥 사용자가 커밋한 코드 -> 윈도우 사용자가 받아서 사용

상황1, 2에 의해 개행문자의 변경이 일어나면서 prittier, eslint 옵션까지 적용 시 문제로 인식

실제 코드의 변경이 없는데에도 불구하고, 단순히 이 줄바꿈 방식의 차이 때문에 커밋하게 될 수 있어 문제를 만들어낼 수 있다

즉 OS가 서로 달라도 줄바꿈에서 문제가 발생하지 않도록 설정하는 것이 필요하다


### 해결 방법 1: Git 설정

적용되어 있는 설정부터 확인

```
// git 전역설정 확인
git config --global core.eol native

git config --global --list|grep core.autocrlf
```

아래의 세 가지 설정이 가능하다

1. core.autocrlf = false
- 기본 설정, git이 CRLF/LF의 설정에 관여하지 않는다

2. core.autocrlf = true
- git이 Windows에서 저장소로 보낼 때에는 CRLF -> LF로 자동 변경, 저장소에서 가져올 때에는 LF -> CRLF로 자동 변경


윈도우즈 설정
```
git config --global core.autocrlf true
```

3. core.autocrlf = input
- LF 사용하기. 리눅스, 맥, 유닉스는 LF만 사용하므로 이 설정을 적용하면 된다

유닉스, 리눅스, 맥 설정
```
git config --global core.autocrlf input
```


### 해결 방법 2: 프로젝트 안 .gitattributes 사용

.gitattributes파일 생성 후 아래 설정 적용

- 파일을 저장소에 커밋하면 다른 사용자는 별도의 설정이 필요없이 줄 바꿈 문자가 변환되어 편리하다

```
* text=auto eol=lf
```

### 해결 방법 3: 프로젝트 안 .eslintrc.js 파일 설정

eslint + prettier 설정을 함께 적용할 때 사용

prettier가 줄바꿈 옵션을 자동으로 처리하도록 적용한다

```
extends: [
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  }
``` 

예시

React CRA 환경에서 eslint 설정 적용한 경우 
```
  //React CRA 프로젝트에서 적용 
  
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended', 
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
 ```

