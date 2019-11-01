import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

// Abstract:
// la lista de canciones obtenidas
// después de realizar una búsqueda específica
class SearchResults extends Component {
  
  render() {
  { /* 👏 Pass the searchResult state of the App component 
  to SearchResults component as an attribute */}
    return (
      <div className="SearchResults" 
      >
        <h2>Results</h2>
        <TrackList 
              tracks={this.props.searchResults}
              onAdd={this.props.onAdd}
              isRemoval={this.props.isRemoval}
         />
      </div>
    );
  }
}

export default SearchResults;