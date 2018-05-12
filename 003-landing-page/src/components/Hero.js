import React, { Component } from 'react';
import HeroButton from './HeroButton';

class Hero extends Component {
  render() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(//placecage.com/633/633)'}}>
        <div className="content">
          <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
          <h2>Season 2 now avalaible</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch now"></HeroButton>
            <HeroButton primary={false} text="+ My list"></HeroButton>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default Hero;