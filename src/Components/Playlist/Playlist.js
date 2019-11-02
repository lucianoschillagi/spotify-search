import React, { Component } from 'react';
import './Playlist.css'

// imported components
import TrackList from '../TrackList/TrackList';

// Abstract:
// la lista de canciones que el usuario
// agregó, de la lista de canciones obtenidas
// por la búsqueda, a su lista personalizada 
class Playlist extends Component { // a stateLESS class component

  // this.props.playlistTracks
  
  render() {
    return (
      <div className="Playlist">

        {/* 1-The name of the playlist */}
        <input defaultValue={this.props.playlistName}/>

        {/* 2-Add a TrackList component */}
        <TrackList tracks={this.props.playlistTracks}/>

        {/* 3-Save to Spotify Button */}
        <button class="Playlist-save">
          SAVE TO SPOTIFY
        </button>

      </div>
    );
  }
}

export default Playlist;