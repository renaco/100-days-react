import React, { Component } from 'react';
import Input from './Input'

export default class Modal extends Component {

  handleSubmit(e) {
    console.log(e)
    this.setState({ 
      mounted: false
    })
    e.preventDefault();
  }

  render() {
    return (
      <div className="Modal">
        <form 
          onSubmit={this.props.onSubmit}
          className="ModalForm">
          <Input
            id="name"
            type="text"
            placeholder="Ermenegildo Peña"
          />
          <Input
            id="username"
            type="text"
            placeholder="mrjacklai@gmail.com"
          />
          <Input
            id="password"
            type="password"
            placeholder="password"
          />
          <button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
        </form>
      </div>
    )
  }
}