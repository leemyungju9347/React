// 리액트 요소
const element = (
    <a key="key1" style={{width:100}} href="http://google.com">click here</a>
)

console.log(element);

// 리액트 요소를 출력한 결과
// 객체 형식 
// DOM 요소이기 떄문에 문자열이 입력이 됐지만, 컴포넌트같은 경우에는?
const consoleLogResult = {
    type: 'a', // a 태그
    key: 'key1', // key 속성을 넣어줬기떄문
    ref: null,
    props: {
        href:'http://google.com',
        style:{
            width:100,
        },
        children:'click here',
    }
    // ...
}
   