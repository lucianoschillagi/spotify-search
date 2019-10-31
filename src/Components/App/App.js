import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// import SearchBar ...
// import SearchResults...
// import PlayList...

class App extends Component {
  
  constructor(props) {
    super(props);
    // Initial state of the component
    this.state = { 
      // the play list name
      playListName: '',
      // the play list tracks
      playlistTracks: [],
      // the search results
      searchResults: 
      // an array that will contains info
      // about the song
      [
        {
          name: 'Odelay',
          artist: 'Beck',
          album: 'Odelay',
          id: '1234'
        },
        {
          name: 'Old',
          artist: 'Nick Cave',
          album: 'Five leaves left',
          id: '3456'
        }
      ]
   }
  }

  render() {
      return (
        <div>
          <h1>Spotify Searcher</h1>
          <div className="App">
            <div className="App-playlist">
              {/* <SearchBar/> */}
              {/* <SearchResults/> */}

              <Playlist 
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
              />
            </div>
          </div>
        </div>
      );
  }
}

export default App;
