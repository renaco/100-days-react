import React, { Component } from 'react';

class ListToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  handleClick() {
    this.state.toggled === true ? this.setState({ toggled: false }) : this.setState({ toggled:true })
  }

  render() {
    return (
      <div onClick={this.handleClick} data-togled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fw fa-plus"></i>
          <i className="fa fw fa-check"></i>
        </div>
      </div>
    );
  }
}

export default ListToggle;