import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, addedToCart, menuError, getTotalPrice } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';
import { withRouter } from 'react-router-dom';

import './dish-page.scss'

class DishPage extends Component {
    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(error => this.props.menuError())
    }
    

    render() {
        const {menuItems, loading, error, addedToCart, getTotalPrice} = this.props;
        const ItemId = this.props.match.params.id;
        const item = menuItems.find(item => +item.id === +ItemId);

        const { title, price, url, category, description, id} = item;

        if(error) {
            return <Error/>
        }

        if(loading){
            return <Spinner/>
        }


        return (
            <div className='dish__wrapper'>
                <div className="dish__item">
                    <img className="dish__img" src={url} alt={title}></img>
                <div className='dish__content'>
                    <div className="dish__title">{title}</div>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <div className='dish__descr'>{description}</div>
                    <button onClick={() => {
                        addedToCart(id)
                        getTotalPrice()
                    }} className="menu__btn">Add to cart</button>  
                </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispacthToProps = {
    menuLoaded,
    menuRequested, 
    addedToCart, 
    menuError, 
    getTotalPrice
}


export default withRouter(WithRestoService()(connect(mapStateToProps, mapDispacthToProps)(DishPage)));