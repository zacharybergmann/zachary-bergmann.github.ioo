import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bookImg from '../../../assets/img/book2.jpg';

export default class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Dashboard'>
        <h1>Zachary Bergmann</h1>
        <p>
          Boilerplate for kicking off React/Redux applications.
        </p>

        <hr />

        <h3>Background image</h3>
        <div className='Example'>
          <div className='BackgroundImgExample' />
        </div>

        <h3>Image imported to the component</h3>
        <div className='Example'>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>
      </div>
    );
  }
}
