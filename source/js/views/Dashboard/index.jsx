import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GitHubIcon from 'material-ui-community-icons/icons/github-circle';
import LinkedInIcon from 'material-ui-community-icons/icons/linkedin-box';
import MediumIcon from 'material-ui-community-icons/icons/medium';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const style = {
  margin: 12,
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardMedia
          overlay={ <CardTitle title='Overlay title' subtitle='Overlay subtitle' /> }
        >
          <img src='../../../assets/img/bargainhound.jpg' alt='PicName' />
        </CardMedia>
        <CardTitle title='Card title' subtitle='Card subtitle' />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton
            href='https://medium.com/@zbbergma'
            icon={ <MediumIcon /> }
            secondary={ true }
            style={ style }
          />
          <RaisedButton
            href='https://www.linkedin.com/in/zacharybergmann'
            icon={ <LinkedInIcon /> }
            secondary={ true }
            style={ style }
          />
          <RaisedButton
            href='https://github.com/zacharybergmann'
            secondary={ true }
            icon={ <GitHubIcon /> }
            style={ style }
          />
        </CardActions>
      </Card>
    );
  }
}

