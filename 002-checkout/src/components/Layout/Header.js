import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <input 
          onChange={this.props.onChange}
          type="range"
          max="100"
          min="1"
          step="1"
        />
        <h2>{this.props.adj}</h2>
      </div>
    );
  }
}

export default Header;