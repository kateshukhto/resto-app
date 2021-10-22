import React from "react";
import { connect } from 'react-redux';
import Success from "./modal-success";
import Failure from "./modal-failure";

const ModalInner = (isOrdered ) => {

  return (
    <>
      {
        isOrdered ? <Success/> : <Failure/>
      }
    </>
  )
}

const mapStateToProps = ({isOrdered }) => {
  return {
    isOrdered
  }
}

export default connect(mapStateToProps)(ModalInner)