import React from 'react';
import DishItem from '../dish-item/dish-item';
import { connect } from 'react-redux';
import { menuLoaded, addedToCart, menuError, getTotalPrice, setDisable } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';
import { withRouter } from 'react-router-dom';

const DishItemContainer = withRouter(({match, history, ...props}) => {
    const {menu, loading, error, addedToCart, getTotalPrice, setDisable} = props;

    function goBack() {
        history.goBack()
    }
    
    const itemId = match.params.id;

    const item = menu.find(item => +item.id === +itemId);

    if(error) {
        return <Error/>
    }

    if(loading){
        return <Spinner/>
    }

    return (
        <DishItem item={item} 
            onAddToCart={() => {
                addedToCart(item.id)
                getTotalPrice()
                setDisable(item.id, true)
            }}
            goBack={goBack}
        />
    )
    
});

const mapStateToProps = ({menu, loading, error}) => {
    return {
        menu,
        loading,
        error
    }
}

export default connect(mapStateToProps, {menuLoaded, addedToCart, menuError, setDisable, getTotalPrice})(DishItemContainer);