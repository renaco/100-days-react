import React, { Component } from 'react';

class HeroButton extends Component {
  render() {
    return (
      <a href="javascript();" data-primary={this.props.primary} className="Button">
        {this.props.text}
      </a>
    )
  }
}

export default HeroButton;