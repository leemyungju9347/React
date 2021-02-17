import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

function RouterComponent() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tv" exact component={TV}/>
                <Route path="/tv/popular" render={()=> <h1>Popular</h1>} />
                <Route path="/search" component={Search}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router> 
    )
}

export default RouterComponent

    

