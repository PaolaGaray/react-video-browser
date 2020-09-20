
import React, { Component } from 'react'
import youtube from './apis/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY;

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount = () => {
    this.handleSearchSubmit('Klangkarussell')
  }

  handleSearchSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: YOUTUBE_KEY
      }
    });
    this.setState({ 
        videos: response.data.items, 
        selectedVideo: response.data.items[0]
      })
  }


  handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
  }

    render() {
        return (
            <div className="ui container">
              <SearchBar 
                runMeWhenUserSubmits={this.handleSearchSubmit}
              />
              <div className="ui grid">
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail 
                            video={this.state.selectedVideo}
                          />
                      </div>
                      <div className="five wide column">
                          <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.handleVideoSelect} 
                          />
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}