import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import all components
import Home from './components/Home/home';
import Search from './components/Search/search';


class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact  component={Home}/>
                    <Route path="/Search:name" exact component={Search} /> 
                </Switch>
            </div>
        );
    }
}

export default Routes; 