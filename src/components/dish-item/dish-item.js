import React from 'react';
import { connect } from 'react-redux';
import { menuLoaded, addedToCart, menuError, getTotalPrice, setDisable } from '../../actions';
import { withRouter } from 'react-router-dom';
import './dish-item.scss'

const DishItem = withRouter(({match, history, ...props}) => {
    const {menu, addedToCart, getTotalPrice, setDisable} = props;

    const itemId = match.params.id;

    const item = menu.find(item => +item.id === +itemId);


    const { title, price, url, category, description, id, disable} = item;

    return (
        <div className='dish__wrapper'>
            <div className="dish__item">
                <img className="dish__img" src={url} alt={title}></img>
            <div className='dish__content'>
                <div className="dish__title">{title}</div>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price} $</span></div>
                <div className='dish__descr'>{description}</div>
                <button disabled={disable} onClick={() => {
                    addedToCart(id)
                    getTotalPrice()
                    setDisable(id, true)
                }} className="menu__btn">Add to cart</button>  
            </div>
                <div 
                onClick={() => history.goBack()}
                className='dish__close'
                >&times;</div>
            </div>
        </div>
    )
    
});


const mapStateToProps = ({menu}) => {
    return {
        menu
    }
}

export default connect(mapStateToProps, {menuLoaded, addedToCart, menuError, setDisable, getTotalPrice})(DishItem);