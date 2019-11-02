import React, { Component } from 'react';
import './TrackList.css'

// imported components
import Track from '../Track/Track';

// Represents a list of tracks (results and user's playlist)

// Abstract:
// una lista de canciones (vale tanto para
// ´search results´ como para ´playlist´)
class TrackList extends Component { 

    trackOne = {
                name: 'tema 1',
                artist: 'artist 1',
                album: 'album 1',
                id: '1'
              }

    trackTwo = {
                  name: 'tema 2',
                  artist: 'artist 2',
                  album: 'album 2',
                  id: '2'
                }

    trackThree = {
                  name: 'tema 3',
                  artist: 'artist 3',
                  album: 'album 3',
                  id: '3'
                }


  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track 
                      track={track} 
                      key={track.id}
                      onAdd={this.props.onAdd}/>;
          })
        }
      </div>
    );
     
  }
}

export default TrackList;
