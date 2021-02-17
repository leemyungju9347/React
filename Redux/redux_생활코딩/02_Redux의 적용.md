## store 생성
### 리덕스 설치
- npm 설치
```bash
$ npm install --save redux
```
- cdn 설치

### store 생성하기
리덕스를 이용한다는 것은 결국 store를 만들어서 상태(state)를 바꾸는 것이 리덕스의 핵심이다.

**적용순서**
#### 1. store를 생성
store가 생성되면 자동으로 state가 생긴다.

```js
// store를 전역변수에 저장
var store = Redux.createStore(reducer);
```

#### 2. reducer라는 함수를 만들어서 store에 주입해준다.
```js
// reducer를 이용해서 state값을 만들어줘야함
function  reducer(state,action) {
	// store를 처음 만들때 store에 있는 state에 초기값이 필요하다.
	if(state  ===  undefined) {
		// state가 객체를 리턴한다면 리턴한 값이 state의 초기값이 된다.
		return { color : 'yellow' }
	}
}
```

다음과 같이 콘솔로 출력해본 결과 초기화해준 컬러가 출력되는 것이 확인된다.
```js
console.log(store.getState()); // {color: "yellow"} 출력
```

#### 3. `getState()`로 store에 있는 state를 불러온 뒤 화면에 보여주도록 한다.
```js
function  red() {
	var state = store.getState();
	document.querySelector('#red').innerHTML  =  `
	<div 
		class="container" 
		id="component_red" 
		style="background-color:${state.color}"
	>
	<h1>red</h1>
	<input
		type="button"
		value="fire"
		onclick="
			document.querySelector('#component_red').style.backgroundColor='red';
		"
	/>
	</div>
`
}

red()
```

## reducer와 action을 이용해서 새로운 state 값 만들기
### dispatch
```js
store.dispatch({type:'CHANGE_COLOR', color:'red'})
```
- `type`은 반드시 있어야 한다.
- **`dispatch`는 store를 생성할때 제공한 reducer 함수를 호출하도록 약속되어 있다.**

### reducer 함수로 state값 변경
**reducer는 이전의 state값과 action을 받아서 다음의 state값을 리턴해주는 함수**

```js
function  reducer(state,action) {
	// state 초기화 
	if(state  ===  undefined) {
		return { color : 'yellow' }
	}
	// state복제값
	var newState;
	
	// state 값 변경
	if(action.type  ===  'CHANGE_COLOR' ) {
		newState  =  Object.assign({},state,{ color:'red' });
	}
	return  newState; // 복제한값 리턴
}
```

- reducer는 최초 한번은 무조건 실행
	- 콘솔로 출력했을때 state가 undefined를 출력한다.
- **state 값을 바로 바꾸지 말고, state값을 복제한뒤 복사본을 변경한 다음에 그 값을 리턴해줘야한다.**
	- 예측 가능한 코드를 작성하기 위해서
	- 불변성
```js
Object.assign({},{name :'mj'},{city:'seoul'})
// { name : 'mj', city: 'seoul' }
```

- 객체를 복제할때는 `Object.assign()`사용 
	- 첫번째 인자 : `{}`반드시 빈 객체

### 📃 정리
> - reducer함수는 store의 state값을 변경해준다. 
> - 어떻게? action의 값과 이전의state값을 이용해서 새로운 state 값을 리턴해주면 리턴된 값이 새로운 state값이다. 
> - 리턴값은 원본을 바꾸는 것이 아니라 이전값을 복제한 결과를 리턴해야지 리덕스를 사용하는 여러가지 효율을 최대한으로 활용할 수 있다.


## state의 변화에 따라서 UI 반영하기
state값이 바뀌었으니 그에 따라 화면 UI가 변경되어야 한다. 그렇기 위해서는 `render`를 호출해줘야 한다. 

> **즉, state의 값이 바뀔때마다 `render`가 통보받아서 그때마다 state값을 가져와 화면에 그려줄 수 있도록 한다.**

### subscribe
- **subscribe에 render를 등록해주면 된다.**
	- **dispatch가 state값을 바꾸고 난 다음에 호출하도록 약속되어 있기 때문에**

```js
store.subscribe(red) // UI를 변경해주는 red 함수
```

이렇게 한다면 state값이 바뀔때마다 red함수가 호출된다.


## Redux 선물: 시간여행과 로깅
### 불변성
원본을 불변해야한다. 변경할때는 복제하고 사용해야한다.

### 상태
- 리덕스는 단하나의 상태를 유지
	-  단일 스토어
- 애플리케이션의 상태가 궁금하면 reducer를 이용하면 된다.

## 출처
- [생활코딩 - Redux](https://inf.run/z6Uh)
