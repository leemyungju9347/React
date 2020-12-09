import React, { useState } from 'react';
// import Title from './Title'
// 컴포넌트요소의 key를 변경한다면?
export default function Counter() { 
    const [count,setCount] = useState(0);
    function onClick() {
        setCount(count + 1)
    }

    return (
            <div>
                <p>{`현재 카운트: ${count}`}</p>
                <button onClick={onClick}>증가</button>
            </div>
    )
}