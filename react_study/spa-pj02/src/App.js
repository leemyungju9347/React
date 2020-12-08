import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Rooms from './Rooms'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link> 
        <br/>
        <Link to="/photo">사진</Link> 
        <br/>
        <Link to="/rooms">방 소개</Link> 
        <br/>
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo}/>
        <Route path="/rooms" component={Rooms}/>
      </div>
    </BrowserRouter>
  );
}
// exact 정확하게 라우팅 결과를 불러오기 위한 동작

function Home() {
  return <h2>이곳은 홈페이지입니다.</h2>
}

function Photo() {
  return <h2>여기서 사진을 감상하세요.</h2>
}

