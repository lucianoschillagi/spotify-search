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
          id: 1
        },
         // 2do track obtenido luego de la búsqueda
        {
          name: 'Old',
          artist: 'Nick Cave',
          album: 'Five leaves left',
          id: 2
        },

        // 3er track obtenido luego de la búsqueda
        {
          name: 'Otra canción',
          artist: 'Otra artista',
          album: 'album desconocido',
          id: 3
        }
      ],
      // the play list name
      playlistName: 'My Playlist',

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

   };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
  }

  // Add track from de search result track list to
  // the user custom play list
  addTrack(track) {

    let tracks = this.state.playlistTracks;

    // ref: tracks = [{album, artist, id, name}, {album, artist, id, name}, {album, artist, id, name}]
    // el id del track que estoy agregando, ya estaba guardado en 'playlistTracks'??
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    // si el track no fue guardado anteriormente
    // agregarlo al array 'tracks' (o sea, actualizar el 'playlistTracks')
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  render() {
      return (
        <div>
          <h1>Spotify Searcher</h1>
          <div className="App">
          
            {/* Search Bar Component */}
            <SearchBar/>

            <div className="App-playlist">

               {/* Search Results Component */}
              <SearchResults
                  searchResults={this.state.searchResults}
                  onAdd={this.addTrack}
                  isRemoval={false}
              />

               {/* Playlist Component */}
              <Playlist 
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks} 
                  onRemove={this.removeTrack}
              />
            </div>
          </div>
        </div>
      );
  }
}

export default App;
