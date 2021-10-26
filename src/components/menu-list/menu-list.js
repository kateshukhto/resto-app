import React from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import { addedToCart, menuError, getTotalPrice, setDisable } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';
import { withRouter } from 'react-router-dom';

import './menu-list.scss';

const  MenuList = withRouter(({match, ...props}) => { 
    const category = match.params.i;

    const {menu, loading, error, addedToCart, getTotalPrice, setDisable } = props;
 
    const checkedItems = category ?  menu.filter(i => i.category === category) : menu;

    if(error) {
        return <Error/>
    }

    if(loading){
        return <Spinner/>
    }

    return (
        <ul className="menu__list">
            {
                checkedItems.map(menuItem => {
                    return <MenuListItem 
                                key={menuItem.id} 
                                menuItem={menuItem}
                                onAddToCart={() => {
                                    addedToCart(menuItem.id)
                                    getTotalPrice()
                                    setDisable(menuItem.id, true)
                                }}/>
                    })
            }
        </ul>
    )   
});

const mapStateToProps = ({menu, loading, error}) => {
    return {
        menu,
        loading,
        error,
    }
}

export default connect(mapStateToProps, {addedToCart, menuError, getTotalPrice, setDisable})(MenuList);