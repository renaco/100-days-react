import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Components/Modal';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
        mounted: false
      }
      this.handleReceiver = this.handleReceiver.bind(this)
    }

  handleReceiver() {
    this.setState({
      mounted: false
    })
  }

  componentDidMount() {
    this.setState({
      mounted: true
    })
  }

  render() {
      return (
        <div className="App">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.mounted && <Modal onSubmit={this.handleSubmit} mounted={this.state.mounted} handleReceiver={this.handleReceiver}/>}
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
