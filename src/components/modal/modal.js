import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions';
import './modal.scss'


const Modal = ({setModal, isOpenModal, children, goToMainPage}) => {
  return (
    <div 
      className={isOpenModal ? 'modal active' : 'modal'}
      onClick={() => {
        setModal(false)
        goToMainPage()
      }}>
      <div className={isOpenModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
        <button className='modal__btn'
        onClick={() => {
          setModal(false)
          goToMainPage()
        }}>&times;</button>
      </div>
    </div>
  )
};

const mapStateToProps = ({isOpenModal}) => {
  return {
    isOpenModal
  }
}



export default connect(mapStateToProps, {setModal})(Modal);