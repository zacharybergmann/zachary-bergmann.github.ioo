import React, { Component } from 'react';
import Project from 'views/Project';

const projects = [
  {
    name: 'Bargain Hound',
    deployedUrl: 'http://bargainhound.zacharybergmann.com',
  },
  {
    name: 'Spork',
    deployedUrl: 'http://spork.zacharybergmann.com',
  },
  {
    name: 'PickUp',
    deployedUrl: 'http://pickup.zacharybergmann.com',
  },
  {
    name: 'Langsnap',
    deployedUrl: 'http://langsnap.zacharybergmann.com',
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
