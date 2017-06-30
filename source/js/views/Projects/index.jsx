import React, { Component } from 'react';
import Project from 'views/Project';

const projects = [
  {
    name: 'LangSnap',
    deployedUrl: 'http://www.github.com',
    image: './images/bargainhound.jpg',
    description: 'A customizable language learning experience focused on transitioning from phrases to fluency',
  },
  {
    name: 'Bargain Hound',
    deployedUrl: 'http://bargainhound.zacharybergmann.com',
    image: './images/bargainhound.jpg',
    description: 'Identifying publicly traded stocks that may be a bargain',
  },
  {
    name: 'Spork',
    deployedUrl: 'http://www.github.com',
    image: './images/spork.jpg',
    description: 'Sharing leftovers with friends to create delicious meals with a social atmosphere'
  },
  {
    name: 'PickUp',
    deployedUrl: 'http://pickup.zacharybergmann.com',
    image: './images/pickup_how_to.jpg',
    description: 'An internet and text interface for joining and creating pick-up sports games',
  },
];

export default class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <h1>Projects</h1>

        { projects.map(project => <Project project={ project } key={ project.name } />) }

      </div>
    );
  }
}
