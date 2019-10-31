import React, { Component } from 'react';
import './TrackList.css'

// TODO: import Track component

// an stateLESS class component
// Represents a list of tracks (results and user's playlist)
class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map()}
      </div>
    );
  }
}

export default TrackList;