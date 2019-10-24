import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    // Initial state of the component
    this.state = { 
      searchResults: 
      // an array that will contains info
      // about the song
      [
        name = '',
        artist =  '',
        album = '',
        id = ''
       ]
   }
  }

  render() {
      return (
        <div>
          <h1>Spotify Searcher</h1>
          <div className="App">
            <div className="App-playlist">
    
              
              {/* 🚩  NOTE: import this components */}
              {/* Add a Playlist component  */}
              {/* Add a SearchBar component  */}
              {/*Add a SearchResults component  */}
    
              </div>
          </div>
        </div>
      );
  }
}

export default App;
