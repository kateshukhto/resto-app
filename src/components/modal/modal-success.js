import React, { Component } from "react";
import Modal from "./modal";
import {connect} from 'react-redux';
import {setModal} from '../../actions'

class Success extends Component {

  componentDidMount() {
    this.props.setModal(true)
  }
  
  render() {
    return (
      <Modal>
        <h1>Success</h1>
      </Modal>
    )
  }
}

export default connect(null, {setModal})(Success);