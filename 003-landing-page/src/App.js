import React, { Component } from 'react';
import ListToggle from './components/ListToggle';
import TitleList from './components/TitleList';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchUrl: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <TitleList searchTerm={this.props.searchTerm}/>
          <ListToggle/>
          <Navigation/>
        </header>
      </div>
    );
  }
}

export default App;
