import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import './menu-burger.scss'

const MenuBurger = ({categories }) => {

  const[isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen])

  return (
    <>
      <div className={isOpen ? 'burger-btn active' : 'burger-btn'} 
          onClick={() => setIsOpen(!isOpen)}>
            <span/>
      </div>

      <div className={isOpen ? 'menu__burger active' : 'menu__burger'} 
          onClick={() => setIsOpen(false)}>
        <div className='blur'>
          <div className='menu__burger-content'>
            <ul className='menu__burger-list'>
              {
                categories ? categories.map((i, ind) => {
                  return (
                    <li className='menu__burger-wrap' key={ind}>
                      <img className='menu__burger-img' src={i.img} alt={i.category}/>
                      <Link className='menu__burger-link' 
                            to={`/${i.category}?`}>{i.category}
                      </Link>
                    </li>
                  )
                }) : <div>Waiting please...</div>
            }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({categories}) => {
  return {
    categories, 
  }
}

export default connect(mapStateToProps)(MenuBurger)