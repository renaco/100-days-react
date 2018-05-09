import React, { Component } from 'react';
import Checkout from './components/CheckoutArea/Checkout';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
// import Overlay from './components/Layout/Overlay';
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      adj: 0,
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      adj: e.target.value
    })
  }

  handleSubmit(e) {
    console.log('click handle submit here');
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {/* <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"/>
        </ReactCSSTransitionGroup> */}
        < ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <Container>
          <ImagePreview 
            price={this.state.price}
            duration={this.state.duration}
            people={this.state.people}
            />
          <Checkout 
            duration={this.state.duration}
            discount={this.state.discount}
            price={this.state.price}
            tax={this.state.tax}
            onSubmit={this.handleSubmit}
            />
        </Container>
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} adj={this.state.adj}/>
      </div>
    );
  }
}

export default App;
