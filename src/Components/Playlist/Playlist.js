import React, { Component } from 'react';
import './Playlist.css'
// import TrackList ...

// Respresents the playlist created for the user.
class Playlist extends Component { // a stateLESS class component
  render() {
    return (
      <div className="Playlist">

        {/* 1-The name of the playlist */}
        <input value={'New Playlist'}/>

        {/* 2-Add a TrackList component */}

        {/* 3-Save to Spotify Button */}
        <button class="Playlist-save">
          SAVE TO SPOTIFY
        </button>

      </div>
    );
  }
}

export default Playlist;