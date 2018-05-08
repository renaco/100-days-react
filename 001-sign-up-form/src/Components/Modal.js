import React, { Component } from 'react';
import Input from './Input';

export default class Modal extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)  
  }

  handleSubmit(e) {
    console.log(this.props.handleReceiver )
    this.props.handleReceiver();
    e.preventDefault();
  }

  render() {
    return (
      <div className="Modal">
        <form 
          onSubmit={this.handleSubmit}
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
          <button type="submit">Log ssin <i className="fa fa-fw fa-chevron-right"></i></button>
        </form>
      </div>
    )
  }
}