// useState 는 초기값을 넣어서 사용, 배열을 반환하는데
// 첫번째는 상태값 두번째 아이템에는 상태값 변경함수가 반환이 된다.

// 두번 증가 시킬 의도로 코드 작성
import React, {useState, useEffect} from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    // 두번 증가 시킬 의도로 코드 작성 -> but 의도한대로 동작하지 않음
    // 왜 ? 상태값 변경 함수는 비동기이면서, batch로 처리되기 떄문에
    // 리액트는 효율적으로 렌더링하기 위해서 여러개의 상태값 변경 요청을 배치로 처리한다.
    // 따라서 onclick을 클릭해도 로그는 한번만 출력된다.

    // - 만약에 상태값 변경 함수를 동기로 처리한다면 하나의 상태값 변경함수가 호출될때마다 화면을 다시 그리기 떄무넹 성능이슈가 생김
    // - 만약 동기로 처리하고 매번 화면을 다시 그리지 않는다면 ? UI 데이터와 화면간의 불일치가 발생해서 혼란스러울 수 있다.
    // useState(0); 상태값이 숫자가 아니라 객체라고 해도 괜찮을까 생각한다면? 원하는대로 동작하지 않을것이다.

    // 제대로 해결하려면 상태값 변경함수에 함수를 입력하도록 한다.
    // 두개씩 증가! 해결됐다

    // 이렇게 함수로 입력하면 처리되기 직전에 상태값을 매개변수로 받기 때문에 동작하는 것이다.

    
    function onClick() {
        // setCount(count+1);
        // setCount(count+1);
        ReactDOM.unstable_batchedUpdates(()=>{
            setCount(v=> v+1)
            setCount(v=> v+1)
        })
        
    }

    useEffect(()=>{
        window.addEventListener('click',onClick);
        return () => window.removeEventListener('click',onClick)
    })

    // 예를 들면 이벤트 핸들러를 등록을 해서 사용하는 경우에 리액트 내부에서 관리하지 않음 , 배치로 처리 x
    // 만약 외부의 이벤트 핸들러를 등록해서 사용할떄 배치로 처리하고 싶다면? 
    // ReactDOM.unstable_batchedUpdates(()=>{
    //     setCount(v=> v+1)
    //     setCount(v=> v+1)
    // })

    console.log('render called');

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
        </div>
    )

}

// 여기서 onClick은 리액트 내부에서 관리되는 리액트 요소에 입ㄹ력되어있어서 배치로 처리된다.
// 리액트에서 관리하지 않는 외부에 호출하는 경우에는 배치로 동작하지 않는다-> 그런 경우에는 상태값 변경 함수를 호출할때마다 렌더링이 발생할것이다.