import React, { Component } from 'react';
import Checkout from './components/CheckoutArea/Checkout';
import ImagePreview from './components/ImagePreviewArea/ImagePreview'
import './App.css';

class App extends Component {
  constructor() {
    overlay = (
      <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg">
    )
  }
  render() {
    return (
      <div className="App">
        <Checkout/>
        <ImagePreview/>
      </div>
    );
  }
}

export default App;
