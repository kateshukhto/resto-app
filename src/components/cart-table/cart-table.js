import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart, getTotalPrice, incAmount, dcrAmount, getPriceOCertainItem, setModal} from '../../actions';
import Modal from '../modal/modal';
import FormContainer from '../form/FormContainer';

const CartTable = (
    {items, deleteFromCart, getTotalPrice, 
    incAmount, dcrAmount, getPriceOCertainItem, setModal, isLoading}) => {

    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {                        
                        const {title, price, url, amount, id, total} = item;
                       return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">
                                {title}
                                <span className='cart__item-w'>{price}$ per one</span>
                            </div>
                            <div className='cart__item-btn'>
                                <button className='cart__btn' onClick={() => {
                                    dcrAmount(id)
                                    getPriceOCertainItem(id)
                                    getTotalPrice()
                                }}>&minus;</button>
                                <div className="cart__item-amount">{amount}</div>
                                <button className='cart__btn' onClick={() => { 
                                    incAmount(id)
                                    getPriceOCertainItem(id)
                                    getTotalPrice()
                                }}>&#43;</button>
                            </div>
                            <div className="cart__item-price">{total}$</div>
                            <div onClick={() => {
                                deleteFromCart(id)
                                getTotalPrice()
                            }} className="cart__close">&times;</div>
                        </div>
                       )
                    })
                }
            </div>
            {items.length < 1 ? null : <button 
                className="menu__btn order__btn"
                onClick={() => setModal(true)}>Order Now</button>}
            <Modal>
                <FormContainer/>
            </Modal>
        </>
    );
};

const mapStateToProps = ({items, isLoading}) => {
    return {
        items,
        isLoading
    }
}

const mapDispacthToProps = {
    deleteFromCart,
    getTotalPrice,
    incAmount, 
    dcrAmount,
    getPriceOCertainItem, 
    setModal
}

export default connect(mapStateToProps, mapDispacthToProps)(CartTable);