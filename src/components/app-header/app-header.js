import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuBurger from '../menu-burger/menu-burger';

const AppHeader = ({totalPrice}) => {

    return (
        <nav className="nav">
        <MenuBurger/>
            <div className='link-wrapper'>
                <Link  to='/' 
                className="nav__link" href="#"  >
                    Menu
                </Link>
                <Link to='/cart' className="nav__link" href="#">
                    <img className="nav__cart" src={cartIcon} alt="cart"></img>
                    Total: {totalPrice} $
                </Link>
            </div>
        </nav>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);