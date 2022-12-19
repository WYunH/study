// ==================================================================
//                  함수 활용 + DOM 간단 조작해보기
// ==================================================================

const ajax = new XMLHttpRequest();
//Open API
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

ajax.open('GET', url)
ajax.send();

// 이벤트리스너 등록
document.querySelector('#btn').addEventListener('click', ()=>{
  // console.log(ajax.response)  
  const {drinks} = JSON.parse(ajax.response)
  
  // .strDrink .strDrinkThumb .strCategory 
  const data = { 
    name: drinks[0].strDrink ||  '이름', 
    category: drinks[0].strCategory || '카테고리', 
    img: drinks[0].strDrinkThumb || '이미지'
  }
  
  //함수 호출
  renderData(data)
})

//함수 선언문
function renderData(data){
  document.querySelector('#root').innerHTML = `<h3>${data.name}</h3>
  <p>카테고리: ${data.category}</p>
  <img src="${data.img}" width="300" />`

  // css로 버튼 숨기기
  document.querySelector('button').style.display = "none"
}

