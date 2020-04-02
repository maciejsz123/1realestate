import React, { Component } from 'react';
import Navbar from './navbar';
import Options from './options';
import Houses from './houses';
import HousesMap from './map';

class FrontPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Navbar />
        <Options />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <HousesMap />
          <Houses />
        </div>
        <div>
          <HousesMap />
        </div>
        <div>
          <Houses />
        </div>
      </div>
    );
  }
}

export default FrontPage;