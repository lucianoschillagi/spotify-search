import React, { Component } from 'react';
import './App.css';

// Imported components
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

// Abstract:
// La app en sí (nivel 1)
class App extends Component {
  
  constructor(props) {
    super(props);
    // Initial state of the component
    this.state = { 
      // the play list name
      playlistName: 'Luko Playlist',
      // the play list tracks
      playlistTracks: 
      [
                       // 1er track agregado por el usuario 
                       // a su playlist
                        {
                          name:'song 1', 
                          artist: 'artist 1', 
                          album: 'album 1', 
                          id: '1'
                        },
                        // 2do  track agregado por el usuario 
                        // a su playlist
                        {
                          name:'song 2', 
                          artist: 'artist 2', 
                          album: 'album 2', 
                          id: '2'
                        },
                         // 3er track agregado por el usuario 
                         // a su playlist
                        {
                          name:'song 3', 
                          artist: 'artist 3', 
                          album: 'album 3', 
                          id: '3'
                        }
      ],
      // the search results
      searchResults: 
      // un array que contiene 
      // objetos que representan un track
      // representa los tracks obtenidos
      // luego de la búsqueda
      [
        // 1er track obtenido luego de la búsqueda
        {
          name: 'Odelay',
          artist: 'Beck',
          album: 'Odelay',
          id: '1234'
        },
         // 2do track obtenido luego de la búsqueda
        {
          name: 'Old',
          artist: 'Nick Cave',
          album: 'Five leaves left',
          id: '3456'
        },

        // 3er track obtenido luego de la búsqueda
        {
          name: 'Otra canción',
          artist: 'Otra artista',
          album: 'album desconocido',
          id: '3446'
        }
      ]
   }
  this.addTrack = this.addTrack.bind(this);
  }

  // Add track from de search result track list to
  // the user custom play list
  addTrack(track) {

    // evaluate if the track already exists in the user custom play list
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  render() {
      return (
        <div>
          <h1>Spotify Searcher</h1>
          <div className="App">
            <div className="App-playlist">
              {/* <SearchBar/> */}
              {/* Pass the 'addTrack' method to the SearchResults props */}
              <SearchResults
                  searchResults={this.state.searchResults}
                  onAdd={this.addTrack}
                  isRemoval={false}
              />
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
