import React, { Component } from 'react';
import './MusicApp.css';
import Artista from './Artista';
import artistas from './data';

class MusicApp extends Component {
  render() {
    return (
      <div className = "App">
        <Artista 
        data = {artistas}
        />
      </div>
    );
  }
}

export default MusicApp