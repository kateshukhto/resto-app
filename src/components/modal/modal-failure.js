import React from "react";
import { connect } from 'react-redux';
import Spinner from "../spinner";

const Failure = ({isLoading}) => {

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      <h1 style={{color: '#29a745'}}>Something went wrong. <br/> Try again</h1>
    </>
  )
}

const mapStateToProps = ({isLoading}) => {
  return {
    isLoading
  }
}

export default connect(mapStateToProps)(Failure);