import React, { Component } from 'react';
import Project from 'views/Project';
import { projects } from 'views/App';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='Projects'>
        <h1>Projects</h1>

        { projects.map(project => <Project project={ project } key={ project.name } />) }

      </div>
    );
  }
}
