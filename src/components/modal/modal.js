import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions';
import { withRouter } from 'react-router';
import './modal.scss'


const Modal = withRouter(({history, setModal, isOpenModal, children}) => {
  return (
    <div 
      className={isOpenModal ? 'modal active' : 'modal'}
      onClick={() => {
        setModal(false)
        history.push('/')
      }}>
      <div className={isOpenModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
        <button className='modal__btn'
        onClick={() => {
          setModal(false)
          history.push('/')
        }}>&times;</button>
      </div>
    </div>
  )
})

const mapStateToProps = ({isOpenModal}) => {
  return {
    isOpenModal
  }
}



export default connect(mapStateToProps, {setModal})(Modal);