
import React, {useState,useEffect} from 'react';

export default function App() {
    const [count,setCount] = userState(0); 

    useEffect(()=>{
        document.title = `업데이트 횟수: ${count}`;
    });
    // 첫번째 매개변수로 함수를 입력을 하면 이 함수는 컴포넌트가 렌더링 된 후에 호출된다.
    // 즉 렌더링 결과가 실제 돔에 반영되고 비동기로 호출이 된다.

    // 버튼클릭마ㅏ다 컴포넌트는 렌더링되고 부수효과(useEffect)가 실행된다.

    // 여기서 입력하는 첫번째 매개변수 함수를 부수효과 함수라고 부른다. 

    return <button onClick={()=> setCount(count + 1)}>increase</button>

}
