import React, { useState } from 'react';
import Title from './Title'

// Title에게 값을 전달해주는 부모 컴포넌트 
// export default function Counter() { 
//     const [count,setCount] = useState(0);
//     function onClick() {
//         setCount(count + 1)
//     }

//     return (
//             <div>
//                 {/* 
//                         title이라는 속성값을 내려주고 있다. 
//                         이때 count라는 상태값을 기반으로 title값을 계산하고 있다.
//                         count값이 변경되면 counter컴포넌트는 다시 렌더링이 되고 title컴포넌트도 다시 렌더링이 된다.
//                         따라서 부모가 렌더링 될 떄 마다 자식도 렌더링 됨

//                         이때 자식의 속성값이 변경되지 않았는데 굳이 렌더링할 필요 없을 떄는?
//                         속성값이 변경될 때만 자식 컴포넌트가 렌더링 되도록 하고 싶다면 
//                         react.memo를 사용할 수 있다.

//                         같은 컴포넌트를 여러번 사용할 수도 있다.
//                         이때 같은 컴포넌트는 상태값을 위한 자신만의 메모리 공간이 있어서 같은 컴포넌트라고 하더라도 자신만의 상태값이 존재한다.

//                         각자 사용된 곳에서 상태값을 유지한다.

//                         속성값은 불변변수-> 
//                         - 값을 변경하면 에러발생
//                         - 자식 컴포넌트에 전달되는 속성값은 상위 컴포넌트에서 관리하기 떄문에 수정하지 못하도록 막혀있음
//                         - 변경하려고 시도하면 read only라는 에러 발생
//                         - 데이터를 변경하려면 상위컴포넌트에서 관리하는 상태값 변경 함수를 이용해야함

//                         상태값은 불변변수가 아님
//                         - but 상태값도 불변변수로 관리하는게 좋음

//                         객체를 불변변수로 관리하는 방법은 스프레드 연산자를 사용하는것
                        
//                 */}
//                 <Title title={`현재 카운드:${count}`}/> 
//                 <button onClick={onClick}>증가</button>
//             </div>
//     )
// }


// 객체를 불변변수로 관리하는 방법
// 은 스프레드 연산자를 사용하는것
export default function Counter() { 
        const [count,setCount] = useState({value1:0,value2:0,value:0});
        function onClick() {
            setCount({ ...count, value:count.value + 1 }); // count를 객체에 있는 모든 속성을 풀어놓고, 변경하고자 하는 값만 할당해주는 것
        }
    
        return (
                <div>
                   {count.value > 0 && <Title title={`현재 카운드:${count.value}`}/> }
                    <button onClick={onClick}>증가</button>
                </div>
        )
    }