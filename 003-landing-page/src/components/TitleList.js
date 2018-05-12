import React, { Component } from 'react';
import Item from './Item';
import { API_KEY } from './../const';

class TitleList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      mounted: false
    }
    
    this.apyKey = API_KEY
  }

  loadContent() {
    let requestUrl = 'http://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apyKey;
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data
        })
      })
      .catch((error) => {
        console.error("There has been error");
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({
        mounted: true,
        url: nextProps.url
      }, () => {
        this.loadContent()
      })
    }
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true })
    }
  }

  render() {

    let titles = '';
    if (this.state.data.result) {
      titles = this.state.data.result.map( (title, i) => {
      console.log(title, i)
      if (i < 5) {
        let name = '';
        let backDrop = 'http://image.tmdb.org/t/p/original' + title.back_drop;
        if (!title.name) {
          name = title.original_title;
        } else {
          name = title.name;
        }
        return (
          <Item key={title.id} />
        );
      } else {
        return (
          <div key={title.id}></div>
        );
      }
      })
    }

    return (
      <div className="TitleList" rel="titlecategory" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles_wrapper">
            { titles }
          </div>
        </div>
      </div>
    );
  }
}

export default TitleList;
