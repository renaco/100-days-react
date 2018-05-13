import React, { Component } from 'react';
import Search from './components/Search';
import TitleList from './components/TitleList';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import UserProfile from './components/UserProfile';
import Logo from './components/Logo';
import { API_KEY } from './const';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      searchUrl: ''
    }

    this.apiKey = API_KEY

    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  // handleKeyUp(e) {
  //   console.log(this.props)
  //   if (e.key === 'Enter' && this.state.searchTerm !== '') {
  //     var searchUrl = 'search/multi?query=' + this.state.searchTerm + '&api_key=' + this.apiKey
  //   }
  // }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />
          <Search
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
          />
          <UserProfile />
        </header>
        <Hero />
        <TitleList title='Search Result' url={this.state.searchUrl} />
        <TitleList title='Top TV picks for Jack' url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title='Trending now' url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title='Most watched in Horror' url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title='Comedy magic' url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
