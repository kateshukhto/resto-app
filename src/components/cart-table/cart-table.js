import React, { createRef} from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, setAmount } from '../../actions';

const CartTable = ({items, deleteFromCart }) => {


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
                            <div className="cart__item-amount">{amount}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
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
    deleteFromCart
}

export default connect(mapStateToProps, mapDispacthToProps)(CartTable);