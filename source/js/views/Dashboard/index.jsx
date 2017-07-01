import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GitHubIcon from 'material-ui-community-icons/icons/github-circle';
import LinkedInIcon from 'material-ui-community-icons/icons/linkedin-box';
import MediumIcon from 'material-ui-community-icons/icons/medium';

const style = {
  margin: 12,
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
