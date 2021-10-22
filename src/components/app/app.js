import React from 'react';
import {MainPage, CartPage, DishPage} from '../pages/index';
import AppHeader from '../app-header';
import { Route, Switch} from 'react-router';
import FormContainer from '../form/FormContainer';


import Background from './food-bg.jpg';

const App = () => {

    return (
        <div style={{background: `url(${Background}) no-repeat center top fixed`, backgroundSize: 'cover', minHeight: '100vh', overflow: 'scroll'}} className="app">
         <AppHeader/>
         <Switch>
             <Route exact path='/cart' component={CartPage}/>
             <Route exact path='/form' component={FormContainer}/>
             <Route exact path='/:i?' component={MainPage}/>
             <Route exact path='/dish/:id?' component={DishPage}/>
         </Switch>
 
         </div>
     )
}



export default App;