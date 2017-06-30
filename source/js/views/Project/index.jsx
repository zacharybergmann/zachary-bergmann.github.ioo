import React, { Component } from 'react';

const Project = (props) => (
  <div className='Project'>
    <h1>{props.project.name}</h1>

    <p>
      Something goes in here! Description
    </p>

    <button><a href={props.project.deployedUrl}> See {props.project.name} live! </a></button>

  </div>
);

export default Project;
