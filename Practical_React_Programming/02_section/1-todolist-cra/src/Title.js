import React from 'react';

// export default function Title(props) { // props 는 부모컴포넌트가가 전달해주는 속성값
//     return <p>{props.title}</p>
// }

// export default function Title({title}) { // 객체 비구조화 문법 이용-> 더간편하게 작성
//         return <p>{title}</p>
// }

function Title({title}) { 
    console.log('title render');
    return <p>{title}</p>
}
export default React.memo(Title)

// 이렇게 하면 속성값 title이 변경될때만 이 컴포넌트가 렌더링 된다.