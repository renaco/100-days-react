import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Components/Modal'

let child;

class App extends Component {
  
  constructor(props) {
      super(props)

      this.state = {
        mounted: true
      }

      if (this.state.mounted) {
        child = (<Modal onSubmit={this.handleSubmit} />);
        console.log('this', this.state.mounted, child)
      }
    }

  componentDidMount() {
    // console.log('this', this.state.mounted)
    // this.setState({
    //   mounted: true
    //   // mounted: true
    // }),
    // console.log('this', this.state.mounted)
    // console.timeEnd()
  }

  render() {

    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { child }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
