import React, { Component } from 'react';
// import TrackList...

// an stateLESS class component
class SearchResults extends Component {
  
  render() {
  { /* 👏 Pass the searchResult state of the App component 
  to SearchResults component as an attribute */}
    return (
      <div className="SearchResults" 
           searchResults={this.state.searchResults}>
        <h2>Results</h2>
        {/*  Add a TrackList component  */}
      </div>
    );
  }
}

export default SearchResults;