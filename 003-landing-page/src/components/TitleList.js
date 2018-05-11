import React, { Component } from 'react';

class TitleList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }
  render() {
    return (
      <div>
        <input
          className="Search"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="Search for a title..."
          type="search"
          type="text"
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default TitleList;