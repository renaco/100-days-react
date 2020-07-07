import React, { useState } from 'react';
import Checkout from './components/CheckoutArea/Checkout';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Overlay from './components/Layout/Overlay';
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

const App = () => {

  const [adj, setAdj] = useState(0);
  const [duration, setDuration] = useState(5);
  const [discount] = useState(5);
  const [image] = useState('https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg');
  const [people] = useState(1);
  const [price] = useState(320.00);
  const [tax] = useState(20);

  const handleChange = (e) => {
    setAdj(e.target.value);
    setDuration(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log('click handle submit here');
    e.preventDefault();
  }

  return (
    <div className="App">
      <ReactCSSTransitionGroup
        transitionName="overlay"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <Overlay image={image} />
      </ReactCSSTransitionGroup>
      < ReactCSSTransitionGroup
        transitionName="container"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <Container>
          <ImagePreview
            price={price}
            duration={duration}
            people={people}
            image={image}
          />
          <Checkout
            duration={duration}
            discount={discount}
            price={price}
            tax={tax}
            onSubmit={handleSubmit}
          />
        </Container>
      </ReactCSSTransitionGroup>
      <Header
        onChange={handleChange}
        adj={adj}
      />
    </div>
  );
}

export default App;
