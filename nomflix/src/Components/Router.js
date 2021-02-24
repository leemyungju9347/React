import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from 'Routes/Home/index';
import TV from 'Routes/TV/index';
import Search from 'Routes/Search/index';
import Detail from 'Routes/Detail/index';

function RouterComponent() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tv" exact component={TV}/>
                <Route path="/tv/popular" render={()=> <h1>Popular</h1>} />
                <Route path="/search" component={Search}/>
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/show/:id" component={Detail}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router> 
    )
}

export default RouterComponent

    

