// 리액트 요소는 불변객체기 떄문에 변경하려고 하면 에러가 발생한다.
// 리액트 요소는 변경할 수가 없다.

const element = <a href="http://google.com">click here</a>
element.type = 'b' // 에러발생

// 변경된 부분만 실제 돔에 반영됨
