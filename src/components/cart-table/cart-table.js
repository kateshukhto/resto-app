import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, getTotalPrice, incAmount, dcrAmount} from '../../actions';

const CartTable = ({items, deleteFromCart, getTotalPrice, incAmount, dcrAmount }) => {

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {                        
                        const {title, price, url, amount, id} = item;
                       return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className='cart__item-btn'>
                                <button className='cart__btn' onClick={() => {
                                    dcrAmount(id)
                                    getTotalPrice()
                                }}>&minus;</button>
                                <div className="cart__item-amount">{amount}</div>
                                <button className='cart__btn' onClick={() => { 
                                    incAmount(id)
                                    getTotalPrice()
                                }}>&#43;</button>
                            </div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={() => {
                                deleteFromCart(id)
                                getTotalPrice()
                            }} className="cart__close">&times;</div>
                        </div>
                       )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispacthToProps = {
    deleteFromCart,
    getTotalPrice,
    incAmount, 
    dcrAmount
}

export default connect(mapStateToProps, mapDispacthToProps)(CartTable);