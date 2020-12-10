import React, {useState} from 'react';

export default function App() {
    const [count1,setCount1] = userState(0); 
    const [count2,setCount2] = userState(0);

    function onClick() {
        setCount1(count1 + 1) // 먼저 적용
        setCount2(count2 + 1) // 다음 순서로 적용
    }

    const result = count1 >= count2; // 컴포넌트에서 이러한 수식을 작성했다면 이 값은 항상 true 일 것

}