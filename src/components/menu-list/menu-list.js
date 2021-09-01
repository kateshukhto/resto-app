import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, addedToCart, menuError } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(error => this.props.menuError())
    }

    render() {
        const {menuItems, loading, error, addedToCart} = this.props;

        if(error) {
            return <Error/>
        }

        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem}
                                    onAddToCart={() => addedToCart(menuItem.id)}/>
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
    menuError
}


export default WithRestoService()(connect(mapStateToProps, mapDispacthToProps)(MenuList));