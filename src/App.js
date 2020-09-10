import React, { Component } from 'react'
import youtube from './apis/youtube'
import SearchBar from './components/SearchBar'

export default class App extends Component {

  state = {
    videos: []
  };

  handleSearchSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.YOUTUBE_TOKEN
      }
    });

    console.log(response.data.items);
    this.setState({ videos: response.data.items })
  }
    render() {
        return (
            <div className="ui container">
              <SearchBar 
                runMeWhenUserSubmits={this.handleSearchSubmit}
              />
            </div>
        )
    }
}