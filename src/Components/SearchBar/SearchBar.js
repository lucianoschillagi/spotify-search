import React, { Component } from 'react';
import './SearchBar.css';

// Abstract: la barra de búsqueda para que el usuario
// pueda buscar por nombre una canción
// en la base de datos de Spotify
class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
