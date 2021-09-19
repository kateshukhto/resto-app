import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, addedToCart, menuError, getTotalPrice, getCategories } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';
import { withRouter } from 'react-router';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .then(() => this.props.getCategories())
        .catch(error => this.props.menuError())
    }

    render() {
        const category = this.props.match.params.i;

        const {menuItems, loading, error, addedToCart, getTotalPrice} = this.props;

        const checkedItems = category ?  menuItems.filter(i => i.category === category) : menuItems;

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
                                    }}/>
                    })
                }
            </ul>
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
    getTotalPrice,
    getCategories
}


export default withRouter(WithRestoService()(connect(mapStateToProps, mapDispacthToProps)(MenuList)));