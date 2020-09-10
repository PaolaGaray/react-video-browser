import React, { Component } from 'react'
import youtube from './apis/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const KEY = 'AIzaSyCseZ99eL2PbumZxMcHouL1yRu_y65qzrQ'

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  handleSearchSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
      }
    });
    this.setState({ videos: response.data.items })
  }


  handleVideoSelect = (video) => {
        console.log('From the App!',video)
        this.setState({ selectedVideo: video })
  }

    render() {
        return (
            <div className="ui container">
              <SearchBar 
                runMeWhenUserSubmits={this.handleSearchSubmit}
              />
              <VideoDetail 
                video={this.state.selectedVideo}
              />
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.handleVideoSelect} 
              />
            </div>
        )
    }
}