import React, { Component } from 'react';
import './Track.css'

// Contains the info about the song's track
class Track extends Component { // an stateLESS class component

 constructor(props) {
   super(props);
   this.addTrack = this.addTrack.bind(this);
 }

  // Add track to the playlist
  addTrack() {
     this.props.onAdd(this.props.track)
  }

  // create a method
  renderAction() {
    return (
      <div className='Track-action'>
        if (isRemoval) {
          <button> - </button>
        } else { 
          <button onClick={this.addTrack}> +  </button>
        }
      </div>
    );
  }

  render() {
    return (
      <div className="Track" track={this.props.tracks}>

        {/* 1-The track info */}
        <div className="Track-information">

          {/* 1a-The track name */}
          <h3>{this.props.track.name}</h3>

          {/* 1b-The track artist and album */}
          <p>
            {this.props.track.artist}
            | 
             {this.props.track.album}
            </p>

            {/* 🤓 experiment, later clear */} 
            <p>
              {this.props.track.id}
            </p>
        </div>

        {/* 2-The add or remove track button */}
        <button className="Track-action">
          {/* + or - will go here */}
        </button>

      </div>
    );
  }
}

export default Track;

