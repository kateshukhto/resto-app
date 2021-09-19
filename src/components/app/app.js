import React from 'react';
import {MainPage, CartPage, DishPage} from '../pages/index';
import AppHeader from '../app-header';
import { Route, Switch} from 'react-router';
import MenuBurger from '../menu-burger/menu-burger'

import Background from './food-bg.jpg';

const App = () => {
    return (
       <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        <AppHeader/>
        <Switch>
            <Route exact path='/cart' component={CartPage}/>
            <Route exact path='/:i?' component={MainPage}/>
            <Route exact path='/dish/:id?' component={DishPage}/>
        </Switch>
        <MenuBurger/>
        </div>
    )
}

export default App;