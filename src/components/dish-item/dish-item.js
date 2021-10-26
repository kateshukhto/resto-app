import React from 'react';
import './dish-item.scss'

const DishItem = ({item, onAddToCart, goBack}) => {
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
                    onAddToCart()
                }} className="menu__btn">Add to cart</button>  
            </div>
                <div 
                onClick={() => {goBack()}}
                className='dish__close'
                >&times;</div>
            </div>
        </div>
    )
    
};


export default (DishItem);