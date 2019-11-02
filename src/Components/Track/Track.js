import React, { Component } from 'react';
import './Track.css'

// Abstract: Contains the info about the song's track
class Track extends Component { 

 constructor(props) {
   super(props);
   
   this.addTrack = this.addTrack.bind(this);
   this.removeTrack = this.removeTrack.bind(this);
 }

  // Add track to the playlist
  addTrack() {
     this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  // Renderiza un botón para agregar o para eliminar
  // un track dependiendo...(ACLARAR)
  renderAction() {
        if (this.props.isRemoval) {
         return  <button className="Track-action" onClick={this.removeTrack} > - </button>
          } else { 
         return <button className="Track-action" onClick={this.addTrack}> + </button>
        }
  }

  render() {
    return (
      <div className="Track" track={this.props.tracks}>

        {/* 1-The track info */}
        <div className="Track-information">

            {/* 1a-The track name */}
            <h3>{this.props.track.name}</h3>

            {/* 1b-The track artist and album */}
            <p>{this.props.track.artist} | {this.props.track.album}</p>

        </div>

        {/* 2-The add or remove track button */}
        {this.renderAction()}

      </div>
    );
  }
}

export default Track;

