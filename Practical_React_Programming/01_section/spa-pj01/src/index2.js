// import React, { useEffect } from  'react';
// import ReactDOM from  'react-dom';

  

// function  App() {
//     useEffect(()=>{
//         window.onpopstate  =  function  (event) {
//         console.log(`location: ${document.location},state: ${event.state}`);
//     }
// },[]);

// // 브라우저에서 페이지 전환 요청이 발생했을때는 자바스크립트가 알기 위해서 onpopstate이벤트 핸들러를 등록하고 있다.
// //useEffect는 이밴트ㅜ핸들러를 등록하거나 api를 호출하는 등의 부수효과를 발생시킬때 사용하는 리액트 함수
// // pushState 브라우저에게 알려주는 것

//     return (
//         <div>
//             <button  onClick={()  => window.history.pushState('v1','','/page1')}>
//                 page1
//             </button>
//             <button  onClick={()  => window.history.pushState('v2','','/page2')}>
//                 page2
//             </button>
//         </div>
//     )
// }

  

// // pushState의 매개변수
// // pushState('v1','','/page1') 첫번째 v1은 데이터를 의미
// // onpopstate에서 event.state가 있는데 onpopstate에서 넘겨주는 그 값이 첫번째 매개변수의 값
// // 두번쨰는 타이틀, 중요하지 않음
// // 세번쨰는 url 클릭하면 주소창에 설정한 값이 보임
// //

  

// ReactDOM.render(
//     <React.StrictMode>
//     <App></App>
//     </React.StrictMode>,
//     document.getElementById('root'),
// )