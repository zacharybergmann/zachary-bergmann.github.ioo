import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const Project = (props) => (
  <div style={ style.container }>
    <h1>Material-UI</h1>
    <h2>example project</h2>
    <RaisedButton
      label='See this app live!'
      secondary={ true }
      href={ `${ props.project.deployedUrl }` }
    />
  </div>
);

export default Project;
