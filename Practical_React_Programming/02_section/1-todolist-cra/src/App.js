// import React from 'react';
// import ReactDOM from 'react-dom'
// import Counter from './Counter'

// export default function App() {
//     // const [color,setColor] = useState('red');

//     // function onClick() {
//     //     setColor('blue'); // 값을 변경할때는 setColor함수를 호출해준다.
//     // }

//     return (
//         <>
//             <Counter></Counter> 
//             {ReactDOM.createPortal(
//                 <div>
//                     <p>안녕하세요.</p>
//                     <p>실전 리액트 프로그래밍입니다.</p>
//                 </div>,
//                 document.getElementById('something'),
//             )}
            
//         </>
        
//     )
// }

/* <button style={ {backgroundColor : color} } onClick={onClick}>
                좋아요
            </button> */

            // 변경된 부분만 실제 돔에 반영됨?????
import React, {useState,useEffect} from 'react';
import CounterChange from './CounterChange'

export default function App() {
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setSeconds(v=>v+1) // 1초에 한번씩 seconds 라는 상태값을 증가 시킴
        }, 1000);
    });

    return (
        <div>
            {seconds % 2 === 0 && <CounterChange/>}
            <h1 style={{color:seconds % 2 ? 'red' : 'blue' }}>안녕하세요.</h1>
            <h2>지금까지 {seconds}초가 지났습니다.</h2> 
        </div>
    )
}
// 브라우저에서 Elements 창을 확인해봤을때 {seconds} 만 변경됨
// 색을 변경했을때도 변경되는 부분만 색이 바뀜

// DOM요소의 key를 변경해보면?? <div key={seconds}>
// 해당 dom요소가 삭제됐다가 추가됐다가 함
// 이렇게 key 를 변경하면 리액트는 이것은 다른 요소라고 판단해서 이전 것은 삭제하고 새로 만들어서 붙이는 것

// 컴포넌트요소의 key를 변경한다면? <CounterChange key={seconds}/>
// 증가 버튼을 눌렀더니 0으로 계속 초기화가 된다 
// 해당 컴포넌트는 삭제됐다가 다시 추가가 됨
// 이렇게 컴포넌트가 삭제되는 거ㅏㅅ을 unmount라고 부르고 컴포넌트가 추가되는 것을 mount라고 부른다.
// 컴포넌트가 마운트 됐을떄는 useState에서 첫번째 매개변수로 입력된 초기값이 상태값으로 할당된다.
// 따라서 1초에 한번씩 0이 할당되는 것을 볼 수 있다.
// 이렇게 컴포넌트에서 key를 변경하면 컴포넌트는 unmount어ㅏ mount 를 반복한다.


// 조건부렌더링도 비슷한 효과를 볼 수 있다.
// {seconds % 2 === 0 && <CounterChange/>}
// 컴포넌트가 unmount되면서 현재 카운트가 0으로 초기화 되는 것을 볼 수 있다.