import React from 'react';
import {MainPage, CartPage, DishPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch} from 'react-router';

import Background from './food-bg.jpg';

const App = () => {
    return (
       <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader total={50}/>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/cart' component={CartPage}/>
            <Route exact path='/:id?' component={DishPage}/>
        </Switch>
        </div>
    )
}

export default App;