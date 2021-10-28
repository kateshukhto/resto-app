import React, { Component } from 'react';
import {MainPage, CartPage, DishPage, FormPage } from '../pages/index';
import AppHeader from '../app-header';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, setLoading, menuError, getTotalPrice, getCategories, setItems } from '../../actions';
import './app.scss'

class App extends Component {
    componentDidMount() {
        if(sessionStorage.getItem("menuItems")){
            this.props.setLoading()
            const menu = JSON.parse(sessionStorage.getItem("menuItems"))
            this.props.menuLoaded(menu)
            this.props.getCategories()
            if(sessionStorage.getItem("items")) {
                this.props.setLoading()
                const menu = JSON.parse(sessionStorage.getItem("items"))
                this.props.setItems(menu)
                this.props.getTotalPrice()
            }
        } else {
            this.props.setLoading()
            const {RestoService} = this.props;
            RestoService.getMenuItems()
            .then(res => {
                this.props.menuLoaded(res)
                sessionStorage.setItem("menuItems", JSON.stringify(res))
            })
            .then(() => this.props.getCategories())
            .catch(() => this.props.menuError()) 
        }
    }
    
    render() {
        return (
            <div className="app">
             <AppHeader/>
             <Switch>
                 <Route exact path='/cart' component={CartPage}/>
                 <Route exact path='/form' component={FormPage}/>
                 <Route exact path='/:i?' component={MainPage}/>
                 <Route exact path='/dish/:id?' component={DishPage}/>
             </Switch>
             </div>
         )
    }
}

const mapDispacthToProps = {
    menuLoaded,
    setLoading,
    menuError, 
    getTotalPrice,
    getCategories, 
    setItems
}


export default WithRestoService()(connect(null, mapDispacthToProps)(App));