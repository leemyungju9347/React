import React from 'react';
import {Route, Link} from 'react-router-dom';

export default function Rooms({match}) {
    return (
        <div>
            <h2>여기는 방을 소개하는 페이지입니다.</h2>
            <Link to={`${match.url}/blueRoom`}>파란방입니다.</Link>
            <br/>
            <Link to={`${match.url}/greenRoom`}>초록방입니다.</Link>
            <br/>
            <Route path={`${match.url}/:roomId`} component={Room}></Route>
            <Route exact path={match.url} render={()=><h3>방을 선택해주세요.</h3>}></Route>
        </div>
    )
}

// match란?
// 라우터 컴포넌트로 렌더링을 하면 해당 컴포넌트의 속성값으로 match라는 속성값을 넣어준다.
// match에는 url이라는 속성이 있다. 의미는 Rooms컴포넌트가 렌더링 도ㅒㅆ을 당시에 매치됐던 그 url의 일부분
// match.url은 rooms로 되어있다고 생각하면 됨

// exact 부분은 /rooms 일떄만 렌더링됨

function Room({match}) {
return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>
}