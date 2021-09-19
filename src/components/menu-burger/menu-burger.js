import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { toggleActive } from "../../actions";
import './menu-burger.scss'

class MenuBurger extends Component {

  render() {
    const { categories, toggleActive,  isActive} = this.props;

    return (
      <div className={isActive ? 'menu__burger active' : 'menu__burger'} onClick={() => toggleActive(false)}>
        <div className='blur'>
          <div className='menu__burger-content'>
            <ul className='menu__burger-list'>
              {
                categories ? categories.map((i, ind) => {
                  return (
                    <li className='menu__burger-wrap' key={ind}>
                      <img className='menu__burger-img' src={i.img} alt={i.category}/>
                      <Link className='menu__burger-link' to={`/${i.category}?`}>{i.category}
                      </Link>
                  </li>
                  )
              }) : <div>Waiting please...</div>
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({categories, isActive}) => {
  return {
    categories, 
    isActive
  }
}

export default connect(mapStateToProps, { toggleActive })(MenuBurger)