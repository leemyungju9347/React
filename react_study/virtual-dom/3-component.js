// 컴포넌트를 이용해서 리액트요소를 만드는 경우에는 type을 보면 컴포넌트 함수가 입력되어 있다.

function Title({title,color}) {
    return <p style={{ color }}> {title} </p>
}

const element = <Title title="안녕하세요" color="blue"></Title>

const consoleLogResult = {
    type:Title, // 이 함수를 이용해서 리액트는 렌더링을 위한 충분한 정보를 얻을 수 있다. Title함수를 리액트가 실행하면 함수 안에 있는 p태그의 값을 얻을 수 있다.
    props: {title:'안녕하세요',color:'blue'}
}