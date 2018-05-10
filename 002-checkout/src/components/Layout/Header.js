import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <input 
          onChange={this.props.onChange}
          type="range"
          max="100"
          min="1"
          step="1"
        />
        <h1>{this.props.adj} Wilsaos</h1>
      </header>
    );
  }
}

export default Header;