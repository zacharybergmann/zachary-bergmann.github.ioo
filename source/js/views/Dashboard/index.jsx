import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import GitHubIcon from 'material-ui-community-icons/icons/github-circle';
import LinkedInIcon from 'material-ui-community-icons/icons/linkedin-box';
import MediumIcon from 'material-ui-community-icons/icons/medium';
import bookImg from '../../../assets/img/book2.jpg';

const style = {
  margin: 12,
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#3f51b5',
  },
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div className='Dashboard backdrop'>
          <h1>Zachary Bergmann</h1>
          <p>
            Boilerplate for kicking off React/Redux applications.
          </p>

          <hr />

          <RaisedButton
            href="https://medium.com/@zbbergma"
            icon={ <MediumIcon /> }
            secondary={ true }
            style={ style }
          />
          <RaisedButton
            href="https://www.linkedin.com/in/zacharybergmann"
            icon={ <LinkedInIcon /> }
            secondary={ true }
            style={ style }
          />
          <RaisedButton
            href="https://github.com/zacharybergmann"
            secondary={ true }
            icon={ <GitHubIcon /> }
            style={ style }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
