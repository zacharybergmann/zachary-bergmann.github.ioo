import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#3f51b5',
  },
});

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.handleGoToApp = this.handleGoToApp.bind(this);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div style={ style.container }>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label='See this app live!'
            secondary={ true }
            href={ `${ props.project.deployedUrl }` }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
