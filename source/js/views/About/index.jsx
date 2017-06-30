import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1>About Me</h1>

        <img src='../../../assets/img/zach_formal.jpg' alt='Zachary Bergmann' />

        <p>
          I am a software engineer in the Baltimore, MD area working primarily on full stack JavaScript applications.
          When I am not learning something new or building out an app I enjoy rock climbing,
          hiking/camping, reading, and having social evenings with friends.
        </p>

      </div>
    );
  }
}
