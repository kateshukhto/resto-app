import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleActive } from '../../actions';

const AppHeader = ({totalPrice, isActive, toggleActive}) => {

    return (
        <nav className="nav">
            <div className={isActive ? 'burger-btn active' : 'burger-btn'} onClick={() => toggleActive(!isActive)}>
                <span/>
            </div>

            <div className='link-wrapper'>
                <Link to='/' className="nav__link" href="#">
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

const mapStateToProps = ({totalPrice, isActive}) => {
    return {
        totalPrice, 
        isActive
    }
}

export default connect(mapStateToProps, {toggleActive})(AppHeader);