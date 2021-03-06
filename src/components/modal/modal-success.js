import React from "react";
import { connect } from 'react-redux';
import Spinner from "../spinner";

const Success = ({isLoading}) => {

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      <h1 style={{color: '#29a745'}}>Your order is accepted! <br/> Check your email</h1>
    </>
  )
}

const mapStateToProps = ({isLoading}) => {
  return {
    isLoading
  }
}

export default connect(mapStateToProps)(Success);