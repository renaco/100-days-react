import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props)

  // }

  handleChange(e) {
    console.log(e.target.value)
    // this.setState({
    //   searchTerm: e.target.value
    // })
  }

  handleKeyUp(e) {
    // console.log(e.target.value)
    if (e.key === 'Enter' && this.props.searchTerm !== '') {
      // var searchUrl = 'search/multi?query=' + this.state.searchTerm + '&api_key=' + this.apiKey
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div id="search" className="Search">
        <input
          // onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="Search for a title..."
          type="search"
          // type="text"
          value={this.props.searchTerm}
        />
      </div>
    );
  }
}

export default Search;